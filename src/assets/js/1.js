indexChange = function () {

  alert("测试成功131");




  $("ul.tradenav").on("click", "li", function () {

    alert($(this).text());
    var current_class_name = $(this).attr("class");
    if ("tactive" != current_class_name) {
      $('ul.tradenav>li').removeClass('tactive');
      $(this).attr("class", "tactive");

    }
  });
  //
}


