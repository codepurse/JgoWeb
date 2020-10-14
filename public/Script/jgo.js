$(document).ready(function () {
  var x = 1;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".fixed-top").css("background", "transparent");
    } else {
      $(".fixed-top").css("background", "#1A1A1A");
      $(".fixed-top").css("z-index", "99999999999999999999999999");
    }
  });

  $(".boxCategory").click(function () {
    $(".boxCategory").css("background-color", "transparent");
    $(".boxCategory").find(".pBoxCategory").css("filter", "none");
    $(".boxCategory").find(".imgCategory").css("filter", "none");

    $(this).css("background-color", "#FFE900");
    $(this).find(".pBoxCategory").css("filter", "brightness(0)");
    $(this).find(".imgCategory").css("filter", "brightness(0)");
  });

  $(".pAdd").click(function () {
    $(this).closest(".divHide").find(".divAdd").css("display", "block");
  });

  $(".btnAddStopoff").click(function () {
    if (x === 1) {
      $(".divStopoff1").css("display", "block");
      x = 2;
    } else if (x === 2) {
      $(".divStopoff2").css("display", "block");
      x = 3;
    }
  });

  $(".imgDelete").click(function () {
    $(this).closest(".divStopOff").css("display", "none");
  });

  var i = 0;
  var imghead = [
    "url(/Image/bgdriver2.jpg)",
    "url(/Image/bgdriver3.jpg)",
    "url(/Image/bgdriver1.jpg)",
  ]; 

  function slideimg() {
    setTimeout(function () {
      $(".conDriver").css("background-image", imghead[i]);
      i++;
      if (i == imghead.length) i = 0;
      slideimg();
    }, 6000);
  }
  slideimg();


    

});
