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
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\driver.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function driver() {
  _s();

  var clear = 0;
  var submitClick = 0;

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
    $(".divProfile").css("borderColor", "#2c2c2c");
  }

  function handleFile1(e) {
    var file = e.target.files[0];
    setDriverlisence(file.name);
    setDriver(file);
    $(".divDriver").css("borderColor", "#2c2c2c");
  }

  function handleFile2(e) {
    var file = e.target.files[0];
    setNbiclearance(file.name);
    setNbi(file);
    $(".divNbi").css("borderColor", "#2c2c2c");
  }

  function handleFile3(e) {
    var file = e.target.files[0];
    setOcrclearance(file.name);
    setOcr(file);
    $(".divOcr").css("borderColor", "#2c2c2c");
  }

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
    try {
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
    } catch (e) {}
  }

  function HandleChangeProvince(e) {
    try {
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
    } catch (e) {
      console.log(e);
    }
  }

  function HandleChangeCity(e) {
    try {
      setcitydropdown(e.value.label);
      setcity(e.label);
    } catch (e) {
      console.log(e);
    }
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
    var re = /^[0-9\b]+$/;
    $(".pMobile").css("color", "white");
    $(".txtMobile").css("borderColor", "#2c2c2c");

    if (e.target.value === '' || re.test(e.target.value)) {
      setmobile(e.target.value);

      if (e.target.value) {
        clear = 0;
      }
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

    if (submitClick == 1) {
      return false;
    }

    $(e.currentTarget).addClass("btn--loading");

    if (fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (lisencenumber == "") {
      $(".pLisence").css("color", "#d32f2f");
      $(".txtLisence").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (plateenumber == "") {
      $(".pPlate").css("color", "#d32f2f");
      $(".txtPlate").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (profile == "") {
      $(".divProfile").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (driver == "") {
      $(".divDriver").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (nbi == "") {
      $(".divNbi").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (orcr == "") {
      $(".divOcr").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (vehicle == "") {
      $(".pVehicle").css("color", "#d32f2f");
      $(".txtVehicle").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (password == passwordconfirm) {} else {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (password.length < 6 || password.length > 16) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      $(".pError").show();
      submitClick = 0;
    } else {
      $(".pError").hide();
      submitClick = 0;
    }

    if (clear == 0) {
      submitClick = 1;
      console.log("submitting");
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
        $("#driverModal").modal("hide");
        successMessage();
        resetValue();
        $(".btn").removeClass("btn--loading");
        submitClick = 0;
      })["catch"](function (err) {
        console.log(err);
        $("#driverModal").css("z-index", "99");
        $(".modal-backdrop").hide();
        errorMessage();
        $(".btn").removeClass("btn--loading");
        submitClick = 0;
      });
    }
  }

  function successMessage() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
      style: {
        width: "450px",
        padding: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row align-items-center",
      style: {
        borderLeft: "3px solid #00C853"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "Image/success.png",
      style: {
        width: "32px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "col-lg-10",
      style: {
        textAlign: "left"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pError",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 15
      }
    }, "Success"), __jsx("p", {
      className: "pErrorSub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 15
      }
    }, "Account succesfully created. You may now login."))))));
  }

  function resetValue() {
    setfname("");
    setmname("");
    setlname("");
    setemail("");
    setmobile("");
    setaddress("");
    setzip("");
    setpassword("");
    setpasswordconfirm("");
    setvehicle("");
    setplatenumber("");
    setlisencenumber("");
    setProfilename("");
    setprofile("");
    setDriverlisence("");
    setDriver("");
    setNbiclearance("");
    setNbi("");
    setOcrclearance("");
    setOcr("");
  }

  function errorMessage() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
      style: {
        width: "450px",
        padding: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row align-items-center",
      style: {
        borderLeft: "3px solid #00C853"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "Image/error.png",
      style: {
        width: "32px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "col-lg-10",
      style: {
        textAlign: "left"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pError",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 15
      }
    }, "Error"), __jsx("p", {
      className: "pErrorSub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 15
      }
    }, "Email is not available or already registered."))))));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
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
      lineNumber: 521,
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
      lineNumber: 525,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
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
      lineNumber: 538,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    "data-toggle": "modal",
    "data-target": "#driverModal",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
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
      lineNumber: 559,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
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
      lineNumber: 564,
      columnNumber: 19
    }
  }, "Support")))))), __jsx("div", {
    className: "conDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
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
      lineNumber: 575,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-12 col-12 align-self-top ",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    style: {
      padding: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/apple.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 21
    }
  }, "Download on the ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 39
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 23
    }
  }, "App Store")))), __jsx("div", {
    className: "col-lg-12",
    style: {
      padding: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/playstore.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 21
    }
  }, "Get it on ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 23
    }
  }, "Play Store")))))), __jsx("div", {
    className: "col-lg-3 col-sm-12 col-12",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/phone1.png",
    className: "img-fluid imgPhone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/phone.gif",
    className: "img-fluid imgGif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: "pMaasahan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 15
    }
  }, "MAAASAHAN")), __jsx("div", {
    className: "col-lg-5 colDelivery ",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/deliveryguy.png",
    className: "img-fluid imgDel mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "container-fluid conDriver2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "Image/bar.png",
    className: "imgBar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      marginRight: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logoblack.png",
    className: "img-fluid",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/easyapp.png",
    className: "img-fluid",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divBoxCarousel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "carouselExampleIndicators",
    className: "carousel slide",
    "data-ride": "carousel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "carousel-indicators",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 19
    }
  }, __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": 0,
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 21
    }
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 21
    }
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "carousel-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "carousel-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "pCarouselTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 23
    }
  }, "Step 1"), __jsx("p", {
    className: "pCarouselContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 23
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")), __jsx("div", {
    className: "carousel-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "pCarouselTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 23
    }
  }, "Step 2"), __jsx("p", {
    className: "pCarouselContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 23
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")), __jsx("div", {
    className: "carousel-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "pCarouselTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 23
    }
  }, "Step 3"), __jsx("p", {
    className: "pCarouselContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 23
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")))))), __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/phonehand.png",
    className: "img-fluid mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "container-fluid conStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/step1.jpg",
    className: "img-fluid imgStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pStepTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 17
    }
  }, "RIDER"), __jsx("p", {
    className: "pStepsub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/step2.jpg",
    className: "img-fluid imgStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pStepTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 17
    }
  }, "DELIVER"), __jsx("p", {
    className: "pStepsub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/step3.jpg",
    className: "img-fluid imgStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pStepTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 17
    }
  }, "FAQS"), __jsx("p", {
    className: "pStepsub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")))))), __jsx("div", {
    className: "container-fluid conAbout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/artwork.jpg",
    className: "img-fluid imgArtwork",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "pArtwork",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divAbout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAboutus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 17
    }
  }, "ABOUT US"), __jsx("p", {
    className: "pAboutusSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")))))), __jsx("div", {
    className: "container-fluid conFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "ulFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 17
    }
  }, "COMPANY")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 17
    }
  }, "CONTACT US")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
      columnNumber: 17
    }
  }, "POLICIES")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 17
    }
  }, "TERM & CONDITION")))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-center pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 13
    }
  }, "\xA9 2020 JGO Philippines. - All Rights")))), __jsx("div", {
    className: "modal fade",
    id: "driverModal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-driver modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body modalDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pModalTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 15
    }
  }, "Jgo - Driver registration form"), __jsx("p", {
    className: "pModalTitleSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 15
    }
  }, "Fill-up all the requird fields. After you submit we will send a link to your email for driver online training."), __jsx("hr", {
    style: {
      backgroundColor: "#414141",
      boder: "1px solid #414141"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
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
      lineNumber: 840,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    value: fname,
    onChange: fname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    value: mname,
    onChange: mname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
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
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    value: lname,
    className: "txtDriver txtLname",
    onChange: lname_change,
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
      lineNumber: 868,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 19
    }
  }, "Email"), __jsx("input", {
    type: "text",
    value: email,
    className: "txtDriver txtEmail",
    onChange: email_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    value: mobile,
    className: "txtDriver txtMobile",
    onChange: mobile_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
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
      lineNumber: 888,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 19
    }
  }, "Address"), __jsx("input", {
    type: "text",
    value: address,
    className: "txtDriver",
    onChange: address_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
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
      lineNumber: 917,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
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
      lineNumber: 926,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 19
    }
  }, "Zip Code"), __jsx("input", {
    value: zip,
    type: "text",
    className: "txtDriver",
    onChange: zip_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    value: password,
    type: "password",
    className: "txtDriver txtPassword",
    onChange: password_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 19
    }
  }, "Password must be 6-16 characters.")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pConfirmPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    value: passwordconfirm,
    className: "txtDriver txtConfirmPass",
    onChange: passwordconfirm_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pVehicle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    value: vehicle,
    className: "txtDriver txtVehicle",
    onChange: vehicle_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPlate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    value: plateenumber,
    className: "txtDriver txtPlate",
    onChange: plate_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLisence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    value: lisencenumber,
    className: "txtDriver txtLisence",
    onChange: lisence_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
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
      lineNumber: 999,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divProfile text-center",
    onClick: onBtnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 21
    }
  }, profile_name))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
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
      lineNumber: 1020,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divDriver text-center",
    onClick: onBtnClick1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
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
      lineNumber: 1040,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
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
      lineNumber: 1043,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divNbi text-center",
    onClick: onBtnClick2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 21
    }
  }, nbi_clearance))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
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
      lineNumber: 1064,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divOcr text-center",
    onClick: onBtnClick3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
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
      lineNumber: 1084,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btnSubmitDriver",
    onClick: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 19
    }
  }, "SIGNUP", __jsx("span", {
    style: {
      marginLeft: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 23
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 23
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 23
    }
  }))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLmpzIl0sIm5hbWVzIjpbImRyaXZlciIsImNsZWFyIiwic3VibWl0Q2xpY2siLCJSZWFjdCIsInVzZVN0YXRlIiwiZm5hbWUiLCJzZXRmbmFtZSIsImxuYW1lIiwic2V0bG5hbWUiLCJtbmFtZSIsInNldG1uYW1lIiwiZW1haWwiLCJzZXRlbWFpbCIsIm1vYmlsZSIsInNldG1vYmlsZSIsImFkZHJlc3MiLCJzZXRhZGRyZXNzIiwicGFzc3dvcmQiLCJzZXRwYXNzd29yZCIsInBhc3N3b3JkY29uZmlybSIsInNldHBhc3N3b3JkY29uZmlybSIsImxpc2VuY2VudW1iZXIiLCJzZXRsaXNlbmNlbnVtYmVyIiwidmVoaWNsZSIsInNldHZlaGljbGUiLCJ6aXAiLCJzZXR6aXAiLCJwcm92aW5jZWQiLCJzZXRwcm92aW5jZWQiLCJjaXR5Iiwic2V0Y2l0eSIsImNpdHlfZHJvcGRvd24iLCJzZXRjaXR5ZHJvcGRvd24iLCJwbGF0ZWVudW1iZXIiLCJzZXRwbGF0ZW51bWJlciIsInByb2ZpbGUiLCJzZXRwcm9maWxlIiwic2V0RHJpdmVyIiwibmJpIiwic2V0TmJpIiwib3JjciIsInNldE9jciIsInByb2ZpbGVfbmFtZSIsInNldFByb2ZpbGVuYW1lIiwiZHJpdmVyX2xpc2VuY2UiLCJzZXREcml2ZXJsaXNlbmNlIiwibmJpX2NsZWFyYW5jZSIsInNldE5iaWNsZWFyYW5jZSIsIm9jcl9jbGVhcmFuY2UiLCJzZXRPY3JjbGVhcmFuY2UiLCJpbnB1dEZpbGVSZWYiLCJ1c2VSZWYiLCJpbnB1dEZpbGVSZWYxIiwiaW5wdXRGaWxlUmVmMiIsImlucHV0RmlsZVJlZjMiLCJvbkJ0bkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwib25CdG5DbGljazEiLCJvbkJ0bkNsaWNrMiIsIm9uQnRuQ2xpY2szIiwiaGFuZGxlRmlsZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiJCIsImNzcyIsImhhbmRsZUZpbGUxIiwiaGFuZGxlRmlsZTIiLCJoYW5kbGVGaWxlMyIsImN1c3RvbVN0eWxlczEiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwicmVnaW9ucyIsInJlcXVpcmUiLCJwcm92aW5jZSIsImNpdGllcyIsInZhbHVlIiwicmVnaW9uc19hcGkiLCJzZXRSZWdpb24iLCJwcm92aW5jZV9hcGkiLCJzZXRQcm92aW5jZSIsImNpdGllc19hcGkiLCJzZXRDaXRpZXMiLCJyZWdpb25fY2hhbmdlIiwic2V0UmVnaW9uQ2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwic2V0UHJvdmluY2VDaGFuZ2UiLCJjaXRpZXNfY2hhbmdlIiwic2V0Q2l0aWVzQ2hhbmdlIiwiSGFuZGxlQ2hhbmdlUmVnaW9uIiwiZGF0YSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsIm1hcCIsImQiLCJpZCIsImtleSIsImxhYmVsIiwiSGFuZGxlQ2hhbmdlUHJvdmluY2UiLCJjb25zb2xlIiwibG9nIiwiSGFuZGxlQ2hhbmdlQ2l0eSIsImdldERhdGEiLCJkYXRhX3JlZ2lvbnMiLCJ1c2VFZmZlY3QiLCJmbmFtZV9jaGFuZ2UiLCJtbmFtZV9jaGFuZ2UiLCJsbmFtZV9jaGFuZ2UiLCJlbWFpbF9jaGFuZ2UiLCJtb2JpbGVfY2hhbmdlIiwicmUiLCJ0ZXN0IiwicGFzc3dvcmRfY2hhbmdlIiwicGFzc3dvcmRjb25maXJtX2NoYW5nZSIsImxpc2VuY2VfY2hhbmdlIiwiemlwX2NoYW5nZSIsInBsYXRlX2NoYW5nZSIsInZlaGljbGVfY2hhbmdlIiwiYWRkcmVzc19jaGFuZ2UiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGVuZ3RoIiwic2hvdyIsImhpZGUiLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJhcHBlbmQiLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwibW9kYWwiLCJzdWNjZXNzTWVzc2FnZSIsInJlc2V0VmFsdWUiLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJzd2FsIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9kZXIiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsQ0FBbEI7O0FBRmdCLHdCQUdVQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhWO0FBQUE7QUFBQSxNQUdUQyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFBQSx5QkFJVUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKVjtBQUFBO0FBQUEsTUFJVEcsS0FKUztBQUFBLE1BSUZDLFFBSkU7O0FBQUEseUJBS1VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFY7QUFBQTtBQUFBLE1BS1RLLEtBTFM7QUFBQSxNQUtGQyxRQUxFOztBQUFBLHlCQU1VUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5WO0FBQUE7QUFBQSxNQU1UTyxLQU5TO0FBQUEsTUFNRkMsUUFORTs7QUFBQSx5QkFPWVQsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FQWjtBQUFBO0FBQUEsTUFPVFMsTUFQUztBQUFBLE1BT0RDLFNBUEM7O0FBQUEsMEJBUWNYLDRDQUFLLENBQUNDLFFBQU4sQ0FB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QUFBbUMsV0FBTyxFQUFFcUQsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFO0FBQU0sU0FBSyxFQUFFO0FBQUU2QixnQkFBVSxFQUFFO0FBQWQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBRkYsQ0FERixDQURGLENBaFFGLENBREYsQ0FKRixDQVJGLENBelNGLENBREY7QUF5a0JEOztHQXRrQ1FySyxNOztBQXdrQ01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci45Yzk3MGQwNTMyYzQ5ZjkyM2FkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGRyaXZlcigpIHtcclxuICB2YXIgY2xlYXIgPSAwO1xyXG4gIHZhciBzdWJtaXRDbGljayA9IDA7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRmbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG5hbWUsIHNldGxuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttbmFtZSwgc2V0bW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9iaWxlLCBzZXRtb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldGFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmRjb25maXJtLCBzZXRwYXNzd29yZGNvbmZpcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc2VuY2VudW1iZXIsIHNldGxpc2VuY2VudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZlaGljbGUsIHNldHZlaGljbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ppcCwgc2V0emlwXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm92aW5jZWQsIHNldHByb3ZpbmNlZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eSwgc2V0Y2l0eV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eV9kcm9wZG93biwgc2V0Y2l0eWRyb3Bkb3duXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGF0ZWVudW1iZXIsIHNldHBsYXRlbnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRwcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkcml2ZXIsIHNldERyaXZlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmJpLCBzZXROYmldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29yY3IsIHNldE9jcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3Byb2ZpbGVfbmFtZSwgc2V0UHJvZmlsZW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RyaXZlcl9saXNlbmNlLCBzZXREcml2ZXJsaXNlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYmlfY2xlYXJhbmNlLCBzZXROYmljbGVhcmFuY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29jcl9jbGVhcmFuY2UsIHNldE9jcmNsZWFyYW5jZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjEgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkJ0bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2sxID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMiA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjIuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazMgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYzLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWxlKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcm9maWxlbmFtZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0cHJvZmlsZShmaWxlKTtcclxuICAgICQoXCIuZGl2UHJvZmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXREcml2ZXJsaXNlbmNlKGZpbGUubmFtZSk7XHJcbiAgICBzZXREcml2ZXIoZmlsZSk7XHJcbiAgICAkKFwiLmRpdkRyaXZlclwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXROYmljbGVhcmFuY2UoZmlsZS5uYW1lKTtcclxuICAgIHNldE5iaShmaWxlKTtcclxuICAgICQoXCIuZGl2TmJpXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0T2NyKGZpbGUpO1xyXG4gICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuICBjb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbnNfYXBpLCBzZXRSZWdpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwcm92aW5jZV9hcGksIHNldFByb3ZpbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY2l0aWVzX2FwaSwgc2V0Q2l0aWVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbl9jaGFuZ2UsIHNldFJlZ2lvbkNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VfY2hhbmdlLCBzZXRQcm92aW5jZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0aWVzX2NoYW5nZSwgc2V0Q2l0aWVzQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICB0cnkge1xyXG4gICAgc2V0UmVnaW9uQ2hhbmdlKGUudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHNldFByb3ZpbmNlKGRhdGEpO1xyXG4gICB9IGNhdGNoKGUpIHtcclxuXHJcbiAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhbmRsZUNoYW5nZVByb3ZpbmNlKGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldHByb3ZpbmNlZChlLmxhYmVsKTtcclxuICAgICAgc2V0UHJvdmluY2VDaGFuZ2UoZS52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjaXRpZXNcclxuICAgICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5wcm92aW5jZSA9PT0gZS5pZClcclxuICAgICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgICAgdmFsdWU6IGQubmFtZSxcclxuICAgICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICBzZXRDaXRpZXMoZGF0YSk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7IFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlQ2l0eShlKSB7XHJcbiAgIHRyeSB7XHJcbiAgICBzZXRjaXR5ZHJvcGRvd24oZS52YWx1ZS5sYWJlbCk7XHJcbiAgICBzZXRjaXR5KGUubGFiZWwpO1xyXG4gICB9Y2F0Y2goZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7IFxyXG4gICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YV9yZWdpb25zID0gcmVnaW9ucy5tYXAoKGQpID0+ICh7XHJcbiAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgIH0pKTtcclxuICAgIHNldFJlZ2lvbihkYXRhX3JlZ2lvbnMpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGZuYW1lX2NoYW5nZShlKSB7XHJcbiAgICBzZXRmbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAkKFwiLnBGbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRGbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbW5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldG1uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxuYW1lX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBMbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRMbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRsbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBlbWFpbF9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wRW1haWxcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0ZW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbW9iaWxlX2NoYW5nZShlKSB7XHJcbiAgICBjb25zdCByZSA9IC9eWzAtOVxcYl0rJC87XHJcbiAgICAkKFwiLnBNb2JpbGVcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0TW9iaWxlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycgfHwgcmUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgc2V0bW9iaWxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgY2xlYXIgPSAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBhc3N3b3JkX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRwYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwYXNzd29yZGNvbmZpcm1fY2hhbmdlKGUpIHtcclxuICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dENvbmZpcm1QYXNzXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIHNldHBhc3N3b3JkY29uZmlybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsaXNlbmNlX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBMaXNlbmNlXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dExpc2VuY2VcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0bGlzZW5jZW51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB6aXBfY2hhbmdlKGUpIHtcclxuICAgIHNldHppcChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwbGF0ZV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wUGxhdGVcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0UGxhdGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0cGxhdGVudW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gdmVoaWNsZV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wVmVoaWNsZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRWZWhpY2xlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIHNldHZlaGljbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkcmVzc19jaGFuZ2UoZSkge1xyXG4gICAgc2V0YWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBpZiAoc3VibWl0Q2xpY2sgPT0gMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICBpZiAoZm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Rm5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobG5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TG5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRNb2JpbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkY29uZmlybSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChsaXNlbmNlbnVtYmVyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTGlzZW5jZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TGlzZW5jZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChwbGF0ZWVudW1iZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQbGF0ZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGxhdGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvZmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIuZGl2UHJvZmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChkcml2ZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdkRyaXZlclwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChuYmkgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdk5iaVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChvcmNyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZlaGljbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBWZWhpY2xlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRWZWhpY2xlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgICAgc3VibWl0Q2xpY2sgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZCA9PSBwYXNzd29yZGNvbmZpcm0pIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBwYXNzd29yZC5sZW5ndGggPiAxNikge1xyXG4gICAgICAkKFwiLnBDb25maXJtUGFzc1wiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAkKFwiLnBFcnJvclwiKS5zaG93KCk7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucEVycm9yXCIpLmhpZGUoKTtcclxuICAgICAgc3VibWl0Q2xpY2sgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGVhciA9PSAwKSB7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0aW5nXCIpO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIGZuYW1lKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgbG5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCBtbmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcInByb2ZpbGVfcGljXCIsIHByb2ZpbGUsIHByb2ZpbGUubmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIGVtYWlsKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIG1vYmlsZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgYWRkcmVzcyk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgcHJvdmluY2VkKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgY2l0eSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHppcCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHBhc3N3b3JkKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHBhc3N3b3JkY29uZmlybSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyaXZlcl9saWNlbnNlXCIsIGRyaXZlciwgZHJpdmVyLm5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJ2ZWhpY2xlX3R5cGVcIiwgdmVoaWNsZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBsYXRlX25vXCIsIHBsYXRlZW51bWJlcik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImxpY2Vuc2Vfbm9cIiwgbGlzZW5jZW51bWJlcik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcIm5iaV9jbGVhcmFuY2VcIiwgbmJpLCBuYmkubmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcIm9yY3JcIiwgb3Jjciwgb3Jjci5uYW1lKTtcclxuXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyLWRyaXZlclwiO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGFwaVVybCwgZm9ybWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNkcml2ZXJNb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICBzdWNjZXNzTWVzc2FnZSgpO1xyXG4gICAgICAgICAgcmVzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICQoXCIjZHJpdmVyTW9kYWxcIikuY3NzKFwiei1pbmRleFwiLCBcIjk5XCIpO1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1iYWNrZHJvcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UoKTtcclxuICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAgICAgc3VibWl0Q2xpY2sgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VjY2Vzc01lc3NhZ2UoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjMDBDODUzXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvc3VjY2Vzcy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U3VjY2VzczwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgc3VjY2VzZnVsbHkgY3JlYXRlZC4gWW91IG1heSBub3cgbG9naW4uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldFZhbHVlKCkge1xyXG4gICAgc2V0Zm5hbWUoXCJcIik7XHJcbiAgICBzZXRtbmFtZShcIlwiKTtcclxuICAgIHNldGxuYW1lKFwiXCIpO1xyXG4gICAgc2V0ZW1haWwoXCJcIik7XHJcbiAgICBzZXRtb2JpbGUoXCJcIik7XHJcbiAgICBzZXRhZGRyZXNzKFwiXCIpO1xyXG4gICAgc2V0emlwKFwiXCIpO1xyXG4gICAgc2V0cGFzc3dvcmQoXCJcIik7XHJcbiAgICBzZXRwYXNzd29yZGNvbmZpcm0oXCJcIik7XHJcbiAgICBzZXR2ZWhpY2xlKFwiXCIpO1xyXG4gICAgc2V0cGxhdGVudW1iZXIoXCJcIik7XHJcbiAgICBzZXRsaXNlbmNlbnVtYmVyKFwiXCIpO1xyXG4gICAgc2V0UHJvZmlsZW5hbWUoXCJcIik7XHJcbiAgICBzZXRwcm9maWxlKFwiXCIpO1xyXG4gICAgc2V0RHJpdmVybGlzZW5jZShcIlwiKTtcclxuICAgIHNldERyaXZlcihcIlwiKTtcclxuICAgIHNldE5iaWNsZWFyYW5jZShcIlwiKTtcclxuICAgIHNldE5iaShcIlwiKTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShcIlwiKTtcclxuICAgIHNldE9jcihcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVycm9yTWVzc2FnZSgpIHtcclxuICAgIHN3YWwoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICMwMEM4NTNcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9lcnJvci5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBFbWFpbCBpcyBub3QgYXZhaWxhYmxlIG9yIGFscmVhZHkgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG1haW5Db25Ecml2ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIGZpeGVkLXRvcFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHggMjBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZHJpdmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJlIGEgSkdPIERyaXZlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCb29rIGEgRGVsaXZlcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uRHJpdmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNTBweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTEyIGNvbC0xMiBhbGlnbi1zZWxmLXRvcCBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ29taW5nXCI+Q09NSU5HIFNPT048L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgc3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCdXR0b24gZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2FwcGxlLnBuZ1wiIGNsYXNzTmFtZT1cImltZ0Rvd25sb2FkXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBvbiB0aGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BcHAgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJ1dHRvbiBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3BsYXlzdG9yZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nRG93bmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBpdCBvbiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0xMiBjb2wtMTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Bob25lMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nUGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9waG9uZS5naWZcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nR2lmXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1hYXNhaGFuXCI+TUFBQVNBSEFOPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2xEZWxpdmVyeSBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9kZWxpdmVyeWd1eS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0RlbCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbkRyaXZlcjJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2Jhci5wbmdcIiBjbGFzc05hbWU9XCJpbWdCYXJcIj48L2ltZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvYmxhY2sucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9lYXN5YXBwLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJveENhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNsaWRlLXRvPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNsaWRlLXRvPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2xpZGUtdG89ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJvdXNlbFRpdGxlXCI+U3RlcCAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcm91c2VsQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb2RvIGNvbnNlcXVhdC5EdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcm91c2VsVGl0bGVcIj5TdGVwIDI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2Fyb3VzZWxDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vZG8gY29uc2VxdWF0LkR1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2Fyb3VzZWxUaXRsZVwiPlN0ZXAgMzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJvdXNlbENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9kbyBjb25zZXF1YXQuRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9waG9uZWhhbmQucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvblN0ZXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U3RlcFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9zdGVwMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nU3RlcFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFN0ZXBUaXRsZVwiPlJJREVSPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFN0ZXBzdWJcIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkXHJcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U3RlcFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9zdGVwMi5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nU3RlcFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFN0ZXBUaXRsZVwiPkRFTElWRVI8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwU3RlcHN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWRcclxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3N0ZXAzLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdTdGVwXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwU3RlcFRpdGxlXCI+RkFRUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBTdGVwc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZFxyXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvci5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbkFib3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvYXJ0d29yay5qcGdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0FydHdvcmtcIlxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQXJ0d29ya1wiPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWJvdXR1c1wiPkFCT1VUIFVTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFib3V0dXNTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkXHJcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgICAgIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY29cclxuICAgICAgICAgICAgICAgICAgbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuRHVpcyBhdXRlXHJcbiAgICAgICAgICAgICAgICAgIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtXHJcbiAgICAgICAgICAgICAgICAgIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0XHJcbiAgICAgICAgICAgICAgICAgIGN1cGlkYXRhdCBub24gcHJvaWRlbnRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbkZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0xvZ29cIj48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxGb290ZXJcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlGb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPkNPTVBBTlk8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlGb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPkNPTlRBQ1QgVVM8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlGb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPlBPTElDSUVTPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5URVJNICYgQ09ORElUSU9OPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBGb290ZXJcIj5cclxuICAgICAgICAgICAgICDCqSAyMDIwIEpHTyBQaGlsaXBwaW5lcy4gLSBBbGwgUmlnaHRzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZHJpdmVyTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctZHJpdmVyIG1vZGFsLWxnXCJcclxuICAgICAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBtb2RhbERyaXZlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlXCI+SmdvIC0gRHJpdmVyIHJlZ2lzdHJhdGlvbiBmb3JtPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBGaWxsLXVwIGFsbCB0aGUgcmVxdWlyZCBmaWVsZHMuIEFmdGVyIHlvdSBzdWJtaXQgd2Ugd2lsbCBzZW5kIGFcclxuICAgICAgICAgICAgICAgIGxpbmsgdG8geW91ciBlbWFpbCBmb3IgZHJpdmVyIG9ubGluZSB0cmFpbmluZy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQxNDE0MVwiLFxyXG4gICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgIzQxNDE0MVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9ocj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEZuYW1lXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRGbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Zm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ZuYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHttbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bW5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMbmFtZVwiPkxhc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2xuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRMbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2xuYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRW1haWxcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTW9iaWxlXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge21vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bW9iaWxlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+QWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17YWRkcmVzc19jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZVJlZ2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VQcm92aW5jZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZUNpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ppcH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17emlwX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGFzc3dvcmRcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dvcmRfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+UGFzc3dvcmQgbXVzdCBiZSA2LTE2IGNoYXJhY3RlcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcENvbmZpcm1QYXNzXCI+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZGNvbmZpcm19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dENvbmZpcm1QYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dvcmRjb25maXJtX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwVmVoaWNsZVwiPlZlaGljbGUgVHlwZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZlaGljbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFZlaGljbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ZWhpY2xlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGxhdGVcIj5QbGF0ZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwbGF0ZWVudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGxhdGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMaXNlbmNlXCI+TGlzZW5jZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtsaXNlbmNlbnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRMaXNlbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bGlzZW5jZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm9maWxlIFBpY3R1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZShlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdlByb2ZpbGUgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntwcm9maWxlX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+RHJpdmVyIExpY2Vuc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTEoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYxfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2RHJpdmVyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e2RyaXZlcl9saXNlbmNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5OQkkgQ2xlYXJhbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUyKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmMn1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdk5iaSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGljazJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PntuYmlfY2xlYXJhbmNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk9SQ1I8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2T2NyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrM31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e29jcl9jbGVhcmFuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXREcml2ZXJcIiBvbkNsaWNrPXtzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNJR05VUFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJpdmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9