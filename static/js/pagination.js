function init_pagination() {
  var index, page_num;
  var li_str = '';
  page_num = 1 + parseInt((items.length - 1) / 6);
  for (index = 2; index <= page_num; index++)
  {
    li_str += '<li><a href=#guid>' + index + '</a></li>';
  }
  $(".pagination").append(
    '<li class="disabled"><a href=#guid>&laquo;</a></li>\
    <li class="active"><a href=#guid>1</a></li>'
    + li_str + '<li><a href=#guid>&raquo;</a></li>'
  );
  var choosed_item;
  choosed_item = $(".pagination").find(".active");
  $(".pagination").children().click(function() {
    $(".contain").empty();
    choose_page = $(this).text();
    $(".pagination").children().first().removeAttr("class");
    $(".pagination").children().last().removeAttr("class");
    switch (choose_page)
    {
      case "«":
      case "1":
        choosed_item.removeAttr("class");
        choosed_item = $(".pagination").children().first();
        choosed_item.attr("class", "disabled");
        choosed_item = choosed_item.next();
        choosed_item.attr("class", "active");
        read_rss(1);
        break;
      case "»":
      case "" + page_num:
        choosed_item.removeAttr("class");
        choosed_item = $(".pagination").children().last();
        choosed_item.attr("class", "disabled");
        choosed_item = choosed_item.prev();
        choosed_item.attr("class", "active");
        read_rss(page_num);
        break;
      default:
        choosed_item.removeAttr("class");
        choosed_item = $(this);
        choosed_item.attr("class", "active");
        read_rss(choose_page);
    }
  });
  read_rss(1);
}
