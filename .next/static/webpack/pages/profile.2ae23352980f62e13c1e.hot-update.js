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

      if (result.data.data.length === 0) {}

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
      lineNumber: 172,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conProfile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divSidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("a", {
    style: {
      textDecoration: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
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
      lineNumber: 182,
      columnNumber: 23
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 23
    }
  }, "Home")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("a", {
    style: {
      textDecoration: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/truck.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 23
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 23
    }
  }, "Deliver")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("a", {
    style: {
      textDecoration: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/call.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "Contact")))))))), __jsx("div", {
    className: "row rowTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 212,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-inline divUserNav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "btnLogout",
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, "Logout"), __jsx("div", {
    className: "vl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "pFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, full_name), __jsx("div", {
    className: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "container-fluid conMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "Dashboard")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "ulDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx("li", {
    onClick: booking,
    className: "activeUl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, "BOOKINGS"), __jsx("li", {
    onClick: profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, "PROFILE"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, "SETTINGS")), __jsx("hr", {
    className: "hrDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container-fluid conBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12 form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTotalBookings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, count, "Total Bookings", " ", __jsx("span", {
    className: "pActiveBookings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, activeCount, " Active"))), __jsx("div", {
    className: "col-lg-7 form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: date,
    styles: customStyles,
    placeholder: "Select Date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
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
      lineNumber: 269,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divInputIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    className: "txtSearch",
    placeholder: "Search id",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 288,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx("tr", {
    style: {
      backgroundColor: "transparent"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, "ID"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "Pickup Address"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, "Drop Location"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, tabledata.map(function (event) {
    return __jsx("tr", {
      key: event.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 23
      }
    }, event.id), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 23
      }
    }, event.status), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 23
      }
    }, event.pick_up_address), event.booking_drop_off_location.map(function (event) {
      return __jsx("td", {
        key: event.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 25
        }
      }, event.drop_off_address, __jsx("span", {
        className: statusColor(event.status),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 27
        }
      }, event.status));
    }));
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pNo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }, "NO RESULT FOUND"))))), __jsx("div", {
    className: "container conProf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTitleDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, "General Information")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 13
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
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
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
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
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTitleDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, "AddressInformation")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 13
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }
  }, "Region"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }, "Province"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }, "City/Municipality"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 13
    }
  }, "Country"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 13
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
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
      lineNumber: 390,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
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
      lineNumber: 404,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
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
        lineNumber: 418,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 23
      }
    }, data.pick_up_address), data.booking_drop_off_location.map(function (data) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 25
        }
      }, data.drop_off_address);
    }));
  })), tableid), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZ1bGxfbmFtZSIsInNldEZ1bGxfbmFtZSIsImZuYW1lIiwic2V0Rm5hbWUiLCJ0YWJsZWRhdGEiLCJzZXRUYWJsZWRhdGEiLCJ0YWJsZWlkIiwic2V0dGFibGVpZCIsImNvdW50Iiwic2V0Q291bnQiLCJhY3RpdmVDb3VudCIsInNldEFDdGl2ZWNvdW50Iiwic3RhdHVzZHJvcGRvd24iLCJzZXRTdGF0dXMiLCJ4Iiwic3RhdHVzIiwidmFsdWUiLCJsYWJlbCIsImRhdGUiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwiY29udGFpbmVyIiwidXNlRWZmZWN0IiwiY29vcmRpbmF0ZWJvb2siLCJsZW5ndGgiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJ0YWJsZV9pZCIsIkF1dGhTZXJ2aWNlIiwiZ2V0RnVsbG5hbWUiLCIkIiwic2hvdyIsInB1c2giLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsImFwaVVybCIsImF4aW9zIiwicG9zdCIsImN1c3RvbWVyX2lkIiwiZ2V0SWQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0YWJsZW1hcCIsImFjdGl2ZSIsImZpbHRlciIsIml0ZW0iLCJlcnIiLCJsb2dvdXQiLCJoaWRlIiwiZmFkZUluIiwiYm9va2luZyIsImNsaWNrVGFibGUiLCJvbiIsImUiLCJOdW1iZXIiLCJjaGlsZHJlbiIsImNsb3Nlc3QiLCJodG1sIiwiZG91YmxlY2xpY2tUYWJsZSIsImhvdmVydGFibGUiLCJub3QiLCJob3ZlciIsImNzcyIsImhhbmRsZXN0YXR1c2NoYW5nZSIsInRvTG93ZXJDYXNlIiwidG9nZ2xlIiwidGV4dCIsImluZGV4T2YiLCJzdGF0dXNDb2xvciIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImV2ZW50IiwiaWQiLCJwaWNrX3VwX2FkZHJlc3MiLCJib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uIiwiZHJvcF9vZmZfYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURnQyx3QkFFRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGRjtBQUFBO0FBQUEsTUFFekJDLFNBRnlCO0FBQUEsTUFFZEMsWUFGYzs7QUFBQSx5QkFHTkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FITTtBQUFBO0FBQUEsTUFHekJHLEtBSHlCO0FBQUEsTUFHbEJDLFFBSGtCOztBQUFBLHlCQUlFTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUpGO0FBQUE7QUFBQSxNQUl6QkssU0FKeUI7QUFBQSxNQUlkQyxZQUpjOztBQUFBLHlCQUtGUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQUxFO0FBQUE7QUFBQSxNQUt6Qk8sT0FMeUI7QUFBQSxNQUtoQkMsVUFMZ0I7O0FBQUEseUJBTU5ULDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTk07QUFBQTtBQUFBLE1BTXpCUyxLQU55QjtBQUFBLE1BTWxCQyxRQU5rQjs7QUFBQSwwQkFPTVgs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b0JBUkYsQ0E3QkYsQ0FERixDQVJGLENBM05GLENBREY7QUFtUkQ7O0dBbmJ1QlgsTztVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjJhZTIzMzUyOTgwZjYyZTEzYzFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZmlsZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZnVsbF9uYW1lLCBzZXRGdWxsX25hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRGbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFibGVkYXRhLCBzZXRUYWJsZWRhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0YWJsZWlkLCBzZXR0YWJsZWlkXSA9IFJlYWN0LnVzZVN0YXRlKFwiMVwiKTtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3RpdmVDb3VudCwgc2V0QUN0aXZlY291bnRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1c2Ryb3Bkb3duLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgdmFyIHg7XHJcblxyXG4gIGNvbnN0IHN0YXR1cyA9IFtcclxuICAgIHsgdmFsdWU6IFwiRGVsaXZlcmVkXCIsIGxhYmVsOiBcIkRlbGl2ZXJlZFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkxvb2tpbmcgZm9yIERyaXZlclwiLCBsYWJlbDogXCJMb29raW5nIGZvciBEcml2ZXJcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJPbmdvaW5nXCIsIGxhYmVsOiBcIk9uZ29pbmdcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBbeyB2YWx1ZTogXCJPY3RvYmVyXCIsIGxhYmVsOiBcIk9jdG9iZXJcIiB9XTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYigyOCwgMzAsIDMzKVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gICAgY29udGFpbmVyOiAoYmFzZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb29yZGluYXRlYm9vay5sZW5ndGggPSAwO1xyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkID0gXCJcIjtcclxuICAgIGlmIChBdXRoU2VydmljZS5nZXRGdWxsbmFtZSgpKSB7XHJcbiAgICAgIHNldEZ1bGxfbmFtZShBdXRoU2VydmljZS5nZXRGdWxsbmFtZSgpKTtcclxuICAgICAgJChcIi5jb25Qcm9maWxlXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9jdHJhbnNhY3Rpb24taGlzdG9yeVwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsLCB7IGN1c3RvbWVyX2lkOiBBdXRoU2VydmljZS5nZXRJZCgpIH0sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldFRhYmxlZGF0YShyZXN1bHQuZGF0YS5kYXRhKTtcclxuICAgICAgICB0YWJsZW1hcCA9IHJlc3VsdC5kYXRhLmRhdGE7XHJcbiAgICAgICAgc2V0Q291bnQocmVzdWx0LmRhdGEuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHJlc3VsdC5kYXRhLmRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc3RhdHVzID09PSBcIkxvb2tpbmcgZm9yIERyaXZlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRBQ3RpdmVjb3VudChhY3RpdmUubGVuZ3RoKTtcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJvZmlsZSgpIHtcclxuICAgICQoXCIuY29uQm9va1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmNvblByb2ZcIikuZmFkZUluKDI1MCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBib29raW5nKCkge1xyXG4gICAgJChcIi5jb25Cb29rXCIpLmZhZGVJbigyNTApO1xyXG4gICAgJChcIi5jb25Qcm9mXCIpLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNsaWNrVGFibGUoKSB7XHJcbiAgICAkKFwiI3RhYmxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgPSBOdW1iZXIoXHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmNsb3Nlc3QoXCJ0ZFwiKS5odG1sKClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgPT0gXCJcIikge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbWFwYm9va2luZ1wiKTtcclxuICAgIH1cclxuICAgIGRvdWJsZWNsaWNrVGFibGUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRvdWJsZWNsaWNrVGFibGUoKSB7XHJcbiAgICAkKFwiI3RhYmxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgPSBOdW1iZXIoXHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmNsb3Nlc3QoXCJ0ZFwiKS5odG1sKClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgPT0gXCJcIikge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbWFwYm9va2luZ1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhvdmVydGFibGUoKSB7XHJcbiAgICAkKFwidHJcIilcclxuICAgICAgLm5vdChcIjpmaXJzdFwiKVxyXG4gICAgICAuaG92ZXIoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJChcInRkXCIsIHRoaXMpLmNzcyhcImNvbG9yXCIsIFwiI0VEQzcyOCBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKFwidGRcIiwgdGhpcykuY3NzKFwiY29sb3JcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlc3RhdHVzY2hhbmdlKHZhbHVlKSB7XHJcbiAgICB2YXIgdmFsdWUgPSB2YWx1ZS5sYWJlbC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgc2V0U3RhdHVzKHZhbHVlLmxhYmVsKTtcclxuICAgICQoXCIjdGFibGUgPiB0Ym9keSA+IHRyXCIpLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlKCQodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZSkgPiAtMSk7XHJcbiAgICAgIGlmICgkKFwiI3RhYmxlPiB0Ym9keSA+IDp2aXNpYmxlXCIpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgJChcIi5wTm9cIikuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIucE5vXCIpLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGF0dXNDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiaW4gdHJhbnNpdFwiOlxyXG4gICAgICAgIHJldHVybiBcImludHJhbnNpdFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uUHJvZmlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U2lkZWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SWNvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1idWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZSA9IHt7dGV4dERlY29yYXRpb246IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9ob21lLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhvbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZSA9IHt7dGV4dERlY29yYXRpb246IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS90cnVjay5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZSA9IHt7dGV4dERlY29yYXRpb246IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jYWxsLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbnRhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93VG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyMHB4XCIsIG1hcmdpbkxlZnQ6IFwiNDBweFwiIH19XHJcbiAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCB0ZXh0LWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGRpdlVzZXJOYXZcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ291dFwiIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicEZ1bGxuYW1lXCI+e2Z1bGxfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvcHJvZmlsZS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uTWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERhc2hib2FyZFwiPkRhc2hib2FyZDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVsRGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2Jvb2tpbmd9IGNsYXNzTmFtZT1cImFjdGl2ZVVsXCI+XHJcbiAgICAgICAgICAgICAgICBCT09LSU5HU1xyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3Byb2ZpbGV9PlBST0ZJTEU8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5TRVRUSU5HUzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockRhc2hib2FyZFwiPjwvaHI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbkJvb2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRvdGFsQm9va2luZ3NcIj5cclxuICAgICAgICAgICAgICB7Y291bnR9VG90YWwgQm9va2luZ3N7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicEFjdGl2ZUJvb2tpbmdzXCI+e2FjdGl2ZUNvdW50fSBBY3RpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IERhdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3Qgc3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXNkcm9wZG93bn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVzdGF0dXNjaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZJbnB1dEljb25cIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dFNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpZFwiXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInRhYmxlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrVGFibGV9XHJcbiAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXtkb3VibGVjbGlja1RhYmxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2hvdmVydGFibGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UGlja3VwIEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ecm9wIExvY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWJsZWRhdGEubWFwKChldmVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2V2ZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2V2ZW50LnBpY2tfdXBfYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24ubWFwKChldmVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtldmVudC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmRyb3Bfb2ZmX2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDb2xvcihldmVudC5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE5vXCI+Tk8gUkVTVUxUIEZPVU5EPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29uUHJvZlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGl0bGVEYXNoYm9hcmRcIj5HZW5lcmFsIEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcEZuYW1lXCI+Rmlyc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwTG5hbWVcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRMbmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRW1haWxcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0TW9iaWxlXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlRGFzaGJvYXJkXCI+QWRkcmVzc0luZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5SZWdpb248L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb3ZpbmNlPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5DaXR5L011bmljaXBhbGl0eTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q291bnRyeTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+WmlwIENvZGU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBNb2RhbCB0aXRsZVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0YWJsZWRhdGFcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlkID09PSAyKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPntkYXRhLnBpY2tfdXBfYWRkcmVzc308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuYm9va2luZ19kcm9wX29mZl9sb2NhdGlvbi5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntkYXRhLmRyb3Bfb2ZmX2FkZHJlc3N9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dGFibGVpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==