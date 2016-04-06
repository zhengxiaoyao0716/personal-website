var readRss = (function () {
    /** 筛选*/
    function filter(str, items) {
        var filteredItems = [];
        for (var index in items)
        {
            var item = items[index];
            if (item.title.indexOf(str) >= 0)
            {
                filteredItems.push(item);
            }
        }
        return filteredItems;
    }
    
    /** 解析 */
    function parse(page, items) {
        page *= 6;
        var index;
        for (index = page - 6; index < items.length && index < page; index++)
        {
            var item = items[index];
            var contain = item.description.substring(0, item.description.lastIndexOf('<a'));
            contain = contain.substring(0, contain.lastIndexOf('<a'));
            $(".contain").append(
                '<li class="col-sm-4"><div class="thumbnail caption"  style="height:300px; overflow:hidden; text-overflow:ellipsis;">'
                + '<a href="' + item.link + '" target="_blank"><h3>' + item.title + '</h3></a>'
                + '<small class="light-primary-color">' + item.pubDate + '</small>'
                + '<div>' + contain + '</div>'
                + '</div></li>'
            );
        }
    }
    
    var rssItems;
    return function (callback, filterStr) {
        if (!rssItems) {
            $('#waiting').modal('show');
            //实现跨域抓取的关键，雅虎提供的Yql查询服务
            $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D"' + 'http://zhengxiaoyao0716.lofter.com/rss' + '"&format=json&diagnostics=true&callback=?', function(data) {
                rssItems = data.query.results.rss.channel.item;
                $('#waiting').modal('hide');
                
                var items = filterStr ? filter(filterStr, rssItems) : rssItems;
                callback(1 + parseInt((items.length - 1) / 6), function(page) {
                    parse(page, items);
                });
            });
        }
        else {
            var items = filterStr ? filter(filterStr, rssItems) : rssItems;
            callback(1 + parseInt((items.length - 1) / 6), function(page) {
                parse(page, items);
            });
        }
    };
}());