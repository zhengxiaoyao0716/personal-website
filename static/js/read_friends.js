(function () {    
    $.getJSON("http://public.zheng0716.com/static/json/friends.json", function(json) {
        var index;
        for (index = 0; index < json.length; index++)
        {
            var item = json[index];
            $("#friends").append(
                '<li title="' + item.desc + '">' +
                    '<a href="' + item.link + '" target="_blank"' + item.date + '">' +
                        item.name +
                    '</a>' +
                '</li>' +
                '<li class="divider"></li>'
            );
        }
        $("#friends").append('<li><a>--</a></li>')
    });
}());