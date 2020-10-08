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
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
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
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Success"), __jsx("p", {
    className: "pErrorSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Account succesfully created. You may now login."))))));
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
      Passoword: "",
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
      errorEmail: "asdsad"
    };
    _this.login = _this.login.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(login, [{
    key: "errorMessage",
    value: function errorMessage() {
      alert("asd");
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
      fetch("http://localhost:8000/api/auth/login", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.Email,
          password: this.state.Password
        })
      }).then(function (Response) {
        return Response.json();
      }).then(function (result) {
        console.log(result);

        if (result.status == "error") {
          alert(result.message);
        } else if (result.status == "success") {
          alert(result.status);
        } else if (result.status == "fail") {
          alert(result.status);
        }
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
    key: "email",
    value: function email(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: "lname",
    value: function lname(event) {
      this.setState({
        lname: event.target.value
      });
    }
  }, {
    key: "fname",
    value: function fname(event) {
      this.setState({
        fname: event.target.value
      });
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
    }
  }, {
    key: "mobile",
    value: function mobile(event) {
      this.setState({
        mobile: event.target.value
      });
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
      e.preventDefault();
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
          successMessage();
        }
      })["catch"](function (err) {
        try {
          $("#exampleModal").css("z-index", "1");
          $(".modal-backdrop").hide();
          errorMessage();
        } catch (e) {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "col-lg-6 colLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        className: "txt",
        placeholder: "email",
        onChange: this.Email.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }
      }), __jsx("input", {
        type: "password",
        className: "txt",
        placeholder: "password",
        onChange: this.Password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 15
        }
      }, "SUBMIT"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
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
          lineNumber: 317,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
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
          lineNumber: 324,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#exampleModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
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
          lineNumber: 339,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 17
        }
      }, "JGO - Registration Form")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pAccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 17
        }
      }, "ACCOUNT INFORMATION"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 21
        }
      }, "First Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.fname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 21
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
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
          lineNumber: 383,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
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
          lineNumber: 386,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
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
          lineNumber: 395,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
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
          lineNumber: 404,
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
          lineNumber: 412,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
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
          lineNumber: 415,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 21
        }
      }, "Postal"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
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
          lineNumber: 434,
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
          lineNumber: 443,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 21
        }
      }, "Email Address"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.email.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 21
        }
      }, "Mobile Number"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mobile.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
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
      }, "Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.password.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
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
          lineNumber: 482,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fa fa-cloud-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 25
        }
      }), " Choose File"), __jsx("input", {
        id: "file-upload",
        type: "file",
        accept: ".jpg, .png, .jpeg|image",
        onChange: function onChange(e) {
          return _this2.handleFile(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 23
        }
      })), __jsx("p", {
        className: "pImage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 21
        }
      }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
        className: "modal-footer text-center mx-auto d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 15
        }
      }, __jsx("button", {
        type: "button",
        className: "btnSubmitModal",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 17
        }
      }, "Submit"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwic3VjY2Vzc01lc3NhZ2UiLCJzd2FsIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsImxvZ2luIiwicHJvcHMiLCJFbWFpbCIsIlBhc3Nvd29yZCIsInJlZ2lvbnNfYXBpIiwidmFsdWUiLCJuYW1lIiwicHJvdmluY2VfYXBpIiwiY2l0aWVzX2FwaSIsInJlZ2lvbl9jaGFuZ2UiLCJwcm92aW5jZV9jaGFuZ2UiLCJmbmFtZSIsImxuYW1lIiwibW5hbWUiLCJwcm9maWxlIiwiZW1haWwiLCJtb2JpbGUiLCJhZGRyZXNzIiwiY2l0eSIsImNvdW50cnkiLCJ6aXAiLCJwYXNzd29yZCIsInBhc3N3b3JkY29uZmlybSIsImNpdHlfZHJvcGRvd24iLCJlcnJvckVtYWlsIiwiYmluZCIsImFsZXJ0IiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIlBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiUmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlIiwiZGF0YSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsImlkIiwiZmlsZSIsImZpbGVzIiwicHJldmVudERlZmF1bHQiLCJvcHRpb25zIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwcGVuZCIsImNvbmZpZyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwiTWF0aCIsImZsb29yIiwibG9hZGVkIiwidG90YWwiLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCIkIiwibW9kYWwiLCJlcnIiLCJjc3MiLCJoaWRlIiwiZXJyb3JNZXNzYWdlIiwibWFyZ2luUmlnaHQiLCJ6SW5kZXgiLCJIYW5kbGVDaGFuZ2VSZWdpb24iLCJIYW5kbGVDaGFuZ2VQcm92aW5jZSIsInBhc3N3b3JkQ29uZmlybSIsInBvc2l0aW9uIiwiaGFuZGxlRmlsZSIsInJlZ2lzdGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBeEI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUNBLElBQU1HLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLGlCQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwyQ0FDSkQsSUFESTtBQUVQRSxZQUFNLEVBQUUsbUJBRkQ7QUFHUEMsZUFBUyxFQUFFLE1BSEo7QUFJUEMsa0JBQVksRUFBRSxNQUpQO0FBS1BDLFdBQUssRUFBRSxNQUxBO0FBTVBDLGFBQU8sRUFBRSxPQU5GO0FBT1BDLGVBQVMsRUFBRTtBQVBKO0FBQUE7QUFEVSxDQUFyQjs7QUFZQSxTQUFTQyxjQUFULEdBQTBCO0FBQ3hCQywrREFBSSxDQUNGO0FBQUssU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxhQUFPLEVBQUU7QUFBM0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtB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LGlCQVRGLEVBZUU7QUFDRSxVQUFFLEVBQUMsYUFETDtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDLHlCQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ25DLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNvQyxVQUFMLENBQWdCcEMsQ0FBaEIsQ0FBUDtBQUFBLFNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWZGLENBRkYsRUF3QkU7QUFBRyxpQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REF4QkYsQ0FERixDQTVIRixDQU5GLEVBaUtFO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMsZ0JBRlo7QUFHRSxlQUFPLEVBQUUsS0FBS3FDLFFBQUwsQ0FBYy9ELElBQWQsQ0FBbUIsSUFBbkIsQ0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBaktGLENBREYsQ0FURixDQTdERixDQURGO0FBdVBEO0FBL2RIOztBQUFBO0FBQUEsRUFBMkJnRSwrQ0FBM0I7QUFrZWV6RixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZGZmYmM5YzkyZDEwMmVlNzRiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5cclxuY29uc3QgcmVnaW9ucyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9yZWdpb25zXCIpO1xyXG5jb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbmNvbnN0IGNpdGllcyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9jaXRpZXNcIik7XHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNzA3MDcwXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgIHBhZGRpbmc6IFwiNC41cHhcIixcclxuICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICB9KSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN1Y2Nlc3NNZXNzYWdlKCkge1xyXG4gIHN3YWwoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgIzAwQzg1M1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3N1Y2Nlc3MucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlN1Y2Nlc3M8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgIEFjY291bnQgc3VjY2VzZnVsbHkgY3JlYXRlZC4gWW91IG1heSBub3cgbG9naW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBFbWFpbDogXCJcIixcclxuICAgICAgUGFzc293b3JkOiBcIlwiLFxyXG4gICAgICByZWdpb25zX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3ZpbmNlX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNpdGllc19hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICByZWdpb25fY2hhbmdlOiBcIlwiLFxyXG4gICAgICBwcm92aW5jZV9jaGFuZ2U6IFwiXCIsXHJcbiAgICAgIGZuYW1lOiBcIlwiLFxyXG4gICAgICBsbmFtZTogXCJcIixcclxuICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgIHByb2ZpbGU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtb2JpbGU6IFwiXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgIHByb3ZpbmNlOiBcIlwiLFxyXG4gICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgICB6aXA6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZGNvbmZpcm06IFwiXCIsXHJcbiAgICAgIGNpdHlfZHJvcGRvd246IFwiXCIsXHJcbiAgICAgIGVycm9yRW1haWw6IFwiYXNkc2FkXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZXJyb3JNZXNzYWdlKCkge1xyXG4gICBhbGVydChcImFzZFwiKVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgZGF0YV9yZWdpb25zID0gcmVnaW9ucy5tYXAoKGQpID0+ICh7XHJcbiAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgIH0pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25zX2FwaTogZGF0YV9yZWdpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgRW1haWwoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBFbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBQYXNzd29yZChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbihldmVudCkge1xyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW5cIiwge1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuRW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUuUGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKFJlc3BvbnNlKSA9PiBSZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgYWxlcnQocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgYWxlcnQocmVzdWx0LnN0YXR1cyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09IFwiZmFpbFwiKSB7XHJcbiAgICAgICAgICBhbGVydChyZXN1bHQuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUmVnaW9uKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25fY2hhbmdlOiBlLnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwcm92aW5jZVxyXG4gICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5yZWdpb24gPT09IGUudmFsdWUpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgaWQ6IGQua2V5LFxyXG4gICAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2VfYXBpOiBkYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZTogZS5sYWJlbCB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBjaXRpZXNcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucHJvdmluY2UgPT09IGUuaWQpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgdmFsdWU6IGQubmFtZSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0aWVzX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgbG5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBmbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIG1uYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgZW1haWwoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBtb2JpbGUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgYWRkcmVzcyhldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgY2l0eShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlfZHJvcGRvd246IGV2ZW50LnZhbHVlLmxhYmVsIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHk6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuICBjb3VudHJ5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY291bnRyeTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICB6aXAoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB6aXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkY29uZmlybTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGU6IGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByb2ZpbGUpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlOiBcIlwiIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbGUgPSB0aGlzLnN0YXRlLnByb2ZpbGU7XHJcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIHRoaXMuc3RhdGUuZm5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgdGhpcy5zdGF0ZS5tbmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcclxuICAgICAgICBcInByb2ZpbGVfcGljXCIsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZS5uYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIHRoaXMuc3RhdGUuYWRkcmVzcyk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgdGhpcy5zdGF0ZS5mbmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImxuYW1lXCIsIHRoaXMuc3RhdGUubG5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwicHJvZmlsZV9waWNcIiwgXCJcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJhZGRyZXNzXCIsIHRoaXMuc3RhdGUuYWRkcmVzcyk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkY29uZmlybSk7XHJcbiAgICB9XHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgTWF0aC5mbG9vcigocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9yZWdpc3RlclwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucywgY29uZmlnKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgJChcIiNleGFtcGxlTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwiMjAxXCIpIHtcclxuICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiMVwiKTtcclxuICAgICAgICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIikuaGlkZSgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbExvZ2luXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTG9naW5cIj5Mb2ctaW48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveExvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuUGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcmdvdFwiPmZvcmdvdCBwYXNzd29yZD88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBPclwiPm9yPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5GYWNlYm9va1wiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBmYWNlYm9va1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkdvb2dsZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTaWduLWluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb250XCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvcD5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBTaWdudXBcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgc2lnbi11cFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICBKR08gLSBSZWdpc3RyYXRpb24gRm9ybVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBY2NvdW50XCI+QUNDT1VOVCBJTkZPUk1BVElPTjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkZpcnN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubG5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5BZGRyZXNzIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3VzZS9Vbml0IE51bWJlciwgQnVpbGRpbmcgTmFtZSwgU3RyZWV0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWRkcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucmVnaW9uc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VSZWdpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnByb3ZpbmNlX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVByb3ZpbmNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY2l0aWVzX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5X2Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2l0eS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Qb3N0YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuemlwLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNvdW50cnkuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5FbWFpbCBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZENvbmZpcm0uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkRyaXZlciBMaXNlbmNlIChQaG90byk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNzA3MDcwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG91ZC11cGxvYWRcIj48L2k+IENob29zZSBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTm90ZTogT25seSAuanBnLCAuanBlZyBhbmQgLnBuZyBmaWxlcyBhcmUgYWxsb3dlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciB0ZXh0LWNlbnRlciBteC1hdXRvIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9