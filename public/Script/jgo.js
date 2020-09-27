$(document).ready(function () {
 var x = 1;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".fixed-top").css("background", "transparent");
    } else {
      $(".fixed-top").css("background", "black");
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
    if (x === 1) 
    {
      $(".divStopoff1").css("display", "block");
      x = 2;
    }
    else if (x === 2) {
      $(".divStopoff2").css("display", "block");
      x = 3;
    }
  });
  
  $(".imgDelete").click(function () {
    $(this).closest(".divStopOff").css("display", "none");
  });

});
