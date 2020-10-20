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
        strokeOpacity: 4,
        strokeColor: '#FDD835'
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

    function pinSymbol(color) {
      return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1.1,
        zIndex: 99999
      };
    }

    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      zIndex: 9999,
      icon: pinSymbol("#FFF"),
      key: index,
      position: position,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    });
  }), __jsx(MapDirectionsRenderer, {
    places: props.markers,
    travelMode: google.maps.TravelMode.DRIVING,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicG9seWxpbmVPcHRpb25zIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZUNvbG9yIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInN0eWxlcyIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwiZmVhdHVyZVR5cGUiLCJtYXJrZXJzIiwibWFya2VyIiwiaW5kZXgiLCJwb3NpdGlvbiIsInBpblN5bWJvbCIsInBhdGgiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsInNjYWxlIiwiekluZGV4IiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQUE7O0FBQUEsa0JBSUFDLHNEQUFRLENBQUMs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QW5CLEVBQTBCO0FBQ3hCLGFBQU87QUFDSE8sWUFBSSxFQUFFLGtIQURIO0FBRUhDLGlCQUFTLEVBQUVSLEtBRlI7QUFHSFMsbUJBQVcsRUFBRSxDQUhWO0FBSUh0QixtQkFBVyxFQUFFLE1BSlY7QUFLSHVCLG9CQUFZLEVBQUUsQ0FMWDtBQU1IQyxhQUFLLEVBQUUsR0FOSjtBQU9IQyxjQUFNLEVBQUU7QUFQTCxPQUFQO0FBU0g7O0FBQ0MsV0FDRSxNQUFDLHdEQUFEO0FBQ0EsWUFBTSxFQUFHLElBRFQ7QUFFQSxVQUFJLEVBQUdOLFNBQVMsQ0FBQyxNQUFELENBRmhCO0FBR0UsU0FBRyxFQUFFRixLQUhQO0FBSUUsY0FBUSxFQUFFQyxRQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVNELEdBdEJBLENBN0ZILEVBb0hFLE1BQUMscUJBQUQ7QUFDRSxVQUFNLEVBQUVqRCxLQUFLLENBQUM4QyxPQURoQjtBQUVFLGNBQVUsRUFBRXpCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbUMsVUFBWixDQUF1QkMsT0FGckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBIRixDQURZO0FBQUEsQ0FBRCxDQUhTLENBQXhCO01BQU0xQixHO0FBZ0lTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXAuOTRiNTE3N2Y4NzU0ODI5NzBmZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEdvb2dsZU1hcCxcclxuICBHb29nbGVNYXAsXHJcbiAgd2l0aFNjcmlwdGpzLFxyXG4gIE1hcmtlcixcclxuICBEaXJlY3Rpb25zUmVuZGVyZXIsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmltcG9ydCBcIi4vY29uZmlnXCI7XHJcblxyXG5mdW5jdGlvbiBNYXBEaXJlY3Rpb25zUmVuZGVyZXIocHJvcHMpIHtcclxuXHJcblxyXG5cclxuICBjb25zdCBbZGlyZWN0aW9ucywgc2V0RGlyZWN0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwbGFjZXMsIHRyYXZlbE1vZGUgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHdheXBvaW50cyA9IHBsYWNlcy5tYXAoKHApID0+ICh7XHJcbiAgICAgIGxvY2F0aW9uOiB7IGxhdDogcC5sYXQsIGxuZzogcC5sbmcgfSxcclxuICAgICAgc3RvcG92ZXI6IHRydWUsXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcmlnaW4gPSB3YXlwb2ludHMuc2hpZnQoKS5sb2NhdGlvbjtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gd2F5cG9pbnRzLnBvcCgpLmxvY2F0aW9uO1xyXG5cclxuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcclxuICAgICAgICB0cmF2ZWxNb2RlOiB0cmF2ZWxNb2RlLFxyXG4gICAgICAgIHdheXBvaW50czogd2F5cG9pbnRzLFxyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb25zKHJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxoMT57ZXJyb3J9PC9oMT47XHJcbiAgfVxyXG4gIHJldHVybiBkaXJlY3Rpb25zICYmIDxEaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17ZGlyZWN0aW9uc30gICBvcHRpb25zPXt7XHJcbiAgICBwb2x5bGluZU9wdGlvbnM6IHtcclxuICAgICAgICBzdHJva2VPcGFjaXR5OiA0LFxyXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnI0ZERDgzNScsXHJcbiAgICB9LFxyXG5cclxufX0vPjtcclxufVxyXG5cclxuY29uc3QgTWFwID0gd2l0aFNjcmlwdGpzKFxyXG5cclxuICBcclxuICB3aXRoR29vZ2xlTWFwKChwcm9wcykgPT4gKFxyXG4gICAgPEdvb2dsZU1hcFxyXG4gICAgICBkZWZhdWx0Q2VudGVyPXtwcm9wcy5kZWZhdWx0Q2VudGVyfVxyXG4gICAgICBkZWZhdWx0Wm9vbT17cHJvcHMuZGVmYXVsdFpvb219XHJcbiAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgeyBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLCBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjQyZjNlXCIgfV0gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNDJmM2VcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIiwgc3R5bGVyczogW3sgY29sb3I6IFwiIzc0Njg1NVwiIH1dIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzI2M2MzZlwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNmI5YTc2XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMzODQxNGVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyMTJhMzdcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjOWNhNWIzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzc0Njg1NVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMWYyODM1XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZjNkMTljXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyZjM5NDhcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXQuc3RhdGlvblwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNkNTk1NjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxNzI2M2NcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzUxNWM2ZFwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxNzI2M2NcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLm1hcmtlcnMubWFwKChtYXJrZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7IGxhdDogbWFya2VyLmxhdCwgbG5nOiBtYXJrZXIubG5nIH07XHJcbiAgICAgICAgZnVuY3Rpb24gcGluU3ltYm9sKGNvbG9yKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHBhdGg6ICdNIDAsMCBDIC0yLC0yMCAtMTAsLTIyIC0xMCwtMzAgQSAxMCwxMCAwIDEsMSAxMCwtMzAgQyAxMCwtMjIgMiwtMjAgMCwwIHogTSAtMiwtMzAgYSAyLDIgMCAxLDEgNCwwIDIsMiAwIDEsMSAtNCwwJyxcclxuICAgICAgICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgekluZGV4OiA5OTk5OSxcclxuICAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICB6SW5kZXg9IHs5OTk5fVxyXG4gICAgICAgICAgaWNvbj0ge3BpblN5bWJvbChcIiNGRkZcIil9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxNYXBEaXJlY3Rpb25zUmVuZGVyZXJcclxuICAgICAgICBwbGFjZXM9e3Byb3BzLm1hcmtlcnN9XHJcbiAgICAgICAgdHJhdmVsTW9kZT17Z29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HfVxyXG4gICAgICAvPlxyXG4gICAgPC9Hb29nbGVNYXA+XHJcbiAgKSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==