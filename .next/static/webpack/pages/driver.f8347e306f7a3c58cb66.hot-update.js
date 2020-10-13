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

    if (file) {
      $(".divProfile").css("borderColor", "#2c2c2c");
    }
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
    $(".pFname").css("color", "white");
    $(".txtFname").css("borderColor", "#2c2c2c");

    if (e.target.value) {
      clear = 0;
    } else {}
  }

  function mname_change(e) {
    setmname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function lname_change(e) {
    $(".pLname").css("color", "white");
    $(".txtLname").css("borderColor", "#2c2c2c");
    setlname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function email_change(e) {
    $(".pEmail").css("color", "white");
    $(".txtEmail").css("borderColor", "#2c2c2c");
    setemail(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function mobile_change(e) {
    $(".pMobile").css("color", "white");
    $(".txtMobile").css("borderColor", "#2c2c2c");
    setmobile(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function password_change(e) {
    $(".pPassword").css("color", "white");
    $(".txtPassword").css("borderColor", "#2c2c2c");
    setpassword(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function passwordconfirm_change(e) {
    $(".pConfirmPass").css("color", "white");
    $(".txtConfirmPass").css("borderColor", "#2c2c2c");
    setpasswordconfirm(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function lisence_change(e) {
    $(".pLisence").css("color", "white");
    $(".txtLisence").css("borderColor", "#2c2c2c");
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
    $(".pPlate").css("color", "white");
    $(".txtPlate").css("borderColor", "#2c2c2c");
    setplatenumber(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function vehicle_change(e) {
    $(".pVehicle").css("color", "white");
    $(".txtVehicle").css("borderColor", "#2c2c2c");
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

    if (vehicle == "") {
      $(".pVehicle").css("color", "#d32f2f");
      $(".txtVehicle").css("borderColor", "#d32f2f");
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
      lineNumber: 382,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
      lineNumber: 384,
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
      lineNumber: 388,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
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
      lineNumber: 401,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
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
      lineNumber: 412,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
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
      lineNumber: 417,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
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
      lineNumber: 427,
      columnNumber: 19
    }
  }, "Support")))))), __jsx("div", {
    className: "conDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
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
      lineNumber: 438,
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
      lineNumber: 439,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/phone1.png",
    className: "img-fluid imgPhone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/phone.gif",
    className: "img-fluid imgGif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
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
      lineNumber: 451,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
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
      lineNumber: 457,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/apple.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 21
    }
  }, "Download on the ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 39
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
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
      lineNumber: 466,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/playstore.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 21
    }
  }, "Get it on ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 23
    }
  }, "Play Store"))))), __jsx("div", {
    className: "divService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pFully",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 17
    }
  }, "FULLY FILIPINO OWNED COMPANY"), __jsx("p", {
    className: "pService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
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
      lineNumber: 484,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/deliveryguy.png",
    className: "img-fluid imgDel mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "row rowGray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "container-fluid conRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 7
    }
  }, __jsx("div", {
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
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid imgRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pRate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 13
    }
  }, "LOWEST RATE AT PHP 6/KM WITH A FLAT FEE OF PHP60"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img2.png",
    className: "img-fluid img2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img3.png",
    className: "img-fluid img3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pSafety",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 13
    }
  }, "SAFETY AND ACCESSIBILITY IS OUR PRIMARY CONCERN")))), __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
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
      lineNumber: 534,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "col-lg-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pBe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }, "BE A ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 22
    }
  }, "JGO DRIVER")), __jsx("button", {
    className: "btnSignup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
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
      lineNumber: 545,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-7 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "pCome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
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
      lineNumber: 552,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row rowGrayFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 text-center align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
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
      lineNumber: 563,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-driver modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body modalDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pModalTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 15
    }
  }, "Jgo - Driver registration form"), __jsx("p", {
    className: "pModalTitleSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
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
      lineNumber: 583,
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
      lineNumber: 589,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    onChange: fname_change,
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
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: mname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
    onChange: lname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
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
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 19
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
    onChange: email_change,
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
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    onChange: mobile_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
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
      lineNumber: 632,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 19
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: address_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
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
      lineNumber: 659,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
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
      lineNumber: 668,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 19
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: zip_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtPassword",
    onChange: password_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pConfirmPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtConfirmPass",
    onChange: passwordconfirm_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pVehicle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    className: "txtDriver txtVehicle",
    onChange: vehicle_change,
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
    className: "pTxtDriver pPlate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtPlate",
    onChange: plate_change,
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
    className: "pTxtDriver pLisence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLisence",
    onChange: lisence_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
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
      lineNumber: 734,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divProfile text-center",
    onClick: onBtnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 21
    }
  }, profile_name))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
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
      lineNumber: 755,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divDriver text-center",
    onClick: onBtnClick1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
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
      lineNumber: 775,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
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
      lineNumber: 778,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divNbi text-center",
    onClick: onBtnClick2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 21
    }
  }, nbi_clearance))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
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
      lineNumber: 799,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divOcr text-center",
    onClick: onBtnClick3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
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
      lineNumber: 819,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnSubmitDriver",
    onClick: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLmpzIl0sIm5hbWVzIjpbImRyaXZlciIsImNsZWFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZuYW1lIiwic2V0Zm5hbWUiLCJsbmFtZSIsInNldGxuYW1lIiwibW5hbWUiLCJzZXRtbmFtZSIsImVtYWlsIiwic2V0ZW1haWwiLCJtb2JpbGUiLCJzZXRtb2JpbGUiLCJhZGRyZXNzIiwic2V0YWRkcmVzcyIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJzZXRwYXNzd29yZGNvbmZpcm0iLCJsaXNlbmNlbnVtYmVyIiwic2V0bGlzZW5jZW51bWJlciIsInZlaGljbGUiLCJzZXR2ZWhpY2xlIiwiemlwIiwic2V0emlwIiwicHJvdmluY2VkIiwic2V0cHJvdmluY2VkIiwiY2l0eSIsInNldGNpdHkiLCJjaXR5X2Ryb3Bkb3duIiwic2V0Y2l0eWRyb3Bkb3duIiwicGxhdGVlbnVtYmVyIiwic2V0cGxhdGVudW1iZXIiLCJwcm9maWxlIiwic2V0cHJvZmlsZSIsInNldERyaXZlciIsIm5iaSIsInNldE5iaSIsIm9yY3IiLCJzZXRPY3IiLCJwcm9maWxlX25hbWUiLCJzZXRQcm9maWxlbmFtZSIsImRyaXZlcl9saXNlbmNlIiwic2V0RHJpdmVybGlzZW5jZSIsIm5iaV9jbGVhcmFuY2UiLCJzZXROYmljbGVhcmFuY2UiLCJvY3JfY2xlYXJhbmNlIiwic2V0T2NyY2xlYXJhbmNlIiwiaW5wdXRGaWxlUmVmIiwidXNlUmVmIiwiaW5wdXRGaWxlUmVmMSIsImlucHV0RmlsZVJlZjIiLCJpbnB1dEZpbGVSZWYzIiwib25CdG5DbGljayIsImN1cnJlbnQiLCJjbGljayIsIm9uQnRuQ2xpY2sxIiwib25CdG5DbGljazIiLCJvbkJ0bkNsaWNrMyIsImhhbmRsZUZpbGUiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsIiQiLCJjc3MiLCJoYW5kbGVGaWxlMSIsImhhbmRsZUZpbGUyIiwiaGFuZGxlRmlsZTMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3VzdG9tU3R5bGVzMSIsImJhY2tncm91bmQiLCJjb2xvciIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJ2YWx1ZSIsInJlZ2lvbnNfYXBpIiwic2V0UmVnaW9uIiwicHJvdmluY2VfYXBpIiwic2V0UHJvdmluY2UiLCJjaXRpZXNfYXBpIiwic2V0Q2l0aWVzIiwicmVnaW9uX2NoYW5nZSIsInNldFJlZ2lvbkNoYW5nZSIsInByb3ZpbmNlX2NoYW5nZSIsInNldFByb3ZpbmNlQ2hhbmdlIiwiY2l0aWVzX2NoYW5nZSIsInNldENpdGllc0NoYW5nZSIsIkhhbmRsZUNoYW5nZVJlZ2lvbiIsImRhdGEiLCJmaWx0ZXIiLCJwZXJzb24iLCJyZWdpb24iLCJtYXAiLCJkIiwiaWQiLCJrZXkiLCJsYWJlbCIsIkhhbmRsZUNoYW5nZVByb3ZpbmNlIiwiSGFuZGxlQ2hhbmdlQ2l0eSIsImdldERhdGEiLCJkYXRhX3JlZ2lvbnMiLCJ1c2VFZmZlY3QiLCJmbmFtZV9jaGFuZ2UiLCJtbmFtZV9jaGFuZ2UiLCJsbmFtZV9jaGFuZ2UiLCJlbWFpbF9jaGFuZ2UiLCJtb2JpbGVfY2hhbmdlIiwicGFzc3dvcmRfY2hhbmdlIiwicGFzc3dvcmRjb25maXJtX2NoYW5nZSIsImxpc2VuY2VfY2hhbmdlIiwiemlwX2NoYW5nZSIsInBsYXRlX2NoYW5nZSIsInZlaGljbGVfY2hhbmdlIiwiYWRkcmVzc19jaGFuZ2UiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwcGVuZCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiYm9kZXIiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFEZ0Isd0JBRVVDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRlY7QUFBQTtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLHlCQUdVSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhWO0FBQUE7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFBQSx5QkFJVUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKVjtBQUFBO0FBQUEsTUFJVEssS0FKUztBQUFBLE1BSUZDLFFBSkU7O0FBQUEseUJBS1VQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFY7QUFBQTtBQUFBLE1BS1RPLEtBTFM7QUFBQSxNQUtGQyxRQUxFOztBQUFBLHlCQU1ZVCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5aO0FBQUE7QUFBQSxNQU1UUyxNQU5TO0FBQUEsTUFNREMsU0FOQzs7QUFBQSwwQkFPY1gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FQZDtBQUFBO0FBQUEsTUFPVFcsT0FQUztBQUFBLE1BT0FDLFVBUEE7O0FBQUEsMEJBUWdCYiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVJoQjtBQUFBO0FBQUEsTUFRVGEsUUFSUztBQUFBLE1BUUNDLFdBUkQ7O0FBQUEsMEJBUzhCZiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVQ5QjtBQUFBO0FBQUEsTUFTVGUsZUFU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LE07O0FBMnpCTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZHJpdmVyLmY4MzQ3ZTMwNmY3YTNjNThjYjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgQ29tcG9uZW50ZGlkbW91bnQgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnRkaWRtb3VudFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gZHJpdmVyKCkge1xyXG4gIHZhciBjbGVhciA9IDA7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRmbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG5hbWUsIHNldGxuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttbmFtZSwgc2V0bW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9iaWxlLCBzZXRtb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldGFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmRjb25maXJtLCBzZXRwYXNzd29yZGNvbmZpcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc2VuY2VudW1iZXIsIHNldGxpc2VuY2VudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZlaGljbGUsIHNldHZlaGljbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ppcCwgc2V0emlwXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm92aW5jZWQsIHNldHByb3ZpbmNlZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eSwgc2V0Y2l0eV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eV9kcm9wZG93biwgc2V0Y2l0eWRyb3Bkb3duXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGF0ZWVudW1iZXIsIHNldHBsYXRlbnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRwcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkcml2ZXIsIHNldERyaXZlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmJpLCBzZXROYmldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29yY3IsIHNldE9jcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3Byb2ZpbGVfbmFtZSwgc2V0UHJvZmlsZW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RyaXZlcl9saXNlbmNlLCBzZXREcml2ZXJsaXNlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYmlfY2xlYXJhbmNlLCBzZXROYmljbGVhcmFuY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29jcl9jbGVhcmFuY2UsIHNldE9jcmNsZWFyYW5jZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjEgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkJ0bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2sxID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMiA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjIuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazMgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYzLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWxlKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcm9maWxlbmFtZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0cHJvZmlsZShmaWxlKTtcclxuXHJcbiAgICBpZihmaWxlKSB7XHJcbiAgICAgICQoXCIuZGl2UHJvZmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXREcml2ZXJsaXNlbmNlKGZpbGUubmFtZSk7XHJcbiAgICBzZXREcml2ZXIoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXROYmljbGVhcmFuY2UoZmlsZS5uYW1lKTtcclxuICAgIHNldE5iaShmaWxlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0T2NyKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuICBjb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbnNfYXBpLCBzZXRSZWdpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwcm92aW5jZV9hcGksIHNldFByb3ZpbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY2l0aWVzX2FwaSwgc2V0Q2l0aWVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbl9jaGFuZ2UsIHNldFJlZ2lvbkNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VfY2hhbmdlLCBzZXRQcm92aW5jZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0aWVzX2NoYW5nZSwgc2V0Q2l0aWVzQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICAgc2V0UmVnaW9uQ2hhbmdlKGUudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHNldFByb3ZpbmNlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgc2V0cHJvdmluY2VkKGUubGFiZWwpO1xyXG4gICAgc2V0UHJvdmluY2VDaGFuZ2UoZS52YWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgc2V0Q2l0aWVzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlQ2l0eShlKSB7XHJcbiAgICBzZXRjaXR5ZHJvcGRvd24oZS52YWx1ZS5sYWJlbCk7XHJcbiAgICBzZXRjaXR5KGUubGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICBzZXRSZWdpb24oZGF0YV9yZWdpb25zKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBmbmFtZV9jaGFuZ2UoZSkge1xyXG4gICAgc2V0Zm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgJChcIi5wRm5hbWVcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0Rm5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1uYW1lX2NoYW5nZShlKSB7XHJcbiAgICBzZXRtbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsbmFtZV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wTG5hbWVcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0TG5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0bG5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gZW1haWxfY2hhbmdlKGUpIHtcclxuICAgICQoXCIucEVtYWlsXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dEVtYWlsXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIHNldGVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1vYmlsZV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wTW9iaWxlXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dE1vYmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRtb2JpbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcGFzc3dvcmRfY2hhbmdlKGUpIHtcclxuICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dFBhc3N3b3JkXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIHNldHBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBhc3N3b3JkY29uZmlybV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wQ29uZmlybVBhc3NcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0cGFzc3dvcmRjb25maXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxpc2VuY2VfY2hhbmdlKGUpIHtcclxuICAgICQoXCIucExpc2VuY2VcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0TGlzZW5jZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRsaXNlbmNlbnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHppcF9jaGFuZ2UoZSkge1xyXG4gICAgc2V0emlwKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBsYXRlX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBQbGF0ZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRQbGF0ZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRwbGF0ZW51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB2ZWhpY2xlX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBWZWhpY2xlXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dFZlaGljbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0dmVoaWNsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRyZXNzX2NoYW5nZShlKSB7XHJcbiAgICBzZXRhZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChmbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEZuYW1lXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRGbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChsbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucExuYW1lXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRMbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChlbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRFbWFpbFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChtb2JpbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dE1vYmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZGNvbmZpcm0gPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBDb25maXJtUGFzc1wiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmRjb25maXJtID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wQ29uZmlybVBhc3NcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dENvbmZpcm1QYXNzXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpc2VuY2VudW1iZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMaXNlbmNlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRMaXNlbmNlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHBsYXRlZW51bWJlciA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBsYXRlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQbGF0ZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChwcm9maWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZQcm9maWxlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGRyaXZlciA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIuZGl2RHJpdmVyXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKG5iaSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIuZGl2TmJpXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKG9yY3IgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdk9jclwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVoaWNsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFZlaGljbGVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dFZlaGljbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsZWFyID09IDApIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCBmbmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIGxuYW1lKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgbW5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJwcm9maWxlX3BpY1wiLCBwcm9maWxlLCBwcm9maWxlLm5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCBlbWFpbCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCBtb2JpbGUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIGFkZHJlc3MpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIHByb3ZpbmNlZCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInN0YXRlXCIsIGNpdHkpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB6aXApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCBwYXNzd29yZCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCBwYXNzd29yZGNvbmZpcm0pO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcml2ZXJfbGljZW5zZVwiLCBkcml2ZXIsIGRyaXZlci5uYW1lKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwidmVoaWNsZV90eXBlXCIsIHZlaGljbGUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJwbGF0ZV9ub1wiLCBwbGF0ZWVudW1iZXIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJsaWNlbnNlX25vXCIsIGxpc2VuY2VudW1iZXIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJuYmlfY2xlYXJhbmNlXCIsIG5iaSwgbmJpLm5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJvcmNyXCIsIG9yY3IsIG9yY3IubmFtZSk7XHJcblxyXG4gICAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9yZWdpc3Rlci1kcml2ZXJcIjtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ3VtYW5hXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtYWluQ29uRHJpdmVyXCJcclxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBmaXhlZC10b3BcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4IDIwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdsb2dvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDIgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCZSBhIEpHTyBEcml2ZXJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZHJpdmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQm9vayBhIERlbGl2ZXJ5XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1kcml2ZXJcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbkRyaXZlclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy0zXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9waG9uZTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ1Bob25lXCJcclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvcGhvbmUuZ2lmXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0dpZlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy00XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENvbWluZ1wiPkNPTUlORyBTT09OPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCIgc3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCdXR0b24gZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2FwcGxlLnBuZ1wiIGNsYXNzTmFtZT1cImltZ0Rvd25sb2FkXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBvbiB0aGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BcHAgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QnV0dG9uIGZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcGxheXN0b3JlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdEb3dubG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2V0IGl0IG9uIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxheSBTdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZTZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRnVsbHlcIj5GVUxMWSBGSUxJUElOTyBPV05FRCBDT01QQU5ZPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFNlcnZpY2VcIj5NQUFBU0FORyBTRVJCSVNZTyE8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTVcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9kZWxpdmVyeWd1eS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0RlbCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvd0dyYXlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uUm9hZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3JvYWQxLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdSb2FkXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBSYXRlXCI+XHJcbiAgICAgICAgICAgICAgTE9XRVNUIFJBVEUgQVQgUEhQIDYvS00gV0lUSCBBIEZMQVQgRkVFIE9GIFBIUDYwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHAtMFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZzEucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgcC0wXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvaW1nMi5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nMlwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHAtMFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZzMucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZzNcIj48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwU2FmZXR5XCI+XHJcbiAgICAgICAgICAgICAgU0FGRVRZIEFORCBBQ0NFU1NJQklMSVRZIElTIE9VUiBQUklNQVJZIENPTkNFUk5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQmVcIj5cclxuICAgICAgICAgICAgICAgIEJFIEEgPHNwYW4+SkdPIERSSVZFUjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TaWdudXBcIj5TaWduIHVwIG5vdyE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCItMjBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3JvYWQxLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ29tZVwiPkNPTUUgUklERSBXSVRIIFVTPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IHJvd0Zvb3RlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM3MzczNVwiIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvd0dyYXlGb290ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHRleHQtY2VudGVyIGFsaWduLXNlbGYtZW5kXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBGb290ZXJcIj5AIDIwMjAgSkdPIFBoaWxpcHBpbmVzLiAtIEFsbCBSaWdodHM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJkcml2ZXJNb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWRyaXZlciBtb2RhbC1sZ1wiXHJcbiAgICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbW9kYWxEcml2ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVwiPkpnbyAtIERyaXZlciByZWdpc3RyYXRpb24gZm9ybTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVN1YlwiPlxyXG4gICAgICAgICAgICAgICAgRmlsbC11cCBhbGwgdGhlIHJlcXVpcmQgZmllbGRzLiBBZnRlciB5b3Ugc3VibWl0IHdlIHdpbGwgc2VuZCBhXHJcbiAgICAgICAgICAgICAgICBsaW5rIHRvIHlvdXIgZW1haWwgZm9yIGRyaXZlciBvbmxpbmUgdGVzdC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQxNDE0MVwiLFxyXG4gICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgIzQxNDE0MVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9ocj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEZuYW1lXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRGbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ZuYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bW5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMbmFtZVwiPkxhc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRMbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2xuYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRW1haWxcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTW9iaWxlXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttb2JpbGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17YWRkcmVzc19jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlUmVnaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvdmluY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm92aW5jZV9hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZVByb3ZpbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlQ2l0eX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eV9kcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q291bnRyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlppcCBDb2RlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17emlwX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGFzc3dvcmRcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZF9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcENvbmZpcm1QYXNzXCI+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Q29uZmlybVBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZGNvbmZpcm1fY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBWZWhpY2xlXCI+VmVoaWNsZSBUeXBlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFZlaGljbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ZWhpY2xlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGxhdGVcIj5QbGF0ZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0UGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwbGF0ZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExpc2VuY2VcIj5MaXNlbmNlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRMaXNlbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bGlzZW5jZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm9maWxlIFBpY3R1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZShlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdlByb2ZpbGUgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntwcm9maWxlX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+RHJpdmVyIExpY2Vuc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTEoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYxfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2RHJpdmVyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e2RyaXZlcl9saXNlbmNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5OQkkgQ2xlYXJhbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUyKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmMn1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdk5iaSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGljazJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PntuYmlfY2xlYXJhbmNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk9SQ1I8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2T2NyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrM31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e29jcl9jbGVhcmFuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuU3VibWl0RHJpdmVyXCIgb25DbGljaz17c3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcml2ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=