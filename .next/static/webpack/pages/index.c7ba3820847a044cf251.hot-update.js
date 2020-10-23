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
        var apiUrl = "https://staging-dashboard.jgo.com.ph/login";
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(apiUrl, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMxIiwiY29udHJvbCIsImJhc2UiLCJzdGF0ZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInN1Y2Nlc3NNZXNzYWdlIiwic3dhbCIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJidG50cnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibG9naW4iLCJwcm9wcyIsImNyZWF0ZVJlZiIsImUiLCJ3aGljaCIsImlucHV0RmlsZVJlZiIsImN1cnJlbnQiLCJjbGljayIsIkVtYWlsIiwiUGFzc3dvcmQiLCJyZWdpb25zX2FwaSIsInZhbHVlIiwibmFtZSIsInByb3ZpbmNlX2FwaSIsImNpdGllc19hcGkiLCJyZWdpb25fY2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwiZm5hbWUiLCJsbmFtZSIsIm1uYW1lIiwicHJvZmlsZSIsImVtYWlsIiwibW9iaWxlIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJjaXR5X2Ryb3Bkb3duIiwiZXJyb3JFbWFpbCIsImVycm9yRm5hbWUiLCJlcnJvckxuYW1lIiwiYWN0aXZlRW1haWwiLCJwcm9maWxlX25hbWUiLCJiaW5kIiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIiQiLCJjc3MiLCJhZGRDbGFzcyIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYXBpVXJsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsInJlcXVlc3QiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImhpZGUiLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJlcnIiLCJtZXNzYWdlRXJyb3IiLCJmaWx0ZXIiLCJwZXJzb24iLCJyZWdpb24iLCJpZCIsImZpbGUiLCJmaWxlcyIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJhcHBlbmQiLCJjb25maWciLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsIk1hdGgiLCJmbG9vciIsImxvYWRlZCIsInRvdGFsIiwibW9kYWwiLCJyZXNwb25zZSIsImVycm9ycyIsIm9uS2V5UHJlc3MiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvZGVyIiwiSGFuZGxlQ2hhbmdlUmVnaW9uIiwiSGFuZGxlQ2hhbmdlUHJvdmluY2UiLCJwYXNzd29yZENvbmZpcm0iLCJoYW5kbGVGaWxlIiwiZGlzcGxheSIsIm9uQnRuQ2xpY2siLCJyZWdpc3RlciIsIm1hcmdpbkxlZnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBeEI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUVBLElBQU1HLGFBQWEsR0FBRztBQUNwQkMsU0FBTyxFQUFFLGlCQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQTs7QUFBQSwyQ0FDSkQsSUFESTtBQUVQRSxnQkFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLENBTEYsQ0FERixDQURGLENBcEtGLENBREYsQ0FKRixDQVJGLENBMUVGLENBREY7QUFpUkQ7QUFybUJIOztBQUFBO0FBQUEsRUFBMkJDLCtDQUEzQjtBQXdtQmV4RyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2JhMzgyMDg0N2EwNDRjZjI1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuY29uc3QgcHJvdmluY2UgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcHJvdmluY2VzXCIpO1xyXG5jb25zdCBjaXRpZXMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvY2l0aWVzXCIpO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2IoMjgsIDMwLCAzMylcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCIxMTUlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICB9KSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN1Y2Nlc3NNZXNzYWdlKCkge1xyXG4gIHN3YWwoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgIzAwQzg1M1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3N1Y2Nlc3MucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlN1Y2Nlc3M8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgIEFjY291bnQgc3VjY2VzZnVsbHkgY3JlYXRlZC4gWW91IG1heSBub3cgbG9naW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ0bnRyeSgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFVc2VybmFtZVwiKS5pbm5lckhUTUwgPSBcIkFTZGFzXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaW5wdXRGaWxlUmVmID0gY3JlYXRlUmVmKG51bGwpO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgRW1haWw6IFwiXCIsXHJcbiAgICAgIFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICByZWdpb25zX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3ZpbmNlX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNpdGllc19hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICByZWdpb25fY2hhbmdlOiBcIlwiLFxyXG4gICAgICBwcm92aW5jZV9jaGFuZ2U6IFwiXCIsXHJcbiAgICAgIGZuYW1lOiBcIlwiLFxyXG4gICAgICBsbmFtZTogXCJcIixcclxuICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgIHByb2ZpbGU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtb2JpbGU6IFwiXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgIHByb3ZpbmNlOiBcIlwiLFxyXG4gICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgICB6aXA6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZGNvbmZpcm06IFwiXCIsXHJcbiAgICAgIGNpdHlfZHJvcGRvd246IFwiXCIsXHJcbiAgICAgIGVycm9yRW1haWw6IFwiXCIsXHJcbiAgICAgIGVycm9yRm5hbWU6IFwiXCIsXHJcbiAgICAgIGVycm9yTG5hbWU6IFwiXCIsXHJcbiAgICAgIGFjdGl2ZUVtYWlsOiBcIlwiLFxyXG4gICAgICBwcm9maWxlX25hbWU6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBtZXNzYWdlRXJyb3IoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjYzYyODI4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvd2FybmluZy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgaW5mb3JtYXRpb24geW91IGVudGVyZWQgaXMgbm90IHJlY29nbml6ZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uc19hcGk6IGRhdGFfcmVnaW9ucyB9KTtcclxuICB9XHJcblxyXG4gIEVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgRW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgUGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBQYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzcyA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxvZ2luKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5QYXNzd29yZCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyLWNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLkVtYWlsID09IFwiXCIpIHtcclxuICAgICAgJChcIi50eHRFbWFpbFwiKS5jc3MoXCJib3JkZXItY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5idG5cIikuYWRkQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sICovKlwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9zdGFnaW5nLWRhc2hib2FyZC5qZ28uY29tLnBoL2xvZ2luXCI7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXHJcbiAgICAgICAgIGFwaVVybCxcclxuICAgICAgICAgIHsgZW1haWw6IHRoaXMuc3RhdGUuRW1haWwsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLlBhc3N3b3JkIH0sXHJcbiAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQucmVxdWVzdC5zdGF0dXMgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLmRhdGEpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS51c2VyLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbE1haW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbExvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5jb2xEZWxpdmVyXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VFcnJvcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUmVnaW9uKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25fY2hhbmdlOiBlLnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwcm92aW5jZVxyXG4gICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5yZWdpb24gPT09IGUudmFsdWUpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgaWQ6IGQua2V5LFxyXG4gICAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2VfYXBpOiBkYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZTogZS5sYWJlbCB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBjaXRpZXNcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucHJvdmluY2UgPT09IGUuaWQpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgdmFsdWU6IGQubmFtZSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0aWVzX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGxuYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgZm5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH1cclxuICBtbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgbW9iaWxlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZHJlc3MoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGNpdHkoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5X2Ryb3Bkb3duOiBldmVudC52YWx1ZS5sYWJlbCB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBldmVudC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnZhbHVlKTtcclxuICB9XHJcbiAgY291bnRyeShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50cnk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgemlwKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgemlwOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZENvbmZpcm0oZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbGUoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfbmFtZTogZmlsZS5uYW1lIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGU6IGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkJ0bkNsaWNrID0gKCkgPT4gdGhpcy5pbnB1dEZpbGVSZWYuY3VycmVudC5jbGljaygpO1xyXG5cclxuICByZWdpc3RlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEZuYW1lXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRGbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUubG5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TG5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TW9iaWxlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRFbWFpbFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkICE9IHRoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtKSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkIDwgNiB8fCB0aGlzLnN0YXRlLnBhc3N3b3JkID4gMTYpIHtcclxuICAgICAgJChcIi5wQ29uZmlybVBhc3NcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dENvbmZpcm1QYXNzXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuY3NzKFwiY29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnR4dFBhc3N3b3JkXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi5wRXJyb3JcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZmlsZSkge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlOiBcIlwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBmaWxlID0gdGhpcy5zdGF0ZS5wcm9maWxlO1xyXG4gICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXHJcbiAgICAgICAgICBcInByb2ZpbGVfcGljXCIsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGUsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGUubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZW1haWxcIiwgdGhpcy5zdGF0ZS5lbWFpbCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIHRoaXMuc3RhdGUubW9iaWxlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIHRoaXMuc3RhdGUuYWRkcmVzcyk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY2l0eVwiLCB0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInN0YXRlXCIsIHRoaXMuc3RhdGUucHJvdmluY2UpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJ6aXBcIiwgdGhpcy5zdGF0ZS56aXApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIHRoaXMuc3RhdGUuZm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIHRoaXMuc3RhdGUubG5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1uYW1lXCIsIHRoaXMuc3RhdGUubW5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZChcInByb2ZpbGVfcGljXCIsIFwiXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZGNvbmZpcm0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVnaXN0ZXJcIjtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zLCBjb25maWcpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCIyMDFcIikge1xyXG4gICAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLmNzcyhcInotaW5kZXhcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWJhY2tkcm9wXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yRW1haWw6IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5lbWFpbFswXSB9KTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5lbWFpbFswXSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbExvZ2luXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTG9naW5cIj5Mb2ctaW48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveExvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5FbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0RW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5QYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzc31cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCItMTBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9yZ290XCI+Zm9yZ290IHBhc3N3b3JkPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0XCIgb25DbGljaz17dGhpcy5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBPclwiPm9yPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5GYWNlYm9va1wiIG9uQ2xpY2s9e2J0bnRyeX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9mYWNlYm9vay5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU2lnbi1pbiB3aXRoIGZhY2Vib29rXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuR29vZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERvbnRcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/PC9wPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicFNpZ251cFwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbFJlZ2lzdGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgc2lnbi11cFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgICAgaWQ9XCJtb2RhbFJlZ2lzdGVyXCJcclxuICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctZHJpdmVyIG1vZGFsLWxnXCJcclxuICAgICAgICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1vZGFsRHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVwiPkpnbyAtIFJlZ2lzdHJhdGlvbiBmb3JtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgTGV0J3MgZ2V0IHlvdSBhbGwgc2V0IHVwIHNvIHlvdSBjYW4gdmVyaWZ5IHlvdXIgcGVyc29uYWxcclxuICAgICAgICAgICAgICAgICAgYWNjb3VudCBhbmQgc3RhcnQgYm9va2luZy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICM0MTQxNDFcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExuYW1lXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubG5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0RW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dE1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tb2JpbGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+QWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWRkcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5yZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVJlZ2lvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUHJvdmluY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNpdGllc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaXR5LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q291bnRyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlBoaWxpcHBpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlppcCBDb2RlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnppcC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQYXNzd29yZFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+UGFzc3dvcmQgbXVzdCBiZSA2LTE2IGNoYXJhY3RlcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcENvbmZpcm1QYXNzXCI+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZGNvbmZpcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Q29uZmlybVBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm9maWxlIFBpY3R1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRmlsZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pbnB1dEZpbGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZBdHRhY2htZW50IGRpdlByb2ZpbGUgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJ0bkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYSBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2ZpbGVfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZWdpc3Rlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNJR05VUFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==