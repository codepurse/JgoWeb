webpackHotUpdate_N_E("pages/map",{

/***/ "./component/map/maploader.js":
/*!************************************!*\
  !*** ./component/map/maploader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _googlemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemap */ "./component/map/googlemap.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./component/map/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\maploader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var googleMapsApiKey = "AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4";
var places = coordinate;

var App = function App(props) {
  var loadingElement = props.loadingElement,
      containerElement = props.containerElement,
      mapElement = props.mapElement,
      defaultCenter = props.defaultCenter,
      defaultZoom = props.defaultZoom;
  return __jsx(_googlemap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    markers: places,
    loadingElement: loadingElement || __jsx("div", {
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 41
      }
    }),
    containerElement: containerElement || __jsx("div", {
      style: {
        height: "100vh"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 45
      }
    }),
    mapElement: mapElement || __jsx("div", {
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }),
    defaultZoom: defaultZoom || 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  });
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9tYXBsb2FkZXIuanMiXSwibmFtZXMiOlsiZ29vZ2xlTWFwc0FwaUtleSIsInBsYWNlcyIsImNvb3JkaW5hdGUiLCJBcHAiLCJwcm9wcyIsImxvYWRpbmdFbGVtZW50IiwiY29udGFpbmVyRWxlbWVudCIsIm1hcEVsZW1lbnQiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGdCQUFnQixHQUFHLHlDQUF6QjtBQUVBLElBQU1DLE1BQU0sR0FBR0MsVUFBZjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUdqQkMsY0FIaUIsR0FRZkQsS0FSZSxDQUdqQkMsY0FIaUI7QUFBQSxNQUlqQkMsZ0JBSmlCLEdBUWZGLEtBUmUsQ0FJakJFLGdCQUppQjtBQUFBLE1BS2pCQyxVQUxpQixHQVFmSCxLQVJlLENBS2pCRyxVQUxpQjtBQUFBLE1BTWpCQyxhQU5pQixHQVFmSixLQVJlLENBTWpCSSxhQU5pQjtBQUFBLE1BT2pCQyxXQVBpQixHQVFmTCxLQVJlLENBT2pCSyxXQVBpQjtBQVVuQixTQUVFLE1BQUMsa0RBQUQ7QUFFRSxXQUFPLEVBQUVSLE1BRlg7QUFHRSxrQkFBYyxFQUFFSSxjQUFjLElBQUk7QUFBSyxXQUFLLEVBQUU7QUFBQ0ssY0FBTTtBQUFQLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhwQztBQUlFLG9CQUFnQixFQUFFSixnQkFBZ0IsSUFBSTtBQUFLLFdBQUssRUFBRTtBQUFDSSxjQUFNLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKeEM7QUFLRSxjQUFVLEVBQUVILFVBQVUsSUFBSTtBQUFLLFdBQUssRUFBRTtBQUFDRyxjQUFNO0FBQVAsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTDVCO0FBT0UsZUFBVyxFQUFFRCxXQUFXLElBQUksRUFQOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGO0FBWUQsQ0F0QkQ7O0tBQU1OLEc7QUF5QlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcC44NjBkYjMwNDU2ZDM3MzU2ZjE4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IE1hcCBmcm9tICcuL2dvb2dsZW1hcCc7XHJcbmltcG9ydCBcIi4vY29uZmlnXCI7XHJcblxyXG5cclxuY29uc3QgZ29vZ2xlTWFwc0FwaUtleSA9IFwiQUl6YVN5RHp6aV9WQmNmMk9lZjZMVFZpTFU3NjdVUE5IbG5JemU0XCI7XHJcblxyXG5jb25zdCBwbGFjZXMgPSBjb29yZGluYXRlO1xyXG5cclxuY29uc3QgQXBwID0gcHJvcHMgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IHtcclxuICAgIGxvYWRpbmdFbGVtZW50LFxyXG4gICAgY29udGFpbmVyRWxlbWVudCxcclxuICAgIG1hcEVsZW1lbnQsXHJcbiAgICBkZWZhdWx0Q2VudGVyLFxyXG4gICAgZGVmYXVsdFpvb21cclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxNYXBcclxuICAgICAgXHJcbiAgICAgIG1hcmtlcnM9e3BsYWNlc31cclxuICAgICAgbG9hZGluZ0VsZW1lbnQ9e2xvYWRpbmdFbGVtZW50IHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6IGAxMDAlYH19Lz59XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQ9e2NvbnRhaW5lckVsZW1lbnQgfHwgPGRpdiBzdHlsZT17e2hlaWdodDogXCIxMDB2aFwifX0vPn1cclxuICAgICAgbWFwRWxlbWVudD17bWFwRWxlbWVudCB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgMTAwJWB9fS8+fVxyXG4gICAgICBcclxuICAgICAgZGVmYXVsdFpvb209e2RlZmF1bHRab29tIHx8IDExfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9