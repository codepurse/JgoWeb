webpackHotUpdate_N_E("pages/mapbooking",{

/***/ "./pages/mapbooking.js":
/*!*****************************!*\
  !*** ./pages/mapbooking.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapbooking; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/map/maploaderbook */ "./component/map/maploaderbook.js");


var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\mapbooking.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function mapbooking() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      origin = _React$useState2[0],
      setOrigin = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      fullname = _React$useState4[0],
      setFullname = _React$useState4[1];

  var status = [{
    value: "Delivered",
    label: "Delivered"
  }, {
    value: "Looking for Driver",
    label: "Looking for Driver"
  }, {
    value: "Ongoing",
    label: "Ongoing"
  }];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      datebook = _React$useState6[0],
      setDatebook = _React$useState6[1];

  var statusColor = function statusColor(value) {
    switch (value) {
      case "in transit":
        return "intransitBook";

      case "Looking for Driver":
        return "looking";
    }
  };

  if (true) {
    if (tablemap.length == 0) {
      router.push("/profile");
      return false;
    }
  }

  function formatDate(string) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return month + '/' + day + '/' + year;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setFullname(_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].getFullname());
    console.log(global.config.place.deliver.table_id);

    if (tablemap) {
      console.log(tablemap);
      tablemap.filter(function (event) {
        return event.id === global.config.place.deliver.table_id;
      }).map(function (data) {
        return coordinatebook.push({
          lat: Number(data.pick_up_latitude),
          lng: Number(data.pick_up_longitude)
        }), data.booking_drop_off_location.map(function (data) {
          return coordinatebook.push({
            lat: Number(data.drop_off_latitude),
            lng: Number(data.drop_off_longitude)
          });
        });
      });
    } else {}

    var date = new Date(tablemap[global.config.place.deliver.table_id - 1].created_at);
    setDatebook(formatDate(date));
  }, [10]);

  function trylang() {
    console.log(JSON.stringify(coordinatebook));
    router.push("");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid h-100",
    style: {
      backgroundColor: "#15181A"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divSidebar",
    style: {
      zIndex: "999999999999999"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "Image/horse.png",
    className: "img-fluid mx-auto d-flex",
    style: {
      width: "35px",
      marginTop: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/home.png",
    style: {
      width: "20px"
    },
    onClick: trylang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/truck.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/call.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "row h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-10 h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMapBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-2 colPackage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "circleBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: "packageFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, fullname), __jsx("p", {
    className: "pNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "09636787712"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, formatDate(datebook)))), __jsx("hr", {
    className: "hrDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "p2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Bookings"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, tablemap.filter(function (event) {
    return event.id === global.config.place.deliver.table_id;
  }).map(function (data) {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, __jsx("ul", {
      key: data.id,
      style: {
        paddingLeft: "17px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "liBooking",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: statusColor(data.status),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 27
      }
    }, data.status), data.pick_up_address, __jsx("span", {
      className: "spanMore",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 27
      }
    }, "\u2022\u2022\u2022"), __jsx("div", {
      className: "divHide",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 27
      }
    }, __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 29
      }
    }, data.contact_name), __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    }, data.contact_number))), data.booking_drop_off_location.map(function (data) {
      return __jsx("li", {
        className: "liBooking",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 27
        }
      }, __jsx("p", {
        className: statusColor(data.status),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 29
        }
      }, data.status), data.drop_off_address, __jsx("span", {
        className: "spanMore",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 29
        }
      }, "\u2022\u2022\u2022"), __jsx("div", {
        className: "divHide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 31
        }
      }, data.contact_name), __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 31
        }
      }, data.contact_number)));
    })));
  })))))));
}

_s(mapbooking, "zRwbtN8VAWujmFn8k+sQtALILy4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwYm9va2luZy5qcyJdLCJuYW1lcyI6WyJtYXBib29raW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxhdCIsImxuZyIsIm9yaWdpbiIsInNldE9yaWdpbiIsImZ1bGxuYW1lIiwic2V0RnVsbG5hbWUiLCJzdGF0dXMiLCJ2YWx1ZSIsImxhYmVsIiwiZGF0ZWJvb2siLCJzZXREYXRlYm9vayIsInN0YXR1c0NvbG9yIiwidGFibGVtYXAiLCJsZW5ndGgiLCJwdXNoIiwiZm9ybWF0RGF0ZSIsInN0cmluZyIsInllYXIiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJ1c2VFZmZlY3QiLCJhdXRoU2VydmljZSIsImdldEZ1bGxuYW1lIiwiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInRhYmxlX2lkIiwiZmlsdGVyIiwiZXZlbnQiLCJpZCIsIm1hcCIsImRhdGEiLCJjb29yZGluYXRlYm9vayIsIk51bWJlciIsInBpY2tfdXBfbGF0aXR1ZGUiLCJwaWNrX3VwX2xvbmdpdHVkZSIsImJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24iLCJkcm9wX29mZl9sYXRpdHVkZSIsImRyb3Bfb2ZmX2xvbmdpdHVkZSIsIkRhdGUiLCJjcmVhdGVkX2F0IiwidHJ5bGFuZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwicGlja191cF9hZGRyZXNzIiwiY29udGFjdF9uYW1lIiwiY29udGFjdF9udW1iZXIiLCJkcm9wX29mZl9hZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFD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K0JOLEdBQS9CLENBQW1DLFVBQUNDLElBQUQ7QUFBQSxhQUNsQztBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFFN0IsV0FBVyxDQUFDNkIsSUFBSSxDQUFDbEMsTUFBTixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0drQyxJQUFJLENBQUNsQyxNQURSLENBREYsRUFJR2tDLElBQUksQ0FBQ3FCLGdCQUpSLEVBS0U7QUFBTSxpQkFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTEYsRUFTRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQnJCLElBQUksQ0FBQ21CLFlBQXhCLENBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1CbkIsSUFBSSxDQUFDb0IsY0FBeEIsQ0FGRixDQVRGLENBRGtDO0FBQUEsS0FBbkMsQ0FqQkgsQ0FERixDQURHO0FBQUEsR0FKTixDQURILENBYkYsQ0FERixDQU5GLENBOUJGLENBSEYsQ0FERjtBQXdHRDs7R0E3S3VCakUsVTtVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXBib29raW5nLjdmYjY3NWY1OThmNDkyYTIyMjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IEdvb2dsZW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9tYXBsb2FkZXJib29rXCI7XHJcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBib29raW5nKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtvcmlnaW4sIHNldE9yaWdpbl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Z1bGxuYW1lLCBzZXRGdWxsbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzdGF0dXMgPSBbXHJcbiAgICB7IHZhbHVlOiBcIkRlbGl2ZXJlZFwiLCBsYWJlbDogXCJEZWxpdmVyZWRcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJMb29raW5nIGZvciBEcml2ZXJcIiwgbGFiZWw6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiT25nb2luZ1wiLCBsYWJlbDogXCJPbmdvaW5nXCIgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtkYXRlYm9vaywgc2V0RGF0ZWJvb2tdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN0YXR1c0NvbG9yID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgXCJpbiB0cmFuc2l0XCI6XHJcbiAgICAgICAgcmV0dXJuIFwiaW50cmFuc2l0Qm9va1wiO1xyXG4gICAgICBjYXNlIFwiTG9va2luZyBmb3IgRHJpdmVyXCI6XHJcbiAgICAgICAgcmV0dXJuIFwibG9va2luZ1wiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlmICh0YWJsZW1hcC5sZW5ndGggPT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmb3JtYXREYXRlKHN0cmluZykge1xyXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsZXQgbW9udGggPSAoMSArIGRhdGUuZ2V0TW9udGgoKSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBcclxuICAgIHJldHVybiBtb250aCArICcvJyArIGRheSArICcvJyArIHllYXI7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RnVsbG5hbWUoYXV0aFNlcnZpY2UuZ2V0RnVsbG5hbWUoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQpO1xyXG4gICAgaWYgKHRhYmxlbWFwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhYmxlbWFwKTtcclxuICAgICAgdGFibGVtYXBcclxuICAgICAgICAuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci50YWJsZV9pZClcclxuICAgICAgICAubWFwKFxyXG4gICAgICAgICAgKGRhdGEpID0+IChcclxuICAgICAgICAgICAgY29vcmRpbmF0ZWJvb2sucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5waWNrX3VwX2xhdGl0dWRlKSxcclxuICAgICAgICAgICAgICBsbmc6IE51bWJlcihkYXRhLnBpY2tfdXBfbG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEuYm9va2luZ19kcm9wX29mZl9sb2NhdGlvbi5tYXAoKGRhdGEpID0+XHJcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZWJvb2sucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IE51bWJlcihkYXRhLmRyb3Bfb2ZmX2xhdGl0dWRlKSxcclxuICAgICAgICAgICAgICAgIGxuZzogTnVtYmVyKGRhdGEuZHJvcF9vZmZfbG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRhYmxlbWFwW2dsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci50YWJsZV9pZCAtIDFdLmNyZWF0ZWRfYXQpO1xyXG4gICAgc2V0RGF0ZWJvb2soZm9ybWF0RGF0ZShkYXRlKSk7XHJcbiAgfSwgWzEwXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRyeWxhbmcoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlYm9vaykpO1xyXG4gICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoLTEwMFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxNTE4MUFcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZTaWRlYmFyXCIgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OVwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9ob3JzZS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIsIG1hcmdpblRvcDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkljb25cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm8tYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvaG9tZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RyeWxhbmd9XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvdHJ1Y2sucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jYWxsLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgaC0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNYXBCb29rXCI+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZW1hcD48L0dvb2dsZW1hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sUGFja2FnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlQm9va1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9wcm9maWxlLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFja2FnZUZ1bGxuYW1lXCI+e2Z1bGxuYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTnVtYmVyXCI+MDk2MzY3ODc3MTI8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntmb3JtYXREYXRlKGRhdGVib29rKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJEYXNoYm9hcmRcIj48L2hyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAyXCI+Qm9va2luZ3M8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0YWJsZW1hcFxyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChldmVudCkgPT4gZXZlbnQuaWQgPT09IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci50YWJsZV9pZFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17ZGF0YS5pZH0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTdweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlCb29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdGF0dXNDb2xvcihkYXRhLnN0YXR1cyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5waWNrX3VwX2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjI2OyYjODIyNjsmIzgyMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3RhdHVzQ29sb3IoZGF0YS5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZHJvcF9vZmZfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5Nb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjI2OyYjODIyNjsmIzgyMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwM1wiPntkYXRhLmNvbnRhY3RfbnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9