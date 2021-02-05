$(document).ready(function () {
  console.log(window.location.pathname);
  if (window.scrollY > 0) {
    $(".fixed-top").css("background", "#1A1A1A");
    $(".fixed-top").css("z-index", "9");
  }

  var getLastPartOfUrl = function ($url) {
    var url = $url;
    var urlsplit = url.split("/");
    var lastpart = urlsplit[urlsplit.length - 1];
    if (lastpart === "") {
      lastpart = urlsplit[urlsplit.length - 2];
    }
    return lastpart;
  };

  $("#driverModal").on("shown.bs.modal", function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  });

  $("#exampleModal").on("hidden.bs.modal", function () {
    $(".modal-backdrop").hide();
  });

  try {
    const $menuBtn = document.querySelector(".menu-btn");
    let isMenuOpen = false;
    $menuBtn.addEventListener("click", () => {
      if (!isMenuOpen) {
        $(".conHide").fadeOut(100);
        $(".imgLogo").fadeOut(100);
        $(".imglogo").fadeOut(100);
        $(".divMenu").fadeIn(200);
        $menuBtn.classList.add("open");
      } else {
        $(".imgLogo").fadeIn(100);
        $(".imglogo").fadeIn(100);
        $(".conHide").fadeIn(100);
        $(".divMenu").fadeOut(150);
        $menuBtn.classList.remove("open");
      }
      isMenuOpen = !isMenuOpen;
    });
  } catch (e) {}

  $(window).resize(function () {
    $(".colMapTrack").css("left", width);
    var width = $(window).width();
    if (width < 500) {
      $(".colSideTrack, .colSidebar").css("top", "calc(100vh - 160px)");
    }
  });

  $(".closeChat").click(function () {
    $(".divChatbox").hide();
  });

  $(".btnplease").click(function () {
    alert("ASdas");
    $(".divChatbox").show();
  });

  var width = $(".colSidebar").width();
  var totalwidth = $(window).width() - width - 50;
  $(".colMapTrack").css("max-width", totalwidth);
  $(".colMapTrack").css("min-width", totalwidth);
  $(".colMapTrack").css("left", width + 45);
  if (localStorage.getItem("theme_status") === "light") {
    $("#switch").prop("checked", true);
    if (
      window.location.pathname == "/" ||
      window.location.pathname == "/main"
    ) {
    } else {
      light();
    }
  } else {
    $("#switch").prop("checked", false);
  }

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

  $(".hrTrack").click(function () {
    $(".colSideTrack, .colSidebar").css("top", "25px");
  });
  var y = 0;

  $(".btnAddStopoff1").click(function () {
    var clear = 0;
    $(".div1:visible")
      .each(function () {
        if (
          $(this).find(".css-5sz5u5-singleValue").text().length == 0 &&
          $(this).css("display") == "table-footer-group"
        ) {
          $(this)
            .find(".css-kvzrv0-control")
            .css("border", "1px solid #ED3450");
          window.reactFunction();
          clear = 1;
          return false;
        }
      })
      .promise()
      .done(function () {
        if (clear == 0) {
          $(".css-kvzrv0-control").css("border", "1px solid #2c2c2c");
          if (
            $(".divStopoff1").find(".css-5sz5u5-singleValue").text().length ==
              0 &&
            $(".divStopoff1").css("display") == "none"
          ) {
            $(".divStopoff1").css("display", "table-footer-group");
          } else if (
            $(".divStopoff2").find(".css-5sz5u5-singleValue").text().length ==
              0 &&
            $(".divStopoff2").css("display") == "none"
          ) {
            $(".div1:visible").each(function () {
              $(this).css("display", "block");
            });
            $(".divStopoff2").css("display", "table-footer-group");
            return false;
          } else if (
            $(".divStopoff3").find(".css-5sz5u5-singleValue").text().length ==
              0 &&
            $(".divStopoff3").css("display") == "none"
          ) {
            $(".div1:visible").each(function () {
              $(this).css("display", "block");
            });
            $(".divStopoff3").css("display", "table-footer-group");
            return false;
          } else if (
            $(".divStopoff4").find(".css-5sz5u5-singleValue").text().length ==
              0 &&
            $(".divStopoff4").css("display") == "none"
          ) {
            $(".div1:visible").each(function () {
              $(this).css("display", "block");
            });
            $(".divStopoff4").css("display", "table-footer-group");
            return false;
          } else {
            alert("maximum");
          }
        }
      });
  });

  try {
    const $boxadd = document.querySelector(".boxAdditional");
    $boxadd.addEventListener("click", () => {
      alert("asdsa");
      if (localStorage.getItem("theme_status") == "light") {
        $(".boxAdditional").css("background-color", "transparent");
        $(".boxAdditional >p").css("color", "#283148");
        $(this).css("background-color", "#FFFE00");
        $("p", this).css("color", "#283148");
      } else {
        if ($(this).css("background-color") == "rgb(255, 254, 0)") {
          $(this).css("background-color", "transparent");
          $("p", this).css("color", "white");
        } else {
          $(this).css("background-color", "#FFFE00");
          $("p", this).css("color", "black");
        }
      }
    });
  } catch (e) {}

  $(".boxAdditional").click(function () {
    if (localStorage.getItem("theme_status") == "light") {
      $(".boxAdditional").css("background-color", "transparent");
      $(".boxAdditional >p").css("color", "#283148");
      $(this).css("background-color", "#FFFE00");
      $("p", this).css("color", "#283148");
    } else {
      if ($(this).css("background-color") == "rgb(255, 254, 0)") {
        $(this).css("background-color", "transparent");
        $("p", this).css("color", "white");
      } else {
        $(this).css("background-color", "#FFFE00");
        $("p", this).css("color", "black");
      }
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
    $(".conServices")
      .fadeTo("fast", 0.3, function () {
        $(".conServices").css("background-image", "url(/Image/foodbg.png)");
      })
      .fadeTo("fast", 1);
    $(".divBox1").hide();
    $(".divFood").fadeIn(200);
  });
  $(".BoxDocu").click(function () {
    $(".conServices")
      .fadeTo("fast", 0.3, function () {
        $(".conServices").css("background-image", "url(/Image/docubg.png)");
      })
      .fadeTo("fast", 1);
    $(".divBox1").hide();
    $(".divDocu").fadeIn(200);
  });
  $(".BoxCloth").click(function () {
    $(".conServices")
      .fadeTo("fast", 0.3, function () {
        $(".conServices").css("background-image", "url(/Image/clothesbg.png)");
      })
      .fadeTo("fast", 1);
    $(".divBox1").hide();
    $(".divCloth").fadeIn(200);
  });
  $(".BoxMedic").click(function () {
    $(".conServices")
      .fadeTo("fast", 0.3, function () {
        $(".conServices").css("background-image", "url(/Image/medbg.png)");
      })
      .fadeTo("fast", 1);
    $(".divBox1").hide();
    $(".divMedic").fadeIn(200);
  });
  $(".BoxFragile").click(function () {
    $(".conServices")
      .fadeTo("fast", 0.3, function () {
        $(".conServices").css("background-image", "url(/Image/fragilebg.png)");
      })
      .fadeTo("fast", 1);
    $(".divBox1").hide();
    $(".divFragile").fadeIn(200);
  });
  $(".BoxOther").click(function () {
    $(".conServices")
      .fadeTo("fast", 0.3, function () {
        $(".conServices").css("background-image", "url(/Image/otherbg.png)");
      })
      .fadeTo("fast", 1);
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

  $(".txtNumber").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
  });

  $("#carouselExampleIndicatorsmain").on(
    "slid.bs.carousel",
    function onSlide(ev) {
      var id = ev.relatedTarget.id;
      switch (id) {
        case "1":
          $(".pulse").fadeOut(100);

          break;
        case "2":
          $(".pulse").attr(
            "style",
            "left: 39.2% !important; top: 15.1% !important"
          );
          $(".pulse").fadeIn(100);
          break;
        case "3":
          $(".pulse").attr(
            "style",
            "left:61.5% !important; top: 37.3% !important"
          );
          $(".pulse").fadeIn(100);
          break;
        case "4":
          $(".pulse").attr(
            "style",
            "left:39.2% !important;top: 59.3% !important"
          );
          $(".pulse").fadeIn(100);
          break;
        case "5":
          $(".pulse").attr(
            "style",
            "left:17.2% !important;top: 37.3% !important"
          );
          $(".pulse").fadeIn(100);
          break;
        default:
        //the id is none of the above
      }
    }
  );

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
      window.location.reload();
    } else if ($(this).prop("checked") == false) {
      var theme = false;
      localStorage.setItem("theme", JSON.stringify(theme));
      localStorage.setItem("theme_status", "false");
      window.location.reload();
    }
  });

  $(".pBack").click(function () {});

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
    $(".spanCheckSettings").css("color", "#313131");
    $(".spanCheckSettings").css("font-weight", "600");
    $(".btnChangepassword").css("font-weight", "600");
    $(".btnChangepassword").css("color", "#313131");
    $(".btnChangepassword").css("border", "1px solid #313131");
    $(".rowTop").css("background-color", "#F3F3F4");
    $(".rowTop").css("border-color", "lightgray");
    $(".btnLogout").css("color", "#212121");
    $(".btnLogout, .pFullname").css("font-weight", "600");
    $(".pFullname").css("color", "#212121");
    $(".txtSearch").css("background-color", "#F3F3F4");
    $(".txtSearch").css("color", "#424242");
    $(".txtSearch").css("border", "1px solid gray");
    $(".btnReport").css("color", "#313131");
    $(".pWeight, .pKg").css("color", "#313131");
    $(".pTotalBookings").css("color", "#757575");
    $(".pActiveBookings").css("color", "#FBC02D");
    $(".btnReport").css("color", "#313131");
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
    $(".btnAddStopoff,.pAdditonalBox, .pPrice, .pPriceSub, .btnBook1").css(
      "color",
      "#283148"
    );
    $(
      ".btnAddStopoff, .pAdditional, .pAdditonalBox, .pPayment, .pPriceSub, .btnBook1"
    ).css("font-weight", "600");
    $(".pPrice").css("font-weight", "bold");
    $(".txtAdditional").css({
      "border-color": "lightgray",
      "background-color": "#F3F3F4",
    });
    $(".txtAdditional").css("color", "#212121");
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
    $(".pMode, .pCod, .pPriceModal, .pWalletModal, .pNoaction, .pNocard").css(
      "color",
      "#212121"
    );
    $(".pMode, .pCod, .pNoaction, .pModeSub, .pNocard").css(
      "font-weight",
      "600"
    );
    $(".pModeSub, .pCodSub").css("color", "#424242");
    $(".mode").removeClass("modalPayment");
    $(".divCod").css("background-color", "white");
    $(".btnPayment").attr("style", "color: #212121 !important");
    $(".imgRefresh").css("filter", "invert(1) brightness(500%)");
    $(".mode").css("background-color", "rgb(243,244,248)");
    $(".pagination").attr("style", "color: #21212 1 !important");
    $(".pagination > li").attr("style", "color: #212121 !important");
    $(".pagination > li > a").attr("style", "color: #212121 !important");
    $(".divCardList, .divCardPayment").css(
      "background",
      "linear-gradient(to right, #232526, #414345)"
    );
    $(".divCardList, .divCardPayment").css(
      "box-shadow",
      "0px 0px 29px 0px rgba(140,140,140,0.33)"
    );

    $(".modalSearch").css("background-color", "#F6F5F0");
    $(".pSearching, .pCancelbook, .pModalVerify, .pReport").css(
      "color",
      "#212121"
    );
    $(".pSearching, .pSearchsub, .btnCheck, .pModalVerify, .pReport").css(
      "font-weight",
      "600"
    );
    $(".btn.btn--loading span b").attr(
      "style",
      "background: #212121 !important"
    );
    $(".btnCheck").attr(
      "style",
      "color: #212121 !important;font-weight: 600 !important"
    );
    $(".pSearchsub, .pModalTitleSub").css("color", "#424242");
    $(".txtIdsupport, .txtTitle, .txtDescription, .txttopup, .btnAddcard").attr(
      "style",
      "color: #212121 !important"
    );
    $(".divPricewallet").css("background-color", "#fafafa");
    $(".pModalTitle, .pFname").css("color", "#212121");
    $(".pModalTitle, .pFname, .btnAddcard").css("font-weight", "600");
  }

  $(".digit-group")
    .find("input")
    .each(function () {
      $(this).attr("maxlength", 1);
      $(this).on("keyup", function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find("input#" + $(this).data("previous"));

          if (prev.length) {
            $(prev).select();
          }
        } else if (
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          (e.keyCode >= 65 && e.keyCode <= 90) ||
          (e.keyCode >= 96 && e.keyCode <= 105) ||
          e.keyCode === 39
        ) {
          var next = parent.find("input#" + $(this).data("next"));

          if (next.length) {
            $(next).select();
          } else {
            if (parent.data("autosubmit")) {
              parent.submit();
            }
          }
        }
      });
    });
  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.12085),
      zoom: 5,
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }

  
});
