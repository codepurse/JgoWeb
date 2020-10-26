exports.ids = [0];
exports.modules = {

/***/ "./component/map/leafletmap.js":
/*!*************************************!*\
  !*** ./component/map/leafletmap.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./component/map/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-geocode */ "react-geocode");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-places-autocomplete */ "react-google-places-autocomplete");
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\leafletmap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"], _extends({
    ref: initMarker
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  }));
};

class MapExample extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
      key: 1,
      address: ""
    };
    this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {}

  componentDidMount() {
    setTimeout(() => this.myRef.current.leafletElement.invalidateSize(), 100);
  }

  handleClick(e) {
    console.log(e.latlng.lat);
    console.log(e.latlng.lng);
    react_geocode__WEBPACK_IMPORTED_MODULE_3___default.a.setApiKey("AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4");
    react_geocode__WEBPACK_IMPORTED_MODULE_3___default.a.fromLatLng(e.latlng.lat, e.latlng.lng).then(response => {
      const address = response.results[0].formatted_address;
      console.log(address);
      global.config.place.deliver.pickoff = address;
      global.config.place.deliver.pickofflat = e.latlng.lat;
      global.config.place.deliver.dropofflang = e.latlng.lng;
      this.setState({
        address: address
      });
    }, error => {
      console.error(error);
    });
    this.setState({
      currentPos: e.latlng
    });
  }

  render() {
    return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      ref: this.myRef,
      className: "map",
      center: this.props.center,
      zoom: this.props.zoom,
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], {
      attribution: "\xA9 <a href=\"https://stadiamaps.com/\">Stadia Maps</a>, \xA9 <a href=\"https://openmaptiles.org/\">OpenMapTiles</a> \xA9 <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors",
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }), this.state.currentPos && __jsx(MyMarker, {
      position: this.state.currentPos,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
      position: this.state.currentPos,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, "Current location: ", __jsx("pre", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, this.state.address))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapExample);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbWFwL2xlYWZsZXRtYXAuanMiXSwibmFtZXMiOlsiTXlNYXJrZXIiLCJwcm9wcyIsImluaXRNYXJrZXIiLCJyZWYiLCJsZWFmbGV0RWxlbWVudCIsIm9wZW5Qb3B1cCIsIk1hcEV4YW1wbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiY3VycmVudFBvcyIsImtleSIsImFkZHJlc3MiLCJteVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImludmFsaWRhdGVTaXplIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsYXRsbmciLCJsYXQiLCJsbmciLCJHZW9jb2RlIiwic2V0QXBpS2V5IiwiZnJvbUxhdExuZyIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmYiLCJwaWNrb2ZmbGF0IiwiZHJvcG9mZmxhbmciLCJzZXRTdGF0ZSIsImVycm9yIiwicmVuZGVyIiwiY2VudGVyIiwiem9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxVQUFVLEdBQUlDLEdBQUQsSUFBUztBQUMxQixRQUFJQSxHQUFKLEVBQVM7QUFDUEEsU0FBRyxDQUFDQyxjQUFKLENBQW1CQyxTQUFuQjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxTQUFPLE1BQUMsb0RBQUQ7QUFBUSxPQUFHLEVBQUVIO0FBQWIsS0FBNkJELEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNELENBUkQ7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QUFBO0FBQUEsNkJBQ29CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTSxLQUFLRCxLQUFMLENBQVdHLE9BQWpCLENBRHBCLENBREYsQ0FYSixDQURGO0FBb0JEOztBQWxFZ0M7O0FBcUVwQk4seUVBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNYXAsIFRpbGVMYXllciwgUG9wdXAsIE1hcmtlciwgd2l0aExlYWZsZXQgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xyXG5pbXBvcnQgXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgR2VvY29kZSBmcm9tIFwicmVhY3QtZ2VvY29kZVwiO1xyXG5pbXBvcnQgeyBnZW9jb2RlQnlBZGRyZXNzIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcblxyXG5jb25zdCBNeU1hcmtlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGluaXRNYXJrZXIgPSAocmVmKSA9PiB7XHJcbiAgICBpZiAocmVmKSB7XHJcbiAgICAgIHJlZi5sZWFmbGV0RWxlbWVudC5vcGVuUG9wdXAoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gPE1hcmtlciByZWY9e2luaXRNYXJrZXJ9IHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5jbGFzcyBNYXBFeGFtcGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3VycmVudFBvczogbnVsbCxcclxuICAgICAga2V5OiAxLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgfTtcclxuICAgIHRoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gIHRoaXMubXlSZWYuY3VycmVudC5sZWFmbGV0RWxlbWVudC5pbnZhbGlkYXRlU2l6ZSgpLCBcclxuICAgICAgICAxMDBcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUubGF0bG5nLmxhdCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLmxhdGxuZy5sbmcpO1xyXG4gICAgR2VvY29kZS5zZXRBcGlLZXkoXCJBSXphU3lEenppX1ZCY2YyT2VmNkxUVmlMVTc2N1VQTkhsbkl6ZTRcIik7XHJcblxyXG4gICAgR2VvY29kZS5mcm9tTGF0TG5nKGUubGF0bG5nLmxhdCwgZS5sYXRsbmcubG5nKS50aGVuKFxyXG4gICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gcmVzcG9uc2UucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuICAgICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZiA9IGFkZHJlc3M7XHJcbiAgICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQgPSBlLmxhdGxuZy5sYXQ7XHJcbiAgICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nID0gZS5sYXRsbmcubG5nO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBhZGRyZXNzIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBvczogZS5sYXRsbmcgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFwXHJcbiAgICAgICAgcmVmPXt0aGlzLm15UmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1hcFwiXHJcbiAgICAgICAgY2VudGVyPXt0aGlzLnByb3BzLmNlbnRlcn1cclxuICAgICAgICB6b29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxUaWxlTGF5ZXIgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9zdGFkaWFtYXBzLmNvbS9cIj5TdGFkaWEgTWFwczwvYT4sICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9vcGVubWFwdGlsZXMub3JnL1wiPk9wZW5NYXBUaWxlczwvYT4gJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vb3BlbnN0cmVldG1hcC5vcmdcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXHJcbiAgICAgICAgICB1cmw9J2h0dHBzOi8vdGlsZXMuc3RhZGlhbWFwcy5jb20vdGlsZXMvYWxpZGFkZV9zbW9vdGgve3p9L3t4fS97eX17cn0ucG5nJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFBvcyAmJiAoXHJcbiAgICAgICAgICA8TXlNYXJrZXIgcG9zaXRpb249e3RoaXMuc3RhdGUuY3VycmVudFBvc30+XHJcbiAgICAgICAgICAgIDxQb3B1cCBwb3NpdGlvbj17dGhpcy5zdGF0ZS5jdXJyZW50UG9zfT5cclxuICAgICAgICAgICAgICBDdXJyZW50IGxvY2F0aW9uOiA8cHJlPnt0aGlzLnN0YXRlLmFkZHJlc3N9PC9wcmU+XHJcbiAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICA8L015TWFya2VyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWFwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcEV4YW1wbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=