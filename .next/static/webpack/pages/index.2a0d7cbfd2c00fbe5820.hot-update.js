webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/navbar */ "./component/navbar.js");
/* harmony import */ var _component_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/login */ "./component/login.js");
/* harmony import */ var _component_deliver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/deliver */ "./component/deliver.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");


var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      fname = _React$useState4[0],
      setFname = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var loggedInUser = localStorage.getItem("token");

    if (loggedInUser) {
      var foundUser = JSON.parse(loggedInUser);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid mainCon h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row h-100 align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/imgindex.png",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-lg-6 text-center colMain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "We ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 20
    }
  }, "always")), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "deliver."), __jsx("input", {
    type: "button",
    className: "btnBook",
    value: "BOOK A DELIVERY",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  })), __jsx(_component_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_component_deliver__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container-fluid conServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "DOCUMENT"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, "FOOD"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, "CLOTHING"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, "MEDICAL"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/Mask Group 2.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, "FRAGILE"))), __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }, "OTHER"))))), __jsx("div", {
    className: "col-lg-10 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pWhat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 18
    }
  }, "WHAT CAN YOU DELIVER?"))))));
}

_s(index, "mq9doXPWR+d2/q7aFyr3OtzR5Cw=");

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJmbmFtZSIsInNldEZuYW1lIiwidXNlRWZmZWN0IiwibG9nZ2VkSW5Vc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvdW5kVXNlciIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLHdCQUNTQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURUO0FBQUE7QUFBQSxNQUNSQyxJQURRO0FBQUEsTUFDRkMsT0FERTs7QUFBQSx5QkFFV0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGWDtBQUFBO0FBQUEsTUFFUkcsS0FGUTtBQUFBLE1BRURDLFFBRkM7O0FBSWZDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXJCOztBQUNBLFFBQUlGLFlBQUosRUFBa0I7QUFDaEIsVUFBTUcsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWCxDQUFsQjtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETCxDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBS0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxTQUZaO0FBR0UsU0FBSyxFQUFDLGlCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUpGLEVBZ0JFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERixDQUpGLENBREYsRUEyQkU7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0JBRE47QUFFRSxhQUFTLEVBQUMsa0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLENBREYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMscUJBRE47QUFFRSxhQUFTLEVBQUMsa0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsQ0FERixDQVZGLEVBbUJFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0JBRE47QUFFRSxhQUFTLEVBQUMsa0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLENBREYsQ0FuQkYsRUE0QkU7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxtQkFETjtBQUVFLGFBQVMsRUFBQyxrQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixDQURGLENBNUJGLEVBcUNFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsd0JBRE47QUFFRSxhQUFTLEVBQUMsa0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERixDQXJDRixFQThDRTtBQUFLLGFBQVMsRUFBQywwREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGlCQUROO0FBRUUsYUFBUyxFQUFDLGtDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLENBREYsQ0E5Q0YsQ0FERixDQURGLEVBMkRFO0FBQUssYUFBUyxFQUFHLHVCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBRyxhQUFTLEVBQUcsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURILENBM0RGLENBREYsQ0FESixDQTNCRixDQURGO0FBaUdEOztHQTVHUVIsSzs7QUE4R01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhMGQ3Y2JmZDJjMDBmYmU1ODIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnQvbmF2YmFyXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50L2xvZ2luXCI7XHJcbmltcG9ydCBEZWxpdmVyIGZyb20gXCIuLi9jb21wb25lbnQvZGVsaXZlclwiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmbmFtZSwgc2V0Rm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvZ2dlZEluVXNlcikge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbWFpbkNvbiBoLTEwMFwiPlxyXG4gICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgPE5hdmJhcj48L05hdmJhcj5cclxuICAgICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2ltZ2luZGV4LnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LWNlbnRlciBjb2xNYWluXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5cclxuICAgICAgICAgICAgICAgIFdlIDxzcGFuPmFsd2F5czwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5kZWxpdmVyLjwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuQm9va1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkJPT0sgQSBERUxJVkVSWVwiXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPExvZ2luPjwvTG9naW4+XHJcbiAgICAgICAgICAgIDxEZWxpdmVyPjwvRGVsaXZlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uU2VydmljZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94SWNvbiBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDEtZmlsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblwiPkRPQ1VNRU5UPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hJY29uIGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMi1waXp6YS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblwiPkZPT0Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEljb24gYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2xvdGhpbmcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEljb25cIj5DTE9USElORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94SWNvbiBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tZWRpY2FsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdJY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uXCI+TUVESUNBTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94SWNvbiBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9NYXNrIEdyb3VwIDIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEljb25cIj5GUkFHSUxFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hJY29uIGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL290aGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdJY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uXCI+T1RIRVI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1sZy0xMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwicFdoYXRcIj5XSEFUIENBTiBZT1UgREVMSVZFUj88L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==