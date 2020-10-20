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

  var polylineOptionsActual = new google.maps.Polyline({
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 10
  });

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
        lineNumber: 50,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 57,
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
        lineNumber: 153,
        columnNumber: 11
      }
    });
  }), __jsx(MapDirectionsRenderer, {
    places: props.markers,
    travelMode: google.maps.TravelMode.DRIVING,
    polylineOptions: polylineOptionsActual,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJwb2x5bGluZU9wdGlvbnNBY3R1YWwiLCJnb29nbGUiLCJtYXBzIiwiUG9seWxpbmUiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJyZXN1bHQiLCJzdGF0dXMiLCJEaXJlY3Rpb25zU3RhdHVzIiwiT0siLCJNYXAiLCJ3aXRoU2NyaXB0anMiLCJ3aXRoR29vZ2xlTWFwIiwiZGVmYXVsdENlbnRlciIsImRlZmF1bHRab29tIiwiZnVsbHNjcmVlbkNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbCIsInNjYWxlQ29udHJvbCIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJmZWF0dXJlVHlwZSIsIm1hcmtlcnMiLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbENvbG9yIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQUE7O0FBRXBDLE1BQUlDLHFCQUFxQixHQUFHLElBQUlDLE1BQU0sQ0FB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QUFDNUI7QUFBL0IsS0FBakI7QUFDQSxXQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFHLEVBQUU2QixLQURQO0FBRUUsY0FBUSxFQUFFQyxRQUZaO0FBR0UsV0FBSyxFQUFFO0FBQ0xDLHVCQUFlLEVBQUUsU0FEWjtBQUVMQyxpQkFBUyxFQUFFLFNBRk47QUFHTGhELG1CQUFXLEVBQUU7QUFIUixPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBYkEsQ0E3RkgsRUEyR0UsTUFBQyxxQkFBRDtBQUNFLFVBQU0sRUFBRUwsS0FBSyxDQUFDZ0QsT0FEaEI7QUFFRSxjQUFVLEVBQUU5QyxNQUFNLENBQUNDLElBQVAsQ0FBWW1ELFVBQVosQ0FBdUJDLE9BRnJDO0FBR0UsbUJBQWUsRUFBSXRELHFCQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0dGLENBRFk7QUFBQSxDQUFELENBRFMsQ0FBeEI7TUFBTWlDLEc7QUFzSFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcC4xNDkzYjIyZGY4NGNmMDVjMmU0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgTWFya2VyLFxyXG4gIERpcmVjdGlvbnNSZW5kZXJlcixcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcbmZ1bmN0aW9uIE1hcERpcmVjdGlvbnNSZW5kZXJlcihwcm9wcykge1xyXG5cclxuICB2YXIgcG9seWxpbmVPcHRpb25zQWN0dWFsID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcclxuICAgIHN0cm9rZUNvbG9yOiAnI0ZGMDAwMCcsXHJcbiAgICBzdHJva2VPcGFjaXR5OiAxLjAsXHJcbiAgICBzdHJva2VXZWlnaHQ6IDEwXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgW2RpcmVjdGlvbnMsIHNldERpcmVjdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgcGxhY2VzLCB0cmF2ZWxNb2RlIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB3YXlwb2ludHMgPSBwbGFjZXMubWFwKChwKSA9PiAoe1xyXG4gICAgICBsb2NhdGlvbjogeyBsYXQ6IHAubGF0LCBsbmc6IHAubG5nIH0sXHJcbiAgICAgIHN0b3BvdmVyOiB0cnVlLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gd2F5cG9pbnRzLnNoaWZ0KCkubG9jYXRpb247XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHdheXBvaW50cy5wb3AoKS5sb2NhdGlvbjtcclxuXHJcbiAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xyXG4gICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXHJcbiAgICAgICAgdHJhdmVsTW9kZTogdHJhdmVsTW9kZSxcclxuICAgICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xyXG4gICAgICAgICAgc2V0RGlyZWN0aW9ucyhyZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8aDE+e2Vycm9yfTwvaDE+O1xyXG4gIH1cclxuICByZXR1cm4gZGlyZWN0aW9ucyAmJiA8RGlyZWN0aW9uc1JlbmRlcmVyIGRpcmVjdGlvbnM9e2RpcmVjdGlvbnN9IC8+O1xyXG59XHJcblxyXG5jb25zdCBNYXAgPSB3aXRoU2NyaXB0anMoXHJcbiAgd2l0aEdvb2dsZU1hcCgocHJvcHMpID0+IChcclxuICAgIDxHb29nbGVNYXBcclxuICAgICAgZGVmYXVsdENlbnRlcj17cHJvcHMuZGVmYXVsdENlbnRlcn1cclxuICAgICAgZGVmYXVsdFpvb209e3Byb3BzLmRlZmF1bHRab29tfVxyXG4gICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgIHsgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIiwgc3R5bGVyczogW3sgY29sb3I6IFwiIzI0MmYzZVwiIH1dIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjQyZjNlXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM3NDY4NTVcIiB9XSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNkNTk1NjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNkNTk1NjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNjNjM2ZcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzZiOWE3NlwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMzg0MTRlXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjEyYTM3XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzljYTViM1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM3NDY4NTVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzFmMjgzNVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2YzZDE5Y1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMmYzOTQ4XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0LnN0YXRpb25cIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMTcyNjNjXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM1MTVjNmRcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMTcyNjNjXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5tYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0geyBsYXQ6IG1hcmtlci5sYXQsIGxuZzogbWFya2VyLmxuZyB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgIGZpbGxDb2xvcjogXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiMDAwMGZmXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICA8TWFwRGlyZWN0aW9uc1JlbmRlcmVyXHJcbiAgICAgICAgcGxhY2VzPXtwcm9wcy5tYXJrZXJzfVxyXG4gICAgICAgIHRyYXZlbE1vZGU9e2dvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR31cclxuICAgICAgICBwb2x5bGluZU9wdGlvbnM9IHsgcG9seWxpbmVPcHRpb25zQWN0dWFsIH0gXHJcbiAgICAgIC8+XHJcbiAgICA8L0dvb2dsZU1hcD5cclxuICApKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9