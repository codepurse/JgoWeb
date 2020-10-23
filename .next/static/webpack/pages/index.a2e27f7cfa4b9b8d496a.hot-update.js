webpackHotUpdate_N_E("pages/index",{

/***/ "./component/navbar.js":
/*!*****************************!*\
  !*** ./component/navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navbar; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");


var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function navbar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var index = router.pathname === "/" ? "activeNav" : "";
  var deliver = router.pathname === "/deliver" ? "activeNav" : "";
  var contact = router.pathname === "/contact" ? "activeNav" : "";
  var faq = router.pathname === "/faq" ? "activeNav" : "";
  var login = router.pathname === "/login" ? "activeNav" : "";

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      fname = _React$useState2[0],
      setFname = _React$useState2[1];

  function loginForm(e) {
    if (localStorage.getItem("token")) {
      router.push("/profile");
    } else {
      $(".colMain").hide();
      $(".colLogin").fadeIn(250);
      $(".colDeliver").hide();
    }
  }

  function deliverForm(e) {
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").fadeIn(250);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage.getItem("token")) {
      return setFname(_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentUser());
    } else {
      setFname("LOGIN");
    }
  }, []);
  return __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-md fixed-top",
    style: {
      padding: "20px 20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imglogo",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    className: deliver,
    onClick: deliverForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    className: contact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, "CONTACT")), __jsx("li", {
    className: login,
    onClick: loginForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link",
    id: "username",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, fname))))))));
}

_s(navbar, "Bwwdblxo2FbesU1uwJpdrRCDUZU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci5qcyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbmRleCIsInBhdGhuYW1lIiwiZGVsaXZlciIsImNvbnRhY3QiLCJmYXEiLCJsb2dpbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJmbmFtZSIsInNldEZuYW1lIiwibG9naW5Gb3JtIiwiZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiJCIsImhpZGUiLCJmYWRlSW4iLCJkZWxpdmVyRm9ybSIsInVzZUVmZmVjdCIsIkF1dGhTZXJ2aWNlIiwiZ2V0Q3VycmVudFVzZXIiLCJwYWRkaW5nIiwid2lkdGgiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLEdBQXBCLEdBQTBCLFdBQTFCLEdBQXdDLEVBQXREO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNHLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUMsV0FBakMsR0FBK0MsRUFBL0Q7QUFDQSxNQUFNRSxPQUFPLEdBQUdMLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixVQUFwQixHQUFpQyxXQUFqQyxHQUErQyxFQUEvRDtBQUNBLE1BQU1HLEdBQUcsR0FBR04sTUFBTSxDQUFDRyxRQUFQLEtBQW9CLE1BQXBCLEdBQTZCLFdBQTdCLEdBQTJDLEVBQXZEO0FBQ0EsTUFBTUksS0FBSyxHQUFHUCxNQUFNLENBQUNHLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsV0FBL0IsR0FBNkMsRUFBM0Q7O0FBTitCLHdCQU9MSyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVBLO0FBQUE7QUFBQSxNQU94QkMs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QUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsU0FBSyxFQUFFO0FBQUVNLFdBQUssRUFBRTtBQUFULEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FORixFQVdFO0FBQUksYUFBUyxFQUFFckIsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixTQUFLLEVBQUU7QUFBRXFCLFdBQUssRUFBRTtBQUFULEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVhGLEVBZ0JFO0FBQUksYUFBUyxFQUFFbkIsS0FBZjtBQUFzQixXQUFPLEVBQUVLLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxTQUFLLEVBQUU7QUFBRWMsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0doQixLQUxILENBREYsQ0FoQkYsQ0FERixDQURGLENBakJGLENBSkYsQ0FERixDQURGO0FBeUREOztHQS9GdUJYLE07VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJlMjdmN2NmYTRiOWI4ZDQ5NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpbmRleCA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBkZWxpdmVyID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9kZWxpdmVyXCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBjb250YWN0ID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9jb250YWN0XCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBmYXEgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhcVwiID8gXCJhY3RpdmVOYXZcIiA6IFwiXCI7XHJcbiAgY29uc3QgbG9naW4gPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBbZm5hbWUsIHNldEZuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbkZvcm0oZSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuY29sTG9naW5cIikuZmFkZUluKDI1MCk7XHJcbiAgICAgICQoXCIuY29sRGVsaXZlclwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxpdmVyRm9ybShlKSB7XHJcbiAgICAkKFwiLmNvbE1haW5cIikuaGlkZSgpO1xyXG4gICAgJChcIi5jb2xMb2dpblwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmNvbERlbGl2ZXJcIikuZmFkZUluKDI1MCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHNldEZuYW1lKEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCkpXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRGbmFtZShcIkxPR0lOXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgIDxuYXZcclxuICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBmaXhlZC10b3BcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCAyMHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEJlIGEgSkdPIERyaXZlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGVsaXZlcn0gb25DbGljaz17ZGVsaXZlckZvcm19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQm9vayBhIERlbGl2ZXJ5XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb250YWN0fT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xvZ2lufSBvbkNsaWNrPXtsb2dpbkZvcm19PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Zm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=