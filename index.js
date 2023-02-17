$(document).ready(function () {
  $(".menu-bar").on("click", function () {
    $(this).toggleClass("on");

    $(".one").toggleClass("one-1");
    $(".two").toggleClass("two-2");
    $(".three").toggleClass("three-3");

    $(".menu").toggleClass("on");

    $("nav ul").toggleClass("hidden");
  });
});
