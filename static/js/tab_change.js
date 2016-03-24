function mainSites() {
    preChange("#mainSites");
    $(".contain").append(
        '<div class="col-sm-4">\
        <a class="thumbnail" href="http://zhengxiaoyao0716.lofter.com/" target="_blank">\
            <img src="./static/image/lofter.jpg" class="img-responsive" />\
            <div class="caption">\
            <h3 align="center">\
                正的博客\
            </h3>\
            </div>\
        </a>\
        </div>\
        <div class="col-sm-4">\
        <a class="thumbnail" href="http://blog.csdn.net/zhengxiaoyao0716" target="_blank">\
            <img src="./static/image/csdn.jpg" class="img-responsive" />\
            <div class="caption">\
            <h3 align="center">\
                技术文章\
            </h3>\
            </div>\
        </a>\
        </div>\
        <div class="col-sm-4">\
        <a class="thumbnail" href="https://github.com/zhengxiaoyao0716" target="_blank">\
            <img src="./static/image/github.jpg" class="img-responsive" />\
            <div class="caption">\
            <h3 align="center">\
                开源项目\
            </h3>\
            </div>\
        </a>\
        </div>'
    );
}
function lastNews() {
    preChange("#lastNews");
    readRss(initPagination);
}
function sanJieZhi() {
    preChange("#sanJieZhi");
    readRss(initPagination, "三界志，");
}
function projectGallery() {
    preChange("#projectGallery");
    readJson(initPagination);
}
$(document).ready(function() {
    window.preChange = function (id) {
        var choosedTab = $("#mainSites");
        return function (id) {
            choosedTab.removeAttr("class");
            choosedTab = $(id);
            choosedTab.attr("class", "active")
            $(".contain").empty();
            $(".pagination").empty();
        };
    }();
    mainSites();
});