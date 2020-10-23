webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/navbar */ "./component/navbar.js");
/* harmony import */ var _component_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/login */ "./component/login.js");
/* harmony import */ var _component_deliver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/deliver */ "./component/deliver.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");


var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      fname = _React$useState4[0],
      setFname = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var loggedInUser = localStorage.getItem("token");

    if (loggedInUser) {
      var foundUser = JSON.parse(loggedInUser);
    }
  }, []);

  function book() {
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").fadeIn(250);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid mainCon h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row h-100 align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/imgindex.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-lg-6 text-center colMain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "We ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 20
    }
  }, "always")), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "deliver."), __jsx("input", {
    type: "button",
    className: "btnBook",
    value: "BOOK A DELIVERY",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), __jsx(_component_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_component_deliver__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container-fluid conServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "boxIcon BoxDocu align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divBoxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "DOCUMENT"))), __jsx("div", {
    className: "boxIcon BoxFood align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divBoxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "FOOD"))), __jsx("div", {
    className: "boxIcon BoxCloth align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divBoxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "CLOTHING"))), __jsx("div", {
    className: "boxIcon BoxMedic align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divBoxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "MEDICAL"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divBoxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/Mask Group 2.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "FRAGILE"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divBoxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "OTHER"))))), __jsx("div", {
    className: "col-lg-10 text-center mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pWhat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "WHAT CAN YOU DELIVER?"), __jsx("div", {
    className: "divBox1 divDocu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "imgIconLarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pIconText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, "DOCUMENT"), __jsx("p", {
    className: "pDesc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("button", {
    className: "btnBookServices",
    onClick: book,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "BOOK A DELIVERY")), __jsx("div", {
    className: "divBox1 divFood",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "imgIconLarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pIconText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "FOOD"), __jsx("p", {
    className: "pDesc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("button", {
    className: "btnBookServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "BOOK A DELIVERY")), __jsx("div", {
    className: "divBox1 divCloth",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "imgIconLarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pIconText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "CLOTHING"), __jsx("p", {
    className: "pDesc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("button", {
    className: "btnBookServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "BOOK A DELIVERY")), __jsx("div", {
    className: "divBox1 divMedic",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "imgIconLarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pIconText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, "MEDICAL"), __jsx("p", {
    className: "pDesc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("button", {
    className: "btnBookServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, "BOOK A DELIVERY")))))), __jsx("div", {
    className: "container-fluid con3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/horse.png",
    className: "img-fluid",
    style: {
      width: "85%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-lg-7 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pOntime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, "ON TIME ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }), "EVERY TIME"), __jsx("div", {
    className: "divBoxCheck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    style: {
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/check.svg",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCheck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"))), __jsx("div", {
    className: "row",
    style: {
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/check.svg",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCheck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"))), __jsx("div", {
    className: "row",
    style: {
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/check.svg",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCheck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"))), __jsx("div", {
    className: "row",
    style: {
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/check.svg",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCheck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")))))))), __jsx("div", {
    className: "container-fluid con4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComingsoon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("p", {
    className: "pComingSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "Order before cut off and we will deliver your groceries on the same day!")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/Man.png",
    className: "img-fluid mx-auto d-flex",
    style: {
      width: "80%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 14
    }
  }))))), __jsx("div", {
    className: "container-fluid conFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    style: {
      width: "150px",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "ulFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, "COMPANY")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, "CONTACT US")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, "POLICIES")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, "TERM & CONDITION")))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-center pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, "\xA9 2020 JGO Philippines. - All Rights")))));
}

_s(index, "mq9doXPWR+d2/q7aFyr3OtzR5Cw=");

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJmbmFtZSIsInNldEZuYW1lIiwidXNlRWZmZWN0IiwibG9nZ2VkSW5Vc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvdW5kVXNlciIsIkpTT04iLCJwYXJzZSIsImJvb2siLCIkIiwiaGlkZSIsImZhZGVJbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSx3QkFDU0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEVDtBQUFBO0FBQUEsTUFDUkMsSUFEUTtBQUFBLE1BQ0ZDLE9BREU7O0FBQUEseUJBRVdILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRlg7QUFBQTtBQUFBLE1BRVJHLEtBRlE7QUFBQSxNQUVEQyxRQUZDOztBQUlmQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFyQjs7QUFDQSxRQUFJRixZQUFKLEVBQWtCO0FBQ2hCLFVBQU1HLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFlBQVgsQ0FBbEI7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsV0FBU00sSUFBVCxHQUFnQjtBQUNkQyxLQUFDLENBQUMsVUFBRCxDQUFELENBQWNDLElBQWQ7QUFDQUQsS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxJQUFmO0FBQ0FELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJFLE1BQWpCLENBQXdCLEdBQXhCO0FBQ0Q7O0FB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LGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBSkYsRUFPRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FQRixFQVVFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQVZGLENBREYsQ0FKRixFQW9CRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURGLENBcEJGLENBREYsQ0FuTkYsQ0FERjtBQWtQRDs7R0FuUVFyQixLOztBQXFRTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTg4OTgzY2M3OTM5N2Q2ZTk1ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXJcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnQvbG9naW5cIjtcclxuaW1wb3J0IERlbGl2ZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9kZWxpdmVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRGbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9nZ2VkSW5Vc2VyKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGJvb2soKSB7XHJcbiAgICAkKFwiLmNvbE1haW5cIikuaGlkZSgpO1xyXG4gICAgJChcIi5jb2xMb2dpblwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmNvbERlbGl2ZXJcIikuZmFkZUluKDI1MCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbWFpbkNvbiBoLTEwMFwiPlxyXG4gICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgPE5hdmJhcj48L05hdmJhcj5cclxuICAgICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZ2luZGV4LnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LWNlbnRlciBjb2xNYWluXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5cclxuICAgICAgICAgICAgICAgIFdlIDxzcGFuPmFsd2F5czwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5kZWxpdmVyLjwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuQm9va1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkJPT0sgQSBERUxJVkVSWVwiXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPExvZ2luPjwvTG9naW4+XHJcbiAgICAgICAgICAgIDxEZWxpdmVyPjwvRGVsaXZlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uU2VydmljZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hJY29uIEJveERvY3UgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uXCI+RE9DVU1FTlQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEljb24gQm94Rm9vZCBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3hJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAyLXBpenphLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uXCI+Rk9PRDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94SWNvbiBCb3hDbG90aCBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3hJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2xvdGhpbmcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdJY29uXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEljb25cIj5DTE9USElORzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94SWNvbiBCb3hNZWRpYyBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3hJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWVkaWNhbC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblwiPk1FRElDQUw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEljb24gYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL01hc2sgR3JvdXAgMi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblwiPkZSQUdJTEU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEljb24gYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL290aGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uXCI+T1RIRVI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCB0ZXh0LWNlbnRlciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFdoYXRcIj5XSEFUIENBTiBZT1UgREVMSVZFUj88L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3gxIGRpdkRvY3VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvMDAxLWZpbGUuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nSWNvbkxhcmdlXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblRleHRcIj5ET0NVTUVOVDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZFxyXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxyXG4gICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXHJcbiAgICAgICAgICAgICAgICAgIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Cb29rU2VydmljZXNcIiBvbkNsaWNrID0ge2Jvb2t9PkJPT0sgQSBERUxJVkVSWTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94MSBkaXZGb29kXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlLzAwMi1waXp6YS5zdmdcIiBjbGFzc05hbWU9XCJpbWdJY29uTGFyZ2VcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uVGV4dFwiPkZPT0Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWRcclxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICAgICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xyXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va1NlcnZpY2VzXCI+Qk9PSyBBIERFTElWRVJZPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3gxIGRpdkNsb3RoXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2Nsb3RoaW5nLnN2Z1wiIGNsYXNzTmFtZT1cImltZ0ljb25MYXJnZVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEljb25UZXh0XCI+Q0xPVEhJTkc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWRcclxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICAgICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xyXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va1NlcnZpY2VzXCI+Qk9PSyBBIERFTElWRVJZPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3gxIGRpdk1lZGljXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL21lZGljYWwuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nSWNvbkxhcmdlXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblRleHRcIj5NRURJQ0FMPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkXHJcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgICAgIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY29cclxuICAgICAgICAgICAgICAgICAgbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkJvb2tTZXJ2aWNlc1wiPkJPT0sgQSBERUxJVkVSWTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGFsaWduLXNlbGYtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9ob3JzZS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODUlXCJ9fT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwT250aW1lXCI+XHJcbiAgICAgICAgICAgICAgICBPTiBUSU1FIDxicj48L2JyPkVWRVJZIFRJTUVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCb3hDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZSA9IHt7bWFyZ2luQm90dG9tOiBcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jaGVjay5zdmdcIiBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlID0ge3ttYXJnaW5Cb3R0b206IFwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NoZWNrLnN2Z1wiIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlID0ge3ttYXJnaW5Cb3R0b206IFwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NoZWNrLnN2Z1wiIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGUgPSB7e21hcmdpbkJvdHRvbTogXCIzMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY2hlY2suc3ZnXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lci1mbHVpZCBjb240XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJwQ29taW5nc29vblwiPkNPTUlORyBTT09OPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwicENvbWluZ1N1YlwiPk9yZGVyIGJlZm9yZSBjdXQgb2ZmIGFuZCB3ZSB3aWxsIGRlbGl2ZXIgeW91ciBncm9jZXJpZXMgb24gdGhlIHNhbWUgZGF5ITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgPGltZyBzcmMgPSBcIkltYWdlL01hbi5wbmdcIiBjbGFzc05hbWUgPSBcImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiIHN0eWxlID0ge3t3aWR0aDogXCI4MCVcIn19PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uRm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsbWFyZ2luTGVmdDogXCIyMHB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVsRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj5DT01QQU5ZPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25ld3NcIj5DT05UQUNUIFVTPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5QT0xJQ0lFUzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+VEVSTSAmIENPTkRJVElPTjwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgwqkgMjAyMCBKR08gUGhpbGlwcGluZXMuIC0gQWxsIFJpZ2h0c1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==