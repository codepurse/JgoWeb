webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function profile() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      full_name = _React$useState2[0],
      setFull_name = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      fname = _React$useState4[0],
      setFname = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      tabledata = _React$useState6[0],
      setTabledata = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState("1"),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      tableid = _React$useState8[0],
      settableid = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      count = _React$useState10[0],
      setCount = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      activeCount = _React$useState12[0],
      setACtivecount = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      statusdropdown = _React$useState14[0],
      setStatus = _React$useState14[1];

  var x;
  var status = [{
    value: "Delivered",
    label: "Delivered"
  }, {
    value: "Looking for Driver",
    label: "Looking for Driver"
  }, {
    value: "Ongoing",
    label: "Ongoing"
  }];
  var date = [{
    value: "October",
    label: "October"
  }];
  var customStyles = {
    control: function control(base, state) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {
        background: "rgb(28, 30, 33)",
        color: "white",
        border: "none",
        boxShadow: "none",
        borderRadius: "5px",
        width: "115%",
        padding: "2px",
        marginTop: "5px"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "boxShadow", state.isFocused ? "#EDC728" : null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "&:hover", {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }), _objectSpread2));
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "white"
      });
    },
    container: function container(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        width: "150px"
      });
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    coordinatebook.length = 0;
    global.config.place.deliver.table_id = "";

    if (_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].getFullname()) {
      setFull_name(_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].getFullname());
      $(".conProfile").show();
    } else {
      router.push("/");
    }

    var options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].getToken()
      }
    };
    var apiUrl = "http://localhost:8000/api/auth/ctransaction-history";
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(apiUrl, {
      customer_id: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].getId()
    }, options).then(function (result) {
      console.log(result);
      setTabledata(result.data.data);
      tablemap = result.data.data;
      setCount(result.data.data.length);
      var active = result.data.data.filter(function (item) {
        return item.status === "Looking for Driver";
      });
      setACtivecount(active.length);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);

  function logout() {
    _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].logout();
    router.push("/");
  }

  function profile() {
    $(".conBook").hide();
    $(".conProf").fadeIn(250);
  }

  function booking() {
    $(".conBook").fadeIn(250);
    $(".conProf").hide();
  }

  function clickTable() {
    return _clickTable.apply(this, arguments);
  }

  function _clickTable() {
    _clickTable = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $("#table").on("click", "tr", function (e) {
                global.config.place.deliver.table_id = Number($(this).children().closest("td").html());
              });

              if (global.config.place.deliver.table_id == "") {} else {
                router.push("/mapbooking");
              }

              doubleclickTable();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _clickTable.apply(this, arguments);
  }

  function doubleclickTable() {
    $("#table").on("click", "tr", function (e) {
      global.config.place.deliver.table_id = Number($(this).children().closest("td").html());
    });

    if (global.config.place.deliver.table_id == "") {} else {
      router.push("/mapbooking");
    }
  }

  function hovertable() {
    $("tr").not(":first").hover(function () {
      $("td", this).css("color", "#EDC728 ");
    }, function () {
      $("td", this).css("color", "");
    });
  }

  function handlestatuschange(value) {
    var value = value.label.toLowerCase();
    setStatus(value.label);
    $("#table > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

      if ($("#table> tbody > :visible").length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    });
  }

  var statusColor = function statusColor(value) {
    switch (value) {
      case "in transit":
        return "intransit";
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conProfile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divSidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/home.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 23
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, "Home")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/truck.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, "Deliver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/call.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 19
    }
  }, "Contact")))))), __jsx("div", {
    className: "row rowTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid",
    "data-toggle": "modal",
    "data-target": "#exampleModal",
    style: {
      width: "120px",
      marginLeft: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-inline divUserNav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "btnLogout",
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, "Logout"), __jsx("div", {
    className: "vl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "pFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, full_name), __jsx("div", {
    className: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "container-fluid conMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, "Dashboard")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "ulDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx("li", {
    onClick: booking,
    className: "activeUl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, "BOOKINGS"), __jsx("li", {
    onClick: profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "PROFILE"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, "SETTINGS")), __jsx("hr", {
    className: "hrDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container-fluid conBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTotalBookings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, count, "Total Bookings", " ", __jsx("span", {
    className: "pActiveBookings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, activeCount, " Active"))), __jsx("div", {
    className: "col-lg-7 form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: date,
    styles: customStyles,
    placeholder: "Select Date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: status,
    styles: customStyles,
    placeholder: "Select status",
    value: statusdropdown,
    onChange: handlestatuschange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divInputIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    className: "txtSearch",
    placeholder: "Search id",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "table",
    id: "table",
    onClick: clickTable,
    onDoubleClick: doubleclickTable,
    onMouseOver: hovertable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, __jsx("tr", {
    style: {
      backgroundColor: "transparent"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, "ID"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, "Pickup Address"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, "Drop Location"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }, tabledata.map(function (event) {
    return __jsx("tr", {
      key: event.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 23
      }
    }, event.id), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 23
      }
    }, event.status), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 23
      }
    }, event.pick_up_address), event.booking_drop_off_location.map(function (event) {
      return __jsx("td", {
        key: event.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 25
        }
      }, event.drop_off_address, __jsx("span", {
        className: statusColor(event.status),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 27
        }
      }, event.status));
    }));
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pNo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, "NO RESULT FOUND"))))), __jsx("div", {
    className: "container conProf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTitleDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, "General Information")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTitleDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }
  }, "AddressInformation")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }, "Region"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, "Province"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, "City/Municipality"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, "Country"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "modal fade",
    id: "exampleModal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 15
    }
  }, "Modal title"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 15
    }
  }, tabledata.filter(function (event) {
    return event.id === 2;
  }).map(function (data) {
    return __jsx("div", {
      key: data.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 23
      }
    }, data.pick_up_address), data.booking_drop_off_location.map(function (data) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 25
        }
      }, data.drop_off_address);
    }));
  })), tableid), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 15
    }
  }, "Save changes"))))));
}

_s(profile, "ZnjnaxpFWh85Ll2/ppAnnetB9q4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZ1bGxfbmFtZSIsInNldEZ1bGxfbmFtZSIsImZuYW1lIiwic2V0Rm5hbWUiLCJ0YWJsZWRhdGEiLCJzZXRUYWJsZWRhdGEiLCJ0YWJsZWlkIiwic2V0dGFibGVpZCIsImNvdW50Iiwic2V0Q291bnQiLCJhY3RpdmVDb3VudCIsInNldEFDdGl2ZWNvdW50Iiwic3RhdHVzZHJvcGRvd24iLCJzZXRTdGF0dXMiLCJ4Iiwic3RhdHVzIiwidmFsdWUiLCJsYWJlbCIsImRhdGUiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwiY29udGFpbmVyIiwidXNlRWZmZWN0IiwiY29vcmRpbmF0ZWJvb2siLCJsZW5ndGgiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJ0YWJsZV9pZCIsIkF1dGhTZXJ2aWNlIiwiZ2V0RnVsbG5hbWUiLCIkIiwic2hvdyIsInB1c2giLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsImN1c3RvbWVyX2lkIiwiZ2V0SWQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0YWJsZW1hcCIsImFjdGl2ZSIsImZpbHRlciIsIml0ZW0iLCJlcnIiLCJsb2dvdXQiLCJoaWRlIiwiZmFkZUluIiwiYm9va2luZyIsImNsaWNrVGFibGUiLCJvbiIsImUiLCJOdW1iZXIiLCJjaGlsZHJlbiIsImNsb3Nlc3QiLCJodG1sIiwiZG91YmxlY2xpY2tUYWJsZSIsImhvdmVydGFibGUiLCJub3QiLCJob3ZlciIsImNzcyIsImhhbmRsZXN0YXR1c2NoYW5nZSIsInRvTG93ZXJDYXNlIiwidG9nZ2xlIiwidGV4dCIsImluZGV4T2YiLCJzdGF0dXNDb2xvciIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJldmVudCIsImlkIiwicGlja191cF9hZGRyZXNzIiwiYm9va2luZ19kcm9wX29mZl9sb2NhdGlvbiIsImRyb3Bfb2ZmX2FkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEZ0Msd0JBRUVDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRkY7QUFBQTtBQUFBLE1BRXpCQyxTQUZ5QjtBQUFBLE1BRWRDLFlBRmM7O0FBQUEseUJBR05ILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSE07QUFBQTtBQUFBLE1BR3pCRyxLQUh5QjtBQUFBLE1BR2xCQyxRQUhrQjs7QUFBQSx5QkFJRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKRjtBQUFBO0FBQUEsTUFJekJLLFNBSnlCO0FBQUEsTUFJZEMsWUFKYzs7QUFBQSx5QkFLRlAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEdBQWYsQ0FMRTtBQUFBO0FBQUEsTUFLekJPLE9BTHlCO0FBQUEsTUFLaEJDLFVBTGdCOztBQUFBLHlCQU1OVCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5NO0FBQUE7QUFBQSxNQU16QlMsS0FOeUI7QUFBQSxNQU1sQkMsUUFOa0I7O0FBQUEsMEJBT01YLDRDQUFLLENBQUNDLFFBQU4s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LGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsU0FBSyxFQUFFO0FBQUVZLFdBQUssRUFBRTtBQUFULEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixDQURGLENBREYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxpQkFBVDtBQUEyQixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLENBVEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixDQWJGLENBREYsQ0FERixD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Q0FBQ2tDLHlCQUFMLENBQStCSixHQUEvQixDQUFtQyxVQUFDOUIsSUFBRDtBQUFBLGFBQ2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsSUFBSSxDQUFDbUMsZ0JBQVYsQ0FEa0M7QUFBQSxLQUFuQyxDQUZILENBREc7QUFBQSxHQUZOLENBREgsQ0FERixFQWFHNUYsT0FiSCxDQWRGLEVBNkJFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsbUJBRlo7QUFHRSxvQkFBYSxPQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLENBN0JGLENBREYsQ0FSRixDQWhORixDQURGO0FBd1FEOztHQXBhdUJYLE87VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mYzBiNmU2MDBiNzIxZjRhMzMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgQ29tcG9uZW50ZGlkbW91bnQgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnRkaWRtb3VudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2ZpbGUoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Z1bGxfbmFtZSwgc2V0RnVsbF9uYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmbmFtZSwgc2V0Rm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhYmxlZGF0YSwgc2V0VGFibGVkYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGFibGVpZCwgc2V0dGFibGVpZF0gPSBSZWFjdC51c2VTdGF0ZShcIjFcIik7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWN0aXZlQ291bnQsIHNldEFDdGl2ZWNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXNkcm9wZG93biwgc2V0U3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIHZhciB4O1xyXG5cclxuICBjb25zdCBzdGF0dXMgPSBbXHJcbiAgICB7IHZhbHVlOiBcIkRlbGl2ZXJlZFwiLCBsYWJlbDogXCJEZWxpdmVyZWRcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJMb29raW5nIGZvciBEcml2ZXJcIiwgbGFiZWw6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiT25nb2luZ1wiLCBsYWJlbDogXCJPbmdvaW5nXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBkYXRlID0gW3sgdmFsdWU6IFwiT2N0b2JlclwiLCBsYWJlbDogXCJPY3RvYmVyXCIgfV07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjgsIDMwLCAzMylcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMTUlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KSxcclxuICAgIGNvbnRhaW5lcjogKGJhc2UpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29vcmRpbmF0ZWJvb2subGVuZ3RoID0gMDtcclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci50YWJsZV9pZCA9IFwiXCI7XHJcbiAgICBpZiAoQXV0aFNlcnZpY2UuZ2V0RnVsbG5hbWUoKSkge1xyXG4gICAgICBzZXRGdWxsX25hbWUoQXV0aFNlcnZpY2UuZ2V0RnVsbG5hbWUoKSk7XHJcbiAgICAgICQoXCIuY29uUHJvZmlsZVwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIEF1dGhTZXJ2aWNlLmdldFRva2VuKCksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvY3RyYW5zYWN0aW9uLWhpc3RvcnlcIjtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGFwaVVybCwgeyBjdXN0b21lcl9pZDogQXV0aFNlcnZpY2UuZ2V0SWQoKSB9LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRUYWJsZWRhdGEocmVzdWx0LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgdGFibGVtYXAgPSByZXN1bHQuZGF0YS5kYXRhO1xyXG4gICAgICAgIHNldENvdW50KHJlc3VsdC5kYXRhLmRhdGEubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhY3RpdmUgPSByZXN1bHQuZGF0YS5kYXRhLmZpbHRlcihcclxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gXCJMb29raW5nIGZvciBEcml2ZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0QUN0aXZlY291bnQoYWN0aXZlLmxlbmd0aCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBBdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByb2ZpbGUoKSB7XHJcbiAgICAkKFwiLmNvbkJvb2tcIikuaGlkZSgpO1xyXG4gICAgJChcIi5jb25Qcm9mXCIpLmZhZGVJbigyNTApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYm9va2luZygpIHtcclxuICAgICQoXCIuY29uQm9va1wiKS5mYWRlSW4oMjUwKTtcclxuICAgICQoXCIuY29uUHJvZlwiKS5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjbGlja1RhYmxlKCkge1xyXG4gICAgJChcIiN0YWJsZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkID0gTnVtYmVyKFxyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oKS5jbG9zZXN0KFwidGRcIikuaHRtbCgpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkID09IFwiXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL21hcGJvb2tpbmdcIik7XHJcbiAgICB9XHJcbiAgICBkb3VibGVjbGlja1RhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkb3VibGVjbGlja1RhYmxlKCkge1xyXG4gICAgJChcIiN0YWJsZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkID0gTnVtYmVyKFxyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oKS5jbG9zZXN0KFwidGRcIikuaHRtbCgpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkID09IFwiXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL21hcGJvb2tpbmdcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBob3ZlcnRhYmxlKCkge1xyXG4gICAgJChcInRyXCIpXHJcbiAgICAgIC5ub3QoXCI6Zmlyc3RcIilcclxuICAgICAgLmhvdmVyKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCJ0ZFwiLCB0aGlzKS5jc3MoXCJjb2xvclwiLCBcIiNFREM3MjggXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJChcInRkXCIsIHRoaXMpLmNzcyhcImNvbG9yXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZXN0YXR1c2NoYW5nZSh2YWx1ZSkge1xyXG4gICAgdmFyIHZhbHVlID0gdmFsdWUubGFiZWwudG9Mb3dlckNhc2UoKTtcclxuICAgIHNldFN0YXR1cyh2YWx1ZS5sYWJlbCk7XHJcbiAgICAkKFwiI3RhYmxlID4gdGJvZHkgPiB0clwiKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZSgkKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUpID4gLTEpO1xyXG4gICAgICBpZiAoJChcIiN0YWJsZT4gdGJvZHkgPiA6dmlzaWJsZVwiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICQoXCIucE5vXCIpLnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLnBOb1wiKS5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhdHVzQ29sb3IgPSAodmFsdWUpID0+IHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBcImluIHRyYW5zaXRcIjpcclxuICAgICAgICByZXR1cm4gXCJpbnRyYW5zaXRcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvblByb2ZpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlNpZGViYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkljb25cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm8tYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2hvbWUucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvdHJ1Y2sucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxpdmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jYWxsLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q29udGFjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3dUb3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIkltYWdlL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTIwcHhcIiwgbWFyZ2luTGVmdDogXCI0MHB4XCIgfX1cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHRleHQtY2VudGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZGl2VXNlck5hdlwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTG9nb3V0XCIgb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwRnVsbG5hbWVcIj57ZnVsbF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9wcm9maWxlLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjb25NZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicERhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17Ym9va2luZ30gY2xhc3NOYW1lPVwiYWN0aXZlVWxcIj5cclxuICAgICAgICAgICAgICAgIEJPT0tJTkdTXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17cHJvZmlsZX0+UFJPRklMRTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlNFVFRJTkdTPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyRGFzaGJvYXJkXCI+PC9ocj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uQm9va1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVG90YWxCb29raW5nc1wiPlxyXG4gICAgICAgICAgICAgIHtjb3VudH1Ub3RhbCBCb29raW5nc3tcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwQWN0aXZlQm9va2luZ3NcIj57YWN0aXZlQ291bnR9IEFjdGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZGF0ZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c2Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXN0YXR1c2NoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdklucHV0SWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0U2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGlkXCJcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidGFibGVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tUYWJsZX1cclxuICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e2RvdWJsZWNsaWNrVGFibGV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17aG92ZXJ0YWJsZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5QaWNrdXAgQWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRyb3AgTG9jYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3RhYmxlZGF0YS5tYXAoKGV2ZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZXZlbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQucGlja191cF9hZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuYm9va2luZ19kcm9wX29mZl9sb2NhdGlvbi5tYXAoKGV2ZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2V2ZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuZHJvcF9vZmZfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NvbG9yKGV2ZW50LnN0YXR1cyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm9cIj5OTyBSRVNVTFQgRk9VTkQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25Qcm9mXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZURhc2hib2FyZFwiPkdlbmVyYWwgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Rm5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMbmFtZVwiPkxhc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0RW1haWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcE1vYmlsZVwiPk1vYmlsZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGl0bGVEYXNoYm9hcmRcIj5BZGRyZXNzSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvdmluY2U8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIE1vZGFsIHRpdGxlXHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RhYmxlZGF0YVxyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaWQgPT09IDIpXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+e2RhdGEucGlja191cF9hZGRyZXNzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2RhdGEuZHJvcF9vZmZfYWRkcmVzc308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0YWJsZWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgU2F2ZSBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9