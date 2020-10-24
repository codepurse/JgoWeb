webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");


var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function profile() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      full_name = _React$useState2[0],
      setFull_name = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      fname = _React$useState4[0],
      setFname = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      tabledata = _React$useState6[0],
      setTabledata = _React$useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].getFullname()) {
      setFull_name(_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].getFullname());
      $(".conProfile").show();
    } else {
      router.push("/");
    }

    var options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken()
      }
    };
    var apiUrl = "http://localhost:8000/api/auth/ctransaction-history";
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(apiUrl, {
      customer_id: 3
    }, options).then(function (result) {
      console.log(result);
      setTabledata(result.data.data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);

  function logout() {
    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].logout();
    router.push("/");
  }

  function profile() {
    $(".conBooking").hide();
    $(".conProf").fadeIn(250);
  }

  function booking() {
    $(".conBooking").fadeIn(250);
    $(".conProf").hide();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conProfile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divSidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/home.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "row rowTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid",
    style: {
      width: "120px",
      marginLeft: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "ulDashboard mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("li", {
    onClick: booking,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "BOOKINGS"), __jsx("li", {
    onClick: profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "PROFILE"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, "SETTINGS"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-inline divUserNav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "btnLogout",
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "Logout"), __jsx("div", {
    className: "vl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "pFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, full_name), __jsx("div", {
    className: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "container conBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("table", {
    "class": "table table-striped table-bordered",
    id: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, "Status"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, "Pickup Address")), tabledata.map(function (event) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, event.status), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, event.pick_up_address), event.booking_drop_off_location.map(function (event) {
      return __jsx("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 23
        }
      }, event.drop_off_address);
    }));
  }), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, "asdasd"))))))), __jsx("div", {
    className: "container conProf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTitleDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "General Information")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "text",
    className: "txtDriver txtEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    className: "txtDriver txtMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTitleDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, "AddressInformation")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "Address"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "Region"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "Province"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, "City/Municipality"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, "Country"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, "Zip Code"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  })))));
}

_s(profile, "eTWWRiua7BWTJx8IuHe+NGpDVVU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZ1bGxfbmFtZSIsInNldEZ1bGxfbmFtZSIsImZuYW1lIiwic2V0Rm5hbWUiLCJ0YWJsZWRhdGEiLCJzZXRUYWJsZWRhdGEiLCJ1c2VFZmZlY3QiLCJBdXRoU2VydmljZSIsImdldEZ1bGxuYW1lIiwiJCIsInNob3ciLCJwdXNoIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCJjdXN0b21lcl9pZCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsImxvZ291dCIsImhpZGUiLCJmYWRlSW4iLCJib29raW5nIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFwIiwiZXZlbnQiLCJzdGF0dXMiLCJwaWNrX3VwX2FkZHJlc3MiLCJib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uIiwiZHJvcF9vZmZfYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEZ0Msd0JBRUVDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRkY7QUFBQTtBQUFBLE1BRXpCQyxTQUZ5QjtBQUFBLE1BRWRDLFlBRmM7O0FBQUEseUJBR05ILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSE07QUFBQTtBQUFBLE1BR3pCRyxLQUh5QjtBQUFBLE1BR2xCQyxRQUhrQjs7QUFBQSx5QkFJRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKRjtBQUFBO0FBQUEs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WjtBQUFtQixhQUFTLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBdkNGLEVBMkNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBM0NGLEVBK0NFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQS9DRixDQURGLENBNUVGLENBREY7QUFxSUQ7O0dBdkx1QjNDLE87VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4xOGJkNGU4MjczNGYwMzVjOGI3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9maWxlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmdWxsX25hbWUsIHNldEZ1bGxfbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZm5hbWUsIHNldEZuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWJsZWRhdGEsIHNldFRhYmxlZGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChBdXRoU2VydmljZS5nZXRGdWxsbmFtZSgpKSB7XHJcbiAgICAgIHNldEZ1bGxfbmFtZShBdXRoU2VydmljZS5nZXRGdWxsbmFtZSgpKTtcclxuICAgICAgJChcIi5jb25Qcm9maWxlXCIpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9jdHJhbnNhY3Rpb24taGlzdG9yeVwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsLCB7IGN1c3RvbWVyX2lkOiAzIH0sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldFRhYmxlZGF0YShyZXN1bHQuZGF0YS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJvZmlsZSgpIHtcclxuICAgICQoXCIuY29uQm9va2luZ1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmNvblByb2ZcIikuZmFkZUluKDI1MCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBib29raW5nKCkge1xyXG4gICAgJChcIi5jb25Cb29raW5nXCIpLmZhZGVJbigyNTApO1xyXG4gICAgJChcIi5jb25Qcm9mXCIpLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uUHJvZmlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U2lkZWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SWNvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1idWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvaG9tZS5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3RydWNrLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY2FsbC5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93VG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMjBweFwiLCBtYXJnaW5MZWZ0OiBcIjQwcHhcIiB9fVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVsRGFzaGJvYXJkIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17Ym9va2luZ30+Qk9PS0lOR1M8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtwcm9maWxlfT5QUk9GSUxFPC9saT5cclxuICAgICAgICAgICAgICA8bGk+U0VUVElOR1M8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZGl2VXNlck5hdlwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTG9nb3V0XCIgb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwRnVsbG5hbWVcIj57ZnVsbF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9wcm9maWxlLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25Cb29rXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIiBpZCA9IFwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5QaWNrdXAgQWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAge3RhYmxlZGF0YS5tYXAoKGV2ZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2V2ZW50LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQucGlja191cF9hZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2V2ZW50LmJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24ubWFwKChldmVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5kcm9wX29mZl9hZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5hc2Rhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25Qcm9mXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZURhc2hib2FyZFwiPkdlbmVyYWwgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Rm5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5NaWRkbGUgTmFtZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBMbmFtZVwiPkxhc3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0RW1haWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcE1vYmlsZVwiPk1vYmlsZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGl0bGVEYXNoYm9hcmRcIj5BZGRyZXNzSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvdmluY2U8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR4dERyaXZlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPkNpdHkvTXVuaWNpcGFsaXR5PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5aaXAgQ29kZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHh0RHJpdmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==