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
      countbook = _React$useState6[0],
      setCountbook = _React$useState6[1];

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
  }, [10]);

  function trylang() {
    console.log(JSON.stringify(coordinatebook));
    router.push("");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
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
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "row h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-10 h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMapBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-2 colPackage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "circleBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: "packageFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, fullname), __jsx("p", {
    className: "pNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "09636787712"), __jsx("hr", {
    className: "hrDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "p2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Bookings"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
        lineNumber: 125,
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
        lineNumber: 126,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "liBooking",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: statusColor(data.status),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 27
      }
    }, data.status), data.pick_up_address, __jsx("span", {
      className: "spanMore",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 27
      }
    }, " ", "\u2022\u2022\u2022"), __jsx("div", {
      className: "divHide",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 27
      }
    }, __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 29
      }
    }, data.contact_name), __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 29
      }
    }, data.contact_number))), data.booking_drop_off_location.map(function (data) {
      return __jsx("li", {
        className: "liBooking",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 27
        }
      }, __jsx("p", {
        className: statusColor(data.status),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      }, data.status), data.drop_off_address, __jsx("span", {
        className: "spanMore",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 29
        }
      }, " ", "\u2022\u2022\u2022"), __jsx("div", {
        className: "divHide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 31
        }
      }, data.contact_name), __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 31
        }
      }, data.contact_number)));
    })), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "col-lg-12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "p2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 27
      }
    }, "Payment")), __jsx("div", {
      className: "col-lg-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "Image/credit-card.png",
      className: "img-fluid",
      style: {
        width: "25px",
        filter: "brightness(0) invert(1)"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 27
      }
    })), __jsx("div", {
      className: "col-lg-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "pPriceBook",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, data.total))));
  })))))));
}

_s(mapbooking, "RS9HNXkwMw2UcNMt0xb9h9DMgLg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwYm9va2luZy5qcyJdLCJuYW1lcyI6WyJtYXBib29raW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxhdCIsImxuZyIsIm9yaWdpbiIsInNldE9yaWdpbiIsImZ1bGxuYW1lIiwic2V0RnVsbG5hbWUiLCJzdGF0dXMiLCJ2YWx1ZSIsImxhYmVsIiwiY291bnRib29rIiwic2V0Q291bnRib29rIiwic3RhdHVzQ29sb3IiLCJ0YWJsZW1hcCIsImxlbmd0aCIsInB1c2giLCJ1c2VFZmZlY3QiLCJhdXRoU2VydmljZSIsImdldEZ1bGxuYW1lIiwiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInRhYmxlX2lkIiwiZmlsdGVyIiwiZXZlbnQiLCJpZCIsIm1hcCIsImRhdGEiLCJjb29yZGluYXRlYm9vayIsIk51bWJlciIsInBpY2tfdXBfbGF0aXR1ZGUiLCJwaWNrX3VwX2xvbmdpdHVkZSIsImJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24iLCJkcm9wX29mZl9sYXRpdHVkZSIsImRyb3Bfb2ZmX2xvbmdpdHVkZSIsInRyeWxhbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nTGVmdCIsInBpY2tfdXBfYWRkcmVzcyIsImNvbnRhY3RfbmFtZSIsImNvbnRhY3RfbnVtYmVyIiwiZHJvcF9vZmZfYWRkcmVzcyIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURtQyx3QkFFUEMsNENBQUssQ0FBQ0Ms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QSxPQUNFO0FBQUssU0FBRyxFQUFHLHVCQUFYO0FBQW1DLGVBQVMsRUFBRyxXQUEvQztBQUEyRCxXQUFLLEVBQUk7QUFBQ0wsYUFBSyxFQUFFLE1BQVI7QUFBZ0JqQixjQUFNLEVBQUU7QUFBeEIsT0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSkYsRUFPRTtBQUFLLGVBQVMsRUFBRyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBRyxlQUFTLEVBQUcsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCSSxJQUFJLENBQUNvQixLQUFsQyxDQURBLENBUEYsQ0FsQ0YsQ0FERztBQUFBLEdBSk4sQ0FESCxDQVJGLENBREYsQ0FORixDQTlCRixDQUhGLENBREY7QUE2R0Q7O0dBeEt1QnRELFU7VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwYm9va2luZy45OTcxMTVkYmJmMTU1MzllZGI0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9tYXAvbWFwbG9hZGVyYm9va1wiO1xyXG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwYm9va2luZygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3JpZ2luLCBzZXRPcmlnaW5dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3RhdHVzID0gW1xyXG4gICAgeyB2YWx1ZTogXCJEZWxpdmVyZWRcIiwgbGFiZWw6IFwiRGVsaXZlcmVkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIsIGxhYmVsOiBcIkxvb2tpbmcgZm9yIERyaXZlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9uZ29pbmdcIiwgbGFiZWw6IFwiT25nb2luZ1wiIH0sXHJcbiAgXTtcclxuICBjb25zdCBbY291bnRib29rLCBzZXRDb3VudGJvb2tdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN0YXR1c0NvbG9yID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgXCJpbiB0cmFuc2l0XCI6XHJcbiAgICAgICAgcmV0dXJuIFwiaW50cmFuc2l0Qm9va1wiO1xyXG4gICAgICBjYXNlIFwiTG9va2luZyBmb3IgRHJpdmVyXCI6XHJcbiAgICAgICAgcmV0dXJuIFwibG9va2luZ1wiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlmICh0YWJsZW1hcC5sZW5ndGggPT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RnVsbG5hbWUoYXV0aFNlcnZpY2UuZ2V0RnVsbG5hbWUoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQpO1xyXG4gICAgaWYgKHRhYmxlbWFwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhYmxlbWFwKTtcclxuICAgICAgdGFibGVtYXBcclxuICAgICAgICAuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci50YWJsZV9pZClcclxuICAgICAgICAubWFwKFxyXG4gICAgICAgICAgKGRhdGEpID0+IChcclxuICAgICAgICAgICAgY29vcmRpbmF0ZWJvb2sucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5waWNrX3VwX2xhdGl0dWRlKSxcclxuICAgICAgICAgICAgICBsbmc6IE51bWJlcihkYXRhLnBpY2tfdXBfbG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEuYm9va2luZ19kcm9wX29mZl9sb2NhdGlvbi5tYXAoKGRhdGEpID0+XHJcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZWJvb2sucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IE51bWJlcihkYXRhLmRyb3Bfb2ZmX2xhdGl0dWRlKSxcclxuICAgICAgICAgICAgICAgIGxuZzogTnVtYmVyKGRhdGEuZHJvcF9vZmZfbG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfSwgWzEwXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRyeWxhbmcoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlYm9vaykpO1xyXG4gICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoLTEwMFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxNTE4MUFcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZTaWRlYmFyXCIgc3R5bGU9e3sgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OVwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9ob3JzZS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIsIG1hcmdpblRvcDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkljb25cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm8tYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvaG9tZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RyeWxhbmd9XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvdHJ1Y2sucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jYWxsLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgaC0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNYXBCb29rXCI+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZW1hcD48L0dvb2dsZW1hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sUGFja2FnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlQm9va1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9wcm9maWxlLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFja2FnZUZ1bGxuYW1lXCI+e2Z1bGxuYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTnVtYmVyXCI+MDk2MzY3ODc3MTI8L3A+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyRGFzaGJvYXJkXCI+PC9ocj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMlwiPkJvb2tpbmdzPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGFibGVtYXBcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoZXZlbnQpID0+IGV2ZW50LmlkID09PSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWRcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17ZGF0YS5pZH0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTdweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlCb29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdGF0dXNDb2xvcihkYXRhLnN0YXR1cyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5waWNrX3VwX2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbk1vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODIyNjsmIzgyMjY7JiM4MjI2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAzXCI+e2RhdGEuY29udGFjdF9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAzXCI+e2RhdGEuY29udGFjdF9udW1iZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYm9va2luZ19kcm9wX29mZl9sb2NhdGlvbi5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlCb29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0YXR1c0NvbG9yKGRhdGEuc3RhdHVzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRyb3Bfb2ZmX2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODIyNjsmIzgyMjY7JiM4MjI2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAzXCI+e2RhdGEuY29udGFjdF9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcInAyXCI+UGF5bWVudDwvcD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmMgPSBcIkltYWdlL2NyZWRpdC1jYXJkLnBuZ1wiIGNsYXNzTmFtZSA9IFwiaW1nLWZsdWlkXCIgc3R5bGUgPSB7e3dpZHRoOiBcIjI1cHhcIiwgZmlsdGVyOiBcImJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpXCJ9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJwUHJpY2VCb29rXCI+e2RhdGEudG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=