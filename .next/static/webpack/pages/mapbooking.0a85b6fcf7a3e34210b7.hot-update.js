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
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date(string).toLocaleDateString([], options);
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
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
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
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "row h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-10 h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMapBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-2 colPackage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "circleBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: "packageFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, fullname), __jsx("p", {
    className: "pNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "09636787712"), __jsx("hr", {
    className: "hrDashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "p2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "Bookings"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
        lineNumber: 130,
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
        lineNumber: 131,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "liBooking",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: statusColor(data.status),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 27
      }
    }, data.status), data.pick_up_address, setDatebook(data.created_at), __jsx("span", {
      className: "spanMore",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 27
      }
    }, " ", "\u2022\u2022\u2022"), __jsx("div", {
      className: "divHide",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 27
      }
    }, __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    }, data.contact_name), __jsx("p", {
      className: "p3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    }, data.contact_number))), data.booking_drop_off_location.map(function (data) {
      return __jsx("li", {
        className: "liBooking",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 27
        }
      }, __jsx("p", {
        className: statusColor(data.status),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 29
        }
      }, data.status), data.drop_off_address, __jsx("span", {
        className: "spanMore",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, " ", "\u2022\u2022\u2022"), __jsx("div", {
        className: "divHide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 31
        }
      }, data.contact_name), __jsx("p", {
        className: "p3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 31
        }
      }, data.contact_number)));
    })), __jsx("div", {
      className: "row align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "col-lg-12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "p2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 27
      }
    }, "Payment")), __jsx("div", {
      className: "col-lg-3",
      style: {
        pading: "0px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
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
        lineNumber: 170,
        columnNumber: 27
      }
    })), __jsx("div", {
      className: "col-lg-9",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "pDateBook",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 27
      }
    }, formatDate(data.created_at)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwYm9va2luZy5qcyJdLCJuYW1lcyI6WyJtYXBib29raW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxhdCIsImxuZyIsIm9yaWdpbiIsInNldE9yaWdpbiIsImZ1bGxuYW1lIiwic2V0RnVsbG5hbWUiLCJzdGF0dXMiLCJ2YWx1ZSIsImxhYmVsIiwiZGF0ZWJvb2siLCJzZXREYXRlYm9vayIsInN0YXR1c0NvbG9yIiwidGFibGVtYXAiLCJsZW5ndGgiLCJwdXNoIiwiZm9ybWF0RGF0ZSIsInN0cmluZyIsIm9wdGlvbnMiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidXNlRWZmZWN0IiwiYXV0aFNlcnZpY2UiLCJnZXRGdWxsbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJ0YWJsZV9pZCIsImZpbHRlciIsImV2ZW50IiwiaWQiLCJtYXAiLCJkYXRhIiwiY29vcmRpbmF0ZWJvb2siLCJOdW1iZXIiLCJwaWNrX3VwX2xhdGl0dWRlIiwicGlja191cF9sb25naXR1ZGUiLCJib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uIiwiZHJvcF9vZmZfbGF0aXR1ZGUiLCJkcm9wX29mZl9sb25naXR1ZGUiLCJ0cnlsYW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIndpZHRoIiwibWFyZ2luVG9wIiwicGFkZGluZ0xlZnQiLCJwaWNrX3VwX2FkZHJlc3MiLCJjcmVhdGVkX2F0IiwiY29udGFjdF9uYW1lIiwiY29udGFjdF9udW1iZXIiLCJkcm9wX29mZl9hZGRyZXNzIiwicGFkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQmxCLElBQUksQ0FBQ21CLGNBQXhCLENBRkYsQ0FURixDQURrQztBQUFBLEtBQW5DLENBakJILENBREYsRUFtQ0U7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUEwQixXQUFLLEVBQUU7QUFBRUUsY0FBTSxFQUFFO0FBQVYsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFDLHVCQUROO0FBRUUsZUFBUyxFQUFDLFdBRlo7QUFHRSxXQUFLLEVBQUU7QUFDTFIsYUFBSyxFQUFFLE1BREY7QUFFTGpCLGNBQU0sRUFBRTtBQUZILE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSkYsRUFjRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2xCLFVBQVUsQ0FBQ3NCLElBQUksQ0FBQ2lCLFVBQU4sQ0FEYixDQURGLENBZEYsQ0FuQ0YsQ0FERztBQUFBLEdBSk4sQ0FESCxDQVJGLENBREYsQ0FORixDQTlCRixDQUhGLENBREY7QUF1SEQ7O0dBdkx1QjNELFU7VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwYm9va2luZy4wYTg1YjZmY2Y3YTNlMzQyMTBiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9tYXAvbWFwbG9hZGVyYm9va1wiO1xyXG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwYm9va2luZygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3JpZ2luLCBzZXRPcmlnaW5dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3RhdHVzID0gW1xyXG4gICAgeyB2YWx1ZTogXCJEZWxpdmVyZWRcIiwgbGFiZWw6IFwiRGVsaXZlcmVkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIsIGxhYmVsOiBcIkxvb2tpbmcgZm9yIERyaXZlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9uZ29pbmdcIiwgbGFiZWw6IFwiT25nb2luZ1wiIH0sXHJcbiAgXTtcclxuICBjb25zdCBbZGF0ZWJvb2ssIHNldERhdGVib29rXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzdGF0dXNDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiaW4gdHJhbnNpdFwiOlxyXG4gICAgICAgIHJldHVybiBcImludHJhbnNpdEJvb2tcIjtcclxuICAgICAgY2FzZSBcIkxvb2tpbmcgZm9yIERyaXZlclwiOlxyXG4gICAgICAgIHJldHVybiBcImxvb2tpbmdcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZiAodGFibGVtYXAubGVuZ3RoID09IDApIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZShzdHJpbmcpIHtcclxuICAgIHZhciBvcHRpb25zID0geyB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH07XHJcbiAgICByZXR1cm4gbmV3IERhdGUoc3RyaW5nKS50b0xvY2FsZURhdGVTdHJpbmcoW10sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZ1bGxuYW1lKGF1dGhTZXJ2aWNlLmdldEZ1bGxuYW1lKCkpO1xyXG4gICAgY29uc29sZS5sb2coZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkKTtcclxuICAgIGlmICh0YWJsZW1hcCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0YWJsZW1hcCk7XHJcbiAgICAgIHRhYmxlbWFwXHJcbiAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlkID09PSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQpXHJcbiAgICAgICAgLm1hcChcclxuICAgICAgICAgIChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVib29rLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhdDogTnVtYmVyKGRhdGEucGlja191cF9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgbG5nOiBOdW1iZXIoZGF0YS5waWNrX3VwX2xvbmdpdHVkZSksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLmJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24ubWFwKChkYXRhKSA9PlxyXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVib29rLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5kcm9wX29mZl9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgICBsbmc6IE51bWJlcihkYXRhLmRyb3Bfb2ZmX2xvbmdpdHVkZSksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH0sIFsxMF0pO1xyXG5cclxuICBmdW5jdGlvbiB0cnlsYW5nKCkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZWJvb2spKTtcclxuICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgaC0xMDBcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMTUxODFBXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2U2lkZWJhclwiIHN0eWxlPXt7IHpJbmRleDogXCI5OTk5OTk5OTk5OTk5OTlcIiB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvaG9yc2UucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiLCBtYXJnaW5Ub3A6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdk1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZJY29uXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5vLWJ1bGxldHNcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2hvbWUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0cnlsYW5nfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3RydWNrLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY2FsbC5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWFwQm9va1wiPlxyXG4gICAgICAgICAgICAgIDxHb29nbGVtYXA+PC9Hb29nbGVtYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbFBhY2thZ2VcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZUJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvcHJvZmlsZS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhY2thZ2VGdWxsbmFtZVwiPntmdWxsbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE51bWJlclwiPjA5NjM2Nzg3NzEyPC9wPlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockRhc2hib2FyZFwiPjwvaHI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDJcIj5Cb29raW5nczwvcD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RhYmxlbWFwXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtkYXRhLmlkfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxN3B4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0YXR1c0NvbG9yKGRhdGEuc3RhdHVzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnBpY2tfdXBfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0RGF0ZWJvb2soZGF0YS5jcmVhdGVkX2F0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjI2OyYjODIyNjsmIzgyMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3RhdHVzQ29sb3IoZGF0YS5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZHJvcF9vZmZfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5Nb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjI2OyYjODIyNjsmIzgyMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwM1wiPntkYXRhLmNvbnRhY3RfbnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAyXCI+UGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIiBzdHlsZT17eyBwYWRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY3JlZGl0LWNhcmQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDApIGludmVydCgxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERhdGVCb29rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShkYXRhLmNyZWF0ZWRfYXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9