$(document).ready(function () {
   var y = 0;
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

  $(function () {
    $(".tooltip-primary").tooltip().mouseover();
    setTimeout(function () {
      $(".tooltip-primary").tooltip("hide");
    }, 5000);
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
    if (y === 1) {
      if ($(".divStopoff1").find(".css-5sz5u5-singleValue").text().length == 0) {
        alert("Fill up the missing address");
        return false;
      }
      else {
        if ($(".divStopoff2").css("display") == "none") {
          $(".divStopoff2").css("display", "block");
          y = 2;
        } 
      }
    } else if (y == 2) {
      if ($(".divStopoff2").find(".css-5sz5u5-singleValue").text().length == 0) {
        alert("Fill up the missing address");
        return false;
      }
      else {
        if ($(".divStopoff3").css("display") == "none") {
          $(".divStopoff3").css("display", "block");
          y = 3;
        } 
      }
    }
    else if (y == 3) {
      if ($(".divStopoff3").find(".css-5sz5u5-singleValue").text().length == 0) {
        alert("Fill up the missing address");
        return false;
      }
      else {
        if ($(".divStopoff4").css("display") == "none") {
          $(".divStopoff4").css("display", "block");
          y = 4;
        } 
      }
    }
     else if (y == 4) {
      if ($(".divStopoff4").find(".css-5sz5u5-singleValue").text().length == 0) {
        alert("Fill up the missing address");
        return false;
      }
      else {
        if ($(".divStopoff5").css("display") == "none") {
          $(".divStopoff5").css("display", "block");
          y = 5;
        } 
      }
    }


    if ($(".divStopoff1").css("display") == "none") {
      $(".divStopoff1").css("display", "block");
      y = 1;
    }
  });

  $(".boxAdditional").click(function () {
    $(".boxAdditional").css("background-color", "transparent");
    $(".boxAdditional >p").css("color", "white");
    $(this).css("background-color", "#FFFE00");
    $("p", this).css("color", "black");
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

  $(".ulDashboard>li").click(function () {
    $(".ulDashboard>li").removeClass("activeUl");
    $(this).addClass("activeUl");
  });

  $(".txtSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table> tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      if ($("#table> tbody > :visible").length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    });
  });

  $(".liBooking").click(function () {
    $(this).find(".divHide").fadeIn(200);
    $(this).find(".spanMore").hide();
  });

  $(".divSidebar").hover(
    function () {
      $("ul.no-bullets>a>li>span").fadeIn(100);
      $("ul.no-bullets>a>li").css("width","180px");
    },
    function () {
      $("ul.no-bullets>a>li>span").fadeOut(100);
      $("ul.no-bullets>a>li").css("width","50px");
    }
  );
});
