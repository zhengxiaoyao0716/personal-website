var readJson = (function () {    
    /** 解析 */
    function parse(page, items) {
        page *= 6;
        var index;
        for (index = page - 6; index < items.length && index < page; index++)
        {
            var item = items[index];
            $(".contain").append(
                '<li class="col-sm-4"><a href="' + item.link + '" target="_blank"><div class="thumbnail caption" style="height:300px; overflow:hidden; text-overflow:ellipsis;">'
                + '<img src=' + item.image + ' class="img-responsive"/>'
                + '<div align="center"><h3>' + item.title + '</h3>'
                + '<small class="light-primary-color">' + item.date + '</small></div>'
                + '</div></a></li>'
            );
        }
    }
    
    var jsonItems;
    return function (callback, filterStr) {
        if (!jsonItems) {
            $('#waiting').modal('show');
            $.getJSON("http://public.zheng0716.com/static/json/projects.json", function(json) {
                console.log(json);
                jsonItems = json;
                $('#waiting').modal('hide');
                
                var items = filterStr ? filter(filterStr, jsonItems) : jsonItems;
                callback(1 + parseInt((items.length - 1) / 6), function(page) {
                    parse(page, items);
                });
            });
        }
        else {
            var items = filterStr ? filter(filterStr, jsonItems) : jsonItems;
            callback(1 + parseInt((items.length - 1) / 6), function(page) {
                parse(page, items);
            });
        }
    };
}());
