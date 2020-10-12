webpackHotUpdate_N_E("pages/driver",{

/***/ "./pages/driver.js":
/*!*************************!*\
  !*** ./pages/driver.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\driver.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function driver() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      fname = _React$useState2[0],
      setfname = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      lname = _React$useState4[0],
      setlname = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      mname = _React$useState6[0],
      setmname = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      email = _React$useState8[0],
      setemail = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      mobile = _React$useState10[0],
      setmobile = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      password = _React$useState12[0],
      setpassword = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      passwordconfirm = _React$useState14[0],
      setpasswordconfirm = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
      lisencenumber = _React$useState16[0],
      setlisencenumber = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState17, 2),
      vehicle = _React$useState18[0],
      setvehicle = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState19, 2),
      zip = _React$useState20[0],
      setzip = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState21, 2),
      plateenumber = _React$useState22[0],
      setplatenumber = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState24 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState23, 2),
      profile = _React$useState24[0],
      setprofile = _React$useState24[1];

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState26 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState25, 2),
      driver = _React$useState26[0],
      setDriver = _React$useState26[1];

  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState28 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState27, 2),
      nbi = _React$useState28[0],
      setNbi = _React$useState28[1];

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState30 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState29, 2),
      ocr = _React$useState30[0],
      setOcr = _React$useState30[1];

  var _React$useState31 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState32 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState31, 2),
      profile_name = _React$useState32[0],
      setProfilename = _React$useState32[1];

  var _React$useState33 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState34 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState33, 2),
      driver_lisence = _React$useState34[0],
      setDriverlisence = _React$useState34[1];

  var _React$useState35 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState36 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState35, 2),
      nbi_clearance = _React$useState36[0],
      setNbiclearance = _React$useState36[1];

  var _React$useState37 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState38 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState37, 2),
      ocr_clearance = _React$useState38[0],
      setOcrclearance = _React$useState38[1];

  var inputFileRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var inputFileRef1 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var inputFileRef2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var inputFileRef3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var onBtnClick = function onBtnClick() {
    inputFileRef.current.click();
  };

  var onBtnClick1 = function onBtnClick1() {
    inputFileRef1.current.click();
  };

  var onBtnClick2 = function onBtnClick2() {
    inputFileRef2.current.click();
  };

  var onBtnClick3 = function onBtnClick3() {
    inputFileRef3.current.click();
  };

  function handleFile(e) {
    var file = e.target.files[0];
    setProfilename(file.name);
    setprofile(file);
  }

  function handleFile1(e) {
    var file = e.target.files[0];
    setDriverlisence(file.name);
    setDriver(file);
  }

  function handleFile2(e) {
    var file = e.target.files[0];
    setNbiclearance(file.name);
    setNbi(file);
  }

  function handleFile3(e) {
    var file = e.target.files[0];
    setOcrclearance(file.name);
    setOcr(file);
  }

  var customStyles = {
    control: function control(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        border: "1px solid #707070",
        boxShadow: "none",
        borderRadius: "10px",
        width: "115%",
        padding: "4.5px",
        marginTop: "5px"
      });
    }
  };
  var customStyles1 = {
    control: function control(base, state) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {
        background: "rgb(28, 30, 33)",
        color: "white",
        border: "1px solid #2c2c2c",
        boxShadow: "none",
        borderRadius: "5px",
        width: "115%",
        padding: "2px",
        marginTop: "5px"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "boxShadow", state.isFocused ? "#EDC728" : null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "&:hover", {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }), _objectSpread2));
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "white"
      });
    }
  };

  var regions = __webpack_require__(/*! philippines/regions */ "./node_modules/philippines/regions.json");

  var province = __webpack_require__(/*! philippines/provinces */ "./node_modules/philippines/provinces.json");

  var cities = __webpack_require__(/*! philippines/cities */ "./node_modules/philippines/cities.json");

  var _React$useState39 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState40 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState39, 2),
      regions_api = _React$useState40[0],
      setRegion = _React$useState40[1];

  var _React$useState41 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState42 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState41, 2),
      province_api = _React$useState42[0],
      setProvince = _React$useState42[1];

  var _React$useState43 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState44 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState43, 2),
      cities_api = _React$useState44[0],
      setCities = _React$useState44[1];

  var _React$useState45 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState46 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState45, 2),
      region_change = _React$useState46[0],
      setRegionChange = _React$useState46[1];

  var _React$useState47 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState48 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState47, 2),
      province_change = _React$useState48[0],
      setProvinceChange = _React$useState48[1];

  var _React$useState49 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState50 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState49, 2),
      cities_change = _React$useState50[0],
      setCitiesChange = _React$useState50[1];

  function HandleChangeRegion(e) {
    setRegionChange(e.value);
    var data = province.filter(function (person) {
      return person.region === e.value;
    }).map(function (d) {
      return {
        id: d.key,
        value: d.key,
        label: d.name
      };
    });
    setProvince(data);
  }

  function HandleChangeProvince(e) {
    setProvinceChange(e.value);
    var data = cities.filter(function (person) {
      return person.province === e.id;
    }).map(function (d) {
      return {
        value: d.name,
        label: d.name
      };
    });
    setCities(data);
  }

  function getData() {
    var data_regions = regions.map(function (d) {
      return {
        value: d.key,
        label: d.name
      };
    });
    setRegion(data_regions);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getData();
  }, []);

  function trylang() {
    province.forEach(function (val, index) {
      return val.data.splice(3);
    });
    console.log("gumana");
  }

  function fname_change(e) {
    setfname(e.target.value);
  }

  function mname_change(e) {
    setmname(e.target.value);
  }

  function lname_change(e) {
    setlname(e.target.value);
  }

  function email_change(e) {
    setemail(e.target.value);
  }

  function mobile_change(e) {
    setmobile(e.target.value);
  }

  function password_change(e) {
    setpassword(e.target.value);
  }

  function passwordconfirm_change(e) {
    setpasswordconfirm(e.target.value);
  }

  function lisence_change(e) {
    setlisencenumber(e.target.value);
  }

  function zip_change(e) {
    setzip(e.target.value);
  }

  function plate_change(e) {
    setplatenumber(e.target.value);
  }

  function vehicle_change(e) {
    setvehicle(e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    if (fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
    }

    if (lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
    }

    if (email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
    }

    if (mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
    }

    if (password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
    }

    if (lisencenumber == "") {
      $(".pLisence").css("color", "#d32f2f");
      $(".txtLisence").css("borderColor", "#d32f2f");
    }

    if (plateenumber == "") {
      $(".pPlate").css("color", "#d32f2f");
      $(".txtPlate").css("borderColor", "#d32f2f");
    }

    if (profile == "") {
      $(".divProfile").css("borderColor", "#d32f2f");
    }

    if (driver == "") {
      $(".divDriver").css("borderColor", "#d32f2f");
    }

    if (nbi == "") {
      $(".divNbi").css("borderColor", "#d32f2f");
    }

    if (ocr == "") {
      $(".divOcr").css("borderColor", "#d32f2f");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid mainConDriver",
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-md fixed-top",
    style: {
      padding: "20px 20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imglogo",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    style: {
      color: "white"
    },
    "data-toggle": "modal",
    "data-target": "#driverModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, "Support")))))), __jsx("div", {
    className: "conDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    style: {
      marginLeft: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-3",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/phone1.png",
    className: "img-fluid imgPhone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/phone.gif",
    className: "img-fluid imgGif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-lg-4",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    style: {
      padding: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/apple.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }, "Download on the ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 39
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 23
    }
  }, "App Store")))), __jsx("div", {
    className: "col-lg-6",
    style: {
      padding: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/playstore.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, "Get it on ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, "Play Store"))))), __jsx("div", {
    className: "divService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pFully",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }
  }, "FULLY FILIPINO OWNED COMPANY"), __jsx("p", {
    className: "pService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, "MAAASANG SERBISYO!"))), __jsx("div", {
    className: "col-lg-5",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/deliveryguy.png",
    className: "img-fluid imgDel mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "row rowGray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "container-fluid conRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid imgRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pRate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }, "LOWEST RATE AT PHP 6/KM WITH A FLAT FEE OF PHP60"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img2.png",
    className: "img-fluid img2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img3.png",
    className: "img-fluid img3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pSafety",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 13
    }
  }, "SAFETY AND ACCESSIBILITY IS OUR PRIMARY CONCERN")))), __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    style: {
      marginTop: "200px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "col-lg-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pBe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 15
    }
  }, "BE A ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 22
    }
  }, "JGO DRIVER")), __jsx("button", {
    className: "btnSignup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 15
    }
  }, "Sign up now!")))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "-20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-7 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "pCome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 13
    }
  }, "COME RIDE WITH US"))), __jsx("div", {
    className: "row rowFooter",
    style: {
      backgroundColor: "#373735"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row rowGrayFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 text-center align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, "@ 2020 JGO Philippines. - All Rights")))), __jsx("div", {
    className: "modal fade",
    id: "exampleModal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    style: {
      zIndex: "99999999999999999999999999999999"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 15
    }
  }, "JGO DRIVER - Registration Form")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pAccount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 15
    }
  }, "ACCOUNT INFORMATION"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 19
    }
  }, "Address 1"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "txtInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 19
    }
  }, __jsx("i", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 21
    }
  }, "House/Unit Number, Building Name, Street Name"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 19
    }
  }, "Address 2"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "txtInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 19
    }
  }, __jsx("i", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 21
    }
  }, "Subdivision/Village"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 19
    }
  }, "Barangay"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "-8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 19
    }
  }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: cities_api,
    styles: customStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 19
    }
  }, "Postal"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 19
    }
  }, "Country"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    value: "Philippines",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 19
    }
  }, "Email Address"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 19
    }
  }, "Confirm Email Address"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAccount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 19
    }
  }, "VEHICLE INFORMATION"))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "-10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    value: "Motor",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 19
    }
  }, "Vehicle Brand"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 19
    }
  }, "Vehicle Model"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 19
    }
  }, "Engine Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 19
    }
  }, "Chasis Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAccount",
    style: {
      marginBottom: "-5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 19
    }
  }, "REQUIREMENTS NEEDED")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 19
    }
  }, "Driver Lisence (Photo)"), __jsx("div", {
    style: {
      border: "1px solid #707070",
      borderRadius: "10px",
      padding: "5px 8px",
      marginTop: "5px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 19
    }
  }, __jsx("label", {
    "for": "file-upload",
    className: "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 21
    }
  }, __jsx("i", {
    "class": "fa fa-cloud-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 23
    }
  }), " Choose File"), __jsx("input", {
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "pImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 19
    }
  }, "Note: Only .jpg, .jpeg and .png files are allowed")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 19
    }
  }, "Vehicle's OR/CR (Photo)"), __jsx("div", {
    style: {
      border: "1px solid #707070",
      borderRadius: "10px",
      padding: "5px 8px",
      marginTop: "5px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 19
    }
  }, __jsx("label", {
    "for": "file-upload",
    className: "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 21
    }
  }, __jsx("i", {
    "class": "fa fa-cloud-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 23
    }
  }), " Choose File"), __jsx("input", {
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "pImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 19
    }
  }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
    className: "modal-footer text-center mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btnSubmitModal",
    onClick: trylang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 15
    }
  }, "Submit"))))), __jsx("div", {
    className: "modal fade",
    id: "driverModal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    style: {
      zIndex: "99999999999999999999999999999999"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-driver modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body modalDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pModalTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 15
    }
  }, "Jgo - Driver registration form"), __jsx("p", {
    className: "pModalTitleSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 15
    }
  }, "Fill-up all the requird fields. After you submit we will send a link to your email for driver online test."), __jsx("hr", {
    style: {
      backgroundColor: "#414141",
      boder: "1px solid #414141"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "row",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    onChange: fname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: mname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
    onChange: lname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 19
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
    onChange: email_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    onChange: mobile_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 19
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 19
    }
  }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: cities_api,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 19
    }
  }, "Country"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    value: "Philippines",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 19
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: zip_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtPassword",
    onChange: password_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pConfirmPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtConfirmPass",
    onChange: passwordconfirm_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: vehicle_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPlate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtPlate",
    onChange: plate_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLisence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLisence",
    onChange: lisence_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 19
    }
  }, "Profile Picture"), __jsx("input", {
    onChange: function onChange(e) {
      return handleFile(e);
    },
    ref: inputFileRef,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divProfile text-center",
    onClick: onBtnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 21
    }
  }, profile_name))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 19
    }
  }, "Driver License"), __jsx("input", {
    onChange: function onChange(e) {
      return handleFile1(e);
    },
    ref: inputFileRef1,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divDriver text-center",
    onClick: onBtnClick1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 21
    }
  }, driver_lisence)))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 19
    }
  }, "NBI Clearance"), __jsx("input", {
    onChange: function onChange(e) {
      return handleFile2(e);
    },
    ref: inputFileRef2,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divNbi text-center",
    onClick: onBtnClick2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 21
    }
  }, nbi_clearance))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 19
    }
  }, "ORCR"), __jsx("input", {
    onChange: function onChange(e) {
      return handleFile3(e);
    },
    ref: inputFileRef3,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divOcr text-center",
    onClick: onBtnClick3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 21
    }
  }, ocr_clearance)))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnSubmitDriver",
    onClick: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 19
    }
  }, "Submit"))))))));
}

_s(driver, "Ho4ZJVniQ8C3A1C2KiwZ/1bb52Q=");

/* harmony default export */ __webpack_exports__["default"] = (driver);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLmpzIl0sIm5hbWVzIjpbImRyaXZlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJmbmFtZSIsInNldGZuYW1lIiwibG5hbWUiLCJzZXRsbmFtZSIsIm1uYW1lIiwic2V0bW5hbWUiLCJlbWFpbCIsInNldGVtYWlsIiwibW9iaWxlIiwic2V0bW9iaWxlIiwicGFzc3dvcmQiLCJzZXRwYXNzd29yZCIsInBhc3N3b3JkY29uZmlybSIsInNldHBhc3N3b3JkY29uZmlybSIsImxpc2VuY2VudW1iZXIiLCJzZXRsaXNlbmNlbnVtYmVyIiwidmVoaWNsZSIsInNldHZlaGljbGUiLCJ6aXAiLCJzZXR6aXAiLCJwbGF0ZWVudW1iZXIiLCJzZXRwbGF0ZW51bWJlciIsInByb2ZpbGUiLCJzZXRwcm9maWxlIiwic2V0RHJpdmVyIiwibmJpIiwic2V0TmJpIiwib2NyIiwic2V0T2NyIiwicHJvZmlsZV9uYW1lIiwic2V0UHJvZmlsZW5hbWUiLCJkcml2ZXJfbGlzZW5jZSIsInNldERyaXZlcmxpc2VuY2UiLCJuYmlfY2xlYXJhbmNlIiwic2V0TmJpY2xlYXJhbmNlIiwib2NyX2NsZWFyYW5jZSIsInNldE9jcmNsZWFyYW5jZSIsImlucHV0RmlsZVJlZiIsInVzZVJlZiIsImlucHV0RmlsZVJlZjEiLCJpbnB1dEZpbGVSZWYyIiwiaW5wdXRGaWxlUmVmMyIsIm9uQnRuQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbkJ0bkNsaWNrMSIsIm9uQnRuQ2xpY2syIiwib25CdG5DbGljazMiLCJoYW5kbGVGaWxlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJoYW5kbGVGaWxlMSIsImhhbmRsZUZpbGUyIiwiaGFuZGxlRmlsZTMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3VzdG9tU3R5bGVzMSIsImJhY2tncm91bmQiLCJjb2xvciIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJ2YWx1ZSIsInJlZ2lvbnNfYXBpIiwic2V0UmVnaW9uIiwicHJvdmluY2VfYXBpIiwic2V0UHJvdmluY2UiLCJjaXRpZXNfYXBpIiwic2V0Q2l0aWVzIiwicmVnaW9uX2NoYW5nZSIsInNldFJlZ2lvbkNoYW5nZSIsInByb3ZpbmNlX2NoYW5nZSIsInNldFByb3ZpbmNlQ2hhbmdlIiwiY2l0aWVzX2NoYW5nZSIsInNldENpdGllc0NoYW5nZSIsIkhhbmRsZUNoYW5nZVJlZ2lvbiIsImRhdGEiLCJmaWx0ZXIiLCJwZXJzb24iLCJyZWdpb24iLCJtYXAiLCJkIiwiaWQiLCJrZXkiLCJsYWJlbCIsIkhhbmRsZUNoYW5nZVByb3ZpbmNlIiwiZ2V0RGF0YSIsImRhdGFfcmVnaW9ucyIsInVzZUVmZmVjdCIsInRyeWxhbmciLCJmb3JFYWNoIiwidmFsIiwiaW5kZXgiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwiZm5hbWVfY2hhbmdlIiwibW5hbWVfY2hhbmdlIiwibG5hbWVfY2hhbmdlIiwiZW1haWxfY2hhbmdlIiwibW9iaWxlX2NoYW5nZSIsInBhc3N3b3JkX2NoYW5nZSIsInBhc3N3b3JkY29uZmlybV9jaGFuZ2UiLCJsaXNlbmNlX2NoYW5nZSIsInppcF9jaGFuZ2UiLCJwbGF0ZV9jaGFuZ2UiLCJ2ZWhpY2xlX2NoYW5nZSIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiJCIsImNzcyIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsImJvZGVyIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGlCQUpGLEVBUUU7QUFBRyxTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCbEMsYUFBL0IsQ0FSRixDQVZGLENBdEJGLENBdkxGLEVBbU9FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUUrQixlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRXlELE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLENBbk9GLENBREYsQ0FKRixDQVRGLENBelpGLENBREY7QUF3cEJEOztHQTc0QlE5SCxNOztBQSs0Qk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci5hMWYwZGMxOGU0NWVmYzA4MjRlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIGRyaXZlcigpIHtcclxuICBjb25zdCBbZm5hbWUsIHNldGZuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsbmFtZSwgc2V0bG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21uYW1lLCBzZXRtbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb2JpbGUsIHNldG1vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldHBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZGNvbmZpcm0sIHNldHBhc3N3b3JkY29uZmlybV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzZW5jZW51bWJlciwgc2V0bGlzZW5jZW51bWJlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmVoaWNsZSwgc2V0dmVoaWNsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbemlwLCBzZXR6aXBdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYXRlZW51bWJlciwgc2V0cGxhdGVudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldHByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RyaXZlciwgc2V0RHJpdmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYmksIHNldE5iaV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2NyLCBzZXRPY3JdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtwcm9maWxlX25hbWUsIHNldFByb2ZpbGVuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkcml2ZXJfbGlzZW5jZSwgc2V0RHJpdmVybGlzZW5jZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmJpX2NsZWFyYW5jZSwgc2V0TmJpY2xlYXJhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvY3JfY2xlYXJhbmNlLCBzZXRPY3JjbGVhcmFuY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGlucHV0RmlsZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYxID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25CdG5DbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMSA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjEuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazIgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYyLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2szID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMy5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0UHJvZmlsZW5hbWUoZmlsZS5uYW1lKTtcclxuICAgIHNldHByb2ZpbGUoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXREcml2ZXJsaXNlbmNlKGZpbGUubmFtZSk7XHJcbiAgICBzZXREcml2ZXIoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXROYmljbGVhcmFuY2UoZmlsZS5uYW1lKTtcclxuICAgIHNldE5iaShmaWxlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0T2NyKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuICBjb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbnNfYXBpLCBzZXRSZWdpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwcm92aW5jZV9hcGksIHNldFByb3ZpbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY2l0aWVzX2FwaSwgc2V0Q2l0aWVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbl9jaGFuZ2UsIHNldFJlZ2lvbkNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VfY2hhbmdlLCBzZXRQcm92aW5jZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0aWVzX2NoYW5nZSwgc2V0Q2l0aWVzQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICAgc2V0UmVnaW9uQ2hhbmdlKGUudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHNldFByb3ZpbmNlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgc2V0UHJvdmluY2VDaGFuZ2UoZS52YWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgc2V0Q2l0aWVzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICBzZXRSZWdpb24oZGF0YV9yZWdpb25zKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiB0cnlsYW5nKCkge1xyXG4gICAgcHJvdmluY2UuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4gdmFsLmRhdGEuc3BsaWNlKDMpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ3VtYW5hXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldGZuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbW5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldG1uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbG5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldGxuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZW1haWxfY2hhbmdlKGUpIHtcclxuICAgIHNldGVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbW9iaWxlX2NoYW5nZShlKSB7XHJcbiAgICBzZXRtb2JpbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBwYXNzd29yZF9jaGFuZ2UoZSkge1xyXG4gICAgc2V0cGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBwYXNzd29yZGNvbmZpcm1fY2hhbmdlKGUpIHtcclxuICAgIHNldHBhc3N3b3JkY29uZmlybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxpc2VuY2VfY2hhbmdlKGUpIHtcclxuICAgIHNldGxpc2VuY2VudW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiB6aXBfY2hhbmdlKGUpIHtcclxuICAgIHNldHppcChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBsYXRlX2NoYW5nZShlKSB7XHJcbiAgICBzZXRwbGF0ZW51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHZlaGljbGVfY2hhbmdlKGUpIHtcclxuICAgIHNldHZlaGljbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBzdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGZuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dEZuYW1lXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH1cclxuICAgIGlmIChsbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucExuYW1lXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRMbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TW9iaWxlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmRjb25maXJtID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wQ29uZmlybVBhc3NcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dENvbmZpcm1QYXNzXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZGNvbmZpcm0gPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBDb25maXJtUGFzc1wiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpc2VuY2VudW1iZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMaXNlbmNlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRMaXNlbmNlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH1cclxuICAgIGlmIChwbGF0ZWVudW1iZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQbGF0ZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGxhdGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb2ZpbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdlByb2ZpbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRyaXZlciA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIuZGl2RHJpdmVyXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH1cclxuICAgIGlmIChuYmkgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdk5iaVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICB9XHJcbiAgICBpZiAob2NyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbWFpbkNvbkRyaXZlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgZml4ZWQtdG9wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCAyMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQmUgYSBKR08gRHJpdmVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2RyaXZlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2sgYSBEZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25Ecml2ZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctM1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcGhvbmUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdQaG9uZVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3Bob25lLmdpZlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdHaWZcIj48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb21pbmdcIj5DT01JTkcgU09PTjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QnV0dG9uIGZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9hcHBsZS5wbmdcIiBjbGFzc05hbWU9XCJpbWdEb3dubG9hZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgb24gdGhlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXBwIFN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJ1dHRvbiBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3BsYXlzdG9yZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nRG93bmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBpdCBvbiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZ1bGx5XCI+RlVMTFkgRklMSVBJTk8gT1dORUQgQ09NUEFOWTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBTZXJ2aWNlXCI+TUFBQVNBTkcgU0VSQklTWU8hPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy01XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZGVsaXZlcnlndXkucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdEZWwgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dHcmF5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2xcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvblJvYWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9yb2FkMS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nUm9hZFwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUmF0ZVwiPlxyXG4gICAgICAgICAgICAgIExPV0VTVCBSQVRFIEFUIFBIUCA2L0tNIFdJVEggQSBGTEFUIEZFRSBPRiBQSFA2MFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBwLTBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbWcxLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHAtMFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZzIucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZzJcIj48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBwLTBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbWczLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWczXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFNhZmV0eVwiPlxyXG4gICAgICAgICAgICAgIFNBRkVUWSBBTkQgQUNDRVNTSUJJTElUWSBJUyBPVVIgUFJJTUFSWSBDT05DRVJOXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMDBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJlXCI+XHJcbiAgICAgICAgICAgICAgICBCRSBBIDxzcGFuPkpHTyBEUklWRVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuU2lnbnVwXCI+U2lnbiB1cCBub3chPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTIwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9yb2FkMS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIj48L2ltZz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENvbWVcIj5DT01FIFJJREUgV0lUSCBVUzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyByb3dGb290ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzNzM3MzVcIiB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dHcmF5Rm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlciBhbGlnbi1zZWxmLWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9vdGVyXCI+QCAyMDIwIEpHTyBQaGlsaXBwaW5lcy4gLSBBbGwgUmlnaHRzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBKR08gRFJJVkVSIC0gUmVnaXN0cmF0aW9uIEZvcm1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFjY291bnRcIj5BQ0NPVU5UIElORk9STUFUSU9OPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5BZGRyZXNzIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInR4dEluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aT5Ib3VzZS9Vbml0IE51bWJlciwgQnVpbGRpbmcgTmFtZSwgU3RyZWV0IE5hbWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkFkZHJlc3MgMjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHh0SW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPlN1YmRpdmlzaW9uL1ZpbGxhZ2U8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkJhcmFuZ2F5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VSZWdpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlUHJvdmluY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtjaXRpZXNfYXBpfSBzdHlsZXM9e2N1c3RvbVN0eWxlc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBvc3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5MaXNlbmNlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1vYmlsZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkVtYWlsIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db25maXJtIEVtYWlsIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFjY291bnRcIj5WRUhJQ0xFIElORk9STUFUSU9OPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5WZWhpY2xlIFR5cGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW90b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+VmVoaWNsZSBCcmFuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+VmVoaWNsZSBNb2RlbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBsYXRlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+RW5naW5lIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNoYXNpcyBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWNjb3VudFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCItNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUkVRVUlSRU1FTlRTIE5FRURFRFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Ecml2ZXIgTGlzZW5jZSAoUGhvdG8pPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpbGUtdXBsb2FkXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3VkLXVwbG9hZFwiPjwvaT4gQ2hvb3NlIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vdGU6IE9ubHkgLmpwZywgLmpwZWcgYW5kIC5wbmcgZmlsZXMgYXJlIGFsbG93ZWRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+VmVoaWNsZSdzIE9SL0NSIChQaG90byk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNzA3MDcwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvdWQtdXBsb2FkXCI+PC9pPiBDaG9vc2UgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTm90ZTogT25seSAuanBnLCAuanBlZyBhbmQgLnBuZyBmaWxlcyBhcmUgYWxsb3dlZFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyIHRleHQtY2VudGVyIG14LWF1dG8gZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5TdWJtaXRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0cnlsYW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZHJpdmVyTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1kcml2ZXIgbW9kYWwtbGdcIlxyXG4gICAgICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1vZGFsRHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVcIj5KZ28gLSBEcml2ZXIgcmVnaXN0cmF0aW9uIGZvcm08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVTdWJcIj5cclxuICAgICAgICAgICAgICAgIEZpbGwtdXAgYWxsIHRoZSByZXF1aXJkIGZpZWxkcy4gQWZ0ZXIgeW91IHN1Ym1pdCB3ZSB3aWxsIHNlbmQgYVxyXG4gICAgICAgICAgICAgICAgbGluayB0byB5b3VyIGVtYWlsIGZvciBkcml2ZXIgb25saW5lIHRlc3QuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTQxNDFcIixcclxuICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICM0MTQxNDFcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvaHI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBGbmFtZVwiPkZpcnN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Rm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmbmFtZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e21uYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTG5hbWVcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtsbmFtZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEVtYWlsXCI+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0RW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlbWFpbF9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcE1vYmlsZVwiPk1vYmlsZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bW9iaWxlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+QWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZVJlZ2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VQcm92aW5jZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2NpdGllc19hcGl9IHN0eWxlcz17Y3VzdG9tU3R5bGVzMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q291bnRyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlppcCBDb2RlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIiBvbkNoYW5nZT17emlwX2NoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQYXNzd29yZFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwQ29uZmlybVBhc3NcIj5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRDb25maXJtUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkY29uZmlybV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5WZWhpY2xlIFR5cGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZlaGljbGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcFBsYXRlXCI+UGxhdGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGxhdGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMaXNlbmNlXCI+TGlzZW5jZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TGlzZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2xpc2VuY2VfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvZmlsZSBQaWN0dXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZQcm9maWxlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57cHJvZmlsZV9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkRyaXZlciBMaWNlbnNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUxKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmMX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdkRyaXZlciB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGljazF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntkcml2ZXJfbGlzZW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TkJJIENsZWFyYW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMihlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZOYmkgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2syfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57bmJpX2NsZWFyYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5PUkNSPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUzKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmM31cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdk9jciB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGljazN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PntvY3JfY2xlYXJhbmNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blN1Ym1pdERyaXZlclwiIG9uQ2xpY2s9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJpdmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9