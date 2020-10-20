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
    options: {
      polylineOptions: {
        strokeOpacity: 1,
        strokeColor: '#FFFF3B'
      }
    },
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
      lineNumber: 61,
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
        lineNumber: 157,
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
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicG9seWxpbmVPcHRpb25zIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZUNvbG9yIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInN0eWxlcyIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwiZmVhdHVyZVR5cGUiLCJtYXJrZXJzIiwibWFya2VyIiwiaW5kZXgiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImZpbGxDb2xvciIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BOztBQUVBLFNBQVNBLHFCQUFULENBQStCQyxLQUEvQixFQUFzQztBQUFBOztBQUFBLGtCQUlBQyxzREFBUSxDQUFDLElBQUQsQ0FKUjtBQUFBLE1BSTdCQyxVQUo2QjtBQUFBLE1BSWpCQyxhQUppQjs7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RUFBRTtBQUNMQyx1QkFBZSxFQUFFLFNBRFo7QUFFTEMsaUJBQVMsRUFBRSxTQUZOO0FBR0xwQixtQkFBVyxFQUFFO0FBSFIsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWJBLENBN0ZILEVBMkdFLE1BQUMscUJBQUQ7QUFDRSxVQUFNLEVBQUUvQixLQUFLLENBQUM4QyxPQURoQjtBQUVFLGNBQVUsRUFBRXpCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOEIsVUFBWixDQUF1QkMsT0FGckM7QUFHRSxXQUFPLEVBQUU7QUFDUHhCLHFCQUFlLEVBQUU7QUFDYkMscUJBQWEsRUFBRSxDQURGO0FBRWJDLG1CQUFXLEVBQUU7QUFGQTtBQURWLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNHRixDQURZO0FBQUEsQ0FBRCxDQUhTLENBQXhCO01BQU1DLEc7QUE4SFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcC5iYzk3ODJlMjgzYWYxM2ZjMmE0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgTWFya2VyLFxyXG4gIERpcmVjdGlvbnNSZW5kZXJlcixcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcbmZ1bmN0aW9uIE1hcERpcmVjdGlvbnNSZW5kZXJlcihwcm9wcykge1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IFtkaXJlY3Rpb25zLCBzZXREaXJlY3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBsYWNlcywgdHJhdmVsTW9kZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd2F5cG9pbnRzID0gcGxhY2VzLm1hcCgocCkgPT4gKHtcclxuICAgICAgbG9jYXRpb246IHsgbGF0OiBwLmxhdCwgbG5nOiBwLmxuZyB9LFxyXG4gICAgICBzdG9wb3ZlcjogdHJ1ZSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9yaWdpbiA9IHdheXBvaW50cy5zaGlmdCgpLmxvY2F0aW9uO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB3YXlwb2ludHMucG9wKCkubG9jYXRpb247XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uLFxyXG4gICAgICAgIHRyYXZlbE1vZGU6IHRyYXZlbE1vZGUsXHJcbiAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcclxuICAgICAgICAgIHNldERpcmVjdGlvbnMocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgxPntlcnJvcn08L2gxPjtcclxuICB9XHJcbiAgcmV0dXJuIGRpcmVjdGlvbnMgJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkaXJlY3Rpb25zfSAgIG9wdGlvbnM9e3tcclxuICAgIHBvbHlsaW5lT3B0aW9uczoge1xyXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6ICcjRkZGRjNCJyxcclxuICAgIH0sXHJcblxyXG59fS8+O1xyXG59XHJcblxyXG5jb25zdCBNYXAgPSB3aXRoU2NyaXB0anMoXHJcblxyXG4gIFxyXG4gIHdpdGhHb29nbGVNYXAoKHByb3BzKSA9PiAoXHJcbiAgICA8R29vZ2xlTWFwXHJcbiAgICAgIGRlZmF1bHRDZW50ZXI9e3Byb3BzLmRlZmF1bHRDZW50ZXJ9XHJcbiAgICAgIGRlZmF1bHRab29tPXtwcm9wcy5kZWZhdWx0Wm9vbX1cclxuICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICB7IGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNDJmM2VcIiB9XSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzI0MmYzZVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLCBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNzQ2ODU1XCIgfV0gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjYzYzNmXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM2YjlhNzZcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzM4NDE0ZVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzIxMmEzN1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM5Y2E1YjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNzQ2ODU1XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxZjI4MzVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNmM2QxOWNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzJmMzk0OFwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzE3MjYzY1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNTE1YzZkXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzE3MjYzY1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWFya2Vycy5tYXAoKG1hcmtlciwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHsgbGF0OiBtYXJrZXIubGF0LCBsbmc6IG1hcmtlci5sbmcgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIjAwMDBmZlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAgPE1hcERpcmVjdGlvbnNSZW5kZXJlclxyXG4gICAgICAgIHBsYWNlcz17cHJvcHMubWFya2Vyc31cclxuICAgICAgICB0cmF2ZWxNb2RlPXtnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkd9XHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgcG9seWxpbmVPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogNSxcclxuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvR29vZ2xlTWFwPlxyXG4gICkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=