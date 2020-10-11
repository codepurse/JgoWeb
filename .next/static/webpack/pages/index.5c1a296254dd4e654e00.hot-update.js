webpackHotUpdate_N_E("pages/index",{

/***/ "./services/auth.service.js":
/*!**********************************!*\
  !*** ./services/auth.service.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var API_URL = "http://localhost:8080/api/auth/";

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthService, [{
    key: "logout",
    value: function logout() {
      localStorage.removeItem("user");
    }
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      if (localStorage.getItem("token")) {
        var foundUser = JSON.parse(loggedInUser);
        var fname = foundUser.user.fname;
        return fname;
      }
    }
  }, {
    key: "checkLogin",
    value: function checkLogin() {
      var loggedInUser = localStorage.getItem("token");

      if (loggedInUser) {
        var foundUser = JSON.parse(loggedInUser);
        $(".colMain").hide();
        $(".colLogin").hide();
        $(".colDeliver").show();
        console.log(foundUser);
      }
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBdXRoU2VydmljZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiZm91bmRVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9nZ2VkSW5Vc2VyIiwiZm5hbWUiLCJ1c2VyIiwiJCIsImhpZGUiLCJzaG93IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxpQ0FBaEI7O0lBRU1DLFc7Ozs7Ozs7NkJBRUs7QUFDUEMsa0JBQVksQ0FBQ0MsVUFBYixDQUF3QixNQUF4QjtBQUNEOzs7cUNBR2dCO0FBQ2hCLFVBQUlELFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixDQUFKLEVBQW1DO0FBQ2xDLFlBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVgsQ0FBbEI7QUFDQSxZQUFNQyxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssSUFBVixDQUFlRCxLQUE3QjtBQUNBLGVBQU9BLEtBQVA7QUFDQTtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNRCxZQUFZLEdBQUdOLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixDQUFyQjs7QUFDQSxVQUFJSSxZQUFKLEVBQWtCO0FBQ2QsWUFBTUgsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWCxDQUFsQjtBQUVBRyxTQUFDLENBQUMsVUFBRCxDQUFELENBQWNDLElBQWQ7QUFDQUQsU0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxJQUFmO0FBQ0FELFNBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJFLElBQWpCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVixTQUFaO0FBRUQ7QUFDSjs7Ozs7O0FBR1ksbUVBQUlKLFdBQUosRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YzFhMjk2MjU0ZGQ0ZTY1NGUwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hdXRoL1wiO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICBjb25zdCBmbmFtZSA9IGZvdW5kVXNlci51c2VyLmZuYW1lO1xyXG4gICAgcmV0dXJuIGZuYW1lO1xyXG4gICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0xvZ2luKCkge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2dnZWRJblVzZXIpIHtcclxuICAgICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJChcIi5jb2xNYWluXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmNvbExvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmNvbERlbGl2ZXJcIikuc2hvdygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvdW5kVXNlcik7XHJcbiAgXHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoU2VydmljZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=