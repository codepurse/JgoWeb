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

function successMessage() {
  _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
    style: {
      width: "450px",
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
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
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Success"), __jsx("p", {
    className: "pErrorSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
          lineNumber: 94,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
          lineNumber: 96,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 101,
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
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
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
          lineNumber: 358,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
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
          lineNumber: 361,
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
          lineNumber: 367,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 19
        }
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
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
          lineNumber: 401,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
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
          lineNumber: 408,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegiser",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
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
          lineNumber: 423,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 17
        }
      }, "JGO - Registration Form")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pAccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 17
        }
      }, "ACCOUNT INFORMATION"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
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
          lineNumber: 444,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 21
        }
      }, "First name is required")), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 21
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
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
          lineNumber: 474,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
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
          lineNumber: 477,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
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
          lineNumber: 486,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
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
          lineNumber: 495,
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
          lineNumber: 503,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505,
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
          lineNumber: 506,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 21
        }
      }, "Postal"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
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
          lineNumber: 525,
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
          lineNumber: 534,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
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
          lineNumber: 537,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 21
        }
      }, "Email is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
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
          lineNumber: 547,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 21
        }
      }, "Mobile number is required"))), __jsx("div", {
        className: "row",
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
      }, "Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        password: this.state.password,
        onChange: this.password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 21
        }
      }, "Password is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
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
          lineNumber: 583,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fa fa-cloud-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
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
          lineNumber: 598,
          columnNumber: 23
        }
      })), __jsx("p", {
        className: "pImage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 21
        }
      }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
        className: "modal-footer text-center mx-auto d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "btn btnSubmitModal",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 17
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
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
          lineNumber: 624,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 15
        }
      }, "Jgo - Driver registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
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
          lineNumber: 643,
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
          lineNumber: 649,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
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
          lineNumber: 652,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660,
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
          lineNumber: 661,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669,
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
          lineNumber: 670,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
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
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687,
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
          lineNumber: 688,
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
          lineNumber: 697,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699,
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
          lineNumber: 700,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 19
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: regions_api,
        onChange: HandleChangeRegion,
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716,
          columnNumber: 19
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: province_api,
        onChange: HandleChangeProvince,
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 19
        }
      }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: cities_api,
        styles: customStyles1,
        onChange: HandleChangeCity,
        value: city_dropdown,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 19
        }
      })), __jsx("div", {
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
      }, "Country"), __jsx("input", {
        type: "text",
        className: "txtDriver",
        value: "Philippines",
        disabled: true,
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
          lineNumber: 741,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
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
          lineNumber: 743,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
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
          lineNumber: 755,
          columnNumber: 19
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761,
          columnNumber: 19
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764,
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
          lineNumber: 765,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pVehicle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776,
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
          lineNumber: 777,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pPlate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785,
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
          lineNumber: 786,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pLisence",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794,
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
          lineNumber: 795,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806,
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
          lineNumber: 807,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divProfile text-center",
        onClick: onBtnClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 815,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823,
          columnNumber: 21
        }
      }, profile_name))), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827,
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
          lineNumber: 828,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divDriver text-center",
        onClick: onBtnClick1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844,
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
          lineNumber: 848,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 849,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 850,
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
          lineNumber: 851,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divNbi text-center",
        onClick: onBtnClick2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867,
          columnNumber: 21
        }
      }, nbi_clearance))), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 870,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871,
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
          lineNumber: 872,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divOcr text-center",
        onClick: onBtnClick3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 885,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888,
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
          lineNumber: 892,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 893,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894,
          columnNumber: 19
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 896,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 899,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwic3VjY2Vzc01lc3NhZ2UiLCJzd2FsIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsImJ0bnRyeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJsb2dpbiIsInByb3BzIiwiRW1haWwiLCJQYXNzd29yZCIsInJlZ2lvbnNfYXBpIiwidmFsdWUiLCJuYW1lIiwicHJvdmluY2VfYXBpIiwiY2l0aWVzX2FwaSIsInJlZ2lvbl9jaGFuZ2UiLCJwcm92aW5jZV9jaGFuZ2UiLCJmbmFtZSIsImxuYW1lIiwibW5hbWUiLCJwcm9maWxlIiwiZW1haWwiLCJtb2JpbGUiLCJhZGRyZXNzIiwiY2l0eSIsImNvdW50cnkiLCJ6aXAiLCJwYXNzd29yZCIsInBhc3N3b3JkY29uZmlybSIsImNpdHlfZHJvcGRvd24iLCJlcnJvckVtYWlsIiwiZXJyb3JGbmFtZSIsImVycm9yTG5hbWUiLCJhY3RpdmVFbWFpbCIsImJpbmQiLCJkYXRhX3JlZ2lvbnMiLCJtYXAiLCJkIiwia2V5IiwibGFiZWwiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwiJCIsImN1cnJlbnRUYXJnZXQiLCJhZGRDbGFzcyIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYXBpVXJsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsInJlcXVlc3QiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImhpZGUiLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJlcnIiLCJtZXNzYWdlRXJyb3IiLCJlIiwiZmlsdGVyIiwicGVyc29uIiwicmVnaW9uIiwiaWQiLCJmaWxlIiwiZmlsZXMiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJhcHBlbmQiLCJjb25maWciLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsIk1hdGgiLCJmbG9vciIsImxvYWRlZCIsInRvdGFsIiwibW9kYWwiLCJjc3MiLCJyZXNwb25zZSIsImVycm9ycyIsIm1hcmdpblJpZ2h0IiwiekluZGV4IiwiSGFuZGxlQ2hhbmdlUmVnaW9uIiwiSGFuZGxlQ2hhbmdlUHJvdmluY2UiLCJwYXNzd29yZENvbmZpcm0iLCJwb3NpdGlvbiIsImhhbmRsZUZpbGUiLCJyZWdpc3RlciIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2RlciIsImZuYW1lX2NoYW5nZSIsIm1uYW1lX2NoYW5nZSIsImxuYW1lX2NoYW5nZSIsImVtYWlsX2NoYW5nZSIsIm1vYmlsZV9jaGFuZ2UiLCJhZGRyZXNzX2NoYW5nZSIsImN1c3RvbVN0eWxlczEiLCJIYW5kbGVDaGFuZ2VDaXR5IiwiemlwX2NoYW5nZSIsInBhc3N3b3JkX2NoYW5nZSIsInBhc3N3b3JkY29uZmlybV9jaGFuZ2UiLCJ2ZWhpY2xlIiwidmVoaWNsZV9jaGFuZ2UiLCJwbGF0ZWVudW1iZXIiLCJwbGF0ZV9jaGFuZ2UiLCJsaXNlbmNlbnVtYmVyIiwibGlzZW5jZV9jaGFuZ2UiLCJpbnB1dEZpbGVSZWYiLCJkaXNwbGF5Iiwib25CdG5DbGljayIsImNvbG9yIiwicHJvZmlsZV9uYW1lIiwiaGFuZGxlRmlsZTEiLCJpbnB1dEZpbGVSZWYxIiwib25CdG5DbGljazEiLCJkcml2ZXJfbGlzZW5jZSIsImhhbmRsZUZpbGUyIiwiaW5wdXRGaWxlUmVmMiIsIm9uQnRuQ2xpY2syIiwibmJpX2NsZWFyYW5jZSIsImhhbmRsZUZpbGUzIiwiaW5wdXRGaWxlUmVmMyIs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QVMsRUFBRTtBQUFiLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQW1DLGVBQU8sRUFBRTRJLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUU7QUFBTSxhQUFLLEVBQUU7QUFBRXJDLG9CQUFVLEVBQUU7QUFBZCxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FGRixDQURGLENBREYsQ0EvUEYsQ0FERixDQUpGLENBUkEsQ0EzUUYsQ0FERjtBQTBpQkQ7QUE3MUJIOztBQUFBO0FBQUEsRUFBMkJzQywrQ0FBM0I7QUFnMkJlcEksb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJlYTg3NzlmNDFiYWU3NGNhZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgcmVnaW9ucyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9yZWdpb25zXCIpO1xyXG5jb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbmNvbnN0IGNpdGllcyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9jaXRpZXNcIik7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMTUlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdWNjZXNzTWVzc2FnZSgpIHtcclxuICBzd2FsKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICMwMEM4NTNcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9zdWNjZXNzLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5TdWNjZXNzPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICBBY2NvdW50IHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQuIFlvdSBtYXkgbm93IGxvZ2luLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidG50cnkoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhVXNlcm5hbWVcIikuaW5uZXJIVE1MID0gXCJBU2Rhc1wiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBFbWFpbDogXCJcIixcclxuICAgICAgUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHJlZ2lvbnNfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcHJvdmluY2VfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgY2l0aWVzX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZ2lvbl9jaGFuZ2U6IFwiXCIsXHJcbiAgICAgIHByb3ZpbmNlX2NoYW5nZTogXCJcIixcclxuICAgICAgZm5hbWU6IFwiXCIsXHJcbiAgICAgIGxuYW1lOiBcIlwiLFxyXG4gICAgICBtbmFtZTogXCJcIixcclxuICAgICAgcHJvZmlsZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1vYmlsZTogXCJcIixcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgY2l0eTogXCJcIixcclxuICAgICAgcHJvdmluY2U6IFwiXCIsXHJcbiAgICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICAgIHppcDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkY29uZmlybTogXCJcIixcclxuICAgICAgY2l0eV9kcm9wZG93bjogXCJcIixcclxuICAgICAgZXJyb3JFbWFpbDogXCJcIixcclxuICAgICAgZXJyb3JGbmFtZTogXCJcIixcclxuICAgICAgZXJyb3JMbmFtZTogXCJcIixcclxuICAgICAgYWN0aXZlRW1haWw6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBtZXNzYWdlRXJyb3IoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjYzYyODI4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvd2FybmluZy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgaW5mb3JtYXRpb24geW91IGVudGVyZWQgaXMgbm90IHJlY29nbml6ZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uc19hcGk6IGRhdGFfcmVnaW9ucyB9KTtcclxuICB9XHJcblxyXG4gIEVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgRW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgUGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBQYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oZXZlbnQpIHtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpblwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgYXBpVXJsLFxyXG4gICAgICAgIHsgZW1haWw6IHRoaXMuc3RhdGUuRW1haWwsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLlBhc3N3b3JkIH0sXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnJlcXVlc3Quc3RhdHVzID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuZGF0YSkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLnVzZXIubmFtZTtcclxuICAgICAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmNvbExvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuY29sRGVsaXZlclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VFcnJvcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVJlZ2lvbihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcHJvdmluY2VcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucmVnaW9uID09PSBlLnZhbHVlKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkLmtleSxcclxuICAgICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVByb3ZpbmNlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZV9jaGFuZ2U6IGUudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2U6IGUubGFiZWwgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdGllc19hcGk6IGRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBsbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBtbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vYmlsZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRyZXNzKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBjaXR5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eV9kcm9wZG93bjogZXZlbnQudmFsdWUubGFiZWwgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvdW50cnkoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudHJ5OiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIHppcChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkY29uZmlybTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGU6IGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmxuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZmlsZSkge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlOiBcIlwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBmaWxlID0gdGhpcy5zdGF0ZS5wcm9maWxlO1xyXG4gICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXHJcbiAgICAgICAgICBcInByb2ZpbGVfcGljXCIsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGUsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGUubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZW1haWxcIiwgdGhpcy5zdGF0ZS5lbWFpbCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIHRoaXMuc3RhdGUubW9iaWxlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIHRoaXMuc3RhdGUuYWRkcmVzcyk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY2l0eVwiLCB0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInN0YXRlXCIsIHRoaXMuc3RhdGUucHJvdmluY2UpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJ6aXBcIiwgdGhpcy5zdGF0ZS56aXApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIHRoaXMuc3RhdGUuZm5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIHRoaXMuc3RhdGUubG5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1uYW1lXCIsIHRoaXMuc3RhdGUubW5hbWUpO1xyXG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZChcInByb2ZpbGVfcGljXCIsIFwiXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZGNvbmZpcm0pO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVnaXN0ZXJcIjtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zLCBjb25maWcpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCIyMDFcIikge1xyXG4gICAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikuY3NzKFwiei1pbmRleFwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JFbWFpbDogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsWzBdIH0pO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsWzBdKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sTG9naW5cIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBMb2dpblwiPkxvZy1pbjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94TG9naW5cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuRW1haWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5QYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9yZ290XCI+Zm9yZ290IHBhc3N3b3JkPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0XCIgb25DbGljaz17dGhpcy5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBPclwiPm9yPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5GYWNlYm9va1wiIG9uQ2xpY2s9e2J0bnRyeX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9mYWNlYm9vay5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU2lnbi1pbiB3aXRoIGZhY2Vib29rXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuR29vZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERvbnRcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/PC9wPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicFNpZ251cFwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbFJlZ2lzZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBzaWduLXVwXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgICBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIEpHTyAtIFJlZ2lzdHJhdGlvbiBGb3JtXHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFjY291bnRcIj5BQ0NPVU5UIElORk9STUFUSU9OPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwRm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IG5hbWUgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmxuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwTG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExhc3QgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5BZGRyZXNzIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3VzZS9Vbml0IE51bWJlciwgQnVpbGRpbmcgTmFtZSwgU3RyZWV0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWRkcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VSZWdpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnByb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVByb3ZpbmNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY2l0aWVzX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5X2Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2l0eS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qb3N0YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuemlwLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNvdW50cnkuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5FbWFpbCBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBFbWFpbFwiPkVtYWlsIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tb2JpbGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE1vYmlsZSBudW1iZXIgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcFBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZmlybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+RHJpdmVyIExpc2VuY2UgKFBob3RvKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3VkLXVwbG9hZFwiPjwvaT4gQ2hvb3NlIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRmlsZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOb3RlOiBPbmx5IC5qcGcsIC5qcGVnIGFuZCAucG5nIGZpbGVzIGFyZSBhbGxvd2VkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyIHRleHQtY2VudGVyIG14LWF1dG8gZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0TW9kYWxcIiBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgU0lHTlVQXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZSA9IHt7bWFyZ2luTGVmdDogXCI0MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwibW9kYWxSZWdpc3RlclwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1kcml2ZXIgbW9kYWwtbGdcIlxyXG4gICAgICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1vZGFsRHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVcIj5KZ28gLSBEcml2ZXIgcmVnaXN0cmF0aW9uIGZvcm08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVTdWJcIj5cclxuICAgICAgICAgICAgICAgIEZpbGwtdXAgYWxsIHRoZSByZXF1aXJkIGZpZWxkcy4gQWZ0ZXIgeW91IHN1Ym1pdCB3ZSB3aWxsIHNlbmQgYVxyXG4gICAgICAgICAgICAgICAgbGluayB0byB5b3VyIGVtYWlsIGZvciBkcml2ZXIgb25saW5lIHRyYWluaW5nLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ZuYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e21uYW1lX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTG5hbWVcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bG5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTW9iaWxlXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dE1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e21vYmlsZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRyZXNzX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VSZWdpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlUHJvdmluY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NpdGllc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVDaGFuZ2VDaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaXR5X2Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlBoaWxpcHBpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+WmlwIENvZGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt6aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ppcF9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcFBhc3N3b3JkXCI+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlBhc3N3b3JkIG11c3QgYmUgNi0xNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkY29uZmlybX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Q29uZmlybVBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZGNvbmZpcm1fY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBWZWhpY2xlXCI+VmVoaWNsZSBUeXBlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZlaGljbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dFZlaGljbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ZWhpY2xlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwUGxhdGVcIj5QbGF0ZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGxhdGVlbnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3BsYXRlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTGlzZW5jZVwiPkxpc2VuY2UgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpc2VuY2VudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExpc2VuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtsaXNlbmNlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb2ZpbGUgUGljdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2UHJvZmlsZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e3Byb2ZpbGVfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Ecml2ZXIgTGljZW5zZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMShlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjF9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZEcml2ZXIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2sxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57ZHJpdmVyX2xpc2VuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk5CSSBDbGVhcmFuY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTIoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2TmJpIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrMn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e25iaV9jbGVhcmFuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+T1JDUjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMyhlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjN9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZPY3IgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2szfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57b2NyX2NsZWFyYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdERyaXZlclwiIG9uQ2xpY2s9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU0lHTlVQXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9