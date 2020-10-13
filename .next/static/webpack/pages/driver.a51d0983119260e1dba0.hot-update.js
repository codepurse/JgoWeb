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
      provinced = _React$useState22[0],
      setprovinced = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState24 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState23, 2),
      city = _React$useState24[0],
      setcity = _React$useState24[1];

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState26 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState25, 2),
      plateenumber = _React$useState26[0],
      setplatenumber = _React$useState26[1];

  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState28 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState27, 2),
      profile = _React$useState28[0],
      setprofile = _React$useState28[1];

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState30 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState29, 2),
      driver = _React$useState30[0],
      setDriver = _React$useState30[1];

  var _React$useState31 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState32 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState31, 2),
      nbi = _React$useState32[0],
      setNbi = _React$useState32[1];

  var _React$useState33 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState34 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState33, 2),
      ocr = _React$useState34[0],
      setOcr = _React$useState34[1];

  var _React$useState35 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState36 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState35, 2),
      profile_name = _React$useState36[0],
      setProfilename = _React$useState36[1];

  var _React$useState37 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState38 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState37, 2),
      driver_lisence = _React$useState38[0],
      setDriverlisence = _React$useState38[1];

  var _React$useState39 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState40 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState39, 2),
      nbi_clearance = _React$useState40[0],
      setNbiclearance = _React$useState40[1];

  var _React$useState41 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState42 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState41, 2),
      ocr_clearance = _React$useState42[0],
      setOcrclearance = _React$useState42[1];

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

  var _React$useState43 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState44 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState43, 2),
      regions_api = _React$useState44[0],
      setRegion = _React$useState44[1];

  var _React$useState45 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState46 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState45, 2),
      province_api = _React$useState46[0],
      setProvince = _React$useState46[1];

  var _React$useState47 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: null,
    name: null
  }),
      _React$useState48 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState47, 2),
      cities_api = _React$useState48[0],
      setCities = _React$useState48[1];

  var _React$useState49 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState50 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState49, 2),
      region_change = _React$useState50[0],
      setRegionChange = _React$useState50[1];

  var _React$useState51 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState52 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState51, 2),
      province_change = _React$useState52[0],
      setProvinceChange = _React$useState52[1];

  var _React$useState53 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState54 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState53, 2),
      cities_change = _React$useState54[0],
      setCitiesChange = _React$useState54[1];

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

  function trylang() {
    province.forEach(function (val, index) {
      return val.data.splice(3);
    });
    console.log("gumana");
  }

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

  function submit(e) {
    var _this = this;

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

    if (ocr == "") {
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

      try {
        formdata.set("fname", fname);
        formdata.set("lname", lname);
        formdata.set("mname", mname);
        formdata.append("profile_pic", profile, profile.name);
        formdata.set("email", email);
        formdata.set("mobile_no", mobile);
        formdata.set("address", address);
        formdata.set("city", city);
        formdata.set("state", provinced);
        formdata.set("country", "Philippines");
        formdata.set("zip", zip);
        formdata.set("password", password);
        formdata.set("password_confirmation", password);
      } catch (e) {
        console.log(e);
      }

      var config = {
        onUploadProgress: function onUploadProgress(progressEvent) {
          console.log(Math.floor(progressEvent.loaded * 100 / progressEvent.total));
        }
      };
      var apiUrl = "http://localhost:8000/api/auth/register";
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(apiUrl, formdata, options, config).then(function (result) {
        $("#exampleModal").modal("hide");

        if (result.status == "201") {
          $(".btn").removeClass('btn--loading');
          successMessage();
        }
      })["catch"](function (err) {
        $(".btn").removeClass('btn--loading');

        try {
          $("#exampleModal").css("z-index", "1");
          $(".modal-backdrop").hide();

          _this.setState({
            errorEmail: err.response.data.errors.email[0]
          });

          if (err.response.data.errors.email[0]) {}
        } catch (e) {}
      });
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
      lineNumber: 367,
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
      lineNumber: 371,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
      lineNumber: 384,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
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
      lineNumber: 395,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
      lineNumber: 400,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
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
      lineNumber: 410,
      columnNumber: 19
    }
  }, "Support")))))), __jsx("div", {
    className: "conDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
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
      lineNumber: 421,
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
      lineNumber: 422,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/phone1.png",
    className: "img-fluid imgPhone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/phone.gif",
    className: "img-fluid imgGif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
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
      lineNumber: 434,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
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
      lineNumber: 440,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/apple.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 21
    }
  }, "Download on the ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 39
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
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
      lineNumber: 449,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/playstore.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 21
    }
  }, "Get it on ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 23
    }
  }, "Play Store"))))), __jsx("div", {
    className: "divService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pFully",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 17
    }
  }, "FULLY FILIPINO OWNED COMPANY"), __jsx("p", {
    className: "pService",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
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
      lineNumber: 467,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/deliveryguy.png",
    className: "img-fluid imgDel mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "row rowGray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "container-fluid conRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid imgRoad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pRate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 13
    }
  }, "LOWEST RATE AT PHP 6/KM WITH A FLAT FEE OF PHP60"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img2.png",
    className: "img-fluid img2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/img3.png",
    className: "img-fluid img3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pSafety",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 13
    }
  }, "SAFETY AND ACCESSIBILITY IS OUR PRIMARY CONCERN")))), __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
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
      lineNumber: 517,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "col-lg-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pBe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 15
    }
  }, "BE A ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 22
    }
  }, "JGO DRIVER")), __jsx("button", {
    className: "btnSignup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
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
      lineNumber: 528,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-7 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/road1.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "pCome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
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
      lineNumber: 535,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row rowGrayFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 text-center align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
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
      lineNumber: 546,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 15
    }
  }, "JGO DRIVER - Registration Form")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pAccount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 15
    }
  }, "ACCOUNT INFORMATION"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
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
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
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
  }, "Address 1"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "txtInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 19
    }
  }, __jsx("i", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 21
    }
  }, "House/Unit Number, Building Name, Street Name"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 19
    }
  }, "Address 2"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "txtInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 19
    }
  }, __jsx("i", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 21
    }
  }, "Subdivision/Village"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 19
    }
  }, "Barangay"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
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
      lineNumber: 598,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 19
    }
  }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: cities_api,
    styles: customStyles,
    onChange: HandleChangeCity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
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
      lineNumber: 624,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 19
    }
  }, "Postal"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
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
      lineNumber: 631,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 19
    }
  }, "Email Address"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 19
    }
  }, "Confirm Email Address"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
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
      lineNumber: 669,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAccount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
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
      lineNumber: 674,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
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
      lineNumber: 677,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 19
    }
  }, "Vehicle Brand"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 19
    }
  }, "Vehicle Model"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
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
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
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
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 19
    }
  }, "Engine Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 19
    }
  }, "Chasis Number"), __jsx("input", {
    type: "text",
    className: "txt txtModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
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
      lineNumber: 709,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
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
      lineNumber: 711,
      columnNumber: 19
    }
  }, "REQUIREMENTS NEEDED")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
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
      lineNumber: 717,
      columnNumber: 19
    }
  }, __jsx("label", {
    "for": "file-upload",
    className: "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 21
    }
  }, __jsx("i", {
    "class": "fa fa-cloud-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 23
    }
  }), " Choose File"), __jsx("input", {
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "pImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 19
    }
  }, "Note: Only .jpg, .jpeg and .png files are allowed")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
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
      lineNumber: 741,
      columnNumber: 19
    }
  }, __jsx("label", {
    "for": "file-upload",
    className: "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 21
    }
  }, __jsx("i", {
    "class": "fa fa-cloud-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 23
    }
  }), " Choose File"), __jsx("input", {
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "pImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 19
    }
  }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
    className: "modal-footer text-center mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btnSubmitModal",
    onClick: trylang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
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
      lineNumber: 777,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-driver modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body modalDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pModalTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 15
    }
  }, "Jgo - Driver registration form"), __jsx("p", {
    className: "pModalTitleSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
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
      lineNumber: 797,
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
      lineNumber: 803,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    onChange: fname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: mname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
    onChange: lname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 19
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
    onChange: email_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    onChange: mobile_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
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
      lineNumber: 846,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 19
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 19
    }
  }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: cities_api,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
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
      lineNumber: 873,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 19
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: zip_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtPassword",
    onChange: password_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pConfirmPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "txtDriver txtConfirmPass",
    onChange: passwordconfirm_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 901,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    onChange: vehicle_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPlate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtPlate",
    onChange: plate_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLisence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLisence",
    onChange: lisence_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
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
      lineNumber: 939,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divProfile text-center",
    onClick: onBtnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 21
    }
  }, profile_name))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
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
      lineNumber: 960,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divDriver text-center",
    onClick: onBtnClick1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
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
      lineNumber: 980,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
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
      lineNumber: 983,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divNbi text-center",
    onClick: onBtnClick2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 21
    }
  }, nbi_clearance))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
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
      lineNumber: 1004,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divOcr text-center",
    onClick: onBtnClick3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
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
      lineNumber: 1024,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnSubmitDriver",
    onClick: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 19
    }
  }, "Submit"))))))));
}

_s(driver, "w8hplTWiXm7pPVEGimk4ecwSbpA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLmpzIl0sIm5hbWVzIjpbImRyaXZlciIsImNsZWFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZuYW1lIiwic2V0Zm5hbWUiLCJsbmFtZSIsInNldGxuYW1lIiwibW5hbWUiLCJzZXRtbmFtZSIsImVtYWlsIiwic2V0ZW1haWwiLCJtb2JpbGUiLCJzZXRtb2JpbGUiLCJwYXNzd29yZCIsInNldHBhc3N3b3JkIiwicGFzc3dvcmRjb25maXJtIiwic2V0cGFzc3dvcmRjb25maXJtIiwibGlzZW5jZW51bWJlciIsInNldGxpc2VuY2VudW1iZXIiLCJ2ZWhpY2xlIiwic2V0dmVoaWNsZSIsInppcCIsInNldHppcCIsInByb3ZpbmNlZCIsInNldHByb3ZpbmNlZCIsImNpdHkiLCJzZXRjaXR5IiwicGxhdGVlbnVtYmVyIiwic2V0cGxhdGVudW1iZXIiLCJwcm9maWxlIiwic2V0cHJvZmlsZSIsInNldERyaXZlciIsIm5iaSIsInNldE5iaSIsIm9jciIsInNldE9jciIsInByb2ZpbGVfbmFtZSIsInNldFByb2ZpbGVuYW1lIiwiZHJpdmVyX2xpc2VuY2UiLCJzZXREcml2ZXJsaXNlbmNlIiwibmJpX2NsZWFyYW5jZSIsInNldE5iaWNsZWFyYW5jZSIsIm9jcl9jbGVhcmFuY2UiLCJzZXRPY3JjbGVhcmFuY2UiLCJpbnB1dEZpbGVSZWYiLCJ1c2VSZWYiLCJpbnB1dEZpbGVSZWYxIiwiaW5wdXRGaWxlUmVmMiIsImlucHV0RmlsZVJlZjMiLCJvbkJ0bkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwib25CdG5DbGljazEiLCJvbkJ0bkNsaWNrMiIsIm9uQnRuQ2xpY2szIiwiaGFuZGxlRmlsZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiaGFuZGxlRmlsZTEiLCJoYW5kbGVGaWxlMiIsImhhbmRsZUZpbGUzIiwiY3VzdG9tU3R5bGVzIiwiY29udHJvbCIsImJhc2UiLCJzdGF0ZSIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImN1c3RvbVN0eWxlczEiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJpc0ZvY3VzZWQiLCJib3JkZXJDb2xvciIsInNpbmdsZVZhbHVlIiwicHJvdmlkZWQiLCJyZWdpb25zIiwicmVxdWlyZSIsInByb3ZpbmNlIiwiY2l0aWVzIiwidmFsdWUiLCJyZWdpb25zX2FwaSIsInNldFJlZ2lvbiIsInByb3ZpbmNlX2FwaSIsInNldFByb3ZpbmNlIiwiY2l0aWVzX2FwaSIsInNldENpdGllcyIsInJlZ2lvbl9jaGFuZ2UiLCJzZXRSZWdpb25DaGFuZ2UiLCJwcm92aW5jZV9jaGFuZ2UiLCJzZXRQcm92aW5jZUNoYW5nZSIsImNpdGllc19jaGFuZ2UiLCJzZXRDaXRpZXNDaGFuZ2UiLCJIYW5kbGVDaGFuZ2VSZWdpb24iLCJkYXRhIiwiZmlsdGVyIiwicGVyc29uIiwicmVnaW9uIiwibWFwIiwiZCIsImlkIiwia2V5IiwibGFiZWwiLCJIYW5kbGVDaGFuZ2VQcm92aW5jZSIsIkhhbmRsZUNoYW5nZUNpdHkiLCJnZXREYXRhIiwiZGF0YV9yZWdpb25zIiwidXNlRWZmZWN0IiwidHJ5bGFuZyIsImZvckVhY2giLCJ2YWwiLCJpbmRleCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJmbmFtZV9jaGFuZ2UiLCJtbmFtZV9jaGFuZ2UiLCJsbmFtZV9jaGFuZ2UiLCJlbWFpbF9jaGFuZ2UiLCJtb2JpbGVfY2hhbmdlIiwicGFzc3dvcmRfY2hhbmdlIiwicGFzc3dvcmRjb25maXJtX2NoYW5nZSIsImxpc2VuY2VfY2hhbmdlIiwiemlwX2NoYW5nZSIsInBsYXRlX2NoYW5nZSIsInZlaGljbGVfY2hhbmdlIiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCIkIiwiY3NzIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiYXBwZW5kIiwiYWRkcmVzcyIsImNvbmZpZyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwiTWF0aCIsImZsb29yIiwibG9hZGVkIiwidG90YWwiLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwibW9kYWwiLCJzdGF0dXMiLCJyZW1vdmVDbGFzcyIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyIiwiaGlkZSIsInNldFN0YXRlIiwiZXJyb3JFbWFpbCIsInJlc3BvbnNlIiwiZXJyb3JzIiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwibWFyZ2luQm90dG9tIiwiYm9kZXIiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFEZ0Isd0JBRVVDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRlY7QUFBQTtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLHlCQUdVSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhWO0FBQUE7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFBQSx5QkFJVUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKVjtBQUFBO0FBQUEsTUFJVEssS0FKUztBQUFBLE1BSUZDLFFBSkU7O0FBQUEseUJBS1VQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFY7QUFBQTtBQUFBLE1BS1RPLEtBTFM7QUFBQSxNQUtGQyxRQUxFOztBQUFBLHlCQU1ZVCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5aO0FBQUE7QUFBQSxNQU1UUyxNQU5TO0FBQUEsTUFNREMsU0FOQzs7QUFBQSwwQkFPZ0JYLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBUGhCO0FBQUE7QUFBQSxNQU9UVyxRQVBTO0FBQUEsTUFPQ0MsV0FQRDs7QUFBQSwwQkFROEJiLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBUjlCO0FBQUE7QUFBQSxNQVFUYSxlQVJTO0FBQUEsTUFRUUMsa0JBUlI7O0FBQUEsMEJBUzBCZiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVQxQjtBQUFBO0FBQUEsTUFTVGUsYUFUUztBQUFBLE1BU01DLGdCQVROOztBQUFBLDBCQVVjakIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FWZDtBQUFBO0FBQUEsTUFVVGlCLE9BVlM7QUFBQSxNQVVBQyxVQVZBOztBQUFBLDBCQVdNbkIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FYTjtBQUFBO0FBQUEsTUFXVG1CLEdBWFM7QUFBQSxNQVdKQyxNQVhJOztBQUFBLDBCQVlrQnJCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBWmxCO0FBQUE7QUFBQSxNQVlUcUIsU0FaUztBQUFBLE1BWUVDLFlBWkY7O0FBQUEsMEJBYVF2Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQWJSO0FBQUE7QUFBQSxNQWFUdUIsSUFiUztBQUFBLE1BYUhDLE9BYkc7O0FBQUEsMEJBY3VCekIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FkdkI7QUFBQTtBQUFBLE1BY1R5QixZQWRTO0FBQUEsTUFjS0MsY0FkTDs7QUFBQSwwQkFlYzNCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBZmQ7QUFBQTtBQUFBLE1BZVQyQixPQWZTO0FBQUEsTUFlQUMsVUFmQTs7QUFBQSwwQkFnQlk3Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQWhCWjtBQUFBO0FBQUEsTUFnQlRILE1BaEJTO0FBQUEsTUFnQkRnQyxTQWhCQzs7QUFBQSwwQkFpQk05Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQWpCTjtBQUFBO0FBQUEsTUFpQlQ4QixHQWpCUztBQUFBLE1BaUJKQyxNQWpCSTs7QUFBQSwwQkFrQk1oQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQWxCTjtBQUFBO0FBQUEsTUFrQlRnQyxHQWxCUztBQUFBLE1Ba0JKQyxNQWxCSTs7QUFBQSwwQkFvQnVCbEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FwQnZCO0FBQUE7QUFBQSxNQW9CVGtDLFlBcEJTO0FBQUEsTUFvQktDLGNBcEJMOztBQUFBLDBCQXFCMkJwQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQXJCM0I7QUFBQTtBQUFBLE1BcUJUb0MsY0FyQlM7QUFBQSxNQXFCT0MsZ0JBckJQOztBQUFBLDBCQXNCeUJ0Qyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQXRCekI7QUFBQTtBQUFBLE1Bc0JUc0MsYUF0QlM7QUFBQSxNQXNCTUMsZUF0Qk47O0FBQUEsMEJBdUJ5QnhDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBdkJ6QjtBQUFBO0FBQUEsTUF1QlR3QyxhQXZCUztBQUFBLE1BdUJNQyxlQXZCTjs7QUF5QmhCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBNUI7QUFDQSxNQUFNRSxhQUFhLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUE1QjtBQUNBLE1BQU1HLGFBQWEsR0FBR0gsb0RBQU0sQ0FBQyxJQUFELENBQTVCOztBQUVBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJMLGdCQUFZLENBQUNNLE9BQWIsQ0FBcUJDLEtBQXJCO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTixpQkFBYSxDQUFDSSxPQUFkLENBQXNCQyxLQUF0QjtBQUNELEdBRkQ7O0FBR0EsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4Qk4saUJBQWEsQ0FBQ0csT0FBZCxDQUFzQkMsS0FBdEI7QUFDRCxHQUZEOztBQUdBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJOLGlCQUFhLENBQUNFLE9BQWQsQ0FBc0JDLEtBQXRCO0FBQ0QsR0FGRDs7QUFJQSxXQUFTSSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtBQUNyQixRQUFJQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFYO0FBQ0F0QixrQkFBYyxDQUFDb0IsSUFBSSxDQUFDRyxJQUFOLENBQWQ7QUFDQTlCLGNBQVUsQ0FBQzJCLElBQUQsQ0FBVjtBQUNEOztBQUNELFdBQVNJLFdBQVQsQ0FBcUJMLENBQXJCLEVBQXdCO0FBQ3RCLFFBQUlDLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQVg7QUFDQXBCLG9CQUFnQixDQUFDa0IsSUFBSSxDQUFDRyxJQUFOLENBQWhCO0FBQ0E3QixhQUFTLENBQUMwQixJQUFELENBQVQ7QUFDRDs7QUFDRCxXQUFTSyxXQUFULENBQXFCTixDQUFyQixFQUF3QjtBQUN0QixRQUFJQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFYO0FBQ0FsQixtQkFBZSxDQUFDZ0IsSUFBSSxDQUFDRyxJQUFOLENBQWY7QUFDQTNCLFVBQU0sQ0FBQ3dCLElBQUQsQ0FBTjtBQUNEOztBQUNELFdBQVNNLFdBQVQsQ0FBcUJQLENBQXJCLEVBQXdCO0FBQ3RCLFFBQUlDLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQVg7QUFDQWhCLG1CQUFlLENBQUNjLElBQUksQ0FBQ0csSUFBTixDQUFmO0FBQ0F6QixVQUFNLENBQUNzQixJQUFELENBQU47QUFDRDs7QUFFRCxNQUFNTyxZQUFZLEdBQUc7QUFDbkJDLFdBQU8sRUFBRSxpQkFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNkNBQ0pELElBREk7QUFFUEUsY0FBTSxFQUFFLG1CQUZEO0FBR1BDLGlCQUFTLEVBQUUsTUFISjtBQUlQQyxvQkFBWSxFQUFFLE1BSlA7QUFLUEMsYUFBSyxFQUFFLE1BTEE7QUFNUEMsZUFBTyxFQUFFLE9BTkY7QUFPUEMsaUJBQVMsRUFBRTtBQVBKO0FBQUE7QUFEVSxHQUFyQjtBQVlBLE1BQU1DLGFBQWEsR0FBRztBQUNwQlQsV0FBTyxFQUFFLGlCQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQTs7QUFBQSw2Q0FDSkQsSUFESTtBQUVQUyxrQkFBVSxFQUFFLGlCQUZMO0FBR1BDLGFBQUssRUFBRSxPQUhBO0FBSVBSLGNBQU0sRUFBRSxtQkFKRDtBQUtQQyxpQkFBUyxFQUFFLE1BTEo7QUFNUEMsb0JBQVksRUFBRSxLQU5QO0FBT1BDLGFBQUssRUFBRSxNQVBBO0FBUVBDLGVBQU8sRUFBRSxLQVJGO0FBU1BDLGlCQUFTLEVBQUU7QUFUSixnSUFVSU4sS0FBSyxDQUFDVSxTQUFOLEdBQWtCLFNBQWxCLEdBQThCLElBVmxDLDZHQVdQLFNBWE8sRUFXSTtBQUNUO0FBQ0FDLG1CQUFXLEVBQUVYLEtBQUssQ0FBQ1UsU0FBTixHQUFrQixTQUFsQixHQUE4QjtBQUZsQyxPQVhKO0FBQUEsS0FEVztBQWlCcEJFLGVBQVcsRUFBRSxxQkFBQ0MsUUFBRDtBQUFBLDZDQUNSQSxRQURRO0FBRVhKLGFBQUssRUFBRTtBQUZJO0FBQUE7QUFqQk8sR0FBdEI7O0FBdUJBLE1BQU1LLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBeEI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQXJHZ0IsMEJBdUdpQmpGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUM5Q21GLFNBQUssRUFBRSxJQUR1QztBQUU5Q3pCLFFBQUksRUFBRTtBQUZ3QyxHQUFmLENBdkdqQjtBQUFBO0FBQUEsTUF1R1QwQixXQXZHUztBQUFBLE1BdUdJQyxTQXZHSjs7QUFBQSwwQkEyR29CdEYsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQ2pEbUYsU0FBSyxFQUFFLElBRDBDO0FBRWpEekIsUUFBSSxFQUFFO0FBRjJDLEdBQWYsQ0EzR3BCO0FBQUE7QUFBQSxNQTJHVDRCLFlBM0dTO0FBQUEsTUEyR0tDLFdBM0dMOztBQUFBLDBCQStHZ0J4Riw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDN0NtRixTQUFLLEVBQUUsSUFEc0M7QUFFN0N6QixRQUFJLEVBQUU7QUFGdUMsR0FBZixDQS9HaEI7QUFBQTtBQUFBLE1BK0dUOEIsVUEvR1M7QUFBQSxNQStHR0MsU0EvR0g7O0FBQUEsMEJBb0h5QjFGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBcEh6QjtBQUFBO0FBQUEsTUFvSFQwRixhQXBIUztBQUFBLE1Bb0hNQyxlQXBITjs7QUFBQSwwQkFxSDZCNUYsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FySDdCO0FBQUE7QUFBQSxNQXFIVDRGLGVBckhTO0FBQUEsTUFxSFFDLGlCQXJIUjs7QUFBQSwwQkFzSHlCOUYsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0F0SHpCO0FBQUE7QUFBQSxNQXNIVDhGLGFBdEhTO0FBQUEsTUFzSE1DLGVBdEhOOztBQXdIaEIsV0FBU0Msa0JBQVQsQ0FBNEIxQyxDQUE1QixFQUErQjtBQUM3QnFDLG1CQUFlLENBQUNyQyxDQUFDLENBQUM2QixLQUFILENBQWY7QUFDQSxRQUFNYyxJQUFJLEdBQUdoQixRQUFRLENBQ2xCaUIsTUFEVSxDQUNILFVBQUNDLE1BQUQ7QUFBQSxhQUFZQSxNQUFNLENBQUNDLE1BQVAsS0FBa0I5QyxDQUFDLENBQUM2QixLQUFoQztBQUFBLEtBREcsRUFFVmtCLEdBRlUsQ0FFTixVQUFDQyxDQUFEO0FBQUEsYUFBUTtBQUNYQyxVQUFFLEVBQUVELENBQUMsQ0FBQ0UsR0FESztBQUVYckIsYUFBSyxFQUFFbUIsQ0FBQyxDQUFDRSxHQUZFO0FBR1hDLGFBQUssRUFBRUgsQ0FBQyxDQUFDNUM7QUFIRSxPQUFSO0FBQUEsS0FGTSxDQUFiO0FBT0E2QixlQUFXLENBQUNVLElBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNTLG9CQUFULENBQThCcEQsQ0FBOUIsRUFBaUM7QUFDL0JoQyxnQkFBWSxDQUFDZ0MsQ0FBQyxDQUFDbUQsS0FBSCxDQUFaO0FBQ0FaLHFCQUFpQixDQUFDdkMsQ0FBQyxDQUFDNkIsS0FBSCxDQUFqQjtBQUNBLFFBQU1jLElBQUksR0FBR2YsTUFBTSxDQUNoQmdCLE1BRFUsQ0FDSCxVQUFDQyxNQUFEO0FBQUEsYUFBWUEsTUFBTSxDQUFDbEIsUUFBUCxLQUFvQjNCLENBQUMsQ0FBQ2lELEVBQWxDO0FBQUEsS0FERyxFQUVWRixHQUZVLENBRU4sVUFBQ0MsQ0FBRDtBQUFBLGFBQVE7QUFDWG5CLGFBQUssRUFBRW1CLENBQUMsQ0FBQzVDLElBREU7QUFFWCtDLGFBQUssRUFBRUgsQ0FBQyxDQUFDNUM7QUFGRSxPQUFSO0FBQUEsS0FGTSxDQUFiO0FBTUErQixhQUFTLENBQUNRLElBQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNVLGdCQUFULENBQTBCckQsQ0FBMUIsRUFBNkI7QUFDM0I5QixXQUFPLENBQUM4QixDQUFDLENBQUNtRCxLQUFILENBQVA7QUFDRDs7QUFFRCxXQUFTRyxPQUFULEdBQW1CO0FBQ2pCLFFBQU1DLFlBQVksR0FBRzlCLE9BQU8sQ0FBQ3NCLEdBQVIsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsYUFBUTtBQUN2Q25CLGFBQUssRUFBRW1CLENBQUMsQ0FBQ0UsR0FEOEI7QUFFdkNDLGFBQUssRUFBRUgsQ0FBQyxDQUFDNUM7QUFGOEIsT0FBUjtBQUFBLEtBQVosQ0FBckI7QUFJQTJCLGFBQVMsQ0FBQ3dCLFlBQUQsQ0FBVDtBQUNEOztBQUVEQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsV0FBTztBQUNSLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0csT0FBVCxHQUFtQjtBQUNqQjlCLFlBQVEsQ0FBQytCLE9BQVQsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsYUFBZ0JELEdBQUcsQ0FBQ2hCLElBQUosQ0FBU2tCLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFBQSxLQUFqQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7O0FBRUQsV0FBU0MsWUFBVCxDQUFzQmhFLENBQXRCLEVBQXlCO0FBQ3ZCcEQsWUFBUSxDQUFDb0QsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQVI7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBYixFQUFvQjtBQUNsQnJGLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTeUgsWUFBVCxDQUFzQmpFLENBQXRCLEVBQXlCO0FBQ3ZCaEQsWUFBUSxDQUFDZ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQVI7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBYixFQUFvQjtBQUNsQnJGLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTMEgsWUFBVCxDQUFzQmxFLENBQXRCLEVBQXlCO0FBQ3ZCbEQsWUFBUSxDQUFDa0QsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQVI7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBYixFQUFvQjtBQUNsQnJGLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTMkgsWUFBVCxDQUFzQm5FLENBQXRCLEVBQXlCO0FBQ3ZCOUMsWUFBUSxDQUFDOEMsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQVI7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBYixFQUFvQjtBQUNsQnJGLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTNEgsYUFBVCxDQUF1QnBFLENBQXZCLEVBQTBCO0FBQ3hCNUMsYUFBUyxDQUFDNEMsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQVQ7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBYixFQUFvQjtBQUNsQnJGLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTNkgsZUFBVCxDQUF5QnJFLENBQXpCLEVBQTRCO0FBQzFCMUMsZUFBVyxDQUFDMEMsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQVg7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBYixFQUFvQjtBQUNsQnJGLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTOEgsc0JBQVQsQ0FBZ0N0RSxDQUFoQyxFQUFtQztBQUNqQ3hDLHNCQUFrQixDQUFDd0MsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQWxCOztBQUNBLFFBQUk3QixDQUFDLENBQUNFLE1BQUYsQ0FBUzJCLEtBQWIsRUFBb0I7QUFDbEJyRixXQUFLLEdBQUcsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBUytILGNBQVQsQ0FBd0J2RSxDQUF4QixFQUEyQjtBQUN6QnRDLG9CQUFnQixDQUFDc0MsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFWLENBQWhCOztBQUNBLFFBQUk3QixDQUFDLENBQUNFLE1BQUYsQ0FBUzJCLEtBQWIsRUFBb0I7QUFDbEJyRixXQUFLLEdBQUcsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU2dJLFVBQVQsQ0FBb0J4RSxDQUFwQixFQUF1QjtBQUNyQmxDLFVBQU0sQ0FBQ2tDLENBQUMsQ0FBQ0UsTUFBRixDQUFTMkIsS0FBVixDQUFOOztBQUNBLFFBQUk3QixDQUFDLENBQUNFLE1BQUYsQ0FBUzJCLEtBQWIsRUFBb0I7QUFDbEJyRixXQUFLLEdBQUcsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU2lJLFlBQVQsQ0FBc0J6RSxDQUF0QixFQUF5QjtBQUN2QjVCLGtCQUFjLENBQUM0QixDQUFDLENBQUNFLE1BQUYsQ0FBUzJCLEtBQVYsQ0FBZDs7QUFDQSxRQUFJN0IsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFiLEVBQW9CO0FBQ2xCckYsV0FBSyxHQUFHLENBQVI7QUFDRDtBQUNGOztBQUNELFdBQVNrSSxjQUFULENBQXdCMUUsQ0FBeEIsRUFBMkI7QUFDekJwQyxjQUFVLENBQUNvQyxDQUFDLENBQUNFLE1BQUYsQ0FBUzJCLEtBQVYsQ0FBVjs7QUFDQSxRQUFJN0IsQ0FBQyxDQUFDRSxNQUFGLENBQVMyQixLQUFiLEVBQW9CO0FBQ2xCckYsV0FBSyxHQUFHLENBQVI7QUFDRDtBQUNGOztBQUVELFdBQVNtSSxNQUFULENBQWdCM0UsQ0FBaEIsRUFBbUI7QUFBQTs7QUFDakJBLEtBQUMsQ0FBQzRFLGNBQUY7O0FBQ0EsUUFBSWpJLEtBQUssSUFBSSxFQUFiLEVBQWlCO0FBQ2ZrSSxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsQ0FBaUIsT0FBakIsRUFBMEIsU0FBMUI7QUFDQUQsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CLEVBQWtDLFNBQWxDO0FBQ0F0SSxXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUlLLEtBQUssSUFBSSxFQUFiLEVBQWlCO0FBQ2ZnSSxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsQ0FBaUIsT0FBakIsRUFBMEIsU0FBMUI7QUFDQUQsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CLEVBQWtDLFNBQWxDO0FBQ0F0SSxXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUlTLEtBQUssSUFBSSxFQUFiLEVBQWlCO0FBQ2Y0SCxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsQ0FBaUIsT0FBakIsRUFBMEIsU0FBMUI7QUFDQUQsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CLEVBQWtDLFNBQWxDO0FBQ0F0SSxXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUlXLE1BQU0sSUFBSSxFQUFkLEVBQWtCO0FBQ2hCMEgsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjQyxHQUFkLENBQWtCLE9BQWxCLEVBQTJCLFNBQTNCO0FBQ0FELE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEdBQWhCLENBQW9CLGFBQXBCLEVBQW1DLFNBQW5DO0FBQ0F0SSxXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUlhLFFBQVEsSUFBSSxFQUFoQixFQUFvQjtBQUNsQndILE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLFNBQTdCO0FBQ0FELE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCLEVBQXFDLFNBQXJDO0FBQ0F0SSxXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUllLGVBQWUsSUFBSSxFQUF2QixFQUEyQjtBQUN6QnNILE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJDLEdBQW5CLENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDO0FBQ0FELE9BQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxHQUFyQixDQUF5QixhQUF6QixFQUF3QyxTQUF4QztBQUNBdEksV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRCxRQUFJZSxlQUFlLElBQUksRUFBdkIsRUFBMkI7QUFDekJzSCxPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxHQUFuQixDQUF1QixPQUF2QixFQUFnQyxTQUFoQztBQUNBRCxPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsR0FBckIsQ0FBeUIsYUFBekIsRUFBd0MsU0FBeEM7QUFDQXRJLFdBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSWlCLGFBQWEsSUFBSSxFQUFyQixFQUF5QjtBQUN2Qm9ILE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsR0FBZixDQUFtQixPQUFuQixFQUE0QixTQUE1QjtBQUNBRCxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxHQUFqQixDQUFxQixhQUFyQixFQUFvQyxTQUFwQztBQUNBdEksV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRCxRQUFJMkIsWUFBWSxJQUFJLEVBQXBCLEVBQXdCO0FBQ3RCMEcsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLENBQWlCLE9BQWpCLEVBQTBCLFNBQTFCO0FBQ0FELE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsR0FBZixDQUFtQixhQUFuQixFQUFrQyxTQUFsQztBQUNBdEksV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRCxRQUFJNkIsT0FBTyxJQUFJLEVBQWYsRUFBbUI7QUFDakJ3RyxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxHQUFqQixDQUFxQixhQUFyQixFQUFvQyxTQUFwQztBQUNBdEksV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRCxRQUFJRCxNQUFNLElBQUksRUFBZCxFQUFrQjtBQUNoQnNJLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEdBQWhCLENBQW9CLGFBQXBCLEVBQW1DLFNBQW5DO0FBQ0F0SSxXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUlnQyxHQUFHLElBQUksRUFBWCxFQUFlO0FBQ2JxRyxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0MsU0FBaEM7QUFDQXRJLFdBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSWtDLEdBQUcsSUFBSSxFQUFYLEVBQWU7QUFDYm1HLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixDQUFpQixhQUFqQixFQUFnQyxTQUFoQztBQUNBdEksV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFFRCxRQUFJQSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkLFVBQU11SSxPQUFPLEdBQUc7QUFDZEMsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUUsbUNBREQ7QUFFUCwwQkFBZ0I7QUFGVDtBQURLLE9BQWhCO0FBT0EsVUFBSUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBZjs7QUFDQSxVQUFJO0FBQ0ZELGdCQUFRLENBQUNFLEdBQVQsQ0FBYSxPQUFiLEVBQXNCekksS0FBdEI7QUFDQXVJLGdCQUFRLENBQUNFLEdBQVQsQ0FBYSxPQUFiLEVBQXNCdkksS0FBdEI7QUFDQXFJLGdCQUFRLENBQUNFLEdBQVQsQ0FBYSxPQUFiLEVBQXNCckksS0FBdEI7QUFDQW1JLGdCQUFRLENBQUNHLE1BQVQsQ0FBZ0IsYUFBaEIsRUFBK0JoSCxPQUEvQixFQUF3Q0EsT0FBTyxDQUFDK0IsSUFBaEQ7QUFDQThFLGdCQUFRLENBQUNFLEdBQVQsQ0FBYSxPQUFiLEVBQXNCbkksS0FBdEI7QUFDQWlJLGdCQUFRLENBQUNFLEdBQVQsQ0FBYSxXQUFiLEVBQTBCakksTUFBMUI7QUFDQStILGdCQUFRLENBQUNFLEdBQVQsQ0FBYSxTQUFiLEVBQXdCRSxPQUF4QjtBQUNBSixnQkFBUSxDQUFDRSxHQUFULENBQWEsTUFBYixFQUFxQm5ILElBQXJCO0FBQ0FpSCxnQkFBUSxDQUFDRSxHQUFULENBQWEsT0FBYixFQUFzQnJILFNBQXRCO0FBQ0FtSCxnQkFBUSxDQUFDRSxHQUFULENBQWEsU0FBYixFQUF3QixhQUF4QjtBQUNBRixnQkFBUSxDQUFDRSxHQUFULENBQWEsS0FBYixFQUFvQnZILEdBQXBCO0FBQ0FxSCxnQkFBUSxDQUFDRSxHQUFULENBQWEsVUFBYixFQUF5Qi9ILFFBQXpCO0FBQ0E2SCxnQkFBUSxDQUFDRSxHQUFULENBQWEsdUJBQWIsRUFBc0MvSCxRQUF0QztBQUNELE9BZEQsQ0FjRSxPQUFPMkMsQ0FBUCxFQUFVO0FBQ1Y4RCxlQUFPLENBQUNDLEdBQVIsQ0FBWS9ELENBQVo7QUFDRDs7QUFDRCxVQUFJdUYsTUFBTSxHQUFHO0FBQ1hDLHdCQUFnQixFQUFFLDBCQUFDQyxhQUFELEVBQW1CO0FBQ25DM0IsaUJBQU8sQ0FBQ0MsR0FBUixDQUNFMkIsSUFBSSxDQUFDQyxLQUFMLENBQVlGLGFBQWEsQ0FBQ0csTUFBZCxHQUF1QixHQUF4QixHQUErQkgsYUFBYSxDQUFDSSxLQUF4RCxDQURGO0FBR0Q7QUFMVSxPQUFiO0FBVUEsVUFBTUMsTUFBTSxHQUFHLHlDQUFmO0FBQ0FDLGtEQUFLLENBQ0ZDLElBREgsQ0FDUUYsTUFEUixFQUNnQlosUUFEaEIsRUFDMEJILE9BRDFCLEVBQ21DUSxNQURuQyxFQUVHVSxJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCckIsU0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnNCLEtBQW5CLENBQXlCLE1BQXpCOztBQUNBLFlBQUlELE1BQU0sQ0FBQ0UsTUFBUCxJQUFpQixLQUFyQixFQUE0QjtBQUMxQnZCLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXdCLFdBQVYsQ0FBc0IsY0FBdEI7QUFDQUMsd0JBQWM7QUFDZjtBQUNGLE9BUkgsV0FTUyxVQUFDQyxHQUFELEVBQVM7QUFDZDFCLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXdCLFdBQVYsQ0FBc0IsY0FBdEI7O0FBQ0EsWUFBSTtBQUNGeEIsV0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkMsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBa0MsR0FBbEM7QUFDQUQsV0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIyQixJQUFyQjs7QUFDQSxlQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxzQkFBVSxFQUFFSCxHQUFHLENBQUNJLFFBQUosQ0FBYWhFLElBQWIsQ0FBa0JpRSxNQUFsQixDQUF5QjNKLEtBQXpCLENBQStCLENBQS9CO0FBQWQsV0FBZDs7QUFDQSxjQUFJc0osR0FBRyxDQUFDSSxRQUFKLENBQWFoRSxJQUFiLENBQWtCaUUsTUFBbEIsQ0FBeUIzSixLQUF6QixDQUErQixDQUEvQixDQUFKLEVBQXVDLENBQ3RDO0FBQ0YsU0FORCxDQU1FLE9BQU8rQyxDQUFQLEVBQVUsQ0FBRTtBQUNmLE9BbEJIO0FBb0JEO0FBQ0Y7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFDRSxhQUFTLEVBQUMsK0JBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRTZHLGNBQVEsRUFBRTtBQUFaLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQ0UsYUFBUyxFQUFDLG1DQURaO0FBRUUsU0FBSyxFQUFFO0FBQUU3RixhQUFPLEVBQUU7QUFBWCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLG1CQUFZLFVBRmQ7QUFHRSxtQkFBWSxXQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFNLGFBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBSkYsRUFXRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLFFBQUksRUFBQyxHQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsZ0JBRE47QUFFRSxhQUFTLEVBQUMsbUJBRlo7QUFHRSxTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVhGLEVBb0JFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQTBDLE1BQUUsRUFBQyxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFtQyxTQUFLLEVBQUU7QUFBRUssV0FBSyxFQUFFO0FBQVQsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHFCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBRlQ7QUFHRSxtQkFBWSxPQUhkO0FBSUUsbUJBQVksY0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBTkYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQW1DLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FoQkYsQ0FERixDQURGLENBcEJGLENBSkYsRUFvREU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcERGLEVBcURFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUUwRixnQkFBVSxFQUFFO0FBQWQsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFVBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRTdGLGVBQVMsRUFBRSxPQUFiO0FBQXNCNEYsY0FBUSxFQUFFO0FBQWhDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssU0FBSyxFQUFFO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGtCQUROO0FBRUUsYUFBUyxFQUFDLG9CQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUssT0FBRyxFQUFDLGlCQUFUO0FBQTJCLGFBQVMsRUFBQyxrQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBSkYsQ0FERixFQWFFO0FBQ0UsYUFBUyxFQUFDLFVBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRTVGLGVBQVMsRUFBRSxPQUFiO0FBQXNCNEYsY0FBUSxFQUFFO0FBQWhDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsYUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUU3RixhQUFPLEVBQUU7QUFBWCxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGlCQUFUO0FBQTJCLGFBQVMsRUFBQyxhQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbEIsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLENBRkYsQ0FERixDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxxQkFETjtBQUVFLGFBQVMsRUFBQyxhQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFosRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBTEYsQ0FERixDQVZGLENBTEYsRUE0QkU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLENBNUJGLENBYkYsRUE4Q0U7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsT0FBYjtBQUFzQjRGLGNBQVEsRUFBRTtBQUFoQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLE9BQUcsRUFBQyx1QkFETjtBQUVFLGFBQVMsRUFBQyxpQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0E5Q0YsQ0FERixDQXJERixFQStHRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQS9HRixDQUhGLEVBc0hFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxpQkFBVDtBQUEyQixhQUFTLEVBQUMsbUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0F0SEYsRUE2SEU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQURGLENBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGdCQUFUO0FBQTBCLGFBQVMsRUFBQyxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGdCQUFUO0FBQTBCLGFBQVMsRUFBQyxnQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxnQkFBVDtBQUEwQixhQUFTLEVBQUMsZ0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBUkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQURGLENBREYsQ0FuQkYsQ0E3SEYsRUF3SkU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFO0FBQUU1RixlQUFTLEVBQUU7QUFBYixLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUCxDQURGLEVBSUU7QUFBUSxhQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixDQUZGLENBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVBLGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxpQkFBVDtBQUEyQixhQUFTLEVBQUMsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLENBRkYsQ0FaRixFQW1CRTtBQUNFLGFBQVMsRUFBQyxlQURaO0FBRUUsU0FBSyxFQUFFO0FBQUU4RixxQkFBZSxFQUFFO0FBQW5CLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixFQXVCRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERixDQURGLENBdkJGLENBeEpGLEVBc0xFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxNQUFFLEVBQUMsY0FGTDtBQUdFLFlBQVEsRUFBRSxDQUFDLENBSGI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLHVCQUFnQixtQkFMbEI7QUFNRSxtQkFBWSxNQU5kO0FBT0UsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQXVDLFFBQUksRUFBQyxVQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUE0QixNQUFFLEVBQUMsbUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFTRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FURixDQUZGLEVBZ0JFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUcsYUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREYsQ0FIRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQUhGLENBUkYsRUFlRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FmRixDQWhCRixFQW9DRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFL0YsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxvREFBRDtBQUNFLFdBQU8sRUFBRWEsV0FEWDtBQUVFLFlBQVEsRUFBRVksa0JBRlo7QUFHRSxVQUFNLEVBQUVsQyxZQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxvREFBRDtBQUNFLFdBQU8sRUFBRXdCLFlBRFg7QUFFRSxZQUFRLEVBQUVvQixvQkFGWjtBQUdFLFVBQU0sRUFBRTVDLFlBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUUsTUFBQyxvREFBRDtBQUNFLFdBQU8sRUFBRTBCLFVBRFg7QUFFRSxVQUFNLEVBQUUxQixZQUZWO0FBR0UsWUFBUSxFQUFFNkMsZ0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBakJGLENBcENGLEVBOERFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVwQyxlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsU0FBSyxFQUFDLGFBSFI7QUFJRSxZQUFRLE1BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsQ0E5REYsRUE2RUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FMRixDQTdFRixFQXVGRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLENBdkZGLEVBaUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsYUFBUyxFQUFDLGNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFTLEVBQUMsY0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsQ0FqR0YsRUEyR0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixTQUFLLEVBQUU7QUFBRUEsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBM0dGLEVBZ0hFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVBLGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFlBQVEsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVZGLENBaEhGLEVBK0hFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsQ0EvSEYsRUF5SUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FMRixDQXpJRixFQW1KRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixTQUFLLEVBQUU7QUFBRWdHLGtCQUFZLEVBQUU7QUFBaEIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFDRSxTQUFLLEVBQUU7QUFDTHJHLFlBQU0sRUFBRSxtQkFESDtBQUVMRSxrQkFBWSxFQUFFLE1BRlQ7QUFHTEUsYUFBTyxFQUFFLFNBSEo7QUFJTEMsZUFBUyxFQUFFLEtBSk47QUFLTDRGLGNBQVEsRUFBRTtBQUxMLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQU8sV0FBSSxhQUFYO0FBQXlCLGFBQVMsRUFBQyxvQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBTSxvQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsaUJBVEYsRUFZRTtBQUNFLE1BQUUsRUFBQyxhQURMO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFNLEVBQUMseUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBRkYsRUFvQkU7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQXBCRixDQU5GLEVBOEJFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixFQUVFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xqRyxZQUFNLEVBQUUsbUJBREg7QUFFTEUsa0JBQVksRUFBRSxNQUZUO0FBR0xFLGFBQU8sRUFBRSxTQUhKO0FBSUxDLGVBQVMsRUFBRSxLQUpOO0FBS0w0RixjQUFRLEVBQUU7QUFMTCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFPLFdBQUksYUFBWDtBQUF5QixhQUFTLEVBQUMsb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQU0sb0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGlCQVRGLEVBWUU7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsVUFBTSxFQUFDLHlCQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQUZGLEVBb0JFO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFwQkYsQ0E5QkYsQ0FuSkYsQ0FORixFQWlORTtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLFdBQU8sRUFBRXBELE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBak5GLENBREYsQ0FURixDQXRMRixFQTZaRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsTUFBRSxFQUFDLGFBRkw7QUFHRSxZQUFRLEVBQUUsQ0FBQyxDQUhiO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFLRSx1QkFBZ0IsbUJBTGxCO0FBTUUsbUJBQVksTUFOZDtBQU9FLFNBQUssRUFBRTtBQUFFdUQsWUFBTSxFQUFFO0FBQVYsS0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFDRSxhQUFTLEVBQUMsMkNBRFo7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0hBRkYsRUFNRTtBQUNFLFNBQUssRUFBRTtBQUNMRCxxQkFBZSxFQUFFLFNBRFo7QUFFTEcsV0FBSyxFQUFFO0FBRkYsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFZRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFakcsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLG9CQUZaO0FBR0UsWUFBUSxFQUFFK0MsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLFlBQVEsRUFBRUMsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FURixFQWlCRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxvQkFGWjtBQUdFLFlBQVEsRUFBRUMsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FqQkYsRUF5QkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxvQkFGWjtBQUdFLFlBQVEsRUFBRUMsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F6QkYsRUFpQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMscUJBRlo7QUFHRSxZQUFRLEVBQUVDLGFBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBakNGLENBWkYsRUF1REU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixTQUFLLEVBQUU7QUFBRW5ELGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLG9EQUFEO0FBQ0UsV0FBTyxFQUFFYSxXQURYO0FBRUUsWUFBUSxFQUFFWSxrQkFGWjtBQUdFLFVBQU0sRUFBRXhCLGFBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFhRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLG9EQUFEO0FBQ0UsV0FBTyxFQUFFYyxZQURYO0FBRUUsWUFBUSxFQUFFb0Isb0JBRlo7QUFHRSxVQUFNLEVBQUVsQyxhQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWJGLEVBcUJFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFLE1BQUMsb0RBQUQ7QUFBUSxXQUFPLEVBQUVnQixVQUFqQjtBQUE2QixVQUFNLEVBQUVoQixhQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FyQkYsRUF5QkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxTQUFLLEVBQUMsYUFIUjtBQUlFLFlBQVEsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F6QkYsRUFrQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsWUFBUSxFQUFFc0QsVUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FsQ0YsQ0F2REYsRUFtR0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFTLEVBQUMsdUJBRlo7QUFHRSxZQUFRLEVBQUVILGVBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGFBQVMsRUFBQywwQkFGWjtBQUdFLFlBQVEsRUFBRUMsc0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsQ0FuR0YsRUFzSEU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsWUFBUSxFQUFFSSxjQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsb0JBRlo7QUFHRSxZQUFRLEVBQUVELFlBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsc0JBRlo7QUFHRSxZQUFRLEVBQUVGLGNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBakJGLENBdEhGLEVBaUpFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQ0UsWUFBUSxFQUFFLGtCQUFDdkUsQ0FBRDtBQUFBLGFBQU9ELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFqQjtBQUFBLEtBRFo7QUFFRSxPQUFHLEVBQUVaLFlBRlA7QUFHRSxNQUFFLEVBQUMsYUFITDtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsVUFBTSxFQUFDLHlCQUxUO0FBTUUsU0FBSyxFQUFFO0FBQUUrSCxhQUFPLEVBQUU7QUFBWCxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFO0FBQ0UsYUFBUyxFQUFDLHNDQURaO0FBRUUsV0FBTyxFQUFFMUgsVUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRTJCLFdBQUssRUFBRTtBQUFULEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixpQkFKRixFQVFFO0FBQUcsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQnhDLFlBQS9CLENBUkYsQ0FWRixDQURGLEVBc0JFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQ0UsWUFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLGFBQU9LLFdBQVcsQ0FBQ0wsQ0FBRCxDQUFsQjtBQUFBLEtBRFo7QUFFRSxPQUFHLEVBQUVWLGFBRlA7QUFHRSxNQUFFLEVBQUMsYUFITDtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsVUFBTSxFQUFDLHlCQUxUO0FBTUUsU0FBSyxFQUFFO0FBQUU2SCxhQUFPLEVBQUU7QUFBWCxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFO0FBQ0UsYUFBUyxFQUFDLHFDQURaO0FBRUUsV0FBTyxFQUFFdkgsV0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRXdCLFdBQUssRUFBRTtBQUFULEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixpQkFKRixFQVFFO0FBQUcsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQnRDLGNBQS9CLENBUkYsQ0FWRixDQXRCRixDQWpKRixFQTZMRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFbUMsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQ0UsWUFBUSxFQUFFLGtCQUFDakIsQ0FBRDtBQUFBLGFBQU9NLFdBQVcsQ0FBQ04sQ0FBRCxDQUFsQjtBQUFBLEtBRFo7QUFFRSxPQUFHLEVBQUVULGFBRlA7QUFHRSxNQUFFLEVBQUMsYUFITDtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsVUFBTSxFQUFDLHlCQUxUO0FBTUUsU0FBSyxFQUFFO0FBQUU0SCxhQUFPLEVBQUU7QUFBWCxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFO0FBQ0UsYUFBUyxFQUFDLGtDQURaO0FBRUUsV0FBTyxFQUFFdEgsV0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRXVCLFdBQUssRUFBRTtBQUFULEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixpQkFKRixFQVFFO0FBQUcsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQnBDLGFBQS9CLENBUkYsQ0FWRixDQURGLEVBc0JFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFDRSxZQUFRLEVBQUUsa0JBQUNnQixDQUFEO0FBQUEsYUFBT08sV0FBVyxDQUFDUCxDQUFELENBQWxCO0FBQUEsS0FEWjtBQUVFLE9BQUcsRUFBRVIsYUFGUDtBQUdFLE1BQUUsRUFBQyxhQUhMO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxVQUFNLEVBQUMseUJBTFQ7QUFNRSxTQUFLLEVBQUU7QUFBRTJILGFBQU8sRUFBRTtBQUFYLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBVUU7QUFDRSxhQUFTLEVBQUMsa0NBRFo7QUFFRSxXQUFPLEVBQUVySCxXQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRTtBQUFFc0IsV0FBSyxFQUFFO0FBQVQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGlCQUpGLEVBUUU7QUFBRyxTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCbEMsYUFBL0IsQ0FSRixDQVZGLENBdEJGLENBN0xGLEVBeU9FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUUrQixlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRTBELE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLENBek9GLENBREYsQ0FKRixDQVRGLENBN1pGLENBREY7QUFrcUJEOztHQXRnQ1FwSSxNOztBQXdnQ01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci5hNTFkMDk4MzExOTI2MGUxZGJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIGRyaXZlcigpIHtcclxuICB2YXIgY2xlYXIgPSAwO1xyXG4gIGNvbnN0IFtmbmFtZSwgc2V0Zm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xuYW1lLCBzZXRsbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW5hbWUsIHNldG1uYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21vYmlsZSwgc2V0bW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0cGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkY29uZmlybSwgc2V0cGFzc3dvcmRjb25maXJtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXNlbmNlbnVtYmVyLCBzZXRsaXNlbmNlbnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt2ZWhpY2xlLCBzZXR2ZWhpY2xlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt6aXAsIHNldHppcF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VkLCBzZXRwcm92aW5jZWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NpdHksIHNldGNpdHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYXRlZW51bWJlciwgc2V0cGxhdGVudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldHByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RyaXZlciwgc2V0RHJpdmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYmksIHNldE5iaV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2NyLCBzZXRPY3JdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtwcm9maWxlX25hbWUsIHNldFByb2ZpbGVuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkcml2ZXJfbGlzZW5jZSwgc2V0RHJpdmVybGlzZW5jZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmJpX2NsZWFyYW5jZSwgc2V0TmJpY2xlYXJhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvY3JfY2xlYXJhbmNlLCBzZXRPY3JjbGVhcmFuY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGlucHV0RmlsZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYxID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25CdG5DbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMSA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjEuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazIgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYyLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2szID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMy5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0UHJvZmlsZW5hbWUoZmlsZS5uYW1lKTtcclxuICAgIHNldHByb2ZpbGUoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXREcml2ZXJsaXNlbmNlKGZpbGUubmFtZSk7XHJcbiAgICBzZXREcml2ZXIoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXROYmljbGVhcmFuY2UoZmlsZS5uYW1lKTtcclxuICAgIHNldE5iaShmaWxlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0T2NyKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuICBjb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbnNfYXBpLCBzZXRSZWdpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwcm92aW5jZV9hcGksIHNldFByb3ZpbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY2l0aWVzX2FwaSwgc2V0Q2l0aWVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbl9jaGFuZ2UsIHNldFJlZ2lvbkNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VfY2hhbmdlLCBzZXRQcm92aW5jZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0aWVzX2NoYW5nZSwgc2V0Q2l0aWVzQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICAgc2V0UmVnaW9uQ2hhbmdlKGUudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHNldFByb3ZpbmNlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgc2V0cHJvdmluY2VkKGUubGFiZWwpO1xyXG4gICAgc2V0UHJvdmluY2VDaGFuZ2UoZS52YWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgc2V0Q2l0aWVzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlQ2l0eShlKSB7XHJcbiAgICBzZXRjaXR5KGUubGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICBzZXRSZWdpb24oZGF0YV9yZWdpb25zKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiB0cnlsYW5nKCkge1xyXG4gICAgcHJvdmluY2UuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4gdmFsLmRhdGEuc3BsaWNlKDMpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ3VtYW5hXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldGZuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1uYW1lX2NoYW5nZShlKSB7XHJcbiAgICBzZXRtbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsbmFtZV9jaGFuZ2UoZSkge1xyXG4gICAgc2V0bG5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gZW1haWxfY2hhbmdlKGUpIHtcclxuICAgIHNldGVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1vYmlsZV9jaGFuZ2UoZSkge1xyXG4gICAgc2V0bW9iaWxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBhc3N3b3JkX2NoYW5nZShlKSB7XHJcbiAgICBzZXRwYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwYXNzd29yZGNvbmZpcm1fY2hhbmdlKGUpIHtcclxuICAgIHNldHBhc3N3b3JkY29uZmlybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsaXNlbmNlX2NoYW5nZShlKSB7XHJcbiAgICBzZXRsaXNlbmNlbnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHppcF9jaGFuZ2UoZSkge1xyXG4gICAgc2V0emlwKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBsYXRlX2NoYW5nZShlKSB7XHJcbiAgICBzZXRwbGF0ZW51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB2ZWhpY2xlX2NoYW5nZShlKSB7XHJcbiAgICBzZXR2ZWhpY2xlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGZuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dEZuYW1lXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGxuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dExuYW1lXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGVtYWlsID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRW1haWxcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dEVtYWlsXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TW9iaWxlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dFBhc3N3b3JkXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkY29uZmlybSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZGNvbmZpcm0gPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBDb25maXJtUGFzc1wiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAobGlzZW5jZW51bWJlciA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucExpc2VuY2VcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dExpc2VuY2VcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocGxhdGVlbnVtYmVyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wUGxhdGVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dFBsYXRlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb2ZpbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdlByb2ZpbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAoZHJpdmVyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZEcml2ZXJcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAobmJpID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZOYmlcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAob2NyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsZWFyID09IDApIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgZm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIGxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCBtbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKFwicHJvZmlsZV9waWNcIiwgcHJvZmlsZSwgcHJvZmlsZS5uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCBlbWFpbCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIG1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCBhZGRyZXNzKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIGNpdHkpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInN0YXRlXCIsIHByb3ZpbmNlZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY291bnRyeVwiLCBcIlBoaWxpcHBpbmVzXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB6aXApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgcGFzc3dvcmQpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVnaXN0ZXJcIjtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zLCBjb25maWcpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCIyMDFcIikge1xyXG4gICAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikuY3NzKFwiei1pbmRleFwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JFbWFpbDogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsWzBdIH0pO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsWzBdKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbWFpbkNvbkRyaXZlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgZml4ZWQtdG9wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCAyMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQmUgYSBKR08gRHJpdmVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2RyaXZlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2sgYSBEZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25Ecml2ZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctM1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcGhvbmUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdQaG9uZVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3Bob25lLmdpZlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdHaWZcIj48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb21pbmdcIj5DT01JTkcgU09PTjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QnV0dG9uIGZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9hcHBsZS5wbmdcIiBjbGFzc05hbWU9XCJpbWdEb3dubG9hZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgb24gdGhlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXBwIFN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJ1dHRvbiBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3BsYXlzdG9yZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nRG93bmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBpdCBvbiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZ1bGx5XCI+RlVMTFkgRklMSVBJTk8gT1dORUQgQ09NUEFOWTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBTZXJ2aWNlXCI+TUFBQVNBTkcgU0VSQklTWU8hPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy01XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZGVsaXZlcnlndXkucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdEZWwgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dHcmF5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2xcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvblJvYWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9yb2FkMS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nUm9hZFwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUmF0ZVwiPlxyXG4gICAgICAgICAgICAgIExPV0VTVCBSQVRFIEFUIFBIUCA2L0tNIFdJVEggQSBGTEFUIEZFRSBPRiBQSFA2MFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBwLTBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbWcxLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHAtMFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZzIucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZzJcIj48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBwLTBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbWczLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWczXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFNhZmV0eVwiPlxyXG4gICAgICAgICAgICAgIFNBRkVUWSBBTkQgQUNDRVNTSUJJTElUWSBJUyBPVVIgUFJJTUFSWSBDT05DRVJOXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMDBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJlXCI+XHJcbiAgICAgICAgICAgICAgICBCRSBBIDxzcGFuPkpHTyBEUklWRVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuU2lnbnVwXCI+U2lnbiB1cCBub3chPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTIwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9yb2FkMS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIj48L2ltZz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENvbWVcIj5DT01FIFJJREUgV0lUSCBVUzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyByb3dGb290ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzNzM3MzVcIiB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dHcmF5Rm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlciBhbGlnbi1zZWxmLWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9vdGVyXCI+QCAyMDIwIEpHTyBQaGlsaXBwaW5lcy4gLSBBbGwgUmlnaHRzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBKR08gRFJJVkVSIC0gUmVnaXN0cmF0aW9uIEZvcm1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFjY291bnRcIj5BQ0NPVU5UIElORk9STUFUSU9OPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5BZGRyZXNzIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInR4dEluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aT5Ib3VzZS9Vbml0IE51bWJlciwgQnVpbGRpbmcgTmFtZSwgU3RyZWV0IE5hbWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkFkZHJlc3MgMjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHh0SW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPlN1YmRpdmlzaW9uL1ZpbGxhZ2U8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkJhcmFuZ2F5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VSZWdpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlUHJvdmluY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NpdGllc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZUNpdHl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qb3N0YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlBoaWxpcHBpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TGlzZW5jZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5FbWFpbCBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q29uZmlybSBFbWFpbCBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBY2NvdW50XCI+VkVISUNMRSBJTkZPUk1BVElPTjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+VmVoaWNsZSBUeXBlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1vdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlZlaGljbGUgQnJhbmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlZlaGljbGUgTW9kZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5QbGF0ZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkVuZ2luZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5DaGFzaXMgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFjY291bnRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFJFUVVJUkVNRU5UUyBORUVERURcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+RHJpdmVyIExpc2VuY2UgKFBob3RvKTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCA4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG91ZC11cGxvYWRcIj48L2k+IENob29zZSBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBOb3RlOiBPbmx5IC5qcGcsIC5qcGVnIGFuZCAucG5nIGZpbGVzIGFyZSBhbGxvd2VkXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlZlaGljbGUncyBPUi9DUiAoUGhvdG8pPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpbGUtdXBsb2FkXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3VkLXVwbG9hZFwiPjwvaT4gQ2hvb3NlIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vdGU6IE9ubHkgLmpwZywgLmpwZWcgYW5kIC5wbmcgZmlsZXMgYXJlIGFsbG93ZWRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciB0ZXh0LWNlbnRlciBteC1hdXRvIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dHJ5bGFuZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD1cImRyaXZlck1vZGFsXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctZHJpdmVyIG1vZGFsLWxnXCJcclxuICAgICAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBtb2RhbERyaXZlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlXCI+SmdvIC0gRHJpdmVyIHJlZ2lzdHJhdGlvbiBmb3JtPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBGaWxsLXVwIGFsbCB0aGUgcmVxdWlyZCBmaWVsZHMuIEFmdGVyIHlvdSBzdWJtaXQgd2Ugd2lsbCBzZW5kIGFcclxuICAgICAgICAgICAgICAgIGxpbmsgdG8geW91ciBlbWFpbCBmb3IgZHJpdmVyIG9ubGluZSB0ZXN0LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttbmFtZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExuYW1lXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bG5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dE1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e21vYmlsZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VSZWdpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlUHJvdmluY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtjaXRpZXNfYXBpfSBzdHlsZXM9e2N1c3RvbVN0eWxlczF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ppcF9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcFBhc3N3b3JkXCI+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dvcmRfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dENvbmZpcm1QYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dvcmRjb25maXJtX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlZlaGljbGUgVHlwZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZlaGljbGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQbGF0ZVwiPlBsYXRlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3BsYXRlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTGlzZW5jZVwiPkxpc2VuY2UgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExpc2VuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtsaXNlbmNlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb2ZpbGUgUGljdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2UHJvZmlsZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e3Byb2ZpbGVfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Ecml2ZXIgTGljZW5zZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMShlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjF9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZEcml2ZXIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2sxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57ZHJpdmVyX2xpc2VuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk5CSSBDbGVhcmFuY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTIoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2TmJpIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrMn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e25iaV9jbGVhcmFuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+T1JDUjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMyhlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjN9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZPY3IgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2szfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57b2NyX2NsZWFyYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TdWJtaXREcml2ZXJcIiBvbkNsaWNrPXtzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyaXZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==