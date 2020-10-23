webpackHotUpdate_N_E("pages/index",{

/***/ "./component/login.js":
/*!****************************!*\
  !*** ./component/login.js ***!
  \****************************/
/*! exports provided: login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var regions = __webpack_require__(/*! philippines/regions */ "./node_modules/philippines/regions.json");

var province = __webpack_require__(/*! philippines/provinces */ "./node_modules/philippines/provinces.json");

var cities = __webpack_require__(/*! philippines/cities */ "./node_modules/philippines/cities.json");

var customStyles1 = {
  control: function control(base, state) {
    var _objectSpread2;

    return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {
      background: "rgb(28, 30, 33)",
      color: "white",
      border: "1px solid #707070",
      boxShadow: "none",
      borderRadius: "5px",
      width: "115%",
      padding: "2px",
      marginTop: "5px"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread2, "boxShadow", state.isFocused ? "#EDC728" : null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread2, "&:hover", {
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

function successMessage() {
  _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
    style: {
      width: "450px",
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row align-items-center",
    style: {
      borderLeft: "3px solid #00C853"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/success.png",
    style: {
      width: "32px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-10",
    style: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Success"), __jsx("p", {
    className: "pErrorSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Account succesfully created. You may now login."))))));
}

function btntry() {
  document.getElementById("aUsername").innerHTML = "ASdas";
}

var login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(login, _Component);

  var _super = _createSuper(login);

  function login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, login);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "inputFileRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["createRef"])(null));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onKeyPress", function (e) {
      if (e.which === 13) {
        _this.login();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onBtnClick", function () {
      return _this.inputFileRef.current.click();
    });

    _this.state = {
      Email: "",
      Password: "",
      regions_api: {
        value: "",
        name: ""
      },
      province_api: {
        value: "",
        name: ""
      },
      cities_api: {
        value: "",
        name: ""
      },
      region_change: "",
      province_change: "",
      fname: "",
      lname: "",
      mname: "",
      profile: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      province: "",
      country: "",
      zip: "",
      password: "",
      passwordconfirm: "",
      city_dropdown: "",
      errorEmail: "",
      errorFname: "",
      errorLname: "",
      activeEmail: "",
      profile_name: ""
    };
    _this.login = _this.login.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(login, [{
    key: "messageError",
    value: function messageError() {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row align-items-center",
        style: {
          borderLeft: "3px solid #c62828"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "Image/warning.png",
        style: {
          width: "32px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
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
          lineNumber: 117,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      }, "The information you entered is not recognized."))))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var data_regions = regions.map(function (d) {
        return {
          value: d.key,
          label: d.name
        };
      });
      this.setState({
        regions_api: data_regions
      });
    }
  }, {
    key: "Email",
    value: function Email(event) {
      this.setState({
        Email: event.target.value
      });
    }
  }, {
    key: "Password",
    value: function Password(event) {
      this.setState({
        Password: event.target.value
      });
    }
  }, {
    key: "login",
    value: function login(event) {
      var _this2 = this;

      if (this.state.Password == "") {
        $(".txtPassword").css("border-color", "#d32f2f");
      }

      if (this.state.Email == "") {
        $(".txtEmail").css("border-color", "#d32f2f");
      } else {
        $(".btn").addClass("btn--loading");
        var options = {
          headers: {
            Accept: "application/json, */*",
            "content-type": "text/plain;charset=utf-8"
          }
        };
        var API_URL = "https://examples.cloudflareworkers.com/demos/demoapi/";
        var apiUrl = "https://staging-dashboard.jgo.com.ph/login";
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(API_URL + apiUrl, {
          email: this.state.Email,
          password: this.state.Password
        }, options).then(function (result) {
          if (result.request.status == "200") {
            localStorage.setItem("token", JSON.stringify(result.data.data));
            console.log(result.data);
            document.getElementById("username").innerHTML = result.data.data.user.name;
            $(".colMain").hide();
            $(".colLogin").hide();
            $(".colDeliver").show();
            $(".btn").removeClass("btn--loading");
          }
        })["catch"](function (err) {
          $(".btn").removeClass("btn--loading");

          _this2.messageError();
        });
      }
    }
  }, {
    key: "HandleChangeRegion",
    value: function HandleChangeRegion(e) {
      this.setState({
        region_change: e.value
      });
      var data = province.filter(function (person) {
        return person.region === e.value;
      }).map(function (d) {
        return {
          id: d.key,
          value: d.key,
          label: d.name
        };
      });
      this.setState({
        province_api: data
      });
    }
  }, {
    key: "HandleChangeProvince",
    value: function HandleChangeProvince(e) {
      this.setState({
        province_change: e.value
      });
      this.setState({
        province: e.label
      });
      var data = cities.filter(function (person) {
        return person.province === e.id;
      }).map(function (d) {
        return {
          value: d.name,
          label: d.name
        };
      });
      this.setState({
        cities_api: data
      });
    }
  }, {
    key: "lname",
    value: function lname(event) {
      this.setState({
        lname: event.target.value
      });

      if (event.target.value == "") {} else {}
    }
  }, {
    key: "fname",
    value: function fname(event) {
      this.setState({
        fname: event.target.value
      });

      if (event.target.value == "") {} else {}
    }
  }, {
    key: "mname",
    value: function mname(event) {
      this.setState({
        mname: event.target.value
      });
    }
  }, {
    key: "email",
    value: function email(event) {
      this.setState({
        email: event.target.value
      });

      if (event.target.value == "") {} else {}
    }
  }, {
    key: "mobile",
    value: function mobile(event) {
      this.setState({
        mobile: event.target.value
      });

      if (event.target.value == "") {} else {}
    }
  }, {
    key: "address",
    value: function address(event) {
      this.setState({
        address: event.target.value
      });
    }
  }, {
    key: "city",
    value: function city(event) {
      this.setState({
        city_dropdown: event.value.label
      });
      this.setState({
        city: event.value
      });
      console.log(event.value);
    }
  }, {
    key: "country",
    value: function country(event) {
      this.setState({
        country: event.target.value
      });
    }
  }, {
    key: "zip",
    value: function zip(event) {
      this.setState({
        zip: event.target.value
      });
    }
  }, {
    key: "password",
    value: function password(event) {
      this.setState({
        password: event.target.value
      });

      if (event.target.value == "") {} else {}
    }
  }, {
    key: "passwordConfirm",
    value: function passwordConfirm(event) {
      this.setState({
        passwordconfirm: event.target.value
      });
    }
  }, {
    key: "handleFile",
    value: function handleFile(e) {
      var file = e.target.files[0];
      console.log(file);
      this.setState({
        profile_name: file.name
      });
      this.setState({
        profile: file
      });
    }
  }, {
    key: "register",
    value: function register(e) {
      var _this3 = this;

      e.preventDefault();
      $(e.currentTarget).addClass("btn--loading");

      if (this.state.fname == "") {
        $(".pFname").css("color", "#d32f2f");
        $(".txtFname").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.lname == "") {
        $(".pLname").css("color", "#d32f2f");
        $(".txtLname").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.mobile == "") {
        $(".pMobile").css("color", "#d32f2f");
        $(".txtMobile").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.email == "") {
        $(".pEmail").css("color", "#d32f2f");
        $(".txtEmail").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.password == "") {
        $(".pPassword").css("color", "#d32f2f");
        $(".txtPassword").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.password != this.state.passwordconfirm) {
        $(".pConfirmPass").css("color", "#d32f2f");
        $(".txtConfirmPass").css("borderColor", "#d32f2f");
        $(".pPassword").css("color", "#d32f2f");
        $(".txtPassword").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.password < 6 || this.state.password > 16) {
        $(".pConfirmPass").css("color", "#d32f2f");
        $(".txtConfirmPass").css("borderColor", "#d32f2f");
        $(".pPassword").css("color", "#d32f2f");
        $(".txtPassword").css("borderColor", "#d32f2f");
        $(".pError").show();
        $(".btn").removeClass("btn--loading");
      } else {
        var options = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json"
          }
        };

        if (this.state.profile) {} else {
          this.setState({
            profile: ""
          });
        }

        var file = this.state.profile;
        var formdata = new FormData();

        try {
          formdata.set("fname", this.state.fname);
          formdata.set("lname", this.state.lname);
          formdata.set("mname", this.state.mname);
          formdata.append("profile_pic", this.state.profile, this.state.profile.name);
          formdata.set("email", this.state.email);
          formdata.set("mobile_no", this.state.mobile);
          formdata.set("address", this.state.address);
          formdata.set("city", this.state.city);
          formdata.set("state", this.state.province);
          formdata.set("country", "Philippines");
          formdata.set("zip", this.state.zip);
          formdata.set("password", this.state.password);
          formdata.set("password_confirmation", this.state.password);
        } catch (e) {
          formdata.set("fname", this.state.fname);
          formdata.set("lname", this.state.lname);
          formdata.set("mname", this.state.mname);
          formdata.append("profile_pic", "");
          formdata.set("email", this.state.email);
          formdata.set("mobile_no", this.state.mobile);
          formdata.set("address", this.state.address);
          formdata.set("city", this.state.city);
          formdata.set("state", this.state.province);
          formdata.set("country", "Philippines");
          formdata.set("zip", this.state.zip);
          formdata.set("password", this.state.password);
          formdata.set("password_confirmation", this.state.passwordconfirm);
        }

        var config = {
          onUploadProgress: function onUploadProgress(progressEvent) {
            console.log(Math.floor(progressEvent.loaded * 100 / progressEvent.total));
          }
        };
        var apiUrl = "http://localhost:8000/api/auth/register";
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(apiUrl, formdata, options, config).then(function (result) {
          $("#exampleModal").modal("hide");

          if (result.status == "201") {
            $(".btn").removeClass("btn--loading");
            successMessage();
          }
        })["catch"](function (err) {
          $(".btn").removeClass("btn--loading");

          try {
            $("#exampleModal").css("z-index", "1");
            $(".modal-backdrop").hide();

            _this3.setState({
              errorEmail: err.response.data.errors.email[0]
            });

            if (err.response.data.errors.email[0]) {}
          } catch (e) {}
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "col-lg-6 colLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        value: this.state.Email,
        className: "txt txtEmail",
        placeholder: "email",
        onChange: this.Email.bind(this),
        onKeyPress: this.onKeyPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 13
        }
      }), __jsx("input", {
        type: "password",
        value: this.state.Password,
        className: "txt txtPassword",
        placeholder: "password",
        onChange: this.Password.bind(this),
        onKeyPress: this.onKeyPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        style: {
          marginTop: "-10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 19
        }
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "Image/facebook.png",
        style: {
          width: "15px",
          marginRight: "5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "Image/google.png",
        style: {
          width: "15px",
          marginRight: "5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegister",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 11
        }
      }, "sign-up")), __jsx("div", {
        className: "modal fade",
        id: "modalRegister",
        tabIndex: -1,
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 17
        }
      }, "Jgo - Registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 17
        }
      }, "Let's get you all set up so you can verify your personal account and start booking."), __jsx("hr", {
        style: {
          backgroundColor: "#414141",
          boder: "1px solid #414141"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "row",
        style: {
          marginTop: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 21
        }
      }, "First Name"), __jsx("input", {
        type: "text",
        className: "txtDriver txtFname",
        value: this.state.fname,
        onChange: this.fname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 21
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txtDriver",
        value: this.state.mname,
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        value: this.state.lname,
        className: "txtDriver txtLname",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 21
        }
      }, "Email"), __jsx("input", {
        type: "text",
        value: this.state.email,
        className: "txtDriver txtEmail",
        onChange: this.email.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 21
        }
      }, "Mobile Number"), __jsx("input", {
        type: "text",
        value: this.state.mobile,
        className: "txtDriver txtMobile",
        onChange: this.mobile.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 21
        }
      }, "Address"), __jsx("input", {
        type: "text",
        value: this.state.address,
        className: "txtDriver",
        onChange: this.address.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 21
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 21
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 21
        }
      }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.cities_api,
        styles: customStyles1,
        ref: "city",
        value: this.state.city_dropdown,
        onChange: this.city.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }
      }, "Country"), __jsx("input", {
        type: "text",
        className: "txtDriver",
        value: "Philippines",
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 21
        }
      }, "Zip Code"), __jsx("input", {
        value: this.state.zip,
        type: "text",
        className: "txtDriver",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 21
        }
      }, "Password"), __jsx("input", {
        value: this.state.password,
        type: "password",
        className: "txtDriver txtPassword",
        onChange: this.password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 21
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        value: this.state.passwordconfirm,
        className: "txtDriver txtConfirmPass",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 21
        }
      }, "Profile Picture"), __jsx("input", {
        onChange: function onChange(e) {
          return _this4.handleFile(e);
        },
        ref: this.inputFileRef,
        id: "file-upload",
        type: "file",
        accept: ".jpg, .png, .jpeg|image",
        style: {
          display: "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "divAttachment divProfile text-center",
        onClick: this.onBtnClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 23
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 25
        }
      }, "Drag or Browse"), " ", "a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 23
        }
      }, this.state.profile_name)))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 21
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 23
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660,
          columnNumber: 25
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 25
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 25
        }
      }))))))))));
    }
  }]);

  return login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMxIiwiY29udHJvbCIsImJhc2UiLCJzdGF0ZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInN1Y2Nlc3NNZXNzYWdlIiwic3dhbCIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJidG50cnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibG9naW4iLCJwcm9wcyIsImNyZWF0ZVJlZiIsImUiLCJ3aGljaCIsImlucHV0RmlsZVJlZiIsImN1cnJlbnQiLCJjbGljayIsIkVtYWlsIiwiUGFzc3dvcmQiLCJyZWdpb25zX2FwaSIsInZhbHVlIiwibmFtZSIsInByb3ZpbmNlX2FwaSIsImNpdGllc19hcGkiLCJyZWdpb25fY2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwiZm5hbWUiLCJsbmFtZSIsIm1uYW1lIiwicHJvZmlsZSIsImVtYWlsIiwibW9iaWxlIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJjaXR5X2Ryb3Bkb3duIiwiZXJyb3JFbWFpbCIsImVycm9yRm5hbWUiLCJlcnJvckxuYW1lIiwiYWN0aXZlRW1haWwiLCJwcm9maWxlX25hbWUiLCJiaW5kIiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIiQiLCJjc3MiLCJhZGRDbGFzcyIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQVBJX1VSTCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJyZXF1ZXN0Iiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJoaWRlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiZXJyIiwibWVzc2FnZUVycm9yIiwiZmlsdGVyIiwicGVyc29uIiwicmVnaW9uIiwiaWQiLCJmaWxlIiwiZmlsZXMiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiYXBwZW5kIiwiY29uZmlnIiwib25VcGxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsIm1vZGFsIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJvbktleVByZXNzIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2RlciIsIkhhbmRsZUNoYW5nZVJlZ2lvbiIsIkhhbmRsZUNoYW5nZVByb3ZpbmNlIiwicGFzc3dvcmRDb25maXJtIiwiaGFuZGxlRmlsZSIsImRpc3BsYXkiLCJvbkJ0bkNsaWNrIiwicmVnaXN0ZXIiLCJtYXJnaW5MZWZ0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHRCxtQkFBTyxDQUFDLHdFQUFELENBQXhCOztBQUNBLElBQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFFQSxJQUFNRyxhQUFhLEdBQUc7QUFDcEJDLFNBQU8sRUFBRSxpQkFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUE7O0FBQUEsMkNBQ0pELElBREk7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUxGLENBREYsQ0FERixDQXBLRixDQURGLENBSkYsQ0FSRixDQTFFRixDQURGO0FBaVJEO0FBcm1CSDs7QUFBQTtBQUFBLEVBQTJCQywrQ0FBM0I7QUF3bUJlekcsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDA3YmFjZjJmMjNmMGU1NTliMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCByZWdpb25zID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL3JlZ2lvbnNcIik7XHJcbmNvbnN0IHByb3ZpbmNlID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL3Byb3ZpbmNlc1wiKTtcclxuY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNzA3MDcwXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgcGFkZGluZzogXCIycHhcIixcclxuICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAuLi5wcm92aWRlZCxcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdWNjZXNzTWVzc2FnZSgpIHtcclxuICBzd2FsKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICMwMEM4NTNcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9zdWNjZXNzLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5TdWNjZXNzPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICBBY2NvdW50IHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQuIFlvdSBtYXkgbm93IGxvZ2luLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidG50cnkoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhVXNlcm5hbWVcIikuaW5uZXJIVE1MID0gXCJBU2Rhc1wiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGlucHV0RmlsZVJlZiA9IGNyZWF0ZVJlZihudWxsKTtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIEVtYWlsOiBcIlwiLFxyXG4gICAgICBQYXNzd29yZDogXCJcIixcclxuICAgICAgcmVnaW9uc19hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm92aW5jZV9hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjaXRpZXNfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcmVnaW9uX2NoYW5nZTogXCJcIixcclxuICAgICAgcHJvdmluY2VfY2hhbmdlOiBcIlwiLFxyXG4gICAgICBmbmFtZTogXCJcIixcclxuICAgICAgbG5hbWU6IFwiXCIsXHJcbiAgICAgIG1uYW1lOiBcIlwiLFxyXG4gICAgICBwcm9maWxlOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbW9iaWxlOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICBwcm92aW5jZTogXCJcIixcclxuICAgICAgY291bnRyeTogXCJcIixcclxuICAgICAgemlwOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgcGFzc3dvcmRjb25maXJtOiBcIlwiLFxyXG4gICAgICBjaXR5X2Ryb3Bkb3duOiBcIlwiLFxyXG4gICAgICBlcnJvckVtYWlsOiBcIlwiLFxyXG4gICAgICBlcnJvckZuYW1lOiBcIlwiLFxyXG4gICAgICBlcnJvckxuYW1lOiBcIlwiLFxyXG4gICAgICBhY3RpdmVFbWFpbDogXCJcIixcclxuICAgICAgcHJvZmlsZV9uYW1lOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbWVzc2FnZUVycm9yKCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI2M2MjgyOFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3dhcm5pbmcucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIGluZm9ybWF0aW9uIHlvdSBlbnRlcmVkIGlzIG5vdCByZWNvZ25pemVkLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBkYXRhX3JlZ2lvbnMgPSByZWdpb25zLm1hcCgoZCkgPT4gKHtcclxuICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlZ2lvbnNfYXBpOiBkYXRhX3JlZ2lvbnMgfSk7XHJcbiAgfVxyXG5cclxuICBFbWFpbChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIFBhc3N3b3JkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgUGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uS2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsb2dpbihldmVudCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuUGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnR4dFBhc3N3b3JkXCIpLmNzcyhcImJvcmRlci1jb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5FbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyLWNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuYnRuXCIpLmFkZENsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9leGFtcGxlcy5jbG91ZGZsYXJld29ya2Vycy5jb20vZGVtb3MvZGVtb2FwaS9cIlxyXG4gICAgICBjb25zdCBhcGlVcmwgPSBcImh0dHBzOi8vc3RhZ2luZy1kYXNoYm9hcmQuamdvLmNvbS5waC9sb2dpblwiO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFxyXG4gICAgICAgIEFQSV9VUkwgKyBhcGlVcmwsXHJcbiAgICAgICAgICB7IGVtYWlsOiB0aGlzLnN0YXRlLkVtYWlsLCBwYXNzd29yZDogdGhpcy5zdGF0ZS5QYXNzd29yZCB9LFxyXG4gICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlcXVlc3Quc3RhdHVzID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEudXNlci5uYW1lO1xyXG5cclxuICAgICAgICAgICAgJChcIi5jb2xNYWluXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5jb2xMb2dpblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29sRGVsaXZlclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlRXJyb3IoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVJlZ2lvbihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcHJvdmluY2VcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucmVnaW9uID09PSBlLnZhbHVlKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkLmtleSxcclxuICAgICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVByb3ZpbmNlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZV9jaGFuZ2U6IGUudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2U6IGUubGFiZWwgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdGllc19hcGk6IGRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBsbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZuYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgbW5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBlbWFpbChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vYmlsZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRyZXNzKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBjaXR5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eV9kcm9wZG93bjogZXZlbnQudmFsdWUubGFiZWwgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvdW50cnkoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudHJ5OiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIHppcChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmRDb25maXJtKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmRjb25maXJtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWxlKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX25hbWU6IGZpbGUubmFtZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlOiBmaWxlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25CdG5DbGljayA9ICgpID0+IHRoaXMuaW5wdXRGaWxlUmVmLmN1cnJlbnQuY2xpY2soKTtcclxuXHJcbiAgcmVnaXN0ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Rm5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmxuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dExuYW1lXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dE1vYmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dFBhc3N3b3JkXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCAhPSB0aGlzLnN0YXRlLnBhc3N3b3JkY29uZmlybSkge1xyXG4gICAgICAkKFwiLnBDb25maXJtUGFzc1wiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA8IDYgfHwgdGhpcy5zdGF0ZS5wYXNzd29yZCA+IDE2KSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIucEVycm9yXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByb2ZpbGUpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZTogXCJcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZmlsZSA9IHRoaXMuc3RhdGUucHJvZmlsZTtcclxuICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgdGhpcy5zdGF0ZS5mbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgdGhpcy5zdGF0ZS5sbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgdGhpcy5zdGF0ZS5tbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKFxyXG4gICAgICAgICAgXCJwcm9maWxlX3BpY1wiLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLm5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJwcm9maWxlX3BpY1wiLCBcIlwiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCB0aGlzLnN0YXRlLmVtYWlsKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5hZGRyZXNzKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY291bnRyeVwiLCBcIlBoaWxpcHBpbmVzXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB0aGlzLnN0YXRlLnppcCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHRoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgTWF0aC5mbG9vcigocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyXCI7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucywgY29uZmlnKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwiMjAxXCIpIHtcclxuICAgICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1iYWNrZHJvcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvckVtYWlsOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWxbMF0gfSk7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWxbMF0pIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xMb2dpblwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicExvZ2luXCI+TG9nLWluPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hMb2dpblwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuRW1haWx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5FbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzc31cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLlBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuUGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3N9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcmdvdFwiPmZvcmdvdCBwYXNzd29yZD88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMubG9naW59PlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwT3JcIj5vcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuRmFjZWJvb2tcIiBvbkNsaWNrPXtidG50cnl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBmYWNlYm9va1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkdvb2dsZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTaWduLWluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb250XCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvcD5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBTaWdudXBcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWxSZWdpc3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHNpZ24tdXBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICAgIGlkPVwibW9kYWxSZWdpc3RlclwiXHJcbiAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWRyaXZlciBtb2RhbC1sZ1wiXHJcbiAgICAgICAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBtb2RhbERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVcIj5KZ28gLSBSZWdpc3RyYXRpb24gZm9ybTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIExldCdzIGdldCB5b3UgYWxsIHNldCB1cCBzbyB5b3UgY2FuIHZlcmlmeSB5b3VyIHBlcnNvbmFsXHJcbiAgICAgICAgICAgICAgICAgIGFjY291bnQgYW5kIHN0YXJ0IGJvb2tpbmcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQxNDE0MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9ocj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEZuYW1lXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRGbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubW5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMbmFtZVwiPkxhc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmxuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRW1haWxcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTW9iaWxlXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubW9iaWxlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFkZHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VSZWdpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnByb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVByb3ZpbmNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5X2Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2l0eS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnppcH1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy56aXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGFzc3dvcmRcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlBhc3N3b3JkIG11c3QgYmUgNi0xNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dENvbmZpcm1QYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZmlybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvZmlsZSBQaWN0dXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZQcm9maWxlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CdG5DbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9maWxlX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=