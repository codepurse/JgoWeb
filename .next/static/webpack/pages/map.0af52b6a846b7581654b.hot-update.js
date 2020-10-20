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
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey + '&libraries=geometry,drawing,places',
    loadingElement: loadingElement || __jsx("div", {
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 31,
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
        lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9tYXBsb2FkZXIuanMiXSwibmFtZXMiOlsiZ29vZ2xlTWFwc0FwaUtleSIsInBsYWNlcyIsImNvb3JkaW5hdGUiLCJBcHAiLCJwcm9wcyIsImxvYWRpbmdFbGVtZW50IiwiY29udGFpbmVyRWxlbWVudCIsIm1hcEVsZW1lbnQiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGdCQUFnQixHQUFHLHlDQUF6QjtBQUVBLElBQU1DLE1BQU0sR0FBR0MsVUFBZjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUdqQkMsY0FIaUIsR0FRZkQsS0FSZSxDQUdqQkMsY0FIaUI7QUFBQSxNQUlqQkMsZ0JBSmlCLEdBUWZGLEtBUmUsQ0FJakJFLGdCQUppQjtBQUFBLE1BS2pCQyxVQUxpQixHQVFmSCxLQVJlLENBS2pCRyxVQUxpQjtBQUFBLE1BTWpCQyxhQU5pQixHQVFmSixLQVJlLENBTWpCSSxhQU5pQjtBQUFBLE1BT2pCQyxXQVBpQixHQVFmTCxLQVJlLENBT2pCSyxXQVBpQjtBQVVuQixTQUVFLE1BQUMsa0RBQUQ7QUFDRSxnQkFBWSxFQUNWLGlEQUNBVCxnQkFEQSxHQUVBLG9DQUpKO0FBT0Usa0JBQWMsRUFBRUssY0FBYyxJQUFJO0FBQUssV0FBSyxFQUFFO0FBQUNLLGNBQU07QUFBUCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQcEM7QUFRRSxvQkFBZ0IsRUFBRUosZ0JBQWdCLElBQUk7QUFBSyxXQUFLLEVBQUU7QUFBQ0ksY0FBTSxFQUFFO0FBQVQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUnhDO0FBU0UsY0FBVSxFQUFFSCxVQUFVLElBQUk7QUFBSyxXQUFLLEVBQUU7QUFBQ0csY0FBTTtBQUFQLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVQ1QjtBQVdFLGVBQVcsRUFBRUQsV0FBVyxJQUFJLEVBWDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRjtBQWdCRCxDQTFCRDs7S0FBTU4sRztBQTZCU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwLjBhZjUyYjZhODQ2Yjc1ODE2NTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vZ29vZ2xlbWFwJztcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcblxyXG5jb25zdCBnb29nbGVNYXBzQXBpS2V5ID0gXCJBSXphU3lEenppX1ZCY2YyT2VmNkxUVmlMVTc2N1VQTkhsbkl6ZTRcIjtcclxuXHJcbmNvbnN0IHBsYWNlcyA9IGNvb3JkaW5hdGU7XHJcblxyXG5jb25zdCBBcHAgPSBwcm9wcyA9PiB7XHJcbiAgXHJcbiAgY29uc3Qge1xyXG4gICAgbG9hZGluZ0VsZW1lbnQsXHJcbiAgICBjb250YWluZXJFbGVtZW50LFxyXG4gICAgbWFwRWxlbWVudCxcclxuICAgIGRlZmF1bHRDZW50ZXIsXHJcbiAgICBkZWZhdWx0Wm9vbVxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPE1hcFxyXG4gICAgICBnb29nbGVNYXBVUkw9e1xyXG4gICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScgK1xyXG4gICAgICAgIGdvb2dsZU1hcHNBcGlLZXkgK1xyXG4gICAgICAgICcmbGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzJ1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIGxvYWRpbmdFbGVtZW50PXtsb2FkaW5nRWxlbWVudCB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgMTAwJWB9fS8+fVxyXG4gICAgICBjb250YWluZXJFbGVtZW50PXtjb250YWluZXJFbGVtZW50IHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIn19Lz59XHJcbiAgICAgIG1hcEVsZW1lbnQ9e21hcEVsZW1lbnQgfHwgPGRpdiBzdHlsZT17e2hlaWdodDogYDEwMCVgfX0vPn1cclxuICAgICAgXHJcbiAgICAgIGRlZmF1bHRab29tPXtkZWZhdWx0Wm9vbSB8fCAxMX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==