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
          lineNumber: 391,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
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
          lineNumber: 394,
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
          lineNumber: 400,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 17
        }
      }, __jsx("b", {
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
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 19
        }
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 11
        }
      }, __jsx("div", {
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
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
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
          lineNumber: 434,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
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
          lineNumber: 441,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegister",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
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
          lineNumber: 456,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 17
        }
      }, "JGO - Registration Form")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pAccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 17
        }
      }, "ACCOUNT INFORMATION"), __jsx("div", {
        className: "row",
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
      }, "First Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        value: this.state.fname,
        onChange: this.fname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 21
        }
      }, "First name is required")), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 21
        }
      }, "Middle Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.mname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 21
        }
      }, "Last Name"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.lname.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
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
          lineNumber: 507,
          columnNumber: 17
        }
      }, __jsx("div", {
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
      }, "Address 1"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        placeholder: "House/Unit Number, Building Name, Street Name",
        onChange: this.address.bind(this),
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
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        instanceId: "1",
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
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
          lineNumber: 528,
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
          lineNumber: 536,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
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
          lineNumber: 539,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 21
        }
      }, "Postal"), __jsx("input", {
        type: "text",
        className: "txt txtModal",
        onChange: this.zip.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
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
          lineNumber: 558,
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
          lineNumber: 567,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
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
          lineNumber: 570,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 21
        }
      }, "Email is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
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
          lineNumber: 580,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 21
        }
      }, "Mobile number is required"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
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
          lineNumber: 594,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pErrorMessage pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 21
        }
      }, "Password is required")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 21
        }
      }, "Confirm Password"), __jsx("input", {
        type: "password",
        className: "txt txtModal",
        onChange: this.passwordConfirm.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "p1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
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
          lineNumber: 616,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fa fa-cloud-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
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
          lineNumber: 631,
          columnNumber: 23
        }
      })), __jsx("p", {
        className: "pImage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 21
        }
      }, "Note: Only .jpg, .jpeg and .png files are allowed")))), __jsx("div", {
        className: "modal-footer text-center mx-auto d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "btn btnSubmitModal",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 17
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 17
        }
      }, __jsx("b", {
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
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
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
          lineNumber: 657,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 15
        }
      }, "Jgo - Registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672,
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
          lineNumber: 675,
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
          lineNumber: 681,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683,
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
          lineNumber: 684,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692,
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
          lineNumber: 693,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701,
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
          lineNumber: 702,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
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
          lineNumber: 711,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
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
          lineNumber: 720,
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
          lineNumber: 729,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731,
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
          lineNumber: 732,
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
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
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
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles1,
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
          lineNumber: 755,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756,
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
          lineNumber: 757,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767,
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
          lineNumber: 768,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776,
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
          lineNumber: 777,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788,
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
          lineNumber: 789,
          columnNumber: 19
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795,
          columnNumber: 19
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798,
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
          lineNumber: 799,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810,
          columnNumber: 19
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
          lineNumber: 811,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "divAttachment divProfile text-center",
        onClick: this.onBtnClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824,
          columnNumber: 23
        }
      }, "Drag or Browse"), " a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827,
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
          lineNumber: 833,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835,
          columnNumber: 19
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837,
          columnNumber: 21
        }
      }, __jsx("b", {
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
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3VzdG9tU3R5bGVzMSIsImJhY2tncm91bmQiLCJjb2xvciIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInN1Y2Nlc3NNZXNzYWdlIiwic3dhbCIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJidG50cnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibG9naW4iLCJwcm9wcyIsImNyZWF0ZVJlZiIsImlucHV0RmlsZVJlZiIsImN1cnJlbnQiLCJjbGljayIsIkVtYWlsIiwiUGFzc3dvcmQiLCJyZWdpb25zX2FwaSIsInZhbHVlIiwibmFtZSIsInByb3ZpbmNlX2FwaSIsImNpdGllc19hcGkiLCJyZWdpb25fY2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwiZm5hbWUiLCJsbmFtZSIsIm1uYW1lIiwicHJvZmlsZSIsImVtYWlsIiwibW9iaWxlIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJjaXR5X2Ryb3Bkb3duIiwiZXJyb3JFbWFpbCIsImVycm9yRm5hbWUiLCJlcnJvckxuYW1lIiwiYWN0aXZlRW1haWwiLCJwcm9maWxlX25hbWUiLCJiaW5kIiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJyZXF1ZXN0Iiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJoaWRlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiZXJyIiwibWVzc2FnZUVycm9yIiwiZSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsImlkIiwiZmlsZSIsImZpbGVzIiwicHJldmVudERlZmF1bHQiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiYXBwZW5kIiwiY29uZmlnIiwib25VcGxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsIm1vZGFsIiwiY3NzIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJtYXJnaW5SaWdodCIsInpJbmRleCIsIkhhbmRsZUNoYW5nZVJlZ2lvbiIsIkhhbmRsZUNoYW5nZVByb3ZpbmNlIiwicGFzc3dvcmRDb25maXJtIiwicG9zaXRpb24iLCJoYW5kbGVGaWxlIiwicmVnaXN0ZXIiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9kZXIiLCJkaXNwbGF5Iiwib25CdG5DbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQyx3RUFBRCxDQUF4Qjs7QUFDQSxJQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBRUEsSUFBTUcsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsaUJBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDJDQUNKRCxJQURJO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FGRixDQURGLENBREYsQ0FuS0YsQ0FERixDQUpGLENBUkEsQ0EzUUYsQ0FERjtBQThjRDtBQTF3Qkg7O0FBQUE7QUFBQSxFQUEyQkssK0NBQTNCO0FBNndCZXhHLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5Mjg4ZDM4NTRkODdiNTRlMTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVSZWYgIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyICB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCByZWdpb25zID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL3JlZ2lvbnNcIik7XHJcbmNvbnN0IHByb3ZpbmNlID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL3Byb3ZpbmNlc1wiKTtcclxuY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNzA3MDcwXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgIHBhZGRpbmc6IFwiNC41cHhcIixcclxuICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICB9KSxcclxufTtcclxuXHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMxID0ge1xyXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYigyOCwgMzAsIDMzKVwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgLi4ucHJvdmlkZWQsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3VjY2Vzc01lc3NhZ2UoKSB7XHJcbiAgc3dhbChcclxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjMDBDODUzXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvc3VjY2Vzcy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U3VjY2VzczwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgQWNjb3VudCBzdWNjZXNmdWxseSBjcmVhdGVkLiBZb3UgbWF5IG5vdyBsb2dpbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnRudHJ5KCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYVVzZXJuYW1lXCIpLmlubmVySFRNTCA9IFwiQVNkYXNcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBpbnB1dEZpbGVSZWYgPSBjcmVhdGVSZWYobnVsbCk7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIEVtYWlsOiBcIlwiLFxyXG4gICAgICBQYXNzd29yZDogXCJcIixcclxuICAgICAgcmVnaW9uc19hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm92aW5jZV9hcGk6IHtcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjaXRpZXNfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcmVnaW9uX2NoYW5nZTogXCJcIixcclxuICAgICAgcHJvdmluY2VfY2hhbmdlOiBcIlwiLFxyXG4gICAgICBmbmFtZTogXCJcIixcclxuICAgICAgbG5hbWU6IFwiXCIsXHJcbiAgICAgIG1uYW1lOiBcIlwiLFxyXG4gICAgICBwcm9maWxlOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbW9iaWxlOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICBwcm92aW5jZTogXCJcIixcclxuICAgICAgY291bnRyeTogXCJcIixcclxuICAgICAgemlwOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgcGFzc3dvcmRjb25maXJtOiBcIlwiLFxyXG4gICAgICBjaXR5X2Ryb3Bkb3duOiBcIlwiLFxyXG4gICAgICBlcnJvckVtYWlsOiBcIlwiLFxyXG4gICAgICBlcnJvckZuYW1lOiBcIlwiLFxyXG4gICAgICBlcnJvckxuYW1lOiBcIlwiLFxyXG4gICAgICBhY3RpdmVFbWFpbDogXCJcIixcclxuICAgICAgcHJvZmlsZV9uYW1lOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbWVzc2FnZUVycm9yKCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI2M2MjgyOFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3dhcm5pbmcucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIGluZm9ybWF0aW9uIHlvdSBlbnRlcmVkIGlzIG5vdCByZWNvZ25pemVkLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBkYXRhX3JlZ2lvbnMgPSByZWdpb25zLm1hcCgoZCkgPT4gKHtcclxuICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlZ2lvbnNfYXBpOiBkYXRhX3JlZ2lvbnMgfSk7XHJcbiAgfVxyXG5cclxuICBFbWFpbChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIFBhc3N3b3JkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgUGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGxvZ2luKGV2ZW50KSB7XHJcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW5cIjtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGFwaVVybCxcclxuICAgICAgICB7IGVtYWlsOiB0aGlzLnN0YXRlLkVtYWlsLCBwYXNzd29yZDogdGhpcy5zdGF0ZS5QYXNzd29yZCB9LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXF1ZXN0LnN0YXR1cyA9PSBcIjIwMFwiKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLmRhdGEpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS51c2VyLm5hbWU7XHJcbiAgICAgICAgICAkKFwiLmNvbE1haW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5jb2xMb2dpblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmNvbERlbGl2ZXJcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlRXJyb3IoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlZ2lvbl9jaGFuZ2U6IGUudmFsdWUgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZV9hcGk6IGRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBIYW5kbGVDaGFuZ2VQcm92aW5jZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2VfY2hhbmdlOiBlLnZhbHVlIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlOiBlLmxhYmVsIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGNpdGllc1xyXG4gICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5wcm92aW5jZSA9PT0gZS5pZClcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICB2YWx1ZTogZC5uYW1lLFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaXRpZXNfYXBpOiBkYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgbG5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucExuYW1lXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucExuYW1lXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEZuYW1lXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucEZuYW1lXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbW5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBlbWFpbChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRW1haWxcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wRW1haWxcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBtb2JpbGUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBNb2JpbGVcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkcmVzcyhldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgY2l0eShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlfZHJvcGRvd246IGV2ZW50LnZhbHVlLmxhYmVsIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHk6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuICBjb3VudHJ5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY291bnRyeTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICB6aXAoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB6aXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZENvbmZpcm0oZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbGUoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cHJvZmlsZV9uYW1lOiBmaWxlLm5hbWV9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGU6IGZpbGV9KTtcclxuICB9XHJcblxyXG4gIG9uQnRuQ2xpY2sgPSAoKSA9PiB0aGlzLmlucHV0RmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiBcclxuXHJcbiAgcmVnaXN0ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZuYW1lID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wRm5hbWVcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucExuYW1lXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wUGFzc3dvcmRcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcygnYnRuLS1sb2FkaW5nJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByb2ZpbGUpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZTogXCJcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZmlsZSA9IHRoaXMuc3RhdGUucHJvZmlsZTtcclxuICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgdGhpcy5zdGF0ZS5mbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgdGhpcy5zdGF0ZS5sbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgdGhpcy5zdGF0ZS5tbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKFxyXG4gICAgICAgICAgXCJwcm9maWxlX3BpY1wiLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLm5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJwcm9maWxlX3BpY1wiLCBcIlwiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCB0aGlzLnN0YXRlLmVtYWlsKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5hZGRyZXNzKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY291bnRyeVwiLCBcIlBoaWxpcHBpbmVzXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB0aGlzLnN0YXRlLnppcCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHRoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgTWF0aC5mbG9vcigocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyXCI7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucywgY29uZmlnKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwiMjAxXCIpIHtcclxuICAgICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoJ2J0bi0tbG9hZGluZycpO1xyXG4gICAgICAgICAgICBzdWNjZXNzTWVzc2FnZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKCdidG4tLWxvYWRpbmcnKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLmNzcyhcInotaW5kZXhcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWJhY2tkcm9wXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yRW1haWw6IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5lbWFpbFswXSB9KTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5lbWFpbFswXSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbExvZ2luXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTG9naW5cIj5Mb2ctaW48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveExvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0RW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkVtYWlsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuUGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcmdvdFwiPmZvcmdvdCBwYXNzd29yZD88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMubG9naW59PlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwT3JcIj5vcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuRmFjZWJvb2tcIiBvbkNsaWNrPXtidG50cnl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFNpZ24taW4gd2l0aCBmYWNlYm9va1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkdvb2dsZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTaWduLWluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEb250XCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvcD5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBTaWdudXBcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWxSZWdpc3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHNpZ24tdXBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgSkdPIC0gUmVnaXN0cmF0aW9uIEZvcm1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWNjb3VudFwiPkFDQ09VTlQgSU5GT1JNQVRJT048L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBGbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRmlyc3QgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPk1pZGRsZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubG5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JNZXNzYWdlIHBMbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBuYW1lIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkFkZHJlc3MgMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdXNlL1VuaXQgTnVtYmVyLCBCdWlsZGluZyBOYW1lLCBTdHJlZXQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZGRyZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5yZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVJlZ2lvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUHJvdmluY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaXR5LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBvc3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy56aXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkNvdW50cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY291bnRyeS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPkVtYWlsIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcEVtYWlsXCI+RW1haWwgaXMgcmVxdWlyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvck1lc3NhZ2UgcE1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIG51bWJlciBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dCB0eHRNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yTWVzc2FnZSBwUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDFcIj5Ecml2ZXIgTGlzZW5jZSAoUGhvdG8pPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCA4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvdWQtdXBsb2FkXCI+PC9pPiBDaG9vc2UgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdGU6IE9ubHkgLmpwZywgLmpwZWcgYW5kIC5wbmcgZmlsZXMgYXJlIGFsbG93ZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgdGV4dC1jZW50ZXIgbXgtYXV0byBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXRNb2RhbFwiIG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlID0ge3ttYXJnaW5MZWZ0OiBcIjQwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJtb2RhbFJlZ2lzdGVyXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWRyaXZlciBtb2RhbC1sZ1wiXHJcbiAgICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbW9kYWxEcml2ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVwiPkpnbyAtIFJlZ2lzdHJhdGlvbiBmb3JtPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBMZXQncyBnZXQgeW91IGFsbCBzZXQgdXAgc28geW91IGNhbiB2ZXJpZnkgeW91ciBwZXJzb25hbCBhY2NvdW50IGFuZCBzdGFydCBib29raW5nLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkZpcnN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Rm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubW5hbWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTG5hbWVcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmxuYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTW9iaWxlXCI+TW9iaWxlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5tb2JpbGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+QWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZGRyZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5yZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUmVnaW9uLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm92aW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucHJvdmluY2VfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhhbmRsZUNoYW5nZVByb3ZpbmNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNpdGllc19hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlfZHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2l0eS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlBoaWxpcHBpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+WmlwIENvZGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnppcH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy56aXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlBhc3N3b3JkIG11c3QgYmUgNi0xNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBDb25maXJtUGFzc1wiPkNvbmZpcm0gUGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRDb25maXJtUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Qcm9maWxlIFBpY3R1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pbnB1dEZpbGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZQcm9maWxlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQnRuQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+IGFcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pnt0aGlzLnN0YXRlLnByb2ZpbGVfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuU3VibWl0RHJpdmVyXCIgb25DbGljaz17dGhpcy5yZWdpc3Rlci5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICBTSUdOVVBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=