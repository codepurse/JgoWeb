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

  var clear = 0;

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
      address = _React$useState12[0],
      setaddress = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      password = _React$useState14[0],
      setpassword = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
      passwordconfirm = _React$useState16[0],
      setpasswordconfirm = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState17, 2),
      lisencenumber = _React$useState18[0],
      setlisencenumber = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState19, 2),
      vehicle = _React$useState20[0],
      setvehicle = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState21, 2),
      zip = _React$useState22[0],
      setzip = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState24 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState23, 2),
      provinced = _React$useState24[0],
      setprovinced = _React$useState24[1];

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState26 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState25, 2),
      city = _React$useState26[0],
      setcity = _React$useState26[1];

  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState28 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState27, 2),
      city_dropdown = _React$useState28[0],
      setcitydropdown = _React$useState28[1];

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState30 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState29, 2),
      plateenumber = _React$useState30[0],
      setplatenumber = _React$useState30[1];

  var _React$useState31 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState32 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState31, 2),
      profile = _React$useState32[0],
      setprofile = _React$useState32[1];

  var _React$useState33 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState34 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState33, 2),
      driver = _React$useState34[0],
      setDriver = _React$useState34[1];

  var _React$useState35 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState36 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState35, 2),
      nbi = _React$useState36[0],
      setNbi = _React$useState36[1];

  var _React$useState37 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState38 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState37, 2),
      orcr = _React$useState38[0],
      setOcr = _React$useState38[1];

  var _React$useState39 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState40 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState39, 2),
      profile_name = _React$useState40[0],
      setProfilename = _React$useState40[1];

  var _React$useState41 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState42 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState41, 2),
      driver_lisence = _React$useState42[0],
      setDriverlisence = _React$useState42[1];

  var _React$useState43 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState44 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState43, 2),
      nbi_clearance = _React$useState44[0],
      setNbiclearance = _React$useState44[1];

  var _React$useState45 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState46 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState45, 2),
      ocr_clearance = _React$useState46[0],
      setOcrclearance = _React$useState46[1];

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

  var _React$useState47 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState48 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState47, 2),
      regions_api = _React$useState48[0],
      setRegion = _React$useState48[1];

  var _React$useState49 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState50 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState49, 2),
      province_api = _React$useState50[0],
      setProvince = _React$useState50[1];

  var _React$useState51 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState52 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState51, 2),
      cities_api = _React$useState52[0],
      setCities = _React$useState52[1];

  var _React$useState53 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState54 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState53, 2),
      region_change = _React$useState54[0],
      setRegionChange = _React$useState54[1];

  var _React$useState55 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState56 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState55, 2),
      province_change = _React$useState56[0],
      setProvinceChange = _React$useState56[1];

  var _React$useState57 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState58 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState57, 2),
      cities_change = _React$useState58[0],
      setCitiesChange = _React$useState58[1];

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
    setprovinced(e.label);
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

  function HandleChangeCity(e) {
    setcitydropdown(e.value.label);
    setcity(e.label);
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

  function fname_change(e) {
    setfname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function mname_change(e) {
    setmname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function lname_change(e) {
    setlname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function email_change(e) {
    setemail(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function mobile_change(e) {
    setmobile(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function password_change(e) {
    setpassword(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function passwordconfirm_change(e) {
    setpasswordconfirm(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function lisence_change(e) {
    setlisencenumber(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function zip_change(e) {
    setzip(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function plate_change(e) {
    setplatenumber(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function vehicle_change(e) {
    setvehicle(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function address_change(e) {
    setaddress(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function submit(e) {
    e.preventDefault();

    if (fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (lisencenumber == "") {
      $(".pLisence").css("color", "#d32f2f");
      $(".txtLisence").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (plateenumber == "") {
      $(".pPlate").css("color", "#d32f2f");
      $(".txtPlate").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (profile == "") {
      $(".divProfile").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (driver == "") {
      $(".divDriver").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (nbi == "") {
      $(".divNbi").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (orcr == "") {
      $(".divOcr").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (clear == 0) {
      var options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json"
        }
      };
      var formdata = new FormData();
      formdata.set("fname", fname);
      formdata.set("lname", lname);
      formdata.set("mname", mname);
      formdata.append("profile_pic", profile, profile.name);
      formdata.set("email", email);
      formdata.set("mobile_no", mobile);
      formdata.set("address", address);
      formdata.set("city", provinced);
      formdata.set("state", city);
      formdata.set("country", "Philippines");
      formdata.set("zip", zip);
      formdata.set("password", password);
      formdata.set("password_confirmation", passwordconfirm);
      formdata.set("driver_license", driver, driver.name);
      formdata.set("vehicle_type", vehicle);
      formdata.set("plate_no", plateenumber);
      formdata.set("license_no", lisencenumber);
      formdata.set("nbi_clearance", nbi, nbi.name);
      formdata.set("orcr", orcr, orcr.name);
      var apiUrl = "http://localhost:8000/api/auth/register-driver";
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(apiUrl, formdata, options).then(function (result) {
        console.log("gumana");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
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
      lineNumber: 359,
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
      lineNumber: 363,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
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
      lineNumber: 376,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
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
      lineNumber: 387,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
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
      lineNumber: 392,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
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
      lineNumber: 402,
      columnNumber: 19
    }
  }, "Support")))))), __jsx("div", {
    className: "conDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
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
      lineNumber: 413,
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
      lineNumber: 414,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/phone1.png",
    className: "img-fluid imgPhone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/phone.gif",
    className: "img-fluid imgGif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
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
      lineNumber: 426,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
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
      lineNumber: 432,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/apple.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 21
    }
  }, "Download on the ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 39
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
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
      lineNumber: 441,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/playstore.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  }, "Get it on ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 23
    }
  }, "Play Store"))))), __jsx("div", {
    className: "divService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pFully",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 17
    }
  }, "FULLY FILIPINO OWNED COMPANY"), __jsx("p", {
    className: "pService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
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
      lineNumber: 459,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/deliveryguy.png",
    className: "img-fluid imgDel mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "row rowGray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "container-fluid conRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid imgRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pRate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 13
    }
  }, "LOWEST RATE AT PHP 6/KM WITH A FLAT FEE OF PHP60"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img2.png",
    className: "img-fluid img2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img3.png",
    className: "img-fluid img3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pSafety",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 13
    }
  }, "SAFETY AND ACCESSIBILITY IS OUR PRIMARY CONCERN")))), __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
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
      lineNumber: 509,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "col-lg-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pBe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 15
    }
  }, "BE A ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 22
    }
  }, "JGO DRIVER")), __jsx("button", {
    className: "btnSignup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
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
      lineNumber: 520,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-7 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "pCome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
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
      lineNumber: 527,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row rowGrayFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 text-center align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 13
    }
  }, "@ 2020 JGO Philippines. - All Rights")))), __jsx("div", {
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
      lineNumber: 539,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-driver modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body modalDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pModalTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 15
    }
  }, "Jgo - Driver registration form"), __jsx("p", {
    className: "pModalTitleSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
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
      lineNumber: 559,
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
      lineNumber: 565,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    onChange: fname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: mname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
    onChange: lname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 19
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
    onChange: email_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    onChange: mobile_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
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
      lineNumber: 608,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 19
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: address_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 19
    }
  }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: cities_api,
    styles: customStyles1,
    onChange: HandleChangeCity,
    value: city_dropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
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
      lineNumber: 636,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 19
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: zip_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtPassword",
    onChange: password_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pConfirmPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtConfirmPass",
    onChange: passwordconfirm_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pVehicle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    className: "txtDriver txtVehicle",
    onChange: vehicle_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPlate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtPlate",
    onChange: plate_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLisence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLisence",
    onChange: lisence_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
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
      lineNumber: 702,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divProfile text-center",
    onClick: onBtnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 21
    }
  }, profile_name))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
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
      lineNumber: 723,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divDriver text-center",
    onClick: onBtnClick1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
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
      lineNumber: 743,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
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
      lineNumber: 746,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divNbi text-center",
    onClick: onBtnClick2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 21
    }
  }, nbi_clearance))), __jsx("div", {
    className: "col-lg-6",
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
      lineNumber: 767,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divOcr text-center",
    onClick: onBtnClick3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
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
      lineNumber: 787,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnSubmitDriver",
    onClick: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 19
    }
  }, "Submit"))))))));
}

_s(driver, "Hw4VWg6X79v5tCexw+rm/QEjKno=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLmpzIl0sIm5hbWVzIjpbImRyaXZlciIsImNsZWFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZuYW1lIiwic2V0Zm5hbWUiLCJsbmFtZSIsInNldGxuYW1lIiwibW5hbWUiLCJzZXRtbmFtZSIsImVtYWlsIiwic2V0ZW1haWwiLCJtb2JpbGUiLCJzZXRtb2JpbGUiLCJhZGRyZXNzIiwic2V0YWRkcmVzcyIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJzZXRwYXNzd29yZGNvbmZpcm0iLCJsaXNlbmNlbnVtYmVyIiwic2V0bGlzZW5jZW51bWJlciIsInZlaGljbGUiLCJzZXR2ZWhpY2xlIiwiemlwIiwic2V0emlwIiwicHJvdmluY2VkIiwic2V0cHJvdmluY2VkIiwiY2l0eSIsInNldGNpdHkiLCJjaXR5X2Ryb3Bkb3duIiwic2V0Y2l0eWRyb3Bkb3duIiwicGxhdGVlbnVtYmVyIiwic2V0cGxhdGVudW1iZXIiLCJwcm9maWxlIiwic2V0cHJvZmlsZSIsInNldERyaXZlciIsIm5iaSIsInNldE5iaSIsIm9yY3IiLCJzZXRPY3IiLCJwcm9maWxlX25hbWUiLCJzZXRQcm9maWxlbmFtZSIsImRyaXZlcl9saXNlbmNlIiwic2V0RHJpdmVybGlzZW5jZSIsIm5iaV9jbGVhcmFuY2UiLCJzZXROYmljbGVhcmFuY2UiLCJvY3JfY2xlYXJhbmNlIiwic2V0T2NyY2xlYXJhbmNlIiwiaW5wdXRGaWxlUmVmIiwidXNlUmVmIiwiaW5wdXRGaWxlUmVmMSIsImlucHV0RmlsZVJlZjIiLCJpbnB1dEZpbGVSZWYzIiwib25CdG5DbGljayIsImN1cnJlbnQiLCJjbGljayIsIm9uQnRuQ2xpY2sxIiwib25CdG5DbGljazIiLCJvbkJ0bkNsaWNrMyIsImhhbmRsZUZpbGUiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsImhhbmRsZUZpbGUxIiwiaGFuZGxlRmlsZTIiLCJoYW5kbGVGaWxlMyIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJiYXNlIiwic3RhdGUiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjdXN0b21TdHlsZXMxIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwicmVnaW9ucyIsInJlcXVpcmUiLCJwcm92aW5jZSIsImNpdGllcyIsInZhbHVlIiwicmVnaW9uc19hcGkiLCJzZXRSZWdpb24iLCJwcm92aW5jZV9hcGkiLCJzZXRQcm92aW5jZSIsImNpdGllc19hcGkiLCJzZXRDaXRpZXMiLCJyZWdpb25fY2hhbmdlIiwic2V0UmVnaW9uQ2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwic2V0UHJvdmluY2VDaGFuZ2UiLCJjaXRpZXNfY2hhbmdlIiwic2V0Q2l0aWVzQ2hhbmdlIiwiSGFuZGxlQ2hhbmdlUmVnaW9uIiwiZGF0YSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsIm1hcCIsImQiLCJpZCIsImtleSIsImxhYmVsIiwiSGFuZGxlQ2hhbmdlUHJvdmluY2UiLCJIYW5kbGVDaGFuZ2VDaXR5IiwiZ2V0RGF0YSIsImRhdGFfcmVnaW9ucyIsInVzZUVmZmVjdCIsImZuYW1lX2NoYW5nZSIsIm1uYW1lX2NoYW5nZSIsImxuYW1lX2NoYW5nZSIsImVtYWlsX2NoYW5nZSIsIm1vYmlsZV9jaGFuZ2UiLCJwYXNzd29yZF9jaGFuZ2UiLCJwYXNzd29yZGNvbmZpcm1fY2hhbmdlIiwibGlzZW5jZV9jaGFuZ2UiLCJ6aXBfY2hhbmdlIiwicGxhdGVfY2hhbmdlIiwidmVoaWNsZV9jaGFuZ2UiLCJhZGRyZXNzX2NoYW5nZSIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiJCIsImNzcyIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwcGVuZCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiYm9kZXIiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFEZ0Isd0JBRVVDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRlY7QUFBQTtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLHlCQUdVSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhWO0FBQUE7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFBQSx5QkFJVUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKVjtBQUFBO0FBQUEsTUFJVEssS0FKUztBQUFBLE1BSUZDLFFBSkU7O0FBQUEseUJBS1VQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFY7QUFBQTtBQUFBLE1BS1RPLEtBTFM7QUFBQSxNQUtGQyxRQUxFOztBQUFBLHlCQU1ZVCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5aO0FBQUE7QUFBQSxNQU1UUyxNQU5TO0FBQUEsTUFNREMsU0FOQzs7QUFBQSwwQkFPY1gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FQZDtBQUFBO0FBQUEsTUFPVFcsT0FQUztBQUFBLE1BT0FDLFVBUEE7O0FBQUEsMEJBUWdCYiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVJoQjtBQUFBO0FBQUEsTUFRVGEsUUFSUztBQUFBLE1BUUNDLFdBUkQ7O0FBQUEsMEJBUzhCZiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVQ5QjtBQUFBO0FBQUEsTUFTVGUsZUFU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RUEsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCbEMsYUFBL0IsQ0FSRixDQVZGLENBdEJGLENBOUxGLEVBME9FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUUrQixlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRW9ELE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLENBMU9GLENBREYsQ0FKRixDQVRGLENBdkxGLENBREY7QUE2YkQ7O0dBenhCUWxJLE07O0FBMnhCTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZHJpdmVyLjdhYWQyMzBiZTk4M2VkMWRhNzAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgQ29tcG9uZW50ZGlkbW91bnQgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnRkaWRtb3VudFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gZHJpdmVyKCkge1xyXG4gIHZhciBjbGVhciA9IDA7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRmbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG5hbWUsIHNldGxuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttbmFtZSwgc2V0bW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9iaWxlLCBzZXRtb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldGFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmRjb25maXJtLCBzZXRwYXNzd29yZGNvbmZpcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc2VuY2VudW1iZXIsIHNldGxpc2VuY2VudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZlaGljbGUsIHNldHZlaGljbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ppcCwgc2V0emlwXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm92aW5jZWQsIHNldHByb3ZpbmNlZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eSwgc2V0Y2l0eV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eV9kcm9wZG93biwgc2V0Y2l0eWRyb3Bkb3duXSAgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhdGVlbnVtYmVyLCBzZXRwbGF0ZW51bWJlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZmlsZSwgc2V0cHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZHJpdmVyLCBzZXREcml2ZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25iaSwgc2V0TmJpXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcmNyLCBzZXRPY3JdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtwcm9maWxlX25hbWUsIHNldFByb2ZpbGVuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkcml2ZXJfbGlzZW5jZSwgc2V0RHJpdmVybGlzZW5jZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmJpX2NsZWFyYW5jZSwgc2V0TmJpY2xlYXJhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvY3JfY2xlYXJhbmNlLCBzZXRPY3JjbGVhcmFuY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGlucHV0RmlsZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYxID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25CdG5DbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMSA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjEuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazIgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYyLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2szID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMy5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0UHJvZmlsZW5hbWUoZmlsZS5uYW1lKTtcclxuICAgIHNldHByb2ZpbGUoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXREcml2ZXJsaXNlbmNlKGZpbGUubmFtZSk7XHJcbiAgICBzZXREcml2ZXIoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXROYmljbGVhcmFuY2UoZmlsZS5uYW1lKTtcclxuICAgIHNldE5iaShmaWxlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0T2NyKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuICBjb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbnNfYXBpLCBzZXRSZWdpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwcm92aW5jZV9hcGksIHNldFByb3ZpbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY2l0aWVzX2FwaSwgc2V0Q2l0aWVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbl9jaGFuZ2UsIHNldFJlZ2lvbkNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VfY2hhbmdlLCBzZXRQcm92aW5jZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0aWVzX2NoYW5nZSwgc2V0Q2l0aWVzQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICAgc2V0UmVnaW9uQ2hhbmdlKGUudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHNldFByb3ZpbmNlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgc2V0cHJvdmluY2VkKGUubGFiZWwpO1xyXG4gICAgc2V0UHJvdmluY2VDaGFuZ2UoZS52YWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgc2V0Q2l0aWVzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlQ2l0eShlKSB7XHJcbiAgICBzZXRjaXR5ZHJvcGRvd24oZS52YWx1ZS5sYWJlbCk7XHJcbiAgICBzZXRjaXR5KGUubGFiZWwpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhX3JlZ2lvbnMgPSByZWdpb25zLm1hcCgoZCkgPT4gKHtcclxuICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgfSkpO1xyXG4gICAgc2V0UmVnaW9uKGRhdGFfcmVnaW9ucyk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBmbmFtZV9jaGFuZ2UoZSkge1xyXG4gICAgc2V0Zm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbW5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldG1uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxuYW1lX2NoYW5nZShlKSB7XHJcbiAgICBzZXRsbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBlbWFpbF9jaGFuZ2UoZSkge1xyXG4gICAgc2V0ZW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbW9iaWxlX2NoYW5nZShlKSB7XHJcbiAgICBzZXRtb2JpbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcGFzc3dvcmRfY2hhbmdlKGUpIHtcclxuICAgIHNldHBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBhc3N3b3JkY29uZmlybV9jaGFuZ2UoZSkge1xyXG4gICAgc2V0cGFzc3dvcmRjb25maXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxpc2VuY2VfY2hhbmdlKGUpIHtcclxuICAgIHNldGxpc2VuY2VudW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gemlwX2NoYW5nZShlKSB7XHJcbiAgICBzZXR6aXAoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcGxhdGVfY2hhbmdlKGUpIHtcclxuICAgIHNldHBsYXRlbnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHZlaGljbGVfY2hhbmdlKGUpIHtcclxuICAgIHNldHZlaGljbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkcmVzc19jaGFuZ2UoZSkge1xyXG4gICAgc2V0YWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBpZiAoZm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Rm5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAobG5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TG5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAoZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAobW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRNb2JpbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmRjb25maXJtID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wQ29uZmlybVBhc3NcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dENvbmZpcm1QYXNzXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkY29uZmlybSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChsaXNlbmNlbnVtYmVyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTGlzZW5jZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TGlzZW5jZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChwbGF0ZWVudW1iZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQbGF0ZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGxhdGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvZmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIuZGl2UHJvZmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChkcml2ZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdkRyaXZlclwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChuYmkgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdk5iaVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChvcmNyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChjbGVhciA9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCBmbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgbG5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1uYW1lXCIsIG1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJwcm9maWxlX3BpY1wiLCBwcm9maWxlLCBwcm9maWxlLm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIGVtYWlsKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgbW9iaWxlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIGFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgcHJvdmluY2VkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLGNpdHkpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJ6aXBcIiwgemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCBwYXNzd29yZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHBhc3N3b3JkY29uZmlybSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZHJpdmVyX2xpY2Vuc2VcIiwgZHJpdmVyLCBkcml2ZXIubmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwidmVoaWNsZV90eXBlXCIsIHZlaGljbGUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBsYXRlX25vXCIsIHBsYXRlZW51bWJlcik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibGljZW5zZV9ub1wiLGxpc2VuY2VudW1iZXIgKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJuYmlfY2xlYXJhbmNlXCIsIG5iaSwgbmJpLm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm9yY3JcIiwgb3Jjciwgb3Jjci5uYW1lKTtcclxuICAgIFxyXG5cclxuICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVnaXN0ZXItZHJpdmVyXCI7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImd1bWFuYVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbWFpbkNvbkRyaXZlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgZml4ZWQtdG9wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCAyMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQmUgYSBKR08gRHJpdmVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2RyaXZlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2sgYSBEZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25Ecml2ZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctM1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcGhvbmUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdQaG9uZVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3Bob25lLmdpZlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdHaWZcIj48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb21pbmdcIj5DT01JTkcgU09PTjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QnV0dG9uIGZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9hcHBsZS5wbmdcIiBjbGFzc05hbWU9XCJpbWdEb3dubG9hZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgb24gdGhlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXBwIFN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJ1dHRvbiBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3BsYXlzdG9yZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nRG93bmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBpdCBvbiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZ1bGx5XCI+RlVMTFkgRklMSVBJTk8gT1dORUQgQ09NUEFOWTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBTZXJ2aWNlXCI+TUFBQVNBTkcgU0VSQklTWU8hPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy01XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZGVsaXZlcnlndXkucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdEZWwgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dHcmF5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2xcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvblJvYWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9yb2FkMS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nUm9hZFwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUmF0ZVwiPlxyXG4gICAgICAgICAgICAgIExPV0VTVCBSQVRFIEFUIFBIUCA2L0tNIFdJVEggQSBGTEFUIEZFRSBPRiBQSFA2MFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBwLTBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbWcxLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHAtMFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZzIucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZzJcIj48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBwLTBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbWczLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWczXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFNhZmV0eVwiPlxyXG4gICAgICAgICAgICAgIFNBRkVUWSBBTkQgQUNDRVNTSUJJTElUWSBJUyBPVVIgUFJJTUFSWSBDT05DRVJOXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMDBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJlXCI+XHJcbiAgICAgICAgICAgICAgICBCRSBBIDxzcGFuPkpHTyBEUklWRVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuU2lnbnVwXCI+U2lnbiB1cCBub3chPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTIwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9yb2FkMS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIj48L2ltZz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENvbWVcIj5DT01FIFJJREUgV0lUSCBVUzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyByb3dGb290ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzNzM3MzVcIiB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dHcmF5Rm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlciBhbGlnbi1zZWxmLWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9vdGVyXCI+QCAyMDIwIEpHTyBQaGlsaXBwaW5lcy4gLSBBbGwgUmlnaHRzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD1cImRyaXZlck1vZGFsXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctZHJpdmVyIG1vZGFsLWxnXCJcclxuICAgICAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBtb2RhbERyaXZlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlXCI+SmdvIC0gRHJpdmVyIHJlZ2lzdHJhdGlvbiBmb3JtPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBGaWxsLXVwIGFsbCB0aGUgcmVxdWlyZCBmaWVsZHMuIEFmdGVyIHlvdSBzdWJtaXQgd2Ugd2lsbCBzZW5kIGFcclxuICAgICAgICAgICAgICAgIGxpbmsgdG8geW91ciBlbWFpbCBmb3IgZHJpdmVyIG9ubGluZSB0ZXN0LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttbmFtZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExuYW1lXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bG5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dE1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e21vYmlsZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRyZXNzX2NoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZVJlZ2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VQcm92aW5jZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2NpdGllc19hcGl9IHN0eWxlcz17Y3VzdG9tU3R5bGVzMX0gb25DaGFuZ2U9e0hhbmRsZUNoYW5nZUNpdHl9IHZhbHVlID0ge2NpdHlfZHJvcGRvd259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ppcF9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcFBhc3N3b3JkXCI+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dvcmRfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dENvbmZpcm1QYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dvcmRjb25maXJtX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwVmVoaWNsZVwiPlZlaGljbGUgVHlwZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRWZWhpY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmVoaWNsZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcFBsYXRlXCI+UGxhdGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGxhdGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMaXNlbmNlXCI+TGlzZW5jZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TGlzZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2xpc2VuY2VfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvZmlsZSBQaWN0dXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZQcm9maWxlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57cHJvZmlsZV9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkRyaXZlciBMaWNlbnNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUxKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmMX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdkRyaXZlciB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGljazF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntkcml2ZXJfbGlzZW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TkJJIENsZWFyYW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMihlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZOYmkgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2syfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57bmJpX2NsZWFyYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5PUkNSPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUzKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmM31cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdk9jciB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGljazN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PntvY3JfY2xlYXJhbmNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blN1Ym1pdERyaXZlclwiIG9uQ2xpY2s9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJpdmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9