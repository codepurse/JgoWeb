$(document).ready(function () {
  try {
    const $menuBtn = document.querySelector(".menu-btn");
    let isMenuOpen = false;
    $menuBtn.addEventListener("click", () => {
      if (!isMenuOpen) {
        $(".conHide").fadeOut(100);
        $(".divMenu").fadeIn(200);
        $menuBtn.classList.add("open");
      } else {
        $(".conHide").fadeIn(100);
        $(".divMenu").fadeOut(150);
        $menuBtn.classList.remove("open");
      }
      isMenuOpen = !isMenuOpen;
    });
  } catch (e) {}

  $(window).resize(function () {
    $(".colMapTrack").css("left", width + 45);
  });

  var width = $(".colSidebar").width();
  var totalwidth = $(window).width() - width - 50;
  $(".colMapTrack").css("max-width", totalwidth);
  $(".colMapTrack").css("min-width", totalwidth);
  $(".colMapTrack").css("left", width + 45);
  if (localStorage.getItem("theme_status") === "light") {
    $("#switch").prop("checked", true);
    light();
  } else {
    $("#switch").prop("checked", false);
  }
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
      if (
        $(".divStopoff1").find(".css-5sz5u5-singleValue").text().length == 0
      ) {
        alert("Fill up the missing address");
        return false;
      } else {
        if ($(".divStopoff2").css("display") == "none") {
          $(".divStopoff2").css("display", "block");
          y = 2;
        }
      }
    } else if (y == 2) {
      if (
        $(".divStopoff2").find(".css-5sz5u5-singleValue").text().length == 0
      ) {
        alert("Fill up the missing address");
        return false;
      } else {
        if ($(".divStopoff3").css("display") == "none") {
          $(".divStopoff3").css("display", "block");
          y = 3;
        }
      }
    } else if (y == 3) {
      if (
        $(".divStopoff3").find(".css-5sz5u5-singleValue").text().length == 0
      ) {
        alert("Fill up the missing address");
        return false;
      } else {
        if ($(".divStopoff4").css("display") == "none") {
          $(".divStopoff4").css("display", "block");
          y = 4;
        }
      }
    } else if (y == 4) {
      if (
        $(".divStopoff4").find(".css-5sz5u5-singleValue").text().length == 0
      ) {
        alert("Fill up the missing address");
        return false;
      } else {
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
    if (localStorage.getItem("theme_status") == "light") {
      $(".boxAdditional").css("background-color", "transparent");
      $(".boxAdditional >p").css("color", "#283148");
      $(this).css("background-color", "#FFFE00");
      $("p", this).css("color", "#283148");
    } else {
      $(".boxAdditional").css("background-color", "transparent");
      $(".boxAdditional >p").css("color", "white");
      $(this).css("background-color", "#FFFE00");
      $("p", this).css("color", "black");
    }
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
  $(".BoxFragile").click(function () {
    $(".divBox1").hide();
    $(".divFragile").fadeIn(200);
  });
  $(".BoxOther").click(function () {
    $(".divBox1").hide();
    $(".divOthers").fadeIn(200);
  });

  $(".ulDashboard>li").click(function () {
    $(".ulDashboard>li").removeClass("activeUl");
    $(this).addClass("activeUl");
  });

  $(".pCloseCovid").click(function () {
    $(".divCovid").fadeOut(200);
  });

  $("#carouselExampleIndicators").on("slid.bs.carousel", function onSlide(ev) {
    var id = ev.relatedTarget.id;
    switch (id) {
      case "1":
        $(".imgPhone1").hide();
        $(".imgPhonehand").fadeIn(200);
        break;
      case "2":
        $(".imgPhone1").hide();
        $(".imgPhonehand2").fadeIn(200);
        break;
      case "3":
        $(".imgPhone1").hide();
        $(".imgPhonehand3").fadeIn(200);
        break;
      case "4":
        $(".imgPhone1").hide();
        $(".imgPhonehand4").fadeIn(200);
        break;
      case "5":
        $(".imgPhone1").hide();
        $(".imgPhonehand5").fadeIn(200);
        break;
      default:
      //the id is none of the above
    }
  });

  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));

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
    $(this).find(".divHide1").fadeIn(200);
    $(this).find(".spanMore").hide();
  });

  $(".divSidebar").hover(
    function () {
      $("ul.no-bullets>a>li>span").fadeIn(100);
      $("ul.no-bullets>a>li").css("width", "180px");
    },
    function () {
      $("ul.no-bullets>a>li>span").fadeOut(100);
      $("ul.no-bullets>a>li").css("width", "50px");
    }
  );

  $("#switch").click(function () {
    if ($(this).prop("checked") == true) {
      var theme = true;
      localStorage.setItem("theme", JSON.stringify(theme));
      localStorage.setItem("theme_status", "light");
    } else if ($(this).prop("checked") == false) {
      var theme = false;
      localStorage.setItem("theme", JSON.stringify(theme));
      localStorage.setItem("theme_status", "false");
    }
  });

  function light() {
    $("#__next , body, html").css("background-color", "#fff");
    $(".pDashboard").css("color", "#212121");
    $(".pDashboard").css("font-weight", "600");
    $(".divSidebar").attr("style", "background-color: #f5f5f5 !important");
    $(".divSidebar").css("border", "1px solid lightgray");
    $(".divSidebar, .colPackage, colLeft").css(
      "box-shadow",
      "1px 1px 16px 6px rgba(66,66,66,0.19)"
    );
    $(".ulDashboard>li").css("color", "#212121");
    $(".ulDashboard>li").css("font-weight", "600");
    $(".hrDashboard").css("background-color", "#f5f5f5");
    $(".pSettingsTitle").css("color", "#212121");
    $(".pSettingsTitle").css("font-weight", "600");
    $("label").css("border", "2px solid #424242");
    $("label").addClass("changed");
    $(".spanCheck").css("color", "#313131");
    $(".spanCheck").css("font-weight", "600");
    $(".btnChangepassword").css("font-weight", "600");
    $(".btnChangepassword").css("color", "#313131");
    $(".btnChangepassword").css("border", "1px solid #313131");
    $(".rowTop").css("background-color", "#F5F5F5");
    $(".rowTop").css("border-color", "lightgray");
    $(".btnLogout").css("color", "#212121");
    $(".btnLogout, .pFullname").css("font-weight", "600");
    $(".pFullname").css("color", "#212121");
    $(".txtSearch").css("background-color", "#F3F3F4");
    $(".txtSearch").css("color", "#424242");
    $(".txtSearch").css("border", "1px solid gray");
    $(".pTotalBookings").css("color", "#757575");
    $(".pActiveBookings").css("color", "#FBC02D");
    $(".btnLogout").css("border", "1px solid #424242");
    $("ul.no-bullets>a>li>span").css("color", "#424242");
    $("th").css("color", "#212121");
    $("td").attr("style", "color: #212121 !important");
    $(".colPackage").css("background-color", "#f5f5f5");
    $(".colPackage").css("border-left", "1px solid lightgray");
    $(".packageFullname").css({ color: "#2D3853", "font-weight": "600" });
    $(".pNumber").css({ color: "#A1A3A9", "font-weight": "400" });
    $(".p2").css("color", "#757575");
    $(".pDate").css({ color: "#2D3853", "font-weight": "bold" });
    $(".colBorder").attr(
      "style",
      "border-left: 1px solid lightgray !important"
    );
    $(".p4").attr("style", "color: #2D3853 !important");
    $(".p4").css("font-weight", "600");
    $(".looking, .intransitBook").attr(
      "style",
      "background-color: #EBECEF !important"
    );
    $(".liBooking").css("color", "#424242");
    $(".spanMore").css("color", "#2D3853");
    $(".btnShowmore").css("color", "#2D3853");
    $(".btnShowmore, .btnChangepass").css("font-weight", "600");
    $(".pchangepassword").css("color", "#2D3853");
    $(".pchangepassword, .my-row li,.pPick, .pAdd").css("font-weight", "600");
    $(".modalChangepass").attr("style", "background-color: #fafafa !important");
    $(".txtchange").css("background-color", "#F3F3F4");
    $(".txtchange").css("border-color", "gray");
    $(".txtchange").css("color", "#212121");
    $(".btnChangepass").css("color", "#2D3853");

    $(".btnChangepass").css("color", "#2D3853");
    $(".conMap, .colLeft").css("background-color", "#fafafa");
    $(".my-row li").css("color", "#212121");
    $(".pPick, .pAdd, .pAdditional, .pPayment").css("color", "#283148");
    $(".imgGps").css("filter", "brightness(-500%)");
    $(".btnAddStopoff,.pAdditonalBox, .pPrice, .pPriceSub, .btnBook").css(
      "color",
      "#283148"
    );
    $(
      ".btnAddStopoff, .pAdditional, .pAdditonalBox, .pPayment, .pPriceSub, .btnBook"
    ).css("font-weight", "600");
    $(".pPrice").css("font-weight", "bold");
    $(".txtAdditional").css({
      "border-color": "lightgray",
      "background-color": "#F3F3F4",
    });
    $(".css-1g6gooi, .css-b8ldur-Input, .css-yk16xz-control").attr(
      "style",
      "color: #424242 !important"
    );

    $(".spanFull").css("color", "#212121");
    $(".spanFull , .txtprof, .btnSave, .divProf > .pTxtDriver").css(
      "font-weight",
      "600"
    );
    $(".divProf").css("background-color", "#F0F0F0");
    $(".txtprof").css("color", "#424242");
    $(".divProf > .pTxtDriver").css("color", "#424242");
    $(".txtprof").css("border", "1px solid #BDBDBD");
    $(".btnSave").attr(
      "style",
      "color: #212121 !important; font-weight: 600 !important"
    );
  }
});
