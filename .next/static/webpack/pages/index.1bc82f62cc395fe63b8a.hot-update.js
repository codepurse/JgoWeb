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
  }))), __jsx("div", {
    className: "container-fluid conServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxIcon align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, "DOCUMENT"))), __jsx("div", {
    className: "boxIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "imgIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "DOCUMENT")))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJmbmFtZSIsInNldEZuYW1lIiwidXNlRWZmZWN0IiwibG9nZ2VkSW5Vc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvdW5kVXNlciIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLHdCQUNTQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURUO0FBQUE7QUFBQSxNQUNSQyxJQURRO0FBQUEsTUFDRkMsT0FERTs7QUFBQSx5QkFFV0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGWDtBQUFBO0FBQUEsTUFFUkcsS0FGUTtBQUFBLE1BRURDLFFBRkM7O0FBSWZDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXJCOztBQUNBLFFBQUlGLFlBQUosRUFBa0I7QUFDaEIsVUFBTUcsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWCxDQUFsQjtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETCxDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBS0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxTQUZaO0FBR0UsU0FBSyxFQUFDLGlCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUpGLEVBZ0JFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERixDQUpGLEVBeUJFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQywwREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLG9CQUROO0FBRUUsYUFBUyxFQUFDLHNDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixDQURKLENBREEsRUFVRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixhQUFTLEVBQUMsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLENBVkYsQ0FERixDQURGLENBREYsQ0FERixDQXpCRixDQURGLENBREY7QUFxREQ7O0dBaEVRUixLOztBQWtFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWJjODJmNjJjYzM5NWZlNjNiOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXJcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnQvbG9naW5cIjtcclxuaW1wb3J0IERlbGl2ZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9kZWxpdmVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRGbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9nZ2VkSW5Vc2VyKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtYWluQ29uIGgtMTAwXCI+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8TmF2YmFyPjwvTmF2YmFyPlxyXG4gICAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvaW1naW5kZXgucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHRleHQtY2VudGVyIGNvbE1haW5cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgV2UgPHNwYW4+YWx3YXlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGV4dFwiPmRlbGl2ZXIuPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5Cb29rXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQk9PSyBBIERFTElWRVJZXCJcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TG9naW4+PC9Mb2dpbj5cclxuICAgICAgICAgICAgPERlbGl2ZXI+PC9EZWxpdmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uU2VydmljZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEljb24gYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAxLWZpbGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBJY29uXCI+RE9DVU1FTlQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiIGNsYXNzTmFtZT1cImltZ0ljb25cIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSWNvblwiPkRPQ1VNRU5UPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9