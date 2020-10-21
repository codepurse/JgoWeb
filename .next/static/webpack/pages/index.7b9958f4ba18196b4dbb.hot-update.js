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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "inputFileRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["createRef"])(null));

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
          lineNumber: 122,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
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
          lineNumber: 124,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
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
          lineNumber: 129,
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
          lineNumber: 131,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
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
        profile_name: file
      });
    }
  }, {
    key: "onBtnClick",
    value: function onBtnClick() {
      this.state.inputFileRef.click();
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
          lineNumber: 390,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
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
          lineNumber: 393,
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
          lineNumber: 399,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 19
        }
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
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
          lineNumber: 433,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
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
          lineNumber: 440,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegister",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
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
          lineNumber: 455,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 17
        }
      }, "JGO - Registration Form")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pAccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 17
        }
      }, "ACCOUNT INFORMATION"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
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
          lineNumber: 476,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 21
        }
      }, "First name is required")), __jsx("div", {
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
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
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
          lineNumber: 506,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
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
          lineNumber: 509,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
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
          lineNumber: 518,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
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
          lineNumber: 527,
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
          lineNumber: 535,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
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
          lineNumber: 538,
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
      }, "Postal"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
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
          lineNumber: 557,
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
          lineNumber: 566,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
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
          lineNumber: 569,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 21
        }
      }, "Email is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
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
          lineNumber: 579,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }
      }, "Mobile number is required"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
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
          lineNumber: 593,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 21
        }
      }, "Password is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
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
          lineNumber: 615,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fa fa-cloud-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
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
          lineNumber: 630,
          columnNumber: 23
        }
      })), __jsx("p", {
        className: "pImage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 21
        }
      }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
        className: "modal-footer text-center mx-auto d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "btn btnSubmitModal",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644,
          columnNumber: 17
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 19
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649,
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
          lineNumber: 656,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 15
        }
      }, "Jgo - Registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 15
        }
      }, "Let's get you all set up so you can verify your personal account and start booking."), __jsx("hr", {
        style: {
          backgroundColor: "#414141",
          boder: "1px solid #414141"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
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
          lineNumber: 680,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
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
          lineNumber: 683,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691,
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
          lineNumber: 692,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700,
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
          lineNumber: 701,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709,
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
          lineNumber: 710,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718,
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
          lineNumber: 719,
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
          lineNumber: 728,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730,
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
          lineNumber: 731,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 19
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747,
          columnNumber: 19
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755,
          columnNumber: 19
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
          lineNumber: 756,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
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
      }, "Country"), __jsx("input", {
        type: "text",
        className: "txtDriver",
        value: "Philippines",
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775,
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
          lineNumber: 776,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787,
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
          lineNumber: 788,
          columnNumber: 19
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794,
          columnNumber: 19
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 796,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797,
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
          lineNumber: 798,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809,
          columnNumber: 19
        }
      }, "Profile Picture"), __jsx("input", {
        onChange: function onChange(e) {
          return handleFile(e);
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
          lineNumber: 810,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divProfile text-center",
        onClick: this.onBtnClick.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 818,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826,
          columnNumber: 21
        }
      }, this.state.profile_name)))), __jsx("div", {
        className: "row",
        style: {
          marginTop: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834,
          columnNumber: 19
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838,
          columnNumber: 23
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3VzdG9tU3R5bGVzMSIsImJhY2tncm91bmQiLCJjb2xvciIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInN1Y2Nlc3NNZXNzYWdlIiwic3dhbCIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJidG50cnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibG9naW4iLCJwcm9wcyIsImNyZWF0ZVJlZiIsIkVtYWlsIiwiUGFzc3dvcmQiLCJyZWdpb25zX2FwaSIsInZhbHVlIiwibmFtZSIsInByb3ZpbmNlX2FwaSIsImNpdGllc19hcGkiLCJyZWdpb25fY2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwiZm5hbWUiLCJsbmFtZSIsIm1uYW1lIiwicHJvZmlsZSIsImVtYWlsIiwibW9iaWxlIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJjaXR5X2Ryb3Bkb3duIiwiZXJyb3JFbWFpbCIsImVycm9yRm5hbWUiLCJlcnJvckxuYW1lIiwiYWN0aXZlRW1haWwiLCJwcm9maWxlX25hbWUiLCJiaW5kIiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJyZXF1ZXN0Iiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJoaWRlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiZXJyIiwibWVzc2FnZUVycm9yIiwiZSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsImlkIiwiZmlsZSIsImZpbGVzIiwiaW5wdXRGaWxlUmVmIiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJhcHBlbmQiLCJjb25maWciLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsIk1hdGgiLCJmbG9vciIsImxvYWRlZCIsInRvdGFsIiwibW9kYWwiLCJjc3MiLCJyZXNwb25zZSIsImVycm9ycyIsIm1hcmdpblJpZ2h0IiwiekluZGV4IiwiSGFuZGxlQ2hhbmdlUmVnaW9uIiwiSGFuZGxlQ2hhbmdlUHJvdmluY2UiLCJwYXNzd29yZENvbmZpcm0iLCJwb3NpdGlvbiIsImhhbmRsZUZpbGUiLCJyZWdpc3RlciIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2RlciIsImRpc3BsYXkiLCJvbkJ0bkNsaWNrIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHRCxtQkFBTyxDQUFDLHdFQUFELENBQXhCOztBQUNBLElBQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyxrRUFBRCxDQUF0Qjs7QUFFQSxJQUFNRyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxpQkFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMkNBQ0pELElBREk7QUFFUEUsWUFBTSxF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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUZGLENBREYsQ0FERixDQW5LRixDQURGLENBSkYsQ0FSQSxDQTNRRixDQURGO0FBOGNEO0FBendCSDs7QUFBQTtBQUFBLEVBQTJCSywrQ0FBM0I7QUE0d0Jldkcsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2I5OTU4ZjRiYTE4MTk2YjRkYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiAgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuY29uc3QgcHJvdmluY2UgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcHJvdmluY2VzXCIpO1xyXG5jb25zdCBjaXRpZXMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvY2l0aWVzXCIpO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgcGFkZGluZzogXCI0LjVweFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMmMyYzJjXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiMTE1JVwiLFxyXG4gICAgcGFkZGluZzogXCIycHhcIixcclxuICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAuLi5wcm92aWRlZCxcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdWNjZXNzTWVzc2FnZSgpIHtcclxuICBzd2FsKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICMwMEM4NTNcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9zdWNjZXNzLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5TdWNjZXNzPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICBBY2NvdW50IHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQuIFlvdSBtYXkgbm93IGxvZ2luLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidG50cnkoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhVXNlcm5hbWVcIikuaW5uZXJIVE1MID0gXCJBU2Rhc1wiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGlucHV0RmlsZVJlZiA9IGNyZWF0ZVJlZihudWxsKTtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgRW1haWw6IFwiXCIsXHJcbiAgICAgIFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICByZWdpb25zX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3ZpbmNlX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNpdGllc19hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICByZWdpb25fY2hhbmdlOiBcIlwiLFxyXG4gICAgICBwcm92aW5jZV9jaGFuZ2U6IFwiXCIsXHJcbiAgICAgIGZuYW1lOiBcIlwiLFxyXG4gICAgICBsbmFtZTogXCJcIixcclxuICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgIHByb2ZpbGU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtb2JpbGU6IFwiXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgIHByb3ZpbmNlOiBcIlwiLFxyXG4gICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgICB6aXA6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZGNvbmZpcm06IFwiXCIsXHJcbiAgICAgIGNpdHlfZHJvcGRvd246IFwiXCIsXHJcbiAgICAgIGVycm9yRW1haWw6IFwiXCIsXHJcbiAgICAgIGVycm9yRm5hbWU6IFwiXCIsXHJcbiAgICAgIGVycm9yTG5hbWU6IFwiXCIsXHJcbiAgICAgIGFjdGl2ZUVtYWlsOiBcIlwiLFxyXG4gICAgICBwcm9maWxlX25hbWU6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBtZXNzYWdlRXJyb3IoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjYzYyODI4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvd2FybmluZy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgaW5mb3JtYXRpb24geW91IGVudGVyZWQgaXMgbm90IHJlY29nbml6ZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGRhdGFfcmVnaW9ucyA9IHJlZ2lvbnMubWFwKChkKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uc19hcGk6IGRhdGFfcmVnaW9ucyB9KTtcclxuICB9XHJcblxyXG4gIEVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgRW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgUGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBQYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oZXZlbnQpIHtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpblwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgYXBpVXJsLFxyXG4gICAgICAgIHsgZW1haWw6IHRoaXMuc3RhdGUuRW1haWwsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLlBhc3N3b3JkIH0sXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnJlcXVlc3Quc3RhdHVzID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuZGF0YSkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLnVzZXIubmFtZTtcclxuICAgICAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmNvbExvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuY29sRGVsaXZlclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VFcnJvcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVJlZ2lvbihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcHJvdmluY2VcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucmVnaW9uID09PSBlLnZhbHVlKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkLmtleSxcclxuICAgICAgICB2YWx1ZTogZC5rZXksXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIEhhbmRsZUNoYW5nZVByb3ZpbmNlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZV9jaGFuZ2U6IGUudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2U6IGUubGFiZWwgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gY2l0aWVzXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnByb3ZpbmNlID09PSBlLmlkKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBkLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdGllc19hcGk6IGRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBsbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wTG5hbWVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBtbmFtZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGVtYWlsKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vYmlsZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucE1vYmlsZVwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRyZXNzKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBjaXR5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eV9kcm9wZG93bjogZXZlbnQudmFsdWUubGFiZWwgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvdW50cnkoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudHJ5OiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIHppcChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkY29uZmlybTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfbmFtZTogZmlsZSB9KTtcclxuICB9XHJcblxyXG4gIG9uQnRuQ2xpY2soKSB7XHJcbiAgICB0aGlzLnN0YXRlLmlucHV0RmlsZVJlZi5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucExuYW1lXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByb2ZpbGUpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZTogXCJcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZmlsZSA9IHRoaXMuc3RhdGUucHJvZmlsZTtcclxuICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgdGhpcy5zdGF0ZS5mbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgdGhpcy5zdGF0ZS5sbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgdGhpcy5zdGF0ZS5tbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKFxyXG4gICAgICAgICAgXCJwcm9maWxlX3BpY1wiLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLm5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJwcm9maWxlX3BpY1wiLCBcIlwiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCB0aGlzLnN0YXRlLmVtYWlsKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5hZGRyZXNzKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY291bnRyeVwiLCBcIlBoaWxpcHBpbmVzXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB0aGlzLnN0YXRlLnppcCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHRoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgTWF0aC5mbG9vcigocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyXCI7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucywgY29uZmlnKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwiMjAxXCIpIHtcclxuICAgICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgICAgICBzdWNjZXNzTWVzc2FnZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLmNzcyhcInotaW5kZXhcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWJhY2tkcm9wXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yRW1haWw6IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5lbWFpbFswXSB9KTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5lbWFpbFswXSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbExvZ2luXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTG9naW5cIj5Mb2ctaW48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveExvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0RW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuUGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcmdvdFwiPmZvcmdvdCBwYXNzd29yZD88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMubG9naW59PlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwT3JcIj5vcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuRmFjZWJvb2tcIiBvbkNsaWNrPXtidG50cnl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBmYWNlYm9va1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkdvb2dsZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTaWduLWluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb250XCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvcD5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBTaWdudXBcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWxSZWdpc3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHNpZ24tdXBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgSkdPIC0gUmVnaXN0cmF0aW9uIEZvcm1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWNjb3VudFwiPkFDQ09VTlQgSU5GT1JNQVRJT048L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBGbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRmlyc3QgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubG5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBMbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBuYW1lIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkFkZHJlc3MgMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdXNlL1VuaXQgTnVtYmVyLCBCdWlsZGluZyBOYW1lLCBTdHJlZXQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZGRyZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5yZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVJlZ2lvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUHJvdmluY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaXR5LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBvc3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy56aXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY291bnRyeS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkVtYWlsIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcEVtYWlsXCI+RW1haWwgaXMgcmVxdWlyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcE1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIG51bWJlciBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Ecml2ZXIgTGlzZW5jZSAoUGhvdG8pPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCA4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvdWQtdXBsb2FkXCI+PC9pPiBDaG9vc2UgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdGU6IE9ubHkgLmpwZywgLmpwZWcgYW5kIC5wbmcgZmlsZXMgYXJlIGFsbG93ZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgdGV4dC1jZW50ZXIgbXgtYXV0byBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXRNb2RhbFwiIG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlID0ge3ttYXJnaW5MZWZ0OiBcIjQwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJtb2RhbFJlZ2lzdGVyXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWRyaXZlciBtb2RhbC1sZ1wiXHJcbiAgICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbW9kYWxEcml2ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVwiPkpnbyAtIFJlZ2lzdHJhdGlvbiBmb3JtPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBMZXQncyBnZXQgeW91IGFsbCBzZXQgdXAgc28geW91IGNhbiB2ZXJpZnkgeW91ciBwZXJzb25hbCBhY2NvdW50IGFuZCBzdGFydCBib29raW5nLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExuYW1lXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5sbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFkZHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnJlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VSZWdpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wcm92aW5jZV9hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUHJvdmluY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY2l0aWVzX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eV9kcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaXR5LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnppcC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQYXNzd29yZFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlBhc3N3b3JkIG11c3QgYmUgNi0xNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRDb25maXJtUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm9maWxlIFBpY3R1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZShlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2UHJvZmlsZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJ0bkNsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pnt0aGlzLnN0YXRlLnByb2ZpbGVfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0RHJpdmVyXCIgb25DbGljaz17dGhpcy5yZWdpc3Rlci5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=