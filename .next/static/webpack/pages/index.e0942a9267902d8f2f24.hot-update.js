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
      localStorage.removeItem("token");
    }
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      var loggedInUser = localStorage.getItem("token");

      if (localStorage.getItem("token")) {
        var foundUser = JSON.parse(loggedInUser);
        var fname = foundUser.user.fname;
        return fname;
      }
    }
  }, {
    key: "getImage",
    value: function getImage() {
      var loggedInUser = localStorage.getItem("token");

      if (localStorage.getItem("token")) {
        var foundUser = JSON.parse(loggedInUser);
        var fname = foundUser.user.fname;
        return fname;
      }
    }
  }, {
    key: "getFullname",
    value: function getFullname() {
      var loggedInUser = localStorage.getItem("token");

      if (localStorage.getItem("token")) {
        var foundUser = JSON.parse(loggedInUser);
        var fname = foundUser.user.name;
        return fname;
      }
    }
  }, {
    key: "getId",
    value: function getId() {
      var loggedInUser = localStorage.getItem("token");

      if (localStorage.getItem("token")) {
        var foundUser = JSON.parse(loggedInUser);
        var fname = foundUser.user.id;
        return fname;
      }
    }
  }, {
    key: "getToken",
    value: function getToken() {
      var loggedInUser = localStorage.getItem("token");

      if (localStorage.getItem("token")) {
        var foundUser = JSON.parse(loggedInUser);
        var fname = foundUser.data.token;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBdXRoU2VydmljZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dnZWRJblVzZXIiLCJnZXRJdGVtIiwiZm91bmRVc2VyIiwiSlNPTiIsInBhcnNlIiwiZm5hbWUiLCJ1c2VyIiwibmFtZSIsImlkIiwiZGF0YSIsInRva2VuIiwiJCIsImhpZGUiLCJzaG93IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxpQ0FBaEI7O0lBRU1DLFc7Ozs7Ozs7NkJBQ0s7QUFDUEMsa0JBQVksQ0FBQ0MsVUFBYixDQUF3QixPQUF4QjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsWUFBWSxHQUFHRixZQUFZLENBQUNHLE9BQWIsQ0FBcUIsT0FBckIsQ0FBckI7O0FBQ0EsVUFBSUgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLE9BQXJCLENBQUosRUFBbUM7QUFDakMsWUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWCxDQUFsQjtBQUNBLFlBQU1LLEtBQUssR0FBR0gsU0FBUyxDQUFDSSxJQUFWLENBQWVELEtBQTdCO0FBQ0EsZUFBT0EsS0FBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1MLFlBQVksR0FBR0YsWUFBWSxDQUFDRyxPQUFiLENBQXFCLE9BQXJCLENBQXJCOztBQUNBLFVBQUlILFlBQVksQ0FBQ0csT0FBYixDQUFxQixPQUFyQixDQUFKLEVBQW1DO0FBQ2pDLFlBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFlBQVgsQ0FBbEI7QUFDQSxZQUFNSyxLQUFLLEdBQUdILFNBQVMsQ0FBQ0ksSUFBVixDQUFlRCxLQUE3QjtBQUNBLGVBQU9BLEtBQVA7QUFDRDtBQUNGOzs7a0NBRWE7QUFDWixVQUFNTCxZQUFZLEdBQUdGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixPQUFyQixDQUFyQjs7QUFDQSxVQUFJSCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsT0FBckIsQ0FBSixFQUFtQztBQUNqQyxZQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixZQUFYLENBQWxCO0FBQ0EsWUFBTUssS0FBSyxHQUFHSCxTQUFTLENBQUNJLElBQVYsQ0FBZUMsSUFBN0I7QUFDQSxlQUFPRixLQUFQO0FBQ0Q7QUFDRjs7OzRCQUVPO0FBQ04sVUFBTUwsWUFBWSxHQUFHRixZQUFZLENBQUNHLE9BQWIsQ0FBcUIsT0FBckIsQ0FBckI7O0FBQ0EsVUFBSUgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLE9BQXJCLENBQUosRUFBbUM7QUFDakMsWUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWCxDQUFsQjtBQUNBLFlBQU1LLEtBQUssR0FBR0gsU0FBUyxDQUFDSSxJQUFWLENBQWVFLEVBQTdCO0FBQ0EsZUFBT0gsS0FBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1MLFlBQVksR0FBR0YsWUFBWSxDQUFDRyxPQUFiLENBQXFCLE9BQXJCLENBQXJCOztBQUNBLFVBQUlILFlBQVksQ0FBQ0csT0FBYixDQUFxQixPQUFyQixDQUFKLEVBQW1DO0FBQ2pDLFlBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFlBQVgsQ0FBbEI7QUFDQSxZQUFNSyxLQUFLLEdBQUdILFNBQVMsQ0FBQ08sSUFBVixDQUFlQyxLQUE3QjtBQUNBLGVBQU9MLEtBQVA7QUFDRDtBQUNGOzs7aUNBRVk7QUFDWCxVQUFNTCxZQUFZLEdBQUdGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixPQUFyQixDQUFyQjs7QUFDQSxVQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFlBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFlBQVgsQ0FBbEI7QUFFQVcsU0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjQyxJQUFkO0FBQ0FELFNBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsSUFBZjtBQUNBRCxTQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRSxJQUFqQjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWWIsU0FBWjtBQUNEO0FBQ0Y7Ozs7OztBQUdZLG1FQUFJTCxXQUFKLEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTA5NDJhOTI2NzkwMmQ4ZjJmMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYXV0aC9cIjtcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBjb25zdCBmbmFtZSA9IGZvdW5kVXNlci51c2VyLmZuYW1lO1xyXG4gICAgICByZXR1cm4gZm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZSgpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICAgIGNvbnN0IGZuYW1lID0gZm91bmRVc2VyLnVzZXIuZm5hbWU7XHJcbiAgICAgIHJldHVybiBmbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZ1bGxuYW1lKCkge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgY29uc3QgZm5hbWUgPSBmb3VuZFVzZXIudXNlci5uYW1lO1xyXG4gICAgICByZXR1cm4gZm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJZCgpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICAgIGNvbnN0IGZuYW1lID0gZm91bmRVc2VyLnVzZXIuaWQ7XHJcbiAgICAgIHJldHVybiBmbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRva2VuKCkge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgY29uc3QgZm5hbWUgPSBmb3VuZFVzZXIuZGF0YS50b2tlbjtcclxuICAgICAgcmV0dXJuIGZuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tMb2dpbigpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9nZ2VkSW5Vc2VyKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuXHJcbiAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuY29sTG9naW5cIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmNvbERlbGl2ZXJcIikuc2hvdygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=