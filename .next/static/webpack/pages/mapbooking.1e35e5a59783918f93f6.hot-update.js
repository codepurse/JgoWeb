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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      pricebook = _React$useState8[0],
      setPricebook = _React$useState8[1];

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

    var d = tablemap[global.config.place.deliver.table_id - 1].created_at.slice(0, 10);
    setPricebook(tablemap[global.config.place.deliver.table_id - 1].total);
    setDatebook(d);
  }, [10]);

  function trylang() {
    console.log(JSON.stringify(coordinatebook));
    router.push("");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
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
      lineNumber: 84,
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
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "row h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-9 h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMapBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-3 colPackage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "circleBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: "packageFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, fullname), __jsx("p", {
    className: "pNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "09636787712"), __jsx("div", {
    className: "row",
    style: {
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    style: {
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p2 text-center",
    style: {
      marginBottom: "2px",
      fontSize: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Date"), __jsx("p", {
    className: "pDate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, datebook)), __jsx("div", {
    className: "col-lg-6",
    style: {
      borderLeft: "1px solid  #414141",
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p2 text-center",
    style: {
      marginBottom: "2px",
      fontSize: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "Price"), __jsx("p", {
    className: "pDate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, pricebook))), __jsx("hr", {
    className: "hrDashboard",
    style: {
      marginTop: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "p2",
    style: {
      marginLeft: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Bookings"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
        lineNumber: 151,
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
        lineNumber: 152,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "liBooking",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: statusColor(data.status),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 27
      }
    }, data.status), data.pick_up_address, __jsx("span", {
      className: "spanMore",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 27
      }
    }, "\u2022\u2022\u2022"), __jsx("div", {
      className: "divHide",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 27
      }
    }, __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    }, data.contact_name), __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 29
      }
    }, data.contact_number))), data.booking_drop_off_location.map(function (data) {
      return __jsx("li", {
        className: "liBooking",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 27
        }
      }, __jsx("p", {
        className: statusColor(data.status),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 29
        }
      }, data.status), data.drop_off_address, __jsx("span", {
        className: "spanMore",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 29
        }
      }, "\u2022\u2022\u2022"), __jsx("div", {
        className: "divHide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 31
        }
      }, data.contact_name), __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 31
        }
      }, data.contact_number)));
    })));
  })))))));
}

_s(mapbooking, "SI/r2E0g9m6ax5CVNsJATqVtqqs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwYm9va2luZy5qcyJdLCJuYW1lcyI6WyJtYXBib29raW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxhdCIsImxuZyIsIm9yaWdpbiIsInNldE9yaWdpbiIsImZ1bGxuYW1lIiwic2V0RnVsbG5hbWUiLCJzdGF0dXMiLCJ2YWx1ZSIsImxhYmVsIiwiZGF0ZWJvb2siLCJzZXREYXRlYm9vayIsInByaWNlYm9vayIsInNldFByaWNlYm9vayIsInN0YXR1c0NvbG9yIiwidGFibGVtYXAiLCJsZW5ndGgiLCJwdXNoIiwidXNlRWZmZWN0IiwiYXV0aFNlcnZpY2UiLCJnZXRGdWxsbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJ0YWJsZV9pZCIsImZpbHRlciIsImV2ZW50IiwiaWQiLCJtYXAiLCJkYXRhIiwiY29vcmRpbmF0ZWJvb2siLCJOdW1iZXIiLCJwaWNrX3VwX2xhdGl0dWRlIiwicGlja191cF9sb25naXR1ZGUiLCJib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uIiwiZHJvcF9vZmZfbGF0aXR1ZGUiLCJkcm9wX29mZl9sb25naXR1ZGUiLCJkIiwiY3JlYXRlZF9hdCIsInNsaWNlIiwidG90YWwiLCJ0cnlsYW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIndpZHRoIiwibWFyZ2luVG9wIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiYm9yZGVyTGVmdCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsInBpY2tfdXBfYWRkcmVzcyIsImNvbnRhY3RfbmFtZSIsImNvbnRhY3RfbnVtYmVyIiwiZHJvcF9vZmZfYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQjVCLElBQUksQ0FBQzBCLFlBQXhCLENBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1CMUIsSUFBSSxDQUFDMkIsY0FBeEIsQ0FGRixDQVJGLENBRGtDO0FBQUEsS0FBbkMsQ0FoQkgsQ0FERixDQURHO0FBQUEsR0FKTixDQURILENBNUJGLENBREYsQ0FORixDQTlCRixDQUhGLENBREY7QUFxSEQ7O0dBdEx1Qi9ELFU7VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwYm9va2luZy4xZTM1ZTVhNTk3ODM5MThmOTNmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9tYXAvbWFwbG9hZGVyYm9va1wiO1xyXG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwYm9va2luZygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3JpZ2luLCBzZXRPcmlnaW5dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3RhdHVzID0gW1xyXG4gICAgeyB2YWx1ZTogXCJEZWxpdmVyZWRcIiwgbGFiZWw6IFwiRGVsaXZlcmVkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIsIGxhYmVsOiBcIkxvb2tpbmcgZm9yIERyaXZlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9uZ29pbmdcIiwgbGFiZWw6IFwiT25nb2luZ1wiIH0sXHJcbiAgXTtcclxuICBjb25zdCBbZGF0ZWJvb2ssIHNldERhdGVib29rXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZWJvb2ssIHNldFByaWNlYm9va10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzdGF0dXNDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiaW4gdHJhbnNpdFwiOlxyXG4gICAgICAgIHJldHVybiBcImludHJhbnNpdEJvb2tcIjtcclxuICAgICAgY2FzZSBcIkxvb2tpbmcgZm9yIERyaXZlclwiOlxyXG4gICAgICAgIHJldHVybiBcImxvb2tpbmdcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZiAodGFibGVtYXAubGVuZ3RoID09IDApIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZ1bGxuYW1lKGF1dGhTZXJ2aWNlLmdldEZ1bGxuYW1lKCkpO1xyXG4gICAgY29uc29sZS5sb2coZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkKTtcclxuICAgIGlmICh0YWJsZW1hcCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0YWJsZW1hcCk7XHJcbiAgICAgIHRhYmxlbWFwXHJcbiAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlkID09PSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQpXHJcbiAgICAgICAgLm1hcChcclxuICAgICAgICAgIChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVib29rLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhdDogTnVtYmVyKGRhdGEucGlja191cF9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgbG5nOiBOdW1iZXIoZGF0YS5waWNrX3VwX2xvbmdpdHVkZSksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLmJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24ubWFwKChkYXRhKSA9PlxyXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVib29rLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5kcm9wX29mZl9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgICBsbmc6IE51bWJlcihkYXRhLmRyb3Bfb2ZmX2xvbmdpdHVkZSksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gICAgdmFyIGQgPSB0YWJsZW1hcFtnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgLSAxXS5jcmVhdGVkX2F0LnNsaWNlKFxyXG4gICAgICAwLFxyXG4gICAgICAxMFxyXG4gICAgKTtcclxuICAgIHNldFByaWNlYm9vayh0YWJsZW1hcFtnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgLSAxXS50b3RhbCk7XHJcbiAgICBzZXREYXRlYm9vayhkKTtcclxuICB9LCBbMTBdKTtcclxuXHJcbiAgZnVuY3Rpb24gdHJ5bGFuZygpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVib29rKSk7XHJcbiAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGgtMTAwXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE1MTgxQVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlNpZGViYXJcIiBzdHlsZT17eyB6SW5kZXg6IFwiOTk5OTk5OTk5OTk5OTk5XCIgfX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIkltYWdlL2hvcnNlLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiwgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SWNvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1idWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9ob21lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dHJ5bGFuZ31cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS90cnVjay5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NhbGwucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05IGgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWFwQm9va1wiPlxyXG4gICAgICAgICAgICAgIDxHb29nbGVtYXA+PC9Hb29nbGVtYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbFBhY2thZ2VcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZUJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvcHJvZmlsZS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhY2thZ2VGdWxsbmFtZVwiPntmdWxsbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE51bWJlclwiPjA5NjM2Nzg3NzEyPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGUgPSB7e3BhZGRpbmc6IFwiMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZSA9IHt7cGFkZGluZzogXCIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMnB4XCIsIGZvbnRTaXplOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEYXRlXCI+e2RhdGVib29rfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlID0ge3tib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAgIzQxNDE0MVwiLCBwYWRkaW5nOiBcIjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicDIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIycHhcIiwgZm9udFNpemU6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEYXRlXCI+e3ByaWNlYm9va308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJEYXNoYm9hcmRcIiBzdHlsZSA9IHt7bWFyZ2luVG9wOiBcIjhweFwifX0+PC9ocj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMlwiIHN0eWxlID0ge3ttYXJnaW5MZWZ0OiBcIjE4cHhcIn19PkJvb2tpbmdzPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGFibGVtYXBcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoZXZlbnQpID0+IGV2ZW50LmlkID09PSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWRcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2RhdGEuaWR9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjE3cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpQm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3RhdHVzQ29sb3IoZGF0YS5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucGlja191cF9hZGRyZXNzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjI2OyYjODIyNjsmIzgyMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3RhdHVzQ29sb3IoZGF0YS5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZHJvcF9vZmZfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5Nb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODIyNjsmIzgyMjY7JiM4MjI2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAzXCI+e2RhdGEuY29udGFjdF9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==