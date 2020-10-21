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
      $(".colLogin").show();
      $(".colDeliver").hide();
    }
  }

  function deliverForm(e) {
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").show();
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
  }, "HOME")), __jsx("li", {
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
  }, "DELIVER")), __jsx("li", {
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
    className: faq,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 19
    }
  }, "FAQ")), __jsx("li", {
    className: login,
    onClick: loginForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci5qcyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbmRleCIsInBhdGhuYW1lIiwiZGVsaXZlciIsImNvbnRhY3QiLCJmYXEiLCJsb2dpbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJmbmFtZSIsInNldEZuYW1lIiwibG9naW5Gb3JtIiwiZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiJCIsImhpZGUiLCJzaG93IiwiZGVsaXZlckZvcm0iLCJ1c2VFZmZlY3QiLCJBdXRoU2VydmljZSIsImdldEN1cnJlbnRVc2VyIiwicGFkZGluZyIsIndpZHRoIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixHQUFwQixHQUEwQixXQUExQixHQUF3QyxFQUF0RDtBQUNBLE1BQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDRyxRQUFQLEtBQW9CLFVBQXBCLEdBQWlDLFdBQWpDLEdBQStDLEVBQS9EO0FBQ0EsTUFBTUUsT0FBTyxHQUFHTCxNQUFNLENBQUNHLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUMsV0FBakMsR0FBK0MsRUFBL0Q7QUFDQSxNQUFNRyxHQUFHLEdBQUdOLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixNQUFwQixHQUE2QixXQUE3QixHQUEyQyxFQUF2RDtBQUNBLE1BQU1JLEtBQUssR0FBR1AsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLFFBQXBCLEdBQStCLFdBQS9CLEdBQTZDLEVBQTNEOztBQU4rQix3QkFPTEssNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FQSztBQUFBO0FBQUEsTUFPeEJDLEtB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d0IsU0FBSyxFQUFFO0FBQUVNLFdBQUssRUFBRTtBQUFULEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQU5GLEVBV0U7QUFBSSxhQUFTLEVBQUVyQixPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQXdCLFNBQUssRUFBRTtBQUFFcUIsV0FBSyxFQUFFO0FBQVQsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBWEYsRUFnQkU7QUFBSSxhQUFTLEVBQUVwQixHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQXdCLFNBQUssRUFBRTtBQUFFb0IsV0FBSyxFQUFFO0FBQVQsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBaEJGLEVBcUJFO0FBQUksYUFBUyxFQUFFbkIsS0FBZjtBQUFzQixXQUFPLEVBQUVLLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxTQUFLLEVBQUU7QUFBRWMsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0doQixLQUxILENBREYsQ0FyQkYsQ0FERixDQURGLENBakJGLENBSkYsQ0FERixDQURGO0FBOEREOztHQXBHdUJYLE07VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDgzODBkNDk3Mjk3NDVhMTQ3ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpbmRleCA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBkZWxpdmVyID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9kZWxpdmVyXCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBjb250YWN0ID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9jb250YWN0XCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBmYXEgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhcVwiID8gXCJhY3RpdmVOYXZcIiA6IFwiXCI7XHJcbiAgY29uc3QgbG9naW4gPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIgPyBcImFjdGl2ZU5hdlwiIDogXCJcIjtcclxuICBjb25zdCBbZm5hbWUsIHNldEZuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbkZvcm0oZSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuY29sTG9naW5cIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmNvbERlbGl2ZXJcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsaXZlckZvcm0oZSkge1xyXG4gICAgJChcIi5jb2xNYWluXCIpLmhpZGUoKTtcclxuICAgICQoXCIuY29sTG9naW5cIikuaGlkZSgpO1xyXG4gICAgJChcIi5jb2xEZWxpdmVyXCIpLnNob3coKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgc2V0Rm5hbWUoQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKSlcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEZuYW1lKFwiTE9HSU5cIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPG5hdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIGZpeGVkLXRvcFwiXHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4IDIwcHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdsb2dvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDIgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgSE9NRVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGVsaXZlcn0gb25DbGljaz17ZGVsaXZlckZvcm19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgREVMSVZFUlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtmYXF9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRkFRXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsb2dpbn0gb25DbGljaz17bG9naW5Gb3JtfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9