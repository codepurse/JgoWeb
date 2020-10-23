$(document).ready(function () {
  var x = 1;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".fixed-top").css("background", "transparent");
    } else {
      $(".fixed-top").css("background", "#1A1A1A");
      $(".fixed-top").css("z-index", "9");
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
    $(this).closest(".divHide").find(".divAdd").fadeIn(200);
  });

  $(".btnAddStopoff").click(function () {
    if ($(".divStopoff1").css("display") == "none") {
      $(".divStopoff1").css("display", "block");
    } else if ($(".divStopoff2").css("display") == "none") {
      $(".divStopoff2").css("display", "block");
    }
  });

  $(".imgDelete").click(function () {
    $(this).closest(".divStopOff").fadeOut(150);
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

  $(".divStep").click(function () {
    $(".divStep").removeClass("divStepActive");
    $(".divStep").find(".divInside").removeClass("divInsideActive");
    $(this).addClass("divStepActive");
    $(this).find(".divInside").addClass("divInsideActive");
  });

  $(".boxIcon").click(function () {
    $(".boxIcon").css("background-color", "#1a1a1a");
    $(".boxIcon").find(".divBoxIcon").css("filter", "none");
    $(this).css("background-color", "#FFFE00");
    $(this).find(".divBoxIcon").css("filter", "invert(1) brightness(500%)");
  });

  $(".BoxFood").click(function () {
    $(".divBox1").hide();
    $(".divFood").fadeIn(200);
  });

  $(".BoxDocu").click(function () {
    $(".divBox1").hide();
    $(".divDocu").fadeIn(200);
  });

  $(".BoxCloth").click(function () {
    $(".divBox1").hide();
    $(".divCloth").fadeIn(200);
  });

  $(".BoxMedic").click(function () {
    $(".divBox1").hide();
    $(".divMedic").fadeIn(200);
  });

  $("#table").on("click", "tr", function (e) {
    console.log($(e.currentTarget).index() + 1);
  });
});
