$(function () {
  $(".content-list li").click(function () {
    $(this).addClass("selected").siblings("li").removeClass("selected");
    $(".info").hide();
    $("." + $(this).data("class")).fadeIn(2);
  });
});
