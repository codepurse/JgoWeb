webpackHotUpdate_N_E("pages/map",{

/***/ "./component/map/googlemap.js":
/*!************************************!*\
  !*** ./component/map/googlemap.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./component/map/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\googlemap.js",
    _s = $RefreshSig$(),
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MapDirectionsRenderer(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      directions = _useState[0],
      setDirections = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var places = props.places,
        travelMode = props.travelMode;
    var waypoints = places.map(function (p) {
      return {
        location: {
          lat: p.lat,
          lng: p.lng
        },
        stopover: true
      };
    });
    var origin = waypoints.shift().location;
    var destination = waypoints.pop().location;
    var directionsService = new google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: travelMode,
      waypoints: waypoints
    }, function (result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {}
    });
  });

  if (error) {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 24
    }
  });
}

_s(MapDirectionsRenderer, "EbZ3rf2k47q8bOIBnVG92TiLXsw=");

_c = MapDirectionsRenderer;
var Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(_c3 = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(_c2 = function _c2(props) {
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultCenter: props.defaultCenter,
    defaultZoom: props.defaultZoom,
    options: {
      fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#242f3e"
        }]
      }, {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      }, {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      }, {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }]
      }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#263c3f"
        }]
      }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#6b9a76"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#38414e"
        }]
      }, {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#212a37"
        }]
      }, {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9ca5b3"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#746855"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#1f2835"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#f3d19c"
        }]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#2f3948"
        }]
      }, {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#17263c"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#515c6d"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#17263c"
        }]
      }]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, props.markers.map(function (marker, index) {
    var position = {
      lat: marker.lat,
      lng: marker.lng
    };
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      position: position,
      style: {
        backgroundColor: "#0000ff",
        fillColor: "#0000ff",
        strokeColor: "0000ff"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    });
  }), __jsx(MapDirectionsRenderer, {
    places: props.markers,
    travelMode: google.maps.TravelMode.DRIVING,
    options: {
      polylineOptions: {
        strokeOpacity: 5,
        strokeColor: 'black'
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }));
}));
_c4 = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "MapDirectionsRenderer");
$RefreshReg$(_c2, "Map$withScriptjs$withGoogleMap");
$RefreshReg$(_c3, "Map$withScriptjs");
$RefreshReg$(_c4, "Map");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInN0eWxlcyIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwiZmVhdHVyZVR5cGUiLCJtYXJrZXJzIiwibWFya2VyIiwiaW5kZXgiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJwb2x5bGluZU9wdGlvbnMiLCJzdHJva2VPcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BOztBQUVBLFNBQVNBLHFCQUFULENBQStCQyxLQUEvQixFQUFzQztBQUFBOztBQUFBLGtCQUlBQyxzREFBUSxDQUFDLElBQUQsQ0FKUjtBQUFBLE1BSTdCQyxVQUo2QjtBQUFBLE1BSWpCQyxhQUppQjs7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QUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWJBLENBN0ZILEVBMkdFLE1BQUMscUJBQUQ7QUFDRSxVQUFNLEVBQUVqRCxLQUFLLENBQUMyQyxPQURoQjtBQUVFLGNBQVUsRUFBRXRCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNEIsVUFBWixDQUF1QkMsT0FGckM7QUFHRSxXQUFPLEVBQUU7QUFDUEMscUJBQWUsRUFBRTtBQUNiQyxxQkFBYSxFQUFFLENBREY7QUFFYkosbUJBQVcsRUFBRTtBQUZBO0FBRFYsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0dGLENBRFk7QUFBQSxDQUFELENBSFMsQ0FBeEI7TUFBTXBCLEc7QUE4SFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcC5lMzk1ZWM0NmRmN2VkZDAxZDU1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgTWFya2VyLFxyXG4gIERpcmVjdGlvbnNSZW5kZXJlcixcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcbmZ1bmN0aW9uIE1hcERpcmVjdGlvbnNSZW5kZXJlcihwcm9wcykge1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IFtkaXJlY3Rpb25zLCBzZXREaXJlY3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBsYWNlcywgdHJhdmVsTW9kZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd2F5cG9pbnRzID0gcGxhY2VzLm1hcCgocCkgPT4gKHtcclxuICAgICAgbG9jYXRpb246IHsgbGF0OiBwLmxhdCwgbG5nOiBwLmxuZyB9LFxyXG4gICAgICBzdG9wb3ZlcjogdHJ1ZSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9yaWdpbiA9IHdheXBvaW50cy5zaGlmdCgpLmxvY2F0aW9uO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB3YXlwb2ludHMucG9wKCkubG9jYXRpb247XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uLFxyXG4gICAgICAgIHRyYXZlbE1vZGU6IHRyYXZlbE1vZGUsXHJcbiAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcclxuICAgICAgICAgIHNldERpcmVjdGlvbnMocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgxPntlcnJvcn08L2gxPjtcclxuICB9XHJcbiAgcmV0dXJuIGRpcmVjdGlvbnMgJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkaXJlY3Rpb25zfS8+O1xyXG59XHJcblxyXG5jb25zdCBNYXAgPSB3aXRoU2NyaXB0anMoXHJcblxyXG4gIFxyXG4gIHdpdGhHb29nbGVNYXAoKHByb3BzKSA9PiAoXHJcbiAgICA8R29vZ2xlTWFwXHJcbiAgICAgIGRlZmF1bHRDZW50ZXI9e3Byb3BzLmRlZmF1bHRDZW50ZXJ9XHJcbiAgICAgIGRlZmF1bHRab29tPXtwcm9wcy5kZWZhdWx0Wm9vbX1cclxuICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICB7IGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNDJmM2VcIiB9XSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzI0MmYzZVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLCBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNzQ2ODU1XCIgfV0gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjYzYzNmXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM2YjlhNzZcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzM4NDE0ZVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzIxMmEzN1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM5Y2E1YjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNzQ2ODU1XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxZjI4MzVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNmM2QxOWNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzJmMzk0OFwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzE3MjYzY1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNTE1YzZkXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzE3MjYzY1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWFya2Vycy5tYXAoKG1hcmtlciwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHsgbGF0OiBtYXJrZXIubGF0LCBsbmc6IG1hcmtlci5sbmcgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIjAwMDBmZlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAgPE1hcERpcmVjdGlvbnNSZW5kZXJlclxyXG4gICAgICAgIHBsYWNlcz17cHJvcHMubWFya2Vyc31cclxuICAgICAgICB0cmF2ZWxNb2RlPXtnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkd9XHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgcG9seWxpbmVPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogNSxcclxuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvR29vZ2xlTWFwPlxyXG4gICkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=