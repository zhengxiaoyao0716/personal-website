function initPagination(pageNum, func) {
    var li_str = '';
    for (var index = 2; index <= pageNum; index++)
    {
        li_str += '<li><a href=#guide>' + index + '</a></li>';
    }
    $(".pagination").append(
        '<li class="disabled"><a href=#guide>&laquo;</a></li>\
        <li class="active"><a href=#guide>1</a></li>'
        + li_str + '<li><a href=#guide>&raquo;</a></li>'
    );
    var choosedItem = $(".pagination").find(".active");
    $(".pagination").children().click(function() {
        $(".contain").empty();
        choose_page = $(this).text();
        $(".pagination").children().first().removeAttr("class");
        $(".pagination").children().last().removeAttr("class");
        switch (choose_page)
        {
        case "«":
        case "1":
            choosedItem.removeAttr("class");
            choosedItem = $(".pagination").children().first();
            choosedItem.attr("class", "disabled");
            choosedItem = choosedItem.next();
            choosedItem.attr("class", "active");
            func(1);
            break;
        case "»":
        case String(pageNum):
            choosedItem.removeAttr("class");
            choosedItem = $(".pagination").children().last();
            choosedItem.attr("class", "disabled");
            choosedItem = choosedItem.prev();
            choosedItem.attr("class", "active");
            func(pageNum);
            break;
        default:
            choosedItem.removeAttr("class");
            choosedItem = $(this);
            choosedItem.attr("class", "active");
            func(choose_page);
        }
    });
    func(1);
}
