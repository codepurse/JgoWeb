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
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
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
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Success"), __jsx("p", {
    className: "pErrorSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
          lineNumber: 120,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
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
          lineNumber: 122,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
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
          lineNumber: 127,
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
          lineNumber: 129,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
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

      $(event.currentTarget).addClass("btn--loading");
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
          $(".btn").removeClass("btn--loading");
        }
      })["catch"](function (err) {
        $(".btn").removeClass("btn--loading");

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
      $(e.currentTarget).addClass("btn--loading");

      if (this.state.fname == "") {
        $(".pFname").css("color", "#d32f2f");
        $(".txtFname").css("borderColor", "#d32f2f");
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.lname == "") {
        $(".pLname").show();
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.mobile == "") {
        $(".pMobile").show();
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.email == "") {
        $(".pEmail").show();
        $(".btn").removeClass("btn--loading");
      }

      if (this.state.password == "") {
        $(".pPassword").show();
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
          lineNumber: 389,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "pLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }
      }, "Log-in"), __jsx("div", {
        className: "boxLogin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
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
          lineNumber: 392,
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
          lineNumber: 398,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pForgot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 15
        }
      }, "forgot password?")), __jsx("div", {
        className: "col-lg-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btnSubmit",
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 15
        }
      }, "Login", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 19
        }
      }), __jsx("b", {
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
      }))))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-2 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "pOr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 15
        }
      }, "or")), __jsx("div", {
        className: "col-lg-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 13
        }
      }, __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 15
        }
      }))), __jsx("button", {
        className: "btnFacebook",
        onClick: btntry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
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
          lineNumber: 432,
          columnNumber: 13
        }
      }), "Sign-in with facebook"), __jsx("button", {
        className: "btnGoogle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
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
          lineNumber: 439,
          columnNumber: 13
        }
      }), "Sign-in with Google"), __jsx("p", {
        className: "pDont",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 11
        }
      }, "Don't have an account?"), __jsx("p", {
        className: "pSignup",
        "data-toggle": "modal",
        "data-target": "#modalRegister",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
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
          lineNumber: 454,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-driver modal-lg",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
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
        className: "modal-body modalDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pModalTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 17
        }
      }, "Jgo - Registration form"), __jsx("p", {
        className: "pModalTitleSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
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
          lineNumber: 473,
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
          lineNumber: 479,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pFname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
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
          lineNumber: 482,
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
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
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
          lineNumber: 491,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pLname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
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
          lineNumber: 500,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
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
        className: "pTxtDriver pMobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
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
          lineNumber: 518,
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
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
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
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 21
        }
      }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.regions_api,
        onChange: this.HandleChangeRegion.bind(this),
        styles: customStyles1,
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
          lineNumber: 545,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 21
        }
      }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        options: this.state.province_api,
        onChange: this.HandleChangeProvince.bind(this),
        styles: customStyles1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
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
          lineNumber: 555,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
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
          lineNumber: 565,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-lg-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
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
          lineNumber: 574,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
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
          lineNumber: 586,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 21
        }
      }, "Password must be 6-16 characters.")), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver pConfirmPass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
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
          lineNumber: 596,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
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
          lineNumber: 608,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "divAttachment divProfile text-center",
        onClick: this.onBtnClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "pTxtDriver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 23
        }
      }, __jsx("span", {
        style: {
          color: "#EDC728"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 25
        }
      }, "Drag or Browse"), " ", "a file here"), __jsx("p", {
        style: {
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
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
          lineNumber: 631,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "btn btnSubmitDriver",
        onClick: this.register.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 21
        }
      }, "SIGNUP", __jsx("span", {
        style: {
          marginLeft: "40px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 23
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 25
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 25
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3VzdG9tU3R5bGVzMSIsImJhY2tncm91bmQiLCJjb2xvciIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInN1Y2Nlc3NNZXNzYWdlIiwic3dhbCIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJidG50cnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibG9naW4iLCJwcm9wcyIsImNyZWF0ZVJlZiIsImlucHV0RmlsZVJlZiIsImN1cnJlbnQiLCJjbGljayIsIkVtYWlsIiwiUGFzc3dvcmQiLCJyZWdpb25zX2FwaSIsInZhbHVlIiwibmFtZSIsInByb3ZpbmNlX2FwaSIsImNpdGllc19hcGkiLCJyZWdpb25fY2hhbmdlIiwicHJvdmluY2VfY2hhbmdlIiwiZm5hbWUiLCJsbmFtZSIsIm1uYW1lIiwicHJvZmlsZSIsImVtYWlsIiwibW9iaWxlIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwicGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJjaXR5X2Ryb3Bkb3duIiwiZXJyb3JFbWFpbCIsImVycm9yRm5hbWUiLCJlcnJvckxuYW1lIiwiYWN0aXZlRW1haWwiLCJwcm9maWxlX25hbWUiLCJiaW5kIiwiZGF0YV9yZWdpb25zIiwibWFwIiwiZCIsImtleSIsImxhYmVsIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJyZXF1ZXN0Iiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJoaWRlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiZXJyIiwibWVzc2FnZUVycm9yIiwiZSIsImZpbHRlciIsInBlcnNvbiIsInJlZ2lvbiIsImlkIiwiZmlsZSIsImZpbGVzIiwicHJldmVudERlZmF1bHQiLCJjc3MiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiYXBwZW5kIiwiY29uZmlnIiwib25VcGxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsIm1vZGFsIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvZGVyIiwiSGFuZGxlQ2hhbmdlUmVnaW9uIiwiSGFuZGxlQ2hhbmdlUHJvdmluY2UiLCJwYXNzd29yZENvbmZpcm0iLCJoYW5kbGVGaWxlIiwiZGlzcGxheSIsIm9uQnRuQ2xpY2siLCJyZWdpc3RlciIsIm1hcmdpbkxlZnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBeEI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLGtFQUFELENBQXRCOztBQUVBLElBQU1HLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLGlCQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwyQ0FDSkQsSUFESTtBQUVQRSxZQUFNLEVBQUUsbUJBRkQ7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QUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQyxxQkFEWjtBQUVFLGVBQU8sRUFBRSxLQUFLb0gsUUFBTCxDQUFjbkUsSUFBZCxDQUFtQixJQUFuQixDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBS0U7QUFBTSxhQUFLLEVBQUU7QUFBRW9FLG9CQUFVLEVBQUU7QUFBZCxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FMRixDQURGLENBREYsQ0FwS0YsQ0FERixDQUpGLENBUkYsQ0FsRUYsQ0FERjtBQXlRRDtBQXBrQkg7O0FBQUE7QUFBQSxFQUEyQkMsK0NBQTNCO0FBdWtCZXRHLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxZDIxYWViMzRlMmY3YTQ5ZGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgcmVnaW9ucyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9yZWdpb25zXCIpO1xyXG5jb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbmNvbnN0IGNpdGllcyA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9jaXRpZXNcIik7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZSxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzcwNzA3MFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMTUlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjQuNXB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMxID0ge1xyXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYigyOCwgMzAsIDMzKVwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgLi4ucHJvdmlkZWQsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3VjY2Vzc01lc3NhZ2UoKSB7XHJcbiAgc3dhbChcclxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjMDBDODUzXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvc3VjY2Vzcy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U3VjY2VzczwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgQWNjb3VudCBzdWNjZXNmdWxseSBjcmVhdGVkLiBZb3UgbWF5IG5vdyBsb2dpbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnRudHJ5KCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYVVzZXJuYW1lXCIpLmlubmVySFRNTCA9IFwiQVNkYXNcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBpbnB1dEZpbGVSZWYgPSBjcmVhdGVSZWYobnVsbCk7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBFbWFpbDogXCJcIixcclxuICAgICAgUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHJlZ2lvbnNfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcHJvdmluY2VfYXBpOiB7XHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgY2l0aWVzX2FwaToge1xyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZ2lvbl9jaGFuZ2U6IFwiXCIsXHJcbiAgICAgIHByb3ZpbmNlX2NoYW5nZTogXCJcIixcclxuICAgICAgZm5hbWU6IFwiXCIsXHJcbiAgICAgIGxuYW1lOiBcIlwiLFxyXG4gICAgICBtbmFtZTogXCJcIixcclxuICAgICAgcHJvZmlsZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1vYmlsZTogXCJcIixcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgY2l0eTogXCJcIixcclxuICAgICAgcHJvdmluY2U6IFwiXCIsXHJcbiAgICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICAgIHppcDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkY29uZmlybTogXCJcIixcclxuICAgICAgY2l0eV9kcm9wZG93bjogXCJcIixcclxuICAgICAgZXJyb3JFbWFpbDogXCJcIixcclxuICAgICAgZXJyb3JGbmFtZTogXCJcIixcclxuICAgICAgZXJyb3JMbmFtZTogXCJcIixcclxuICAgICAgYWN0aXZlRW1haWw6IFwiXCIsXHJcbiAgICAgIHByb2ZpbGVfbmFtZTogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG1lc3NhZ2VFcnJvcigpIHtcclxuICAgIHN3YWwoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNjNjI4MjhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS93YXJuaW5nLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgIFRoZSBpbmZvcm1hdGlvbiB5b3UgZW50ZXJlZCBpcyBub3QgcmVjb2duaXplZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgZGF0YV9yZWdpb25zID0gcmVnaW9ucy5tYXAoKGQpID0+ICh7XHJcbiAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgIH0pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25zX2FwaTogZGF0YV9yZWdpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgRW1haWwoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBFbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBQYXNzd29yZChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbihldmVudCkge1xyXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW5cIjtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGFwaVVybCxcclxuICAgICAgICB7IGVtYWlsOiB0aGlzLnN0YXRlLkVtYWlsLCBwYXNzd29yZDogdGhpcy5zdGF0ZS5QYXNzd29yZCB9LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXF1ZXN0LnN0YXR1cyA9PSBcIjIwMFwiKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLmRhdGEpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS51c2VyLm5hbWU7XHJcbiAgICAgICAgICAkKFwiLmNvbE1haW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5jb2xMb2dpblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmNvbERlbGl2ZXJcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUVycm9yKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUmVnaW9uKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWdpb25fY2hhbmdlOiBlLnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwcm92aW5jZVxyXG4gICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5yZWdpb24gPT09IGUudmFsdWUpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgaWQ6IGQua2V5LFxyXG4gICAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2VfYXBpOiBkYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgSGFuZGxlQ2hhbmdlUHJvdmluY2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZpbmNlX2NoYW5nZTogZS52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZTogZS5sYWJlbCB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBjaXRpZXNcclxuICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24ucHJvdmluY2UgPT09IGUuaWQpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgdmFsdWU6IGQubmFtZSxcclxuICAgICAgICBsYWJlbDogZC5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0aWVzX2FwaTogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGxuYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICBcclxuICAgIH1cclxuICB9XHJcbiAgZm5hbWUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1uYW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgZW1haWwoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBtb2JpbGUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgYWRkcmVzcyhldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgY2l0eShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlfZHJvcGRvd246IGV2ZW50LnZhbHVlLmxhYmVsIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHk6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuICBjb3VudHJ5KGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY291bnRyeTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICB6aXAoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB6aXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZENvbmZpcm0oZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbGUoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfbmFtZTogZmlsZS5uYW1lIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGU6IGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkJ0bkNsaWNrID0gKCkgPT4gdGhpcy5pbnB1dEZpbGVSZWYuY3VycmVudC5jbGljaygpO1xyXG5cclxuICByZWdpc3RlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEZuYW1lXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRGbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUubG5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucEVtYWlsXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLnNob3coKTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByb2ZpbGUpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZTogXCJcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZmlsZSA9IHRoaXMuc3RhdGUucHJvZmlsZTtcclxuICAgICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiZm5hbWVcIiwgdGhpcy5zdGF0ZS5mbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgdGhpcy5zdGF0ZS5sbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwibW5hbWVcIiwgdGhpcy5zdGF0ZS5tbmFtZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKFxyXG4gICAgICAgICAgXCJwcm9maWxlX3BpY1wiLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlLm5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIHRoaXMuc3RhdGUuZW1haWwpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcIm1vYmlsZV9ub1wiLCB0aGlzLnN0YXRlLm1vYmlsZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkcmVzc1wiLCB0aGlzLnN0YXRlLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLnByb3ZpbmNlKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjb3VudHJ5XCIsIFwiUGhpbGlwcGluZXNcIik7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHRoaXMuc3RhdGUuemlwKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZFwiLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJmbmFtZVwiLCB0aGlzLnN0YXRlLmZuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJsbmFtZVwiLCB0aGlzLnN0YXRlLmxuYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCB0aGlzLnN0YXRlLm1uYW1lKTtcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJwcm9maWxlX3BpY1wiLCBcIlwiKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJlbWFpbFwiLCB0aGlzLnN0YXRlLmVtYWlsKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJtb2JpbGVfbm9cIiwgdGhpcy5zdGF0ZS5tb2JpbGUpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5hZGRyZXNzKTtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJjaXR5XCIsIHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5wcm92aW5jZSk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwiY291bnRyeVwiLCBcIlBoaWxpcHBpbmVzXCIpO1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInppcFwiLCB0aGlzLnN0YXRlLnppcCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRcIiwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHRoaXMuc3RhdGUucGFzc3dvcmRjb25maXJtKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgTWF0aC5mbG9vcigocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyXCI7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucywgY29uZmlnKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwiMjAxXCIpIHtcclxuICAgICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1iYWNrZHJvcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvckVtYWlsOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWxbMF0gfSk7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWxbMF0pIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xMb2dpblwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicExvZ2luXCI+TG9nLWluPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hMb2dpblwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0IHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5FbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHQgdHh0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLlBhc3N3b3JkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBGb3Jnb3RcIj5mb3Jnb3QgcGFzc3dvcmQ/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE9yXCI+b3I8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkZhY2Vib29rXCIgb25DbGljaz17YnRudHJ5fT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIkltYWdlL2ZhY2Vib29rLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTaWduLWluIHdpdGggZmFjZWJvb2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Hb29nbGVcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU2lnbi1pbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG9udFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L3A+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwU2lnbnVwXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsUmVnaXN0ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBzaWduLXVwXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgICBpZD1cIm1vZGFsUmVnaXN0ZXJcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1kcml2ZXIgbW9kYWwtbGdcIlxyXG4gICAgICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbW9kYWxEcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RhbFRpdGxlXCI+SmdvIC0gUmVnaXN0cmF0aW9uIGZvcm08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kYWxUaXRsZVN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBMZXQncyBnZXQgeW91IGFsbCBzZXQgdXAgc28geW91IGNhbiB2ZXJpZnkgeW91ciBwZXJzb25hbFxyXG4gICAgICAgICAgICAgICAgICBhY2NvdW50IGFuZCBzdGFydCBib29raW5nLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTQxNDFcIixcclxuICAgICAgICAgICAgICAgICAgICBib2RlcjogXCIxcHggc29saWQgIzQxNDE0MVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaHI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBGbmFtZVwiPkZpcnN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Rm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1uYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTG5hbWVcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRMbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5sbmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEVtYWlsXCI+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcE1vYmlsZVwiPk1vYmlsZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vYmlsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZGRyZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnJlZ2lvbnNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSGFuZGxlQ2hhbmdlUmVnaW9uLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvdmluY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wcm92aW5jZV9hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5IYW5kbGVDaGFuZ2VQcm92aW5jZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY2l0aWVzX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eV9kcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNpdHkuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+WmlwIENvZGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuemlwLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcFBhc3N3b3JkXCI+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5QYXNzd29yZCBtdXN0IGJlIDYtMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwQ29uZmlybVBhc3NcIj5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkY29uZmlybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRDb25maXJtUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZENvbmZpcm0uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb2ZpbGUgUGljdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmlucHV0RmlsZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2UHJvZmlsZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQnRuQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRURDNzI4XCIgfX0+RHJhZyBvciBCcm93c2U8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhIGZpbGUgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvZmlsZV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU0lHTlVQXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9