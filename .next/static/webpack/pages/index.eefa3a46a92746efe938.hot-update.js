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
var inputFileRef = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRef"])(null);

var onBtnClick = function onBtnClick() {
  inputFileRef.current.click();
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
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Success"), __jsx("p", {
    className: "pErrorSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
          lineNumber: 121,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
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
          lineNumber: 123,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
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
          lineNumber: 128,
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
          lineNumber: 130,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
          lineNumber: 385,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
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
          lineNumber: 388,
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
          lineNumber: 394,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 19
        }
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
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
          lineNumber: 428,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
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
          lineNumber: 435,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegiser",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
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
          lineNumber: 450,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 17
        }
      }, "JGO - Registration Form")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pAccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 17
        }
      }, "ACCOUNT INFORMATION"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
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
          lineNumber: 471,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 21
        }
      }, "First name is required")), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 21
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
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
          lineNumber: 501,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
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
          lineNumber: 504,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
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
          lineNumber: 513,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
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
          lineNumber: 522,
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
          lineNumber: 530,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
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
          lineNumber: 533,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 21
        }
      }, "Postal"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
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
          lineNumber: 552,
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
          lineNumber: 561,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
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
          lineNumber: 564,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 21
        }
      }, "Email is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
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
          lineNumber: 574,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 21
        }
      }, "Mobile number is required"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587,
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
          lineNumber: 588,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 21
        }
      }, "Password is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
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
          lineNumber: 610,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fa fa-cloud-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
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
          lineNumber: 625,
          columnNumber: 23
        }
      })), __jsx("p", {
        className: "pImage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 21
        }
      }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
        className: "modal-footer text-center mx-auto d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "btn btnSubmitModal",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 17
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644,
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
          lineNumber: 651,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 15
        }
      }, "Jgo - Driver registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
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
          lineNumber: 670,
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
          lineNumber: 676,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
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
          lineNumber: 679,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687,
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
          lineNumber: 688,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 695,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
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
          lineNumber: 697,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705,
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
          lineNumber: 706,
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
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
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
          lineNumber: 715,
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
          lineNumber: 724,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726,
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
          lineNumber: 727,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735,
          columnNumber: 19
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 19
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751,
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
          lineNumber: 752,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
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
          lineNumber: 764,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772,
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
          lineNumber: 773,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784,
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
          lineNumber: 785,
          columnNumber: 19
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791,
          columnNumber: 19
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794,
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
          lineNumber: 795,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807,
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
          lineNumber: 808,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divProfile text-center",
        onClick: onBtnClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824,
          columnNumber: 21
        }
      }, profile_name)))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832,
          columnNumber: 19
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiaW5wdXRGaWxlUmVmIiwidXNlUmVmIiwib25CdG5DbGljayIsImN1cnJlbnQiLCJjbGljayIsImN1c3RvbVN0eWxlczEiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJpc0ZvY3VzZWQiLCJib3JkZXJDb2xvciIsInNpbmdsZVZhbHVlIiwicHJvdmlkZWQiLCJzdWNjZXNzTWVzc2FnZSIsInN3YWwiLCJib3JkZXJMZWZ0IiwidGV4dEFsaWduIiwiYnRudHJ5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImxvZ2luIiwicHJvcHMiLCJFbWFpbCIsIlBhc3N3b3JkIiwicmVnaW9uc19hcGkiLCJ2YWx1ZSIsIm5hbWUiLCJwcm92aW5jZV9hcGkiLCJjaXRpZXNfYXBpIiwicmVnaW9uX2NoYW5nZSIsInByb3ZpbmNlX2NoYW5nZSIsImZuYW1lIiwibG5hbWUiLCJtbmFtZSIsInByb2ZpbGUiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJjaXR5IiwiY291bnRyeSIsInppcCIsInBhc3N3b3JkIiwicGFzc3dvcmRjb25maXJtIiwiY2l0eV9kcm9wZG93biIsImVycm9yRW1haWwiLCJlcnJvckZuYW1lIiwiZXJyb3JMbmFtZSIsImFjdGl2ZUVtYWlsIiwiYmluZCIsImRhdGFfcmVnaW9ucyIsIm1hcCIsImQiLCJrZXkiLCJsYWJlbCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCIkIiwiY3VycmVudFRhcmdldCIsImFkZENsYXNzIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwicmVxdWVzdCIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiaGlkZSIsInNob3ciLCJyZW1vdmVDbGFzcyIsImVyciIsIm1lc3NhZ2VFcnJvciIsImUiLCJmaWx0ZXIiLCJwZXJzb24iLCJyZWdpb24iLCJpZCIsImZpbGUiLCJmaWxlcyIsInByZXZlbnREZWZhdWx0IiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwcGVuZCIsImNvbmZpZyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwiTWF0aCIsImZsb29yIiwibG9hZGVkIiwidG90YWwiLCJtb2RhbCIsImNzcyIsInJlc3BvbnNlIiwiZXJyb3JzIiwibWFyZ2luUmlnaHQiLCJ6SW5kZXgiLCJIYW5kbGVDaGFuZ2VSZWdpb24iLCJIYW5kbGVDaGFuZ2VQcm92aW5jZSIsInBhc3N3b3JkQ29uZmlybSIsInBvc2l0aW9uIiwiaGFuZGxlRmlsZSIsInJlZ2lzdGVyIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsImJvZGVyIiwiZGlzcGxheSIsInByb2ZpbGVfbmFtZSIsInN1Ym1pdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQyx3RUFBRCxDQUF4Qjs7QUFDQSxJQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBRUEsSUFBTUcsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsaUJBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDJDQUNKRCxJ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UUFIRixDQUZGLENBREYsQ0FERixDQXRLRixDQURGLENBSkYsQ0FSQSxDQTNRRixDQURGO0FBaWREO0FBcHdCSDs7QUFBQTtBQUFBLEVBQTJCTSwrQ0FBM0I7QUF1d0JlcEcsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWVmYTNhNDZhOTI3NDZlZmU5MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIsIHVzZVJlZiAgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgcmVnaW9ucyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9yZWdpb25zXCIpO1xyXG5jb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbmNvbnN0IGNpdGllcyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9jaXRpZXNcIik7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMTUlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgfSksXHJcbn07XHJcbmNvbnN0IGlucHV0RmlsZVJlZiA9IHVzZVJlZihudWxsKTtcclxuY29uc3Qgb25CdG5DbGljayA9ICgpID0+IHtcclxuICBpbnB1dEZpbGVSZWYuY3VycmVudC5jbGljaygpO1xyXG59O1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2IoMjgsIDMwLCAzMylcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyYzJjMmNcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCIxMTUlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICB9KSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN1Y2Nlc3NNZXNzYWdlKCkge1xyXG4gIHN3YWwoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgIzAwQzg1M1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3N1Y2Nlc3MucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlN1Y2Nlc3M8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgIEFjY291bnQgc3VjY2VzZnVsbHkgY3JlYXRlZC4gWW91IG1heSBub3cgbG9naW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ0bnRyeSgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFVc2VybmFtZVwiKS5pbm5lckhUTUwgPSBcIkFTZGFzXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIEVtYWlsOiBcIlwiLFxyXG4gICAgICBQYXNzd29yZDogXCJcIixcclxuICAgICAgcmVnaW9uc19hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm92aW5jZV9hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjaXRpZXNfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcmVnaW9uX2NoYW5nZTogXCJcIixcclxuICAgICAgcHJvdmluY2VfY2hhbmdlOiBcIlwiLFxyXG4gICAgICBmbmFtZTogXCJcIixcclxuICAgICAgbG5hbWU6IFwiXCIsXHJcbiAgICAgIG1uYW1lOiBcIlwiLFxyXG4gICAgICBwcm9maWxlOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbW9iaWxlOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICBwcm92aW5jZTogXCJcIixcclxuICAgICAgY291bnRyeTogXCJcIixcclxuICAgICAgemlwOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgcGFzc3dvcmRjb25maXJtOiBcIlwiLFxyXG4gICAgICBjaXR5X2Ryb3Bkb3duOiBcIlwiLFxyXG4gICAgICBlcnJvckVtYWlsOiBcIlwiLFxyXG4gICAgICBlcnJvckZuYW1lOiBcIlwiLFxyXG4gICAgICBlcnJvckxuYW1lOiBcIlwiLFxyXG4gICAgICBhY3RpdmVFbWFpbDogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG1lc3NhZ2VFcnJvcigpIHtcclxuICAgIHN3YWwoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNjNjI4MjhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS93YXJuaW5nLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgIFRoZSBpbmZvcm1hdGlvbiB5b3UgZW50ZXJlZCBpcyBub3QgcmVjb2duaXplZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgZGF0YV9yZWdpb25zID0gcmVnaW9ucy5tYXAoKGQpID0+ICh7XHJcbiAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgIH0pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25zX2FwaTogZGF0YV9yZWdpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgRW1haWwoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBFbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBQYXNzd29yZChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbihldmVudCkge1xyXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2xvZ2luXCI7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBhcGlVcmwsXHJcbiAgICAgICAgeyBlbWFpbDogdGhpcy5zdGF0ZS5FbWFpbCwgcGFzc3dvcmQ6IHRoaXMuc3RhdGUuUGFzc3dvcmQgfSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQucmVxdWVzdC5zdGF0dXMgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEudXNlci5uYW1lO1xyXG4gICAgICAgICAgJChcIi5jb2xNYWluXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuY29sTG9naW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5jb2xEZWxpdmVyXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUVycm9yKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUmVnaW9uKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25fY2hhbmdlOiBlLnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwcm92aW5jZVxyXG4gICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5yZWdpb24gPT09IGUudmFsdWUpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgaWQ6IGQua2V5LFxyXG4gICAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2VfYXBpOiBkYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZTogZS5sYWJlbCB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBjaXRpZXNcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucHJvdmluY2UgPT09IGUuaWQpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgdmFsdWU6IGQubmFtZSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0aWVzX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGxuYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZuYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1uYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgZW1haWwoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbW9iaWxlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZHJlc3MoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGNpdHkoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5X2Ryb3Bkb3duOiBldmVudC52YWx1ZS5sYWJlbCB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBldmVudC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnZhbHVlKTtcclxuICB9XHJcbiAgY291bnRyeShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50cnk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgemlwKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgemlwOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmRDb25maXJtKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmRjb25maXJtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWxlKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZTogZmlsZSB9KTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEZuYW1lXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUubG5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRW1haWxcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcm9maWxlKSB7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGU6IFwiXCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGZpbGUgPSB0aGlzLnN0YXRlLnByb2ZpbGU7XHJcbiAgICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIHRoaXMuc3RhdGUuZm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIHRoaXMuc3RhdGUubG5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1uYW1lXCIsIHRoaXMuc3RhdGUubW5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZChcclxuICAgICAgICAgIFwicHJvZmlsZV9waWNcIixcclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZSxcclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZS5uYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCB0aGlzLnN0YXRlLmVtYWlsKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5hZGRyZXNzKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY291bnRyeVwiLCBcIlBoaWxpcHBpbmVzXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB0aGlzLnN0YXRlLnppcCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgdGhpcy5zdGF0ZS5mbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgdGhpcy5zdGF0ZS5sbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgdGhpcy5zdGF0ZS5tbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKFwicHJvZmlsZV9waWNcIiwgXCJcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZW1haWxcIiwgdGhpcy5zdGF0ZS5lbWFpbCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIHRoaXMuc3RhdGUubW9iaWxlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIHRoaXMuc3RhdGUuYWRkcmVzcyk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY2l0eVwiLCB0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInN0YXRlXCIsIHRoaXMuc3RhdGUucHJvdmluY2UpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJ6aXBcIiwgdGhpcy5zdGF0ZS56aXApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkY29uZmlybSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9yZWdpc3RlclwiO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGFwaVVybCwgZm9ybWRhdGEsIG9wdGlvbnMsIGNvbmZpZylcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcIjIwMVwiKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1iYWNrZHJvcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvckVtYWlsOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWxbMF0gfSk7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWxbMF0pIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xMb2dpblwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicExvZ2luXCI+TG9nLWluPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hMb2dpblwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5FbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLlBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBGb3Jnb3RcIj5mb3Jnb3QgcGFzc3dvcmQ/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE9yXCI+b3I8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkZhY2Vib29rXCIgb25DbGljaz17YnRudHJ5fT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIkltYWdlL2ZhY2Vib29rLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTaWduLWluIHdpdGggZmFjZWJvb2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Hb29nbGVcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU2lnbi1pbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG9udFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L3A+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwU2lnbnVwXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsUmVnaXNlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHNpZ24tdXBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgSkdPIC0gUmVnaXN0cmF0aW9uIEZvcm1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWNjb3VudFwiPkFDQ09VTlQgSU5GT1JNQVRJT048L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBGbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRmlyc3QgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubG5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBMbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBuYW1lIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkFkZHJlc3MgMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdXNlL1VuaXQgTnVtYmVyLCBCdWlsZGluZyBOYW1lLCBTdHJlZXQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZGRyZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5yZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVJlZ2lvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUHJvdmluY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaXR5LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBvc3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy56aXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY291bnRyeS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkVtYWlsIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcEVtYWlsXCI+RW1haWwgaXMgcmVxdWlyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcE1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIG51bWJlciBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Ecml2ZXIgTGlzZW5jZSAoUGhvdG8pPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCA4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvdWQtdXBsb2FkXCI+PC9pPiBDaG9vc2UgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdGU6IE9ubHkgLmpwZywgLmpwZWcgYW5kIC5wbmcgZmlsZXMgYXJlIGFsbG93ZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgdGV4dC1jZW50ZXIgbXgtYXV0byBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXRNb2RhbFwiIG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlID0ge3ttYXJnaW5MZWZ0OiBcIjQwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJtb2RhbFJlZ2lzdGVyXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWRyaXZlciBtb2RhbC1sZ1wiXHJcbiAgICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbW9kYWxEcml2ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVwiPkpnbyAtIERyaXZlciByZWdpc3RyYXRpb24gZm9ybTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVN1YlwiPlxyXG4gICAgICAgICAgICAgICAgRmlsbC11cCBhbGwgdGhlIHJlcXVpcmQgZmllbGRzLiBBZnRlciB5b3Ugc3VibWl0IHdlIHdpbGwgc2VuZCBhXHJcbiAgICAgICAgICAgICAgICBsaW5rIHRvIHlvdXIgZW1haWwgZm9yIGRyaXZlciBvbmxpbmUgdHJhaW5pbmcuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTQxNDFcIixcclxuICAgICAgICAgICAgICAgICAgYm9kZXI6IFwiMXB4IHNvbGlkICM0MTQxNDFcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvaHI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBGbmFtZVwiPkZpcnN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Rm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubW5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTG5hbWVcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmxuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEVtYWlsXCI+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0RW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcE1vYmlsZVwiPk1vYmlsZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dE1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubW9iaWxlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWRkcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVJlZ2lvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvdmluY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnByb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VQcm92aW5jZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNpdGllc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eV9kcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaXR5LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnppcC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQYXNzd29yZFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlBhc3N3b3JkIG11c3QgYmUgNi0xNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRDb25maXJtUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvZmlsZSBQaWN0dXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZQcm9maWxlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57cHJvZmlsZV9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0RHJpdmVyXCIgb25DbGljaz17c3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=