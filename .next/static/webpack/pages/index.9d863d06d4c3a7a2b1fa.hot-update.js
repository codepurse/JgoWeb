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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
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
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Success"), __jsx("p", {
    className: "pErrorSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      activeEmail: ""
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
          lineNumber: 118,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
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
          lineNumber: 120,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
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
          lineNumber: 125,
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
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
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

      $(event.currentTarget).addClass('btn--loading');
      var options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json"
        }
      };
      var apiUrl = "http://localhost:8000/api/auth/login";
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
          $(".btn").removeClass('btn--loading');
        }
      })["catch"](function (err) {
        $(".btn").removeClass('btn--loading');

        _this2.messageError();
      });
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

      if (event.target.value == "") {
        $(".pLname").show();
      } else {
        $(".pLname").hide();
      }
    }
  }, {
    key: "fname",
    value: function fname(event) {
      this.setState({
        fname: event.target.value
      });

      if (event.target.value == "") {
        $(".pFname").show();
      } else {
        $(".pFname").hide();
      }
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

      if (event.target.value == "") {
        $(".pEmail").show();
      } else {
        $(".pEmail").hide();
      }
    }
  }, {
    key: "mobile",
    value: function mobile(event) {
      this.setState({
        mobile: event.target.value
      });

      if (event.target.value == "") {
        $(".pMobile").show();
      } else {
        $(".pMobile").hide();
      }
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

      if (event.target.value == "") {
        $(".pPassword").show();
      } else {
        $(".pPassword").hide();
      }
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
      this.setState({
        profile: file
      });
    }
  }, {
    key: "register",
    value: function register(e) {
      var _this3 = this;

      e.preventDefault();
      $(e.currentTarget).addClass('btn--loading');

      if (this.state.fname == "") {
        $(".pFname").show();
        $(".btn").removeClass('btn--loading');
      }

      if (this.state.lname == "") {
        $(".pLname").show();
        $(".btn").removeClass('btn--loading');
      }

      if (this.state.mobile == "") {
        $(".pMobile").show();
        $(".btn").removeClass('btn--loading');
      }

      if (this.state.email == "") {
        $(".pEmail").show();
        $(".btn").removeClass('btn--loading');
      }

      if (this.state.password == "") {
        $(".pPassword").show();
        $(".btn").removeClass('btn--loading');
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
            $(".btn").removeClass('btn--loading');
            successMessage();
          }
        })["catch"](function (err) {
          $(".btn").removeClass('btn--loading');

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
          lineNumber: 382,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        className: "txt txtEmail",
        placeholder: "email",
        onChange: this.Email.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 13
        }
      }), __jsx("input", {
        type: "password",
        className: "txt txtPassword",
        placeholder: "password",
        onChange: this.Password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 19
        }
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
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
          lineNumber: 425,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
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
          lineNumber: 432,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegiser",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 11
        }
      }, "sign-up")), __jsx("div", {
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
          lineNumber: 447,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 17
        }
      }, "JGO - Registration Form")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pAccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 17
        }
      }, "ACCOUNT INFORMATION"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 21
        }
      }, "First Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        value: this.state.fname,
        onChange: this.fname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 21
        }
      }, "First name is required")), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 21
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 21
        }
      }, "Last name is required"))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 21
        }
      }, "Address 1"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        placeholder: "House/Unit Number, Building Name, Street Name",
        onChange: this.address.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 21
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        instanceId: "1",
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 21
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        instanceId: "2",
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 21
        }
      }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        instanceId: "3",
        options: this.state.cities_api,
        styles: customStyles,
        ref: "city",
        value: this.state.city_dropdown,
        onChange: this.city.bind(this),
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
          lineNumber: 539,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 21
        }
      }, "Postal"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 21
        }
      }, "Country"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        value: "Philippines",
        disabled: true,
        onChange: this.country.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 21
        }
      }, "Email Address"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        value: this.state.email,
        onChange: this.email.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 21
        }
      }, "Email is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 21
        }
      }, "Mobile Number"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        value: this.state.mobile,
        onChange: this.mobile.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 21
        }
      }, "Mobile number is required"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 21
        }
      }, "Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        password: this.state.password,
        onChange: this.password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 21
        }
      }, "Password is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
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
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 21
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
          lineNumber: 607,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fa fa-cloud-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 25
        }
      }), " Choose File"), __jsx("input", {
        id: "file-upload",
        type: "file",
        accept: ".jpg, .png, .jpeg|image",
        onChange: function onChange(e) {
          return _this4.handleFile(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 23
        }
      })), __jsx("p", {
        className: "pImage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 21
        }
      }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
        className: "modal-footer text-center mx-auto d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "btn btnSubmitModal",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 17
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 19
        }
      }))))))), __jsx("div", {
        className: "modal fade",
        id: "modalRegister",
        tabIndex: -1,
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 15
        }
      }, "Jgo - Driver registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
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
          lineNumber: 667,
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
          lineNumber: 673,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 19
        }
      }, "First Name"), __jsx("input", {
        type: "text",
        className: "txtDriver txtFname",
        value: this.state.fname,
        onChange: this.fname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684,
          columnNumber: 19
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txtDriver",
        value: this.state.mname,
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 19
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        value: this.state.lname,
        className: "txtDriver txtLname",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 19
        }
      }, "Email"), __jsx("input", {
        type: "text",
        value: this.state.email,
        className: "txtDriver txtEmail",
        onChange: this.email.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711,
          columnNumber: 19
        }
      }, "Mobile Number"), __jsx("input", {
        type: "text",
        value: this.state.mobile,
        className: "txtDriver txtMobile",
        onChange: this.mobile.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712,
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
          lineNumber: 721,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723,
          columnNumber: 19
        }
      }, "Address"), __jsx("input", {
        type: "text",
        value: this.state.address,
        className: "txtDriver",
        onChange: this.address.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732,
          columnNumber: 19
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740,
          columnNumber: 19
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748,
          columnNumber: 19
        }
      }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.cities_api,
        styles: customStyles,
        ref: "city",
        value: this.state.city_dropdown,
        onChange: this.city.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760,
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
          lineNumber: 761,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769,
          columnNumber: 19
        }
      }, "Zip Code"), __jsx("input", {
        value: this.state.zip,
        type: "text",
        className: "txtDriver",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781,
          columnNumber: 19
        }
      }, "Password"), __jsx("input", {
        value: this.state.password,
        type: "password",
        className: "txtDriver txtPassword",
        onChange: this.password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782,
          columnNumber: 19
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788,
          columnNumber: 19
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791,
          columnNumber: 19
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        value: this.state.passwordconfirm,
        className: "txtDriver txtConfirmPass",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 803,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804,
          columnNumber: 19
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809,
          columnNumber: 23
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3VzdG9tU3R5bGVzMSIsImJhY2tncm91bmQiLCJjb2xvciIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInN1Y2Nlc3NNZXNzYWdlIiwic3dhbCIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJidG50cnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibG9naW4iLCJwcm9wcyIsIkVtYWlsIiwiUGFzc3dvcmQiLCJyZWdpb25zX2FwaSIsInZhbHVlIiwibmFtZSIsInByb3ZpbmNlX2FwaSIsImNpdGllc19hcGkiLCJyZWdpb25fY2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwiZm5hbWUiLCJsbmFtZSIsIm1uYW1lIiwicHJvZmlsZSIsImVtYWlsIiwibW9iaWxlIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJjaXR5X2Ryb3Bkb3duIiwiZXJyb3JFbWFpbCIsImVycm9yRm5hbWUiLCJlcnJvckxuYW1lIiwiYWN0aXZlRW1haWwiLCJiaW5kIiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJyZXF1ZXN0Iiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJoaWRlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiZXJyIiwibWVzc2FnZUVycm9yIiwiZSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsImlkIiwiZmlsZSIsImZpbGVzIiwicHJldmVudERlZmF1bHQiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiYXBwZW5kIiwiY29uZmlnIiwib25VcGxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsIm1vZGFsIiwiY3NzIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJtYXJnaW5SaWdodCIsInpJbmRleCIsIkhhbmRsZUNoYW5nZVJlZ2lvbiIsIkhhbmRsZUNoYW5nZVByb3ZpbmNlIiwicGFzc3dvcmRDb25maXJtIiwicG9zaXRpb24iLCJoYW5kbGVGaWxlIiwicmVnaXN0ZXIiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9kZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBeEI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUVBLElBQU1HLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLGlCQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwyQ0FDSkQsSUFESTtBQUVQRSxZQUFNLEVBQUUsbUJBRkQ7QUFHUEMsZUFBUyxFQUFFLE1BSEo7QUFJUEMsa0JBQVksRUFBRSxNQUpQO0FBS1BDLFdBQUssRUFBRSxNQUxB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K0NBQTNCO0FBOHVCZWpHLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkODYzZDA2ZDRjM2E3YTJiMWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyLCB1c2VSZWYgIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuY29uc3QgcHJvdmluY2UgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcHJvdmluY2VzXCIpO1xyXG5jb25zdCBjaXRpZXMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvY2l0aWVzXCIpO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgcGFkZGluZzogXCI0LjVweFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMmMyYzJjXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgcGFkZGluZzogXCIycHhcIixcclxuICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAuLi5wcm92aWRlZCxcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdWNjZXNzTWVzc2FnZSgpIHtcclxuICBzd2FsKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICMwMEM4NTNcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9zdWNjZXNzLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5TdWNjZXNzPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICBBY2NvdW50IHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQuIFlvdSBtYXkgbm93IGxvZ2luLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidG50cnkoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhVXNlcm5hbWVcIikuaW5uZXJIVE1MID0gXCJBU2Rhc1wiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBFbWFpbDogXCJcIixcclxuICAgICAgUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHJlZ2lvbnNfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcHJvdmluY2VfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgY2l0aWVzX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZ2lvbl9jaGFuZ2U6IFwiXCIsXHJcbiAgICAgIHByb3ZpbmNlX2NoYW5nZTogXCJcIixcclxuICAgICAgZm5hbWU6IFwiXCIsXHJcbiAgICAgIGxuYW1lOiBcIlwiLFxyXG4gICAgICBtbmFtZTogXCJcIixcclxuICAgICAgcHJvZmlsZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1vYmlsZTogXCJcIixcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgY2l0eTogXCJcIixcclxuICAgICAgcHJvdmluY2U6IFwiXCIsXHJcbiAgICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICAgIHppcDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkY29uZmlybTogXCJcIixcclxuICAgICAgY2l0eV9kcm9wZG93bjogXCJcIixcclxuICAgICAgZXJyb3JFbWFpbDogXCJcIixcclxuICAgICAgZXJyb3JGbmFtZTogXCJcIixcclxuICAgICAgZXJyb3JMbmFtZTogXCJcIixcclxuICAgICAgYWN0aXZlRW1haWw6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBtZXNzYWdlRXJyb3IoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjYzYyODI4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvd2FybmluZy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgaW5mb3JtYXRpb24geW91IGVudGVyZWQgaXMgbm90IHJlY29nbml6ZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uc19hcGk6IGRhdGFfcmVnaW9ucyB9KTtcclxuICB9XHJcblxyXG4gIEVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgRW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgUGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBQYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oZXZlbnQpIHtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpblwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgYXBpVXJsLFxyXG4gICAgICAgIHsgZW1haWw6IHRoaXMuc3RhdGUuRW1haWwsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLlBhc3N3b3JkIH0sXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnJlcXVlc3Quc3RhdHVzID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuZGF0YSkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLnVzZXIubmFtZTtcclxuICAgICAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmNvbExvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuY29sRGVsaXZlclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VFcnJvcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVJlZ2lvbihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcHJvdmluY2VcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucmVnaW9uID09PSBlLnZhbHVlKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkLmtleSxcclxuICAgICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVByb3ZpbmNlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZV9jaGFuZ2U6IGUudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2U6IGUubGFiZWwgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdGllc19hcGk6IGRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBsbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBtbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vYmlsZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRyZXNzKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBjaXR5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eV9kcm9wZG93bjogZXZlbnQudmFsdWUubGFiZWwgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvdW50cnkoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudHJ5OiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIHppcChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkY29uZmlybTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGU6IGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmxuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZmlsZSkge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlOiBcIlwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBmaWxlID0gdGhpcy5zdGF0ZS5wcm9maWxlO1xyXG4gICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXHJcbiAgICAgICAgICBcInByb2ZpbGVfcGljXCIsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGUsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGUubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZW1haWxcIiwgdGhpcy5zdGF0ZS5lbWFpbCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIHRoaXMuc3RhdGUubW9iaWxlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIHRoaXMuc3RhdGUuYWRkcmVzcyk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY2l0eVwiLCB0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInN0YXRlXCIsIHRoaXMuc3RhdGUucHJvdmluY2UpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJ6aXBcIiwgdGhpcy5zdGF0ZS56aXApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIHRoaXMuc3RhdGUuZm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIHRoaXMuc3RhdGUubG5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1uYW1lXCIsIHRoaXMuc3RhdGUubW5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZChcInByb2ZpbGVfcGljXCIsIFwiXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZGNvbmZpcm0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVnaXN0ZXJcIjtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zLCBjb25maWcpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCIyMDFcIikge1xyXG4gICAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikuY3NzKFwiei1pbmRleFwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JFbWFpbDogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsWzBdIH0pO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsWzBdKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sTG9naW5cIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBMb2dpblwiPkxvZy1pbjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94TG9naW5cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuRW1haWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5QYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9yZ290XCI+Zm9yZ290IHBhc3N3b3JkPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0XCIgb25DbGljaz17dGhpcy5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBPclwiPm9yPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5GYWNlYm9va1wiIG9uQ2xpY2s9e2J0bnRyeX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9mYWNlYm9vay5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU2lnbi1pbiB3aXRoIGZhY2Vib29rXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuR29vZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERvbnRcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/PC9wPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicFNpZ251cFwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbFJlZ2lzZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBzaWduLXVwXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgICBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIEpHTyAtIFJlZ2lzdHJhdGlvbiBGb3JtXHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFjY291bnRcIj5BQ0NPVU5UIElORk9STUFUSU9OPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwRm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IG5hbWUgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmxuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwTG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExhc3QgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5BZGRyZXNzIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3VzZS9Vbml0IE51bWJlciwgQnVpbGRpbmcgTmFtZSwgU3RyZWV0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWRkcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VSZWdpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnByb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVByb3ZpbmNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY2l0aWVzX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5X2Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2l0eS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qb3N0YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuemlwLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNvdW50cnkuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5FbWFpbCBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBFbWFpbFwiPkVtYWlsIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tb2JpbGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE1vYmlsZSBudW1iZXIgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcFBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZmlybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+RHJpdmVyIExpc2VuY2UgKFBob3RvKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3VkLXVwbG9hZFwiPjwvaT4gQ2hvb3NlIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRmlsZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOb3RlOiBPbmx5IC5qcGcsIC5qcGVnIGFuZCAucG5nIGZpbGVzIGFyZSBhbGxvd2VkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyIHRleHQtY2VudGVyIG14LWF1dG8gZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0TW9kYWxcIiBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgU0lHTlVQXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZSA9IHt7bWFyZ2luTGVmdDogXCI0MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwibW9kYWxSZWdpc3RlclwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1kcml2ZXIgbW9kYWwtbGdcIlxyXG4gICAgICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1vZGFsRHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVcIj5KZ28gLSBEcml2ZXIgcmVnaXN0cmF0aW9uIGZvcm08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVTdWJcIj5cclxuICAgICAgICAgICAgICAgIEZpbGwtdXAgYWxsIHRoZSByZXF1aXJkIGZpZWxkcy4gQWZ0ZXIgeW91IHN1Ym1pdCB3ZSB3aWxsIHNlbmQgYVxyXG4gICAgICAgICAgICAgICAgbGluayB0byB5b3VyIGVtYWlsIGZvciBkcml2ZXIgb25saW5lIHRyYWluaW5nLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExuYW1lXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5sbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFkZHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnJlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VSZWdpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wcm92aW5jZV9hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUHJvdmluY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2l0eS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlBoaWxpcHBpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+WmlwIENvZGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnppcH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy56aXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGFzc3dvcmRcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5QYXNzd29yZCBtdXN0IGJlIDYtMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwQ29uZmlybVBhc3NcIj5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkY29uZmlybX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Q29uZmlybVBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZmlybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdERyaXZlclwiIG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU0lHTlVQXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9