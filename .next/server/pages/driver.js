module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/driver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/componentdidmount.js":
/*!****************************************!*\
  !*** ./component/componentdidmount.js ***!
  \****************************************/
/*! exports provided: componentMount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentMount", function() { return componentMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\componentdidmount.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class componentMount extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    let scripts = [{
      src: "Script/jgo.js"
    }];
    scripts.map(item => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 12
      }
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (componentMount);

/***/ }),

/***/ "./component/header.js":
/*!*****************************!*\
  !*** ./component/header.js ***!
  \*****************************/
/*! exports provided: header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, "Jgo Website"), __jsx("link", {
      rel: "stylesheet",
      href: "Css/index.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
      integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
      integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4&libraries=places",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
      integrity: "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
      crossorigin: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
      integrity: "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",
      crossorigin: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "go.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./node_modules/philippines/cities.json":
/*!**********************************************!*\
  !*** ./node_modules/philippines/cities.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Caloocan\",\"province\":\"MM\",\"city\":true},{\"name\":\"Las Piñas\",\"province\":\"MM\",\"city\":true},{\"name\":\"Makati\",\"province\":\"MM\",\"city\":true},{\"name\":\"Malabon\",\"province\":\"MM\",\"city\":true},{\"name\":\"Mandaluyong\",\"province\":\"MM\",\"city\":true},{\"name\":\"Manila\",\"province\":\"MM\",\"city\":true},{\"name\":\"Marikina\",\"province\":\"MM\",\"city\":true},{\"name\":\"Muntinlupa\",\"province\":\"MM\",\"city\":true},{\"name\":\"Navotas\",\"province\":\"MM\",\"city\":true},{\"name\":\"Parañaque\",\"province\":\"MM\",\"city\":true},{\"name\":\"Pasay\",\"province\":\"MM\",\"city\":true},{\"name\":\"Pasig\",\"province\":\"MM\",\"city\":true},{\"name\":\"Pateros\",\"province\":\"MM\"},{\"name\":\"Quezon\",\"province\":\"MM\",\"city\":true},{\"name\":\"San Juan\",\"province\":\"MM\",\"city\":true},{\"name\":\"Taguig\",\"province\":\"MM\",\"city\":true},{\"name\":\"Valenzuela\",\"province\":\"MM\",\"city\":true},{\"name\":\"Bangued\",\"province\":\"ABR\"},{\"name\":\"Boliney\",\"province\":\"ABR\"},{\"name\":\"Bucay\",\"province\":\"ABR\"},{\"name\":\"Bucloc\",\"province\":\"ABR\"},{\"name\":\"Daguioman\",\"province\":\"ABR\"},{\"name\":\"Danglas\",\"province\":\"ABR\"},{\"name\":\"Dolores\",\"province\":\"ABR\"},{\"name\":\"La Paz\",\"province\":\"ABR\"},{\"name\":\"Lacub\",\"province\":\"ABR\"},{\"name\":\"Lagangilang\",\"province\":\"ABR\"},{\"name\":\"Lagayan\",\"province\":\"ABR\"},{\"name\":\"Langiden\",\"province\":\"ABR\"},{\"name\":\"Licuan-Baay\",\"province\":\"ABR\"},{\"name\":\"Luba\",\"province\":\"ABR\"},{\"name\":\"Malibcong\",\"province\":\"ABR\"},{\"name\":\"Manabo\",\"province\":\"ABR\"},{\"name\":\"Peñarrubia\",\"province\":\"ABR\"},{\"name\":\"Pidigan\",\"province\":\"ABR\"},{\"name\":\"Pilar\",\"province\":\"ABR\"},{\"name\":\"Sallapadan\",\"province\":\"ABR\"},{\"name\":\"San Isidro\",\"province\":\"ABR\"},{\"name\":\"San Juan\",\"province\":\"ABR\"},{\"name\":\"San Quintin\",\"province\":\"ABR\"},{\"name\":\"Tayum\",\"province\":\"ABR\"},{\"name\":\"Tineg\",\"province\":\"ABR\"},{\"name\":\"Tubo\",\"province\":\"ABR\"},{\"name\":\"Villaviciosa\",\"province\":\"ABR\"},{\"name\":\"Calanasan\",\"province\":\"APA\"},{\"name\":\"Conner\",\"province\":\"APA\"},{\"name\":\"Flora\",\"province\":\"APA\"},{\"name\":\"Kabugao\",\"province\":\"APA\"},{\"name\":\"Luna\",\"province\":\"APA\"},{\"name\":\"Pudtol\",\"province\":\"APA\"},{\"name\":\"Santa Marcela\",\"province\":\"APA\"},{\"name\":\"Atok\",\"province\":\"BEN\"},{\"name\":\"Baguio\",\"province\":\"BEN\",\"city\":true},{\"name\":\"Bakun\",\"province\":\"BEN\"},{\"name\":\"Bokod\",\"province\":\"BEN\"},{\"name\":\"Buguias\",\"province\":\"BEN\"},{\"name\":\"Itogon\",\"province\":\"BEN\"},{\"name\":\"Kabayan\",\"province\":\"BEN\"},{\"name\":\"Kapangan\",\"province\":\"BEN\"},{\"name\":\"Kibungan\",\"province\":\"BEN\"},{\"name\":\"La Trinidad\",\"province\":\"BEN\"},{\"name\":\"Mankayan\",\"province\":\"BEN\"},{\"name\":\"Sablan\",\"province\":\"BEN\"},{\"name\":\"Tuba\",\"province\":\"BEN\"},{\"name\":\"Tublay\",\"province\":\"BEN\"},{\"name\":\"Aguinaldo\",\"province\":\"IFU\"},{\"name\":\"Alfonso Lista\",\"province\":\"IFU\"},{\"name\":\"Asipulo\",\"province\":\"IFU\"},{\"name\":\"Banaue\",\"province\":\"IFU\"},{\"name\":\"Hingyon\",\"province\":\"IFU\"},{\"name\":\"Hungduan\",\"province\":\"IFU\"},{\"name\":\"Kiangan\",\"province\":\"IFU\"},{\"name\":\"Lagawe\",\"province\":\"IFU\"},{\"name\":\"Lamut\",\"province\":\"IFU\"},{\"name\":\"Mayoyao\",\"province\":\"IFU\"},{\"name\":\"Tinoc\",\"province\":\"IFU\"},{\"name\":\"Balbalan\",\"province\":\"KAL\"},{\"name\":\"Lubuagan\",\"province\":\"KAL\"},{\"name\":\"Pasil\",\"province\":\"KAL\"},{\"name\":\"Pinukpuk\",\"province\":\"KAL\"},{\"name\":\"Rizal\",\"province\":\"KAL\"},{\"name\":\"Tabuk\",\"province\":\"KAL\",\"city\":true},{\"name\":\"Tanudan\",\"province\":\"KAL\"},{\"name\":\"Tinglayan\",\"province\":\"KAL\"},{\"name\":\"Barlig\",\"province\":\"MOU\"},{\"name\":\"Bauko\",\"province\":\"MOU\"},{\"name\":\"Besao\",\"province\":\"MOU\"},{\"name\":\"Bontoc\",\"province\":\"MOU\"},{\"name\":\"Natonin\",\"province\":\"MOU\"},{\"name\":\"Paracelis\",\"province\":\"MOU\"},{\"name\":\"Sabangan\",\"province\":\"MOU\"},{\"name\":\"Sadanga\",\"province\":\"MOU\"},{\"name\":\"Sagada\",\"province\":\"MOU\"},{\"name\":\"Tadian\",\"province\":\"MOU\"},{\"name\":\"Adams\",\"province\":\"ILN\"},{\"name\":\"Bacarra\",\"province\":\"ILN\"},{\"name\":\"Badoc\",\"province\":\"ILN\"},{\"name\":\"Bangui\",\"province\":\"ILN\"},{\"name\":\"Banna\",\"province\":\"ILN\"},{\"name\":\"Batac\",\"province\":\"ILN\",\"city\":true},{\"name\":\"Burgos\",\"province\":\"ILN\"},{\"name\":\"Carasi\",\"province\":\"ILN\"},{\"name\":\"Currimao\",\"province\":\"ILN\"},{\"name\":\"Dingras\",\"province\":\"ILN\"},{\"name\":\"Dumalneg\",\"province\":\"ILN\"},{\"name\":\"Laoag\",\"province\":\"ILN\",\"city\":true},{\"name\":\"Marcos\",\"province\":\"ILN\"},{\"name\":\"Nueva Era\",\"province\":\"ILN\"},{\"name\":\"Pagudpud\",\"province\":\"ILN\"},{\"name\":\"Paoay\",\"province\":\"ILN\"},{\"name\":\"Pasuquin\",\"province\":\"ILN\"},{\"name\":\"Piddig\",\"province\":\"ILN\"},{\"name\":\"Pinili\",\"province\":\"ILN\"},{\"name\":\"San Nicolas\",\"province\":\"ILN\"},{\"name\":\"Sarrat\",\"province\":\"ILN\"},{\"name\":\"Solsona\",\"province\":\"ILN\"},{\"name\":\"Vintar\",\"province\":\"ILN\"},{\"name\":\"Alilem\",\"province\":\"ILS\"},{\"name\":\"Banayoyo\",\"province\":\"ILS\"},{\"name\":\"Bantay\",\"province\":\"ILS\"},{\"name\":\"Burgos\",\"province\":\"ILS\"},{\"name\":\"Cabugao\",\"province\":\"ILS\"},{\"name\":\"Candon\",\"province\":\"ILS\",\"city\":true},{\"name\":\"Caoayan\",\"province\":\"ILS\"},{\"name\":\"Cervantes\",\"province\":\"ILS\"},{\"name\":\"Galimuyod\",\"province\":\"ILS\"},{\"name\":\"Gregorio Del Pilar\",\"province\":\"ILS\"},{\"name\":\"Lidlidda\",\"province\":\"ILS\"},{\"name\":\"Magsingal\",\"province\":\"ILS\"},{\"name\":\"Nagbukel\",\"province\":\"ILS\"},{\"name\":\"Narvacan\",\"province\":\"ILS\"},{\"name\":\"Quirino\",\"province\":\"ILS\"},{\"name\":\"Salcedo\",\"province\":\"ILS\"},{\"name\":\"San Emilio\",\"province\":\"ILS\"},{\"name\":\"San Esteban\",\"province\":\"ILS\"},{\"name\":\"San Ildefonso\",\"province\":\"ILS\"},{\"name\":\"San Juan\",\"province\":\"ILS\"},{\"name\":\"San Vicente\",\"province\":\"ILS\"},{\"name\":\"Santa\",\"province\":\"ILS\"},{\"name\":\"Santa Catalina\",\"province\":\"ILS\"},{\"name\":\"Santa Cruz\",\"province\":\"ILS\"},{\"name\":\"Santa Lucia\",\"province\":\"ILS\"},{\"name\":\"Santa Maria\",\"province\":\"ILS\"},{\"name\":\"Santiago\",\"province\":\"ILS\"},{\"name\":\"Santo Domingo\",\"province\":\"ILS\"},{\"name\":\"Sigay\",\"province\":\"ILS\"},{\"name\":\"Sinait\",\"province\":\"ILS\"},{\"name\":\"Sugpon\",\"province\":\"ILS\"},{\"name\":\"Suyo\",\"province\":\"ILS\"},{\"name\":\"Tagudin\",\"province\":\"ILS\"},{\"name\":\"Vigan\",\"province\":\"ILS\",\"city\":true},{\"name\":\"Agoo\",\"province\":\"LUN\"},{\"name\":\"Aringay\",\"province\":\"LUN\"},{\"name\":\"Bacnotan\",\"province\":\"LUN\"},{\"name\":\"Bagulin\",\"province\":\"LUN\"},{\"name\":\"Balaoan\",\"province\":\"LUN\"},{\"name\":\"Bangar\",\"province\":\"LUN\"},{\"name\":\"Bauang\",\"province\":\"LUN\"},{\"name\":\"Burgos\",\"province\":\"LUN\"},{\"name\":\"Caba\",\"province\":\"LUN\"},{\"name\":\"Luna\",\"province\":\"LUN\"},{\"name\":\"Naguilian\",\"province\":\"LUN\"},{\"name\":\"Pugo\",\"province\":\"LUN\"},{\"name\":\"Rosario\",\"province\":\"LUN\"},{\"name\":\"San Fernando\",\"province\":\"LUN\",\"city\":true},{\"name\":\"San Gabriel\",\"province\":\"LUN\"},{\"name\":\"San Juan\",\"province\":\"LUN\"},{\"name\":\"Santo Tomas\",\"province\":\"LUN\"},{\"name\":\"Santol\",\"province\":\"LUN\"},{\"name\":\"Sudipen\",\"province\":\"LUN\"},{\"name\":\"Tubao\",\"province\":\"LUN\"},{\"name\":\"Agno\",\"province\":\"PAN\"},{\"name\":\"Aguilar\",\"province\":\"PAN\"},{\"name\":\"Alaminos\",\"province\":\"PAN\",\"city\":true},{\"name\":\"Alcala\",\"province\":\"PAN\"},{\"name\":\"Anda\",\"province\":\"PAN\"},{\"name\":\"Asingan\",\"province\":\"PAN\"},{\"name\":\"Balungao\",\"province\":\"PAN\"},{\"name\":\"Bani\",\"province\":\"PAN\"},{\"name\":\"Basista\",\"province\":\"PAN\"},{\"name\":\"Bautista\",\"province\":\"PAN\"},{\"name\":\"Bayambang\",\"province\":\"PAN\"},{\"name\":\"Binalonan\",\"province\":\"PAN\"},{\"name\":\"Binmaley\",\"province\":\"PAN\"},{\"name\":\"Bolinao\",\"province\":\"PAN\"},{\"name\":\"Bugallon\",\"province\":\"PAN\"},{\"name\":\"Burgos\",\"province\":\"PAN\"},{\"name\":\"Calasiao\",\"province\":\"PAN\"},{\"name\":\"Dagupan\",\"province\":\"PAN\",\"city\":true},{\"name\":\"Dasol\",\"province\":\"PAN\"},{\"name\":\"Infanta\",\"province\":\"PAN\"},{\"name\":\"Labrador\",\"province\":\"PAN\"},{\"name\":\"Laoac\",\"province\":\"PAN\"},{\"name\":\"Lingayen\",\"province\":\"PAN\"},{\"name\":\"Mabini\",\"province\":\"PAN\"},{\"name\":\"Malasiqui\",\"province\":\"PAN\"},{\"name\":\"Manaoag\",\"province\":\"PAN\"},{\"name\":\"Mangaldan\",\"province\":\"PAN\"},{\"name\":\"Mangatarem\",\"province\":\"PAN\"},{\"name\":\"Mapandan\",\"province\":\"PAN\"},{\"name\":\"Natividad\",\"province\":\"PAN\"},{\"name\":\"Pozzorubio\",\"province\":\"PAN\"},{\"name\":\"Rosales\",\"province\":\"PAN\"},{\"name\":\"San Carlos\",\"province\":\"PAN\",\"city\":true},{\"name\":\"San Fabian\",\"province\":\"PAN\"},{\"name\":\"San Jacinto\",\"province\":\"PAN\"},{\"name\":\"San Manuel\",\"province\":\"PAN\"},{\"name\":\"San Nicolas\",\"province\":\"PAN\"},{\"name\":\"San Quintin\",\"province\":\"PAN\"},{\"name\":\"Santa Barbara\",\"province\":\"PAN\"},{\"name\":\"Santa Maria\",\"province\":\"PAN\"},{\"name\":\"Santo Tomas\",\"province\":\"PAN\"},{\"name\":\"Sison\",\"province\":\"PAN\"},{\"name\":\"Sual\",\"province\":\"PAN\"},{\"name\":\"Tayug\",\"province\":\"PAN\"},{\"name\":\"Umingan\",\"province\":\"PAN\"},{\"name\":\"Urdaneta\",\"province\":\"PAN\",\"city\":true},{\"name\":\"Urbiztondo\",\"province\":\"PAN\"},{\"name\":\"Villasis\",\"province\":\"PAN\"},{\"name\":\"Basco\",\"province\":\"BTN\"},{\"name\":\"Itbayat\",\"province\":\"BTN\"},{\"name\":\"Ivana\",\"province\":\"BTN\"},{\"name\":\"Mahatao\",\"province\":\"BTN\"},{\"name\":\"Sabtang\",\"province\":\"BTN\"},{\"name\":\"Uyugan\",\"province\":\"BTN\"},{\"name\":\"Abulug\",\"province\":\"CAG\"},{\"name\":\"Alcala\",\"province\":\"CAG\"},{\"name\":\"Allacapan\",\"province\":\"CAG\"},{\"name\":\"Amulung\",\"province\":\"CAG\"},{\"name\":\"Aparri\",\"province\":\"CAG\"},{\"name\":\"Baggao\",\"province\":\"CAG\"},{\"name\":\"Ballesteros\",\"province\":\"CAG\"},{\"name\":\"Buguey\",\"province\":\"CAG\"},{\"name\":\"Calayan\",\"province\":\"CAG\"},{\"name\":\"Camalaniugan\",\"province\":\"CAG\"},{\"name\":\"Claveria\",\"province\":\"CAG\"},{\"name\":\"Enrile\",\"province\":\"CAG\"},{\"name\":\"Gattaran\",\"province\":\"CAG\"},{\"name\":\"Gonzaga\",\"province\":\"CAG\"},{\"name\":\"Iguig\",\"province\":\"CAG\"},{\"name\":\"Lal-lo\",\"province\":\"CAG\"},{\"name\":\"Lasam\",\"province\":\"CAG\"},{\"name\":\"Pamplona\",\"province\":\"CAG\"},{\"name\":\"Peñablanca\",\"province\":\"CAG\"},{\"name\":\"Piat\",\"province\":\"CAG\"},{\"name\":\"Rizal\",\"province\":\"CAG\"},{\"name\":\"Sanchez-Mira\",\"province\":\"CAG\"},{\"name\":\"Santa Ana\",\"province\":\"CAG\"},{\"name\":\"Santa Praxedes\",\"province\":\"CAG\"},{\"name\":\"Santa Teresita\",\"province\":\"CAG\"},{\"name\":\"Santo Niño\",\"province\":\"CAG\"},{\"name\":\"Solana\",\"province\":\"CAG\"},{\"name\":\"Tuao\",\"province\":\"CAG\"},{\"name\":\"Tuguegarao\",\"province\":\"CAG\",\"city\":true},{\"name\":\"Alicia\",\"province\":\"ISA\"},{\"name\":\"Angadanan\",\"province\":\"ISA\"},{\"name\":\"Aurora\",\"province\":\"ISA\"},{\"name\":\"Benito Soliven\",\"province\":\"ISA\"},{\"name\":\"Burgos\",\"province\":\"ISA\"},{\"name\":\"Cabagan\",\"province\":\"ISA\"},{\"name\":\"Cabatuan\",\"province\":\"ISA\"},{\"name\":\"Cauayan\",\"province\":\"ISA\",\"city\":true},{\"name\":\"Cordon\",\"province\":\"ISA\"},{\"name\":\"Delfin Albano\",\"province\":\"ISA\"},{\"name\":\"Dinapigue\",\"province\":\"ISA\"},{\"name\":\"Divilacan\",\"province\":\"ISA\"},{\"name\":\"Echague\",\"province\":\"ISA\"},{\"name\":\"Gamu\",\"province\":\"ISA\"},{\"name\":\"Ilagan\",\"province\":\"ISA\",\"city\":true},{\"name\":\"Jones\",\"province\":\"ISA\"},{\"name\":\"Luna\",\"province\":\"ISA\"},{\"name\":\"Maconacon\",\"province\":\"ISA\"},{\"name\":\"Mallig\",\"province\":\"ISA\"},{\"name\":\"Naguilian\",\"province\":\"ISA\"},{\"name\":\"Palanan\",\"province\":\"ISA\"},{\"name\":\"Quezon\",\"province\":\"ISA\"},{\"name\":\"Quirino\",\"province\":\"ISA\"},{\"name\":\"Ramon\",\"province\":\"ISA\"},{\"name\":\"Reina Mercedes\",\"province\":\"ISA\"},{\"name\":\"Roxas\",\"province\":\"ISA\"},{\"name\":\"San Agustin\",\"province\":\"ISA\"},{\"name\":\"San Guillermo\",\"province\":\"ISA\"},{\"name\":\"San Isidro\",\"province\":\"ISA\"},{\"name\":\"San Manuel\",\"province\":\"ISA\"},{\"name\":\"San Mariano\",\"province\":\"ISA\"},{\"name\":\"San Mateo\",\"province\":\"ISA\"},{\"name\":\"San Pablo\",\"province\":\"ISA\"},{\"name\":\"Santa Maria\",\"province\":\"ISA\"},{\"name\":\"Santiago\",\"province\":\"ISA\",\"city\":true},{\"name\":\"Santo Tomas\",\"province\":\"ISA\"},{\"name\":\"Tumauini\",\"province\":\"ISA\"},{\"name\":\"Alfonso Castaneda\",\"province\":\"NUV\"},{\"name\":\"Ambaguio\",\"province\":\"NUV\"},{\"name\":\"Aritao\",\"province\":\"NUV\"},{\"name\":\"Bagabag\",\"province\":\"NUV\"},{\"name\":\"Bambang\",\"province\":\"NUV\"},{\"name\":\"Bayombong\",\"province\":\"NUV\"},{\"name\":\"Diadi\",\"province\":\"NUV\"},{\"name\":\"Dupax del Norte\",\"province\":\"NUV\"},{\"name\":\"Dupax del Sur\",\"province\":\"NUV\"},{\"name\":\"Kasibu\",\"province\":\"NUV\"},{\"name\":\"Kayapa\",\"province\":\"NUV\"},{\"name\":\"Quezon\",\"province\":\"NUV\"},{\"name\":\"Santa Fe\",\"province\":\"NUV\"},{\"name\":\"Solano\",\"province\":\"NUV\"},{\"name\":\"Villaverde\",\"province\":\"NUV\"},{\"name\":\"Aglipay\",\"province\":\"QUI\"},{\"name\":\"Cabarroguis\",\"province\":\"QUI\"},{\"name\":\"Diffun\",\"province\":\"QUI\"},{\"name\":\"Maddela\",\"province\":\"QUI\"},{\"name\":\"Nagtipunan\",\"province\":\"QUI\"},{\"name\":\"Saguday\",\"province\":\"QUI\"},{\"name\":\"Baler\",\"province\":\"AUR\"},{\"name\":\"Casiguran\",\"province\":\"AUR\"},{\"name\":\"Dilasag\",\"province\":\"AUR\"},{\"name\":\"Dinalungan\",\"province\":\"AUR\"},{\"name\":\"Dingalan\",\"province\":\"AUR\"},{\"name\":\"Dipaculao\",\"province\":\"AUR\"},{\"name\":\"Maria Aurora\",\"province\":\"AUR\"},{\"name\":\"San Luis\",\"province\":\"AUR\"},{\"name\":\"Abucay\",\"province\":\"BAN\"},{\"name\":\"Bagac\",\"province\":\"BAN\"},{\"name\":\"Balanga\",\"province\":\"BAN\",\"city\":true},{\"name\":\"Dinalupihan\",\"province\":\"BAN\"},{\"name\":\"Hermosa\",\"province\":\"BAN\"},{\"name\":\"Limay\",\"province\":\"BAN\"},{\"name\":\"Mariveles\",\"province\":\"BAN\"},{\"name\":\"Morong\",\"province\":\"BAN\"},{\"name\":\"Orani\",\"province\":\"BAN\"},{\"name\":\"Orion\",\"province\":\"BAN\"},{\"name\":\"Pilar\",\"province\":\"BAN\"},{\"name\":\"Samal\",\"province\":\"BAN\"},{\"name\":\"Angat\",\"province\":\"BUL\"},{\"name\":\"Balagtas\",\"province\":\"BUL\"},{\"name\":\"Baliuag\",\"province\":\"BUL\"},{\"name\":\"Bocaue\",\"province\":\"BUL\"},{\"name\":\"Bulakan\",\"province\":\"BUL\"},{\"name\":\"Bustos\",\"province\":\"BUL\"},{\"name\":\"Calumpit\",\"province\":\"BUL\"},{\"name\":\"Doña Remedios Trinidad\",\"province\":\"BUL\"},{\"name\":\"Guiguinto\",\"province\":\"BUL\"},{\"name\":\"Hagonoy\",\"province\":\"BUL\"},{\"name\":\"Malolos\",\"province\":\"BUL\",\"city\":true},{\"name\":\"Marilao\",\"province\":\"BUL\"},{\"name\":\"Meycauayan\",\"province\":\"BUL\",\"city\":true},{\"name\":\"Norzagaray\",\"province\":\"BUL\"},{\"name\":\"Obando\",\"province\":\"BUL\"},{\"name\":\"Pandi\",\"province\":\"BUL\"},{\"name\":\"Paombong\",\"province\":\"BUL\"},{\"name\":\"Plaridel\",\"province\":\"BUL\"},{\"name\":\"Pulilan\",\"province\":\"BUL\"},{\"name\":\"San Ildefonso\",\"province\":\"BUL\"},{\"name\":\"San Jose del Monte\",\"province\":\"BUL\",\"city\":true},{\"name\":\"San Miguel\",\"province\":\"BUL\"},{\"name\":\"San Rafael\",\"province\":\"BUL\"},{\"name\":\"Santa Maria\",\"province\":\"BUL\"},{\"name\":\"Aliaga\",\"province\":\"NUE\"},{\"name\":\"Bongabon\",\"province\":\"NUE\"},{\"name\":\"Cabanatuan\",\"province\":\"NUE\",\"city\":true},{\"name\":\"Cabiao\",\"province\":\"NUE\"},{\"name\":\"Carranglan\",\"province\":\"NUE\"},{\"name\":\"Cuyapo\",\"province\":\"NUE\"},{\"name\":\"Gabaldon\",\"province\":\"NUE\"},{\"name\":\"Gapan\",\"province\":\"NUE\",\"city\":true},{\"name\":\"General Mamerto Natividad\",\"province\":\"NUE\"},{\"name\":\"General Tinio\",\"province\":\"NUE\"},{\"name\":\"Guimba\",\"province\":\"NUE\"},{\"name\":\"Jaen\",\"province\":\"NUE\"},{\"name\":\"Laur\",\"province\":\"NUE\"},{\"name\":\"Licab\",\"province\":\"NUE\"},{\"name\":\"Llanera\",\"province\":\"NUE\"},{\"name\":\"Lupao\",\"province\":\"NUE\"},{\"name\":\"Muñoz\",\"province\":\"NUE\",\"city\":true},{\"name\":\"Nampicuan\",\"province\":\"NUE\"},{\"name\":\"Palayan\",\"province\":\"NUE\",\"city\":true},{\"name\":\"Pantabangan\",\"province\":\"NUE\"},{\"name\":\"Peñaranda\",\"province\":\"NUE\"},{\"name\":\"Quezon\",\"province\":\"NUE\"},{\"name\":\"Rizal\",\"province\":\"NUE\"},{\"name\":\"San Antonio\",\"province\":\"NUE\"},{\"name\":\"San Isidro\",\"province\":\"NUE\"},{\"name\":\"San Jose\",\"province\":\"NUE\",\"city\":true},{\"name\":\"San Leonardo\",\"province\":\"NUE\"},{\"name\":\"Santa Rosa\",\"province\":\"NUE\"},{\"name\":\"Santo Domingo\",\"province\":\"NUE\"},{\"name\":\"Talavera\",\"province\":\"NUE\"},{\"name\":\"Talugtug\",\"province\":\"NUE\"},{\"name\":\"Zaragoza\",\"province\":\"NUE\"},{\"name\":\"Angeles\",\"province\":\"PAM\",\"city\":true},{\"name\":\"Apalit\",\"province\":\"PAM\"},{\"name\":\"Arayat\",\"province\":\"PAM\"},{\"name\":\"Bacolor\",\"province\":\"PAM\"},{\"name\":\"Candaba\",\"province\":\"PAM\"},{\"name\":\"Floridablanca\",\"province\":\"PAM\"},{\"name\":\"Guagua\",\"province\":\"PAM\"},{\"name\":\"Lubao\",\"province\":\"PAM\"},{\"name\":\"Mabalacat\",\"province\":\"PAM\",\"city\":true},{\"name\":\"Macabebe\",\"province\":\"PAM\"},{\"name\":\"Magalang\",\"province\":\"PAM\"},{\"name\":\"Masantol\",\"province\":\"PAM\"},{\"name\":\"Mexico\",\"province\":\"PAM\"},{\"name\":\"Minalin\",\"province\":\"PAM\"},{\"name\":\"Porac\",\"province\":\"PAM\"},{\"name\":\"San Fernando\",\"province\":\"PAM\",\"city\":true},{\"name\":\"San Luis\",\"province\":\"PAM\"},{\"name\":\"San Simon\",\"province\":\"PAM\"},{\"name\":\"Santa Ana\",\"province\":\"PAM\"},{\"name\":\"Santa Rita\",\"province\":\"PAM\"},{\"name\":\"Santo Tomas\",\"province\":\"PAM\"},{\"name\":\"Sasmuan\",\"province\":\"PAM\"},{\"name\":\"Anao\",\"province\":\"TAR\"},{\"name\":\"Bamban\",\"province\":\"TAR\"},{\"name\":\"Camiling\",\"province\":\"TAR\"},{\"name\":\"Capas\",\"province\":\"TAR\"},{\"name\":\"Concepcion\",\"province\":\"TAR\"},{\"name\":\"Gerona\",\"province\":\"TAR\"},{\"name\":\"La Paz\",\"province\":\"TAR\"},{\"name\":\"Mayantoc\",\"province\":\"TAR\"},{\"name\":\"Moncada\",\"province\":\"TAR\"},{\"name\":\"Paniqui\",\"province\":\"TAR\"},{\"name\":\"Pura\",\"province\":\"TAR\"},{\"name\":\"Ramos\",\"province\":\"TAR\"},{\"name\":\"San Clemente\",\"province\":\"TAR\"},{\"name\":\"San Jose\",\"province\":\"TAR\"},{\"name\":\"San Manuel\",\"province\":\"TAR\"},{\"name\":\"Santa Ignacia\",\"province\":\"TAR\"},{\"name\":\"Tarlac\",\"province\":\"TAR\",\"city\":true},{\"name\":\"Victoria\",\"province\":\"TAR\"},{\"name\":\"Botolan\",\"province\":\"ZMB\"},{\"name\":\"Cabangan\",\"province\":\"ZMB\"},{\"name\":\"Candelaria\",\"province\":\"ZMB\"},{\"name\":\"Castillejos\",\"province\":\"ZMB\"},{\"name\":\"Iba\",\"province\":\"ZMB\"},{\"name\":\"Masinloc\",\"province\":\"ZMB\"},{\"name\":\"Olongapo\",\"province\":\"ZMB\",\"city\":true},{\"name\":\"Palauig\",\"province\":\"ZMB\"},{\"name\":\"San Antonio\",\"province\":\"ZMB\"},{\"name\":\"San Felipe\",\"province\":\"ZMB\"},{\"name\":\"San Marcelino\",\"province\":\"ZMB\"},{\"name\":\"San Narciso\",\"province\":\"ZMB\"},{\"name\":\"Santa Cruz\",\"province\":\"ZMB\"},{\"name\":\"Subic\",\"province\":\"ZMB\"},{\"name\":\"Agoncillo\",\"province\":\"BTG\"},{\"name\":\"Alitagtag\",\"province\":\"BTG\"},{\"name\":\"Balayan\",\"province\":\"BTG\"},{\"name\":\"Balete\",\"province\":\"BTG\"},{\"name\":\"Batangas\",\"province\":\"BTG\",\"city\":true},{\"name\":\"Bauan\",\"province\":\"BTG\"},{\"name\":\"Calaca\",\"province\":\"BTG\"},{\"name\":\"Calatagan\",\"province\":\"BTG\"},{\"name\":\"Cuenca\",\"province\":\"BTG\"},{\"name\":\"Ibaan\",\"province\":\"BTG\"},{\"name\":\"Laurel\",\"province\":\"BTG\"},{\"name\":\"Lemery\",\"province\":\"BTG\"},{\"name\":\"Lian\",\"province\":\"BTG\"},{\"name\":\"Lipa\",\"province\":\"BTG\",\"city\":true},{\"name\":\"Lobo\",\"province\":\"BTG\"},{\"name\":\"Mabini\",\"province\":\"BTG\"},{\"name\":\"Malvar\",\"province\":\"BTG\"},{\"name\":\"Mataasnakahoy\",\"province\":\"BTG\"},{\"name\":\"Nasugbu\",\"province\":\"BTG\"},{\"name\":\"Padre Garcia\",\"province\":\"BTG\"},{\"name\":\"Rosario\",\"province\":\"BTG\"},{\"name\":\"San Jose\",\"province\":\"BTG\"},{\"name\":\"San Juan\",\"province\":\"BTG\"},{\"name\":\"San Luis\",\"province\":\"BTG\"},{\"name\":\"San Nicolas\",\"province\":\"BTG\"},{\"name\":\"San Pascual\",\"province\":\"BTG\"},{\"name\":\"Santa Teresita\",\"province\":\"BTG\"},{\"name\":\"Santo Tomas\",\"province\":\"BTG\"},{\"name\":\"Taal\",\"province\":\"BTG\"},{\"name\":\"Talisay\",\"province\":\"BTG\"},{\"name\":\"Tanauan\",\"province\":\"BTG\",\"city\":true},{\"name\":\"Taysan\",\"province\":\"BTG\"},{\"name\":\"Tingloy\",\"province\":\"BTG\"},{\"name\":\"Tuy\",\"province\":\"BTG\"},{\"name\":\"Alfonso\",\"province\":\"CAV\"},{\"name\":\"Amadeo\",\"province\":\"CAV\"},{\"name\":\"Bacoor\",\"province\":\"CAV\",\"city\":true},{\"name\":\"Carmona\",\"province\":\"CAV\"},{\"name\":\"Cavite\",\"province\":\"CAV\",\"city\":true},{\"name\":\"Dasmariñas\",\"province\":\"CAV\",\"city\":true},{\"name\":\"General Mariano Alvarez\",\"province\":\"CAV\"},{\"name\":\"General Emilio Aguinaldo\",\"province\":\"CAV\"},{\"name\":\"General Trias\",\"province\":\"CAV\"},{\"name\":\"Imus\",\"province\":\"CAV\",\"city\":true},{\"name\":\"Indang\",\"province\":\"CAV\"},{\"name\":\"Kawit\",\"province\":\"CAV\"},{\"name\":\"Magallanes\",\"province\":\"CAV\"},{\"name\":\"Maragondon\",\"province\":\"CAV\"},{\"name\":\"Mendez\",\"province\":\"CAV\"},{\"name\":\"Naic\",\"province\":\"CAV\"},{\"name\":\"Noveleta\",\"province\":\"CAV\"},{\"name\":\"Rosario\",\"province\":\"CAV\"},{\"name\":\"Silang\",\"province\":\"CAV\"},{\"name\":\"Tagaytay\",\"province\":\"CAV\",\"city\":true},{\"name\":\"Tanza\",\"province\":\"CAV\"},{\"name\":\"Ternate\",\"province\":\"CAV\"},{\"name\":\"Trece Martires\",\"province\":\"CAV\",\"city\":true},{\"name\":\"Alaminos\",\"province\":\"LAG\"},{\"name\":\"Bay\",\"province\":\"LAG\"},{\"name\":\"Biñan\",\"province\":\"LAG\",\"city\":true},{\"name\":\"Cabuyao\",\"province\":\"LAG\",\"city\":true},{\"name\":\"Calamba\",\"province\":\"LAG\",\"city\":true},{\"name\":\"Calauan\",\"province\":\"LAG\"},{\"name\":\"Cavinti\",\"province\":\"LAG\"},{\"name\":\"Famy\",\"province\":\"LAG\"},{\"name\":\"Kalayaan\",\"province\":\"LAG\"},{\"name\":\"Liliw\",\"province\":\"LAG\"},{\"name\":\"Los Baños\",\"province\":\"LAG\"},{\"name\":\"Luisiana\",\"province\":\"LAG\"},{\"name\":\"Lumban\",\"province\":\"LAG\"},{\"name\":\"Mabitac\",\"province\":\"LAG\"},{\"name\":\"Magdalena\",\"province\":\"LAG\"},{\"name\":\"Majayjay\",\"province\":\"LAG\"},{\"name\":\"Nagcarlan\",\"province\":\"LAG\"},{\"name\":\"Paete\",\"province\":\"LAG\"},{\"name\":\"Pagsanjan\",\"province\":\"LAG\"},{\"name\":\"Pakil\",\"province\":\"LAG\"},{\"name\":\"Pangil\",\"province\":\"LAG\"},{\"name\":\"Pila\",\"province\":\"LAG\"},{\"name\":\"Rizal\",\"province\":\"LAG\"},{\"name\":\"San Pablo\",\"province\":\"LAG\",\"city\":true},{\"name\":\"San Pedro\",\"province\":\"LAG\",\"city\":true},{\"name\":\"Santa Cruz\",\"province\":\"LAG\"},{\"name\":\"Santa Maria\",\"province\":\"LAG\"},{\"name\":\"Santa Rosa\",\"province\":\"LAG\",\"city\":true},{\"name\":\"Siniloan\",\"province\":\"LAG\"},{\"name\":\"Victoria\",\"province\":\"LAG\"},{\"name\":\"Agdangan\",\"province\":\"QUE\"},{\"name\":\"Alabat\",\"province\":\"QUE\"},{\"name\":\"Atimonan\",\"province\":\"QUE\"},{\"name\":\"Buenavista\",\"province\":\"QUE\"},{\"name\":\"Burdeos\",\"province\":\"QUE\"},{\"name\":\"Calauag\",\"province\":\"QUE\"},{\"name\":\"Candelaria\",\"province\":\"QUE\"},{\"name\":\"Catanauan\",\"province\":\"QUE\"},{\"name\":\"Dolores\",\"province\":\"QUE\"},{\"name\":\"General Luna\",\"province\":\"QUE\"},{\"name\":\"General Nakar\",\"province\":\"QUE\"},{\"name\":\"Guinayangan\",\"province\":\"QUE\"},{\"name\":\"Gumaca\",\"province\":\"QUE\"},{\"name\":\"Infanta\",\"province\":\"QUE\"},{\"name\":\"Jomalig\",\"province\":\"QUE\"},{\"name\":\"Lopez\",\"province\":\"QUE\"},{\"name\":\"Lucban\",\"province\":\"QUE\"},{\"name\":\"Lucena\",\"province\":\"QUE\",\"city\":true},{\"name\":\"Macalelon\",\"province\":\"QUE\"},{\"name\":\"Mauban\",\"province\":\"QUE\"},{\"name\":\"Mulanay\",\"province\":\"QUE\"},{\"name\":\"Padre Burgos\",\"province\":\"QUE\"},{\"name\":\"Pagbilao\",\"province\":\"QUE\"},{\"name\":\"Panukulan\",\"province\":\"QUE\"},{\"name\":\"Patnanungan\",\"province\":\"QUE\"},{\"name\":\"Perez\",\"province\":\"QUE\"},{\"name\":\"Pitogo\",\"province\":\"QUE\"},{\"name\":\"Plaridel\",\"province\":\"QUE\"},{\"name\":\"Polillo\",\"province\":\"QUE\"},{\"name\":\"Quezon\",\"province\":\"QUE\"},{\"name\":\"Real\",\"province\":\"QUE\"},{\"name\":\"Sampaloc\",\"province\":\"QUE\"},{\"name\":\"San Andres\",\"province\":\"QUE\"},{\"name\":\"San Antonio\",\"province\":\"QUE\"},{\"name\":\"San Francisco\",\"province\":\"QUE\"},{\"name\":\"San Narciso\",\"province\":\"QUE\"},{\"name\":\"Sariaya\",\"province\":\"QUE\"},{\"name\":\"Tagkawayan\",\"province\":\"QUE\"},{\"name\":\"Tayabas\",\"province\":\"QUE\",\"city\":true},{\"name\":\"Tiaong\",\"province\":\"QUE\"},{\"name\":\"Unisan\",\"province\":\"QUE\"},{\"name\":\"Angono\",\"province\":\"RIZ\"},{\"name\":\"Antipolo\",\"province\":\"RIZ\",\"city\":true},{\"name\":\"Baras\",\"province\":\"RIZ\"},{\"name\":\"Binangonan\",\"province\":\"RIZ\"},{\"name\":\"Cainta\",\"province\":\"RIZ\"},{\"name\":\"Cardona\",\"province\":\"RIZ\"},{\"name\":\"Jalajala\",\"province\":\"RIZ\"},{\"name\":\"Morong\",\"province\":\"RIZ\"},{\"name\":\"Pililla\",\"province\":\"RIZ\"},{\"name\":\"Rodriguez\",\"province\":\"RIZ\"},{\"name\":\"San Mateo\",\"province\":\"RIZ\"},{\"name\":\"Tanay\",\"province\":\"RIZ\"},{\"name\":\"Taytay\",\"province\":\"RIZ\"},{\"name\":\"Teresa\",\"province\":\"RIZ\"},{\"name\":\"Boac\",\"province\":\"MAD\"},{\"name\":\"Buenavista\",\"province\":\"MAD\"},{\"name\":\"Gasan\",\"province\":\"MAD\"},{\"name\":\"Mogpog\",\"province\":\"MAD\"},{\"name\":\"Santa Cruz\",\"province\":\"MAD\"},{\"name\":\"Torrijos\",\"province\":\"MAD\"},{\"name\":\"Abra de Ilog\",\"province\":\"MDC\"},{\"name\":\"Calintaan\",\"province\":\"MDC\"},{\"name\":\"Looc\",\"province\":\"MDC\"},{\"name\":\"Lubang\",\"province\":\"MDC\"},{\"name\":\"Magsaysay\",\"province\":\"MDC\"},{\"name\":\"Mamburao\",\"province\":\"MDC\"},{\"name\":\"Paluan\",\"province\":\"MDC\"},{\"name\":\"Rizal\",\"province\":\"MDC\"},{\"name\":\"Sablayan\",\"province\":\"MDC\"},{\"name\":\"San Jose\",\"province\":\"MDC\"},{\"name\":\"Santa Cruz\",\"province\":\"MDC\"},{\"name\":\"Baco\",\"province\":\"MDR\"},{\"name\":\"Bansud\",\"province\":\"MDR\"},{\"name\":\"Bongabong\",\"province\":\"MDR\"},{\"name\":\"Bulalacao\",\"province\":\"MDR\"},{\"name\":\"Calapan\",\"province\":\"MDR\",\"city\":true},{\"name\":\"Gloria\",\"province\":\"MDR\"},{\"name\":\"Mansalay\",\"province\":\"MDR\"},{\"name\":\"Naujan\",\"province\":\"MDR\"},{\"name\":\"Pinamalayan\",\"province\":\"MDR\"},{\"name\":\"Pola\",\"province\":\"MDR\"},{\"name\":\"Puerto Galera\",\"province\":\"MDR\"},{\"name\":\"Roxas\",\"province\":\"MDR\"},{\"name\":\"San Teodoro\",\"province\":\"MDR\"},{\"name\":\"Socorro\",\"province\":\"MDR\"},{\"name\":\"Victoria\",\"province\":\"MDR\"},{\"name\":\"Aborlan\",\"province\":\"PLW\"},{\"name\":\"Agutaya\",\"province\":\"PLW\"},{\"name\":\"Araceli\",\"province\":\"PLW\"},{\"name\":\"Balabac\",\"province\":\"PLW\"},{\"name\":\"Bataraza\",\"province\":\"PLW\"},{\"name\":\"Brooke's Point\",\"province\":\"PLW\"},{\"name\":\"Busuanga\",\"province\":\"PLW\"},{\"name\":\"Cagayancillo\",\"province\":\"PLW\"},{\"name\":\"Coron\",\"province\":\"PLW\"},{\"name\":\"Culion\",\"province\":\"PLW\"},{\"name\":\"Cuyo\",\"province\":\"PLW\"},{\"name\":\"Dumaran\",\"province\":\"PLW\"},{\"name\":\"El Nido\",\"province\":\"PLW\"},{\"name\":\"Kalayaan\",\"province\":\"PLW\"},{\"name\":\"Linapacan\",\"province\":\"PLW\"},{\"name\":\"Magsaysay\",\"province\":\"PLW\"},{\"name\":\"Narra\",\"province\":\"PLW\"},{\"name\":\"Puerto Princesa\",\"province\":\"PLW\",\"city\":true},{\"name\":\"Quezon\",\"province\":\"PLW\"},{\"name\":\"Rizal\",\"province\":\"PLW\"},{\"name\":\"Roxas\",\"province\":\"PLW\"},{\"name\":\"San Vicente\",\"province\":\"PLW\"},{\"name\":\"Sofronio Española\",\"province\":\"PLW\"},{\"name\":\"Taytay\",\"province\":\"PLW\"},{\"name\":\"Alcantara\",\"province\":\"ROM\"},{\"name\":\"Banton\",\"province\":\"ROM\"},{\"name\":\"Cajidiocan\",\"province\":\"ROM\"},{\"name\":\"Calatrava\",\"province\":\"ROM\"},{\"name\":\"Concepcion\",\"province\":\"ROM\"},{\"name\":\"Corcuera\",\"province\":\"ROM\"},{\"name\":\"Ferrol\",\"province\":\"ROM\"},{\"name\":\"Looc\",\"province\":\"ROM\"},{\"name\":\"Magdiwang\",\"province\":\"ROM\"},{\"name\":\"Odiongan\",\"province\":\"ROM\"},{\"name\":\"Romblon\",\"province\":\"ROM\"},{\"name\":\"San Agustin\",\"province\":\"ROM\"},{\"name\":\"San Andres\",\"province\":\"ROM\"},{\"name\":\"San Fernando\",\"province\":\"ROM\"},{\"name\":\"San Jose\",\"province\":\"ROM\"},{\"name\":\"Santa Fe\",\"province\":\"ROM\"},{\"name\":\"Santa Maria\",\"province\":\"ROM\"},{\"name\":\"Bacacay\",\"province\":\"ALB\"},{\"name\":\"Camalig\",\"province\":\"ALB\"},{\"name\":\"Daraga\",\"province\":\"ALB\"},{\"name\":\"Guinobatan\",\"province\":\"ALB\"},{\"name\":\"Jovellar\",\"province\":\"ALB\"},{\"name\":\"Legazpi\",\"province\":\"ALB\",\"city\":true},{\"name\":\"Libon\",\"province\":\"ALB\"},{\"name\":\"Ligao\",\"province\":\"ALB\",\"city\":true},{\"name\":\"Malilipot\",\"province\":\"ALB\"},{\"name\":\"Malinao\",\"province\":\"ALB\"},{\"name\":\"Manito\",\"province\":\"ALB\"},{\"name\":\"Oas\",\"province\":\"ALB\"},{\"name\":\"Pio Duran\",\"province\":\"ALB\"},{\"name\":\"Polangui\",\"province\":\"ALB\"},{\"name\":\"Rapu-Rapu\",\"province\":\"ALB\"},{\"name\":\"Santo Domingo\",\"province\":\"ALB\"},{\"name\":\"Tabaco\",\"province\":\"ALB\",\"city\":true},{\"name\":\"Tiwi\",\"province\":\"ALB\"},{\"name\":\"Basud\",\"province\":\"CAN\"},{\"name\":\"Capalonga\",\"province\":\"CAN\"},{\"name\":\"Daet\",\"province\":\"CAN\"},{\"name\":\"Jose Panganiban\",\"province\":\"CAN\"},{\"name\":\"Labo\",\"province\":\"CAN\"},{\"name\":\"Mercedes\",\"province\":\"CAN\"},{\"name\":\"Paracale\",\"province\":\"CAN\"},{\"name\":\"San Lorenzo Ruiz\",\"province\":\"CAN\"},{\"name\":\"San Vicente\",\"province\":\"CAN\"},{\"name\":\"Santa Elena\",\"province\":\"CAN\"},{\"name\":\"Talisay\",\"province\":\"CAN\"},{\"name\":\"Vinzons\",\"province\":\"CAN\"},{\"name\":\"Baao\",\"province\":\"CAS\"},{\"name\":\"Balatan\",\"province\":\"CAS\"},{\"name\":\"Bato\",\"province\":\"CAS\"},{\"name\":\"Bombon\",\"province\":\"CAS\"},{\"name\":\"Buhi\",\"province\":\"CAS\"},{\"name\":\"Bula\",\"province\":\"CAS\"},{\"name\":\"Cabusao\",\"province\":\"CAS\"},{\"name\":\"Calabanga\",\"province\":\"CAS\"},{\"name\":\"Camaligan\",\"province\":\"CAS\"},{\"name\":\"Canaman\",\"province\":\"CAS\"},{\"name\":\"Caramoan\",\"province\":\"CAS\"},{\"name\":\"Del Gallego\",\"province\":\"CAS\"},{\"name\":\"Gainza\",\"province\":\"CAS\"},{\"name\":\"Garchitorena\",\"province\":\"CAS\"},{\"name\":\"Goa\",\"province\":\"CAS\"},{\"name\":\"Iriga\",\"province\":\"CAS\",\"city\":true},{\"name\":\"Lagonoy\",\"province\":\"CAS\"},{\"name\":\"Libmanan\",\"province\":\"CAS\"},{\"name\":\"Lupi\",\"province\":\"CAS\"},{\"name\":\"Magarao\",\"province\":\"CAS\"},{\"name\":\"Milaor\",\"province\":\"CAS\"},{\"name\":\"Minalabac\",\"province\":\"CAS\"},{\"name\":\"Nabua\",\"province\":\"CAS\"},{\"name\":\"Naga\",\"province\":\"CAS\",\"city\":true},{\"name\":\"Ocampo\",\"province\":\"CAS\"},{\"name\":\"Pamplona\",\"province\":\"CAS\"},{\"name\":\"Pasacao\",\"province\":\"CAS\"},{\"name\":\"Pili\",\"province\":\"CAS\"},{\"name\":\"Presentacion\",\"province\":\"CAS\"},{\"name\":\"Ragay\",\"province\":\"CAS\"},{\"name\":\"Sagñay\",\"province\":\"CAS\"},{\"name\":\"San Fernando\",\"province\":\"CAS\"},{\"name\":\"San Jose\",\"province\":\"CAS\"},{\"name\":\"Sipocot\",\"province\":\"CAS\"},{\"name\":\"Siruma\",\"province\":\"CAS\"},{\"name\":\"Tigaon\",\"province\":\"CAS\"},{\"name\":\"Tinambac\",\"province\":\"CAS\"},{\"name\":\"Bagamanoc\",\"province\":\"CAT\"},{\"name\":\"Baras\",\"province\":\"CAT\"},{\"name\":\"Bato\",\"province\":\"CAT\"},{\"name\":\"Caramoran\",\"province\":\"CAT\"},{\"name\":\"Gigmoto\",\"province\":\"CAT\"},{\"name\":\"Pandan\",\"province\":\"CAT\"},{\"name\":\"Panganiban\",\"province\":\"CAT\"},{\"name\":\"San Andres\",\"province\":\"CAT\"},{\"name\":\"San Miguel\",\"province\":\"CAT\"},{\"name\":\"Viga\",\"province\":\"CAT\"},{\"name\":\"Virac\",\"province\":\"CAT\"},{\"name\":\"Aroroy\",\"province\":\"MAS\"},{\"name\":\"Baleno\",\"province\":\"MAS\"},{\"name\":\"Balud\",\"province\":\"MAS\"},{\"name\":\"Batuan\",\"province\":\"MAS\"},{\"name\":\"Cataingan\",\"province\":\"MAS\"},{\"name\":\"Cawayan\",\"province\":\"MAS\"},{\"name\":\"Claveria\",\"province\":\"MAS\"},{\"name\":\"Dimasalang\",\"province\":\"MAS\"},{\"name\":\"Esperanza\",\"province\":\"MAS\"},{\"name\":\"Mandaon\",\"province\":\"MAS\"},{\"name\":\"Masbate\",\"province\":\"MAS\",\"city\":true},{\"name\":\"Milagros\",\"province\":\"MAS\"},{\"name\":\"Mobo\",\"province\":\"MAS\"},{\"name\":\"Monreal\",\"province\":\"MAS\"},{\"name\":\"Palanas\",\"province\":\"MAS\"},{\"name\":\"Pio V. Corpuz\",\"province\":\"MAS\"},{\"name\":\"Placer\",\"province\":\"MAS\"},{\"name\":\"San Fernando\",\"province\":\"MAS\"},{\"name\":\"San Jacinto\",\"province\":\"MAS\"},{\"name\":\"San Pascual\",\"province\":\"MAS\"},{\"name\":\"Uson\",\"province\":\"MAS\"},{\"name\":\"Barcelona\",\"province\":\"SOR\"},{\"name\":\"Bulan\",\"province\":\"SOR\"},{\"name\":\"Bulusan\",\"province\":\"SOR\"},{\"name\":\"Casiguran\",\"province\":\"SOR\"},{\"name\":\"Castilla\",\"province\":\"SOR\"},{\"name\":\"Donsol\",\"province\":\"SOR\"},{\"name\":\"Gubat\",\"province\":\"SOR\"},{\"name\":\"Irosin\",\"province\":\"SOR\"},{\"name\":\"Juban\",\"province\":\"SOR\"},{\"name\":\"Magallanes\",\"province\":\"SOR\"},{\"name\":\"Matnog\",\"province\":\"SOR\"},{\"name\":\"Pilar\",\"province\":\"SOR\"},{\"name\":\"Prieto Diaz\",\"province\":\"SOR\"},{\"name\":\"Santa Magdalena\",\"province\":\"SOR\"},{\"name\":\"Sorsogon\",\"province\":\"SOR\",\"city\":true},{\"name\":\"Altavas\",\"province\":\"AKL\"},{\"name\":\"Balete\",\"province\":\"AKL\"},{\"name\":\"Banga\",\"province\":\"AKL\"},{\"name\":\"Batan\",\"province\":\"AKL\"},{\"name\":\"Buruanga\",\"province\":\"AKL\"},{\"name\":\"Ibajay\",\"province\":\"AKL\"},{\"name\":\"Kalibo\",\"province\":\"AKL\"},{\"name\":\"Lezo\",\"province\":\"AKL\"},{\"name\":\"Libacao\",\"province\":\"AKL\"},{\"name\":\"Madalag\",\"province\":\"AKL\"},{\"name\":\"Makato\",\"province\":\"AKL\"},{\"name\":\"Malay\",\"province\":\"AKL\"},{\"name\":\"Malinao\",\"province\":\"AKL\"},{\"name\":\"Nabas\",\"province\":\"AKL\"},{\"name\":\"New Washington\",\"province\":\"AKL\"},{\"name\":\"Numancia\",\"province\":\"AKL\"},{\"name\":\"Tangalan\",\"province\":\"AKL\"},{\"name\":\"Anini-y\",\"province\":\"ANT\"},{\"name\":\"Barbaza\",\"province\":\"ANT\"},{\"name\":\"Belison\",\"province\":\"ANT\"},{\"name\":\"Bugasong\",\"province\":\"ANT\"},{\"name\":\"Caluya\",\"province\":\"ANT\"},{\"name\":\"Culasi\",\"province\":\"ANT\"},{\"name\":\"Hamtic\",\"province\":\"ANT\"},{\"name\":\"Laua-an\",\"province\":\"ANT\"},{\"name\":\"Libertad\",\"province\":\"ANT\"},{\"name\":\"Pandan\",\"province\":\"ANT\"},{\"name\":\"Patnongon\",\"province\":\"ANT\"},{\"name\":\"San Jose\",\"province\":\"ANT\"},{\"name\":\"San Remigio\",\"province\":\"ANT\"},{\"name\":\"Sebaste\",\"province\":\"ANT\"},{\"name\":\"Sibalom\",\"province\":\"ANT\"},{\"name\":\"Tibiao\",\"province\":\"ANT\"},{\"name\":\"Tobias Fornier\",\"province\":\"ANT\"},{\"name\":\"Valderrama\",\"province\":\"ANT\"},{\"name\":\"Cuartero\",\"province\":\"CAP\"},{\"name\":\"Dao\",\"province\":\"CAP\"},{\"name\":\"Dumalag\",\"province\":\"CAP\"},{\"name\":\"Dumarao\",\"province\":\"CAP\"},{\"name\":\"Ivisan\",\"province\":\"CAP\"},{\"name\":\"Jamindan\",\"province\":\"CAP\"},{\"name\":\"Maayon\",\"province\":\"CAP\"},{\"name\":\"Mambusao\",\"province\":\"CAP\"},{\"name\":\"Panay\",\"province\":\"CAP\"},{\"name\":\"Panitan\",\"province\":\"CAP\"},{\"name\":\"Pilar\",\"province\":\"CAP\"},{\"name\":\"Pontevedra\",\"province\":\"CAP\"},{\"name\":\"President Roxas\",\"province\":\"CAP\"},{\"name\":\"Roxas\",\"province\":\"CAP\",\"city\":true},{\"name\":\"Sapian\",\"province\":\"CAP\"},{\"name\":\"Sigma\",\"province\":\"CAP\"},{\"name\":\"Tapaz\",\"province\":\"CAP\"},{\"name\":\"Buenavista\",\"province\":\"GUI\"},{\"name\":\"Jordan\",\"province\":\"GUI\"},{\"name\":\"Nueva Valencia\",\"province\":\"GUI\"},{\"name\":\"San Lorenzo\",\"province\":\"GUI\"},{\"name\":\"Sibunag\",\"province\":\"GUI\"},{\"name\":\"Ajuy\",\"province\":\"ILI\"},{\"name\":\"Alimodian\",\"province\":\"ILI\"},{\"name\":\"Anilao\",\"province\":\"ILI\"},{\"name\":\"Badiangan\",\"province\":\"ILI\"},{\"name\":\"Balasan\",\"province\":\"ILI\"},{\"name\":\"Banate\",\"province\":\"ILI\"},{\"name\":\"Barotac Nuevo\",\"province\":\"ILI\"},{\"name\":\"Barotac Viejo\",\"province\":\"ILI\"},{\"name\":\"Batad\",\"province\":\"ILI\"},{\"name\":\"Bingawan\",\"province\":\"ILI\"},{\"name\":\"Cabatuan\",\"province\":\"ILI\"},{\"name\":\"Calinog\",\"province\":\"ILI\"},{\"name\":\"Carles\",\"province\":\"ILI\"},{\"name\":\"Concepcion\",\"province\":\"ILI\"},{\"name\":\"Dingle\",\"province\":\"ILI\"},{\"name\":\"Dueñas\",\"province\":\"ILI\"},{\"name\":\"Dumangas\",\"province\":\"ILI\"},{\"name\":\"Estancia\",\"province\":\"ILI\"},{\"name\":\"Guimbal\",\"province\":\"ILI\"},{\"name\":\"Igbaras\",\"province\":\"ILI\"},{\"name\":\"Iloilo\",\"province\":\"ILI\",\"city\":true},{\"name\":\"Janiuay\",\"province\":\"ILI\"},{\"name\":\"Lambunao\",\"province\":\"ILI\"},{\"name\":\"Leganes\",\"province\":\"ILI\"},{\"name\":\"Lemery\",\"province\":\"ILI\"},{\"name\":\"Leon\",\"province\":\"ILI\"},{\"name\":\"Maasin\",\"province\":\"ILI\"},{\"name\":\"Miagao\",\"province\":\"ILI\"},{\"name\":\"Mina\",\"province\":\"ILI\"},{\"name\":\"New Lucena\",\"province\":\"ILI\"},{\"name\":\"Oton\",\"province\":\"ILI\"},{\"name\":\"Passi\",\"province\":\"ILI\",\"city\":true},{\"name\":\"Pavia\",\"province\":\"ILI\"},{\"name\":\"Pototan\",\"province\":\"ILI\"},{\"name\":\"San Dionisio\",\"province\":\"ILI\"},{\"name\":\"San Enrique\",\"province\":\"ILI\"},{\"name\":\"San Joaquin\",\"province\":\"ILI\"},{\"name\":\"San Miguel\",\"province\":\"ILI\"},{\"name\":\"San Rafael\",\"province\":\"ILI\"},{\"name\":\"Santa Barbara\",\"province\":\"ILI\"},{\"name\":\"Sara\",\"province\":\"ILI\"},{\"name\":\"Tigbauan\",\"province\":\"ILI\"},{\"name\":\"Tubungan\",\"province\":\"ILI\"},{\"name\":\"Zarraga\",\"province\":\"ILI\"},{\"name\":\"Bacolod\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Bago\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Binalbagan\",\"province\":\"NEC\"},{\"name\":\"Cadiz\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Calatrava\",\"province\":\"NEC\"},{\"name\":\"Candoni\",\"province\":\"NEC\"},{\"name\":\"Cauayan\",\"province\":\"NEC\"},{\"name\":\"Enrique B. Magalona\",\"province\":\"NEC\"},{\"name\":\"Escalante\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Himamaylan\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Hinigaran\",\"province\":\"NEC\"},{\"name\":\"Hinoba-an\",\"province\":\"NEC\"},{\"name\":\"Ilog\",\"province\":\"NEC\"},{\"name\":\"Isabela\",\"province\":\"NEC\"},{\"name\":\"Kabankalan\",\"province\":\"NEC\",\"city\":true},{\"name\":\"La Carlota\",\"province\":\"NEC\",\"city\":true},{\"name\":\"La Castellana\",\"province\":\"NEC\"},{\"name\":\"Manapla\",\"province\":\"NEC\"},{\"name\":\"Moises Padilla\",\"province\":\"NEC\"},{\"name\":\"Murcia\",\"province\":\"NEC\"},{\"name\":\"Pontevedra\",\"province\":\"NEC\"},{\"name\":\"Pulupandan\",\"province\":\"NEC\"},{\"name\":\"Sagay\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Salvador Benedicto\",\"province\":\"NEC\"},{\"name\":\"San Carlos\",\"province\":\"NEC\",\"city\":true},{\"name\":\"San Enrique\",\"province\":\"NEC\"},{\"name\":\"Silay\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Sipalay\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Talisay\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Toboso\",\"province\":\"NEC\"},{\"name\":\"Valladolid\",\"province\":\"NEC\"},{\"name\":\"Victorias\",\"province\":\"NEC\",\"city\":true},{\"name\":\"Alburquerque\",\"province\":\"BOH\"},{\"name\":\"Alicia\",\"province\":\"BOH\"},{\"name\":\"Anda\",\"province\":\"BOH\"},{\"name\":\"Antequera\",\"province\":\"BOH\"},{\"name\":\"Baclayon\",\"province\":\"BOH\"},{\"name\":\"Balilihan\",\"province\":\"BOH\"},{\"name\":\"Batuan\",\"province\":\"BOH\"},{\"name\":\"Bien Unido\",\"province\":\"BOH\"},{\"name\":\"Bilar\",\"province\":\"BOH\"},{\"name\":\"Buenavista\",\"province\":\"BOH\"},{\"name\":\"Calape\",\"province\":\"BOH\"},{\"name\":\"Candijay\",\"province\":\"BOH\"},{\"name\":\"Carmen\",\"province\":\"BOH\"},{\"name\":\"Catigbian\",\"province\":\"BOH\"},{\"name\":\"Clarin\",\"province\":\"BOH\"},{\"name\":\"Corella\",\"province\":\"BOH\"},{\"name\":\"Cortes\",\"province\":\"BOH\"},{\"name\":\"Dagohoy\",\"province\":\"BOH\"},{\"name\":\"Danao\",\"province\":\"BOH\"},{\"name\":\"Dauis\",\"province\":\"BOH\"},{\"name\":\"Dimiao\",\"province\":\"BOH\"},{\"name\":\"Duero\",\"province\":\"BOH\"},{\"name\":\"Garcia Hernandez\",\"province\":\"BOH\"},{\"name\":\"Getafe\",\"province\":\"BOH\"},{\"name\":\"Guindulman\",\"province\":\"BOH\"},{\"name\":\"Inabanga\",\"province\":\"BOH\"},{\"name\":\"Jagna\",\"province\":\"BOH\"},{\"name\":\"Lila\",\"province\":\"BOH\"},{\"name\":\"Loay\",\"province\":\"BOH\"},{\"name\":\"Loboc\",\"province\":\"BOH\"},{\"name\":\"Loon\",\"province\":\"BOH\"},{\"name\":\"Mabini\",\"province\":\"BOH\"},{\"name\":\"Maribojoc\",\"province\":\"BOH\"},{\"name\":\"Panglao\",\"province\":\"BOH\"},{\"name\":\"Pilar\",\"province\":\"BOH\"},{\"name\":\"President Carlos P. Garcia\",\"province\":\"BOH\"},{\"name\":\"Sagbayan\",\"province\":\"BOH\"},{\"name\":\"San Isidro\",\"province\":\"BOH\"},{\"name\":\"San Miguel\",\"province\":\"BOH\"},{\"name\":\"Sevilla\",\"province\":\"BOH\"},{\"name\":\"Sierra Bullones\",\"province\":\"BOH\"},{\"name\":\"Sikatuna\",\"province\":\"BOH\"},{\"name\":\"Tagbilaran\",\"province\":\"BOH\",\"city\":true},{\"name\":\"Talibon\",\"province\":\"BOH\"},{\"name\":\"Trinidad\",\"province\":\"BOH\"},{\"name\":\"Tubigon\",\"province\":\"BOH\"},{\"name\":\"Ubay\",\"province\":\"BOH\"},{\"name\":\"Valencia\",\"province\":\"BOH\"},{\"name\":\"Alcantara\",\"province\":\"CEB\"},{\"name\":\"Alcoy\",\"province\":\"CEB\"},{\"name\":\"Alegria\",\"province\":\"CEB\"},{\"name\":\"Aloguinsan\",\"province\":\"CEB\"},{\"name\":\"Argao\",\"province\":\"CEB\"},{\"name\":\"Asturias\",\"province\":\"CEB\"},{\"name\":\"Badian\",\"province\":\"CEB\"},{\"name\":\"Balamban\",\"province\":\"CEB\"},{\"name\":\"Bantayan\",\"province\":\"CEB\"},{\"name\":\"Barili\",\"province\":\"CEB\"},{\"name\":\"Bogo\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Boljoon\",\"province\":\"CEB\"},{\"name\":\"Borbon\",\"province\":\"CEB\"},{\"name\":\"Carcar\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Carmen\",\"province\":\"CEB\"},{\"name\":\"Catmon\",\"province\":\"CEB\"},{\"name\":\"Cebu\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Compostela\",\"province\":\"CEB\"},{\"name\":\"Consolacion\",\"province\":\"CEB\"},{\"name\":\"Cordoba\",\"province\":\"CEB\"},{\"name\":\"Daanbantayan\",\"province\":\"CEB\"},{\"name\":\"Dalaguete\",\"province\":\"CEB\"},{\"name\":\"Danao\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Dumanjug\",\"province\":\"CEB\"},{\"name\":\"Ginatilan\",\"province\":\"CEB\"},{\"name\":\"Lapu-Lapu\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Liloan\",\"province\":\"CEB\"},{\"name\":\"Madridejos\",\"province\":\"CEB\"},{\"name\":\"Malabuyoc\",\"province\":\"CEB\"},{\"name\":\"Mandaue\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Medellin\",\"province\":\"CEB\"},{\"name\":\"Minglanilla\",\"province\":\"CEB\"},{\"name\":\"Moalboal\",\"province\":\"CEB\"},{\"name\":\"Naga\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Oslob\",\"province\":\"CEB\"},{\"name\":\"Pilar\",\"province\":\"CEB\"},{\"name\":\"Pinamungajan\",\"province\":\"CEB\"},{\"name\":\"Poro\",\"province\":\"CEB\"},{\"name\":\"Ronda\",\"province\":\"CEB\"},{\"name\":\"Samboan\",\"province\":\"CEB\"},{\"name\":\"San Fernando\",\"province\":\"CEB\"},{\"name\":\"San Francisco\",\"province\":\"CEB\"},{\"name\":\"San Remigio\",\"province\":\"CEB\"},{\"name\":\"Santa Fe\",\"province\":\"CEB\"},{\"name\":\"Santander\",\"province\":\"CEB\"},{\"name\":\"Sibonga\",\"province\":\"CEB\"},{\"name\":\"Sogod\",\"province\":\"CEB\"},{\"name\":\"Tabogon\",\"province\":\"CEB\"},{\"name\":\"Tabuelan\",\"province\":\"CEB\"},{\"name\":\"Talisay\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Toledo\",\"province\":\"CEB\",\"city\":true},{\"name\":\"Tuburan\",\"province\":\"CEB\"},{\"name\":\"Tudela\",\"province\":\"CEB\"},{\"name\":\"Amlan\",\"province\":\"NER\"},{\"name\":\"Ayungon\",\"province\":\"NER\"},{\"name\":\"Bacong\",\"province\":\"NER\"},{\"name\":\"Bais\",\"province\":\"NER\",\"city\":true},{\"name\":\"Basay\",\"province\":\"NER\"},{\"name\":\"Bayawan\",\"province\":\"NER\",\"city\":true},{\"name\":\"Bindoy\",\"province\":\"NER\"},{\"name\":\"Canlaon\",\"province\":\"NER\",\"city\":true},{\"name\":\"Dauin\",\"province\":\"NER\"},{\"name\":\"Dumaguete\",\"province\":\"NER\",\"city\":true},{\"name\":\"Guihulngan\",\"province\":\"NER\",\"city\":true},{\"name\":\"Jimalalud\",\"province\":\"NER\"},{\"name\":\"La Libertad\",\"province\":\"NER\"},{\"name\":\"Mabinay\",\"province\":\"NER\"},{\"name\":\"Manjuyod\",\"province\":\"NER\"},{\"name\":\"Pamplona\",\"province\":\"NER\"},{\"name\":\"San Jose\",\"province\":\"NER\"},{\"name\":\"Santa Catalina\",\"province\":\"NER\"},{\"name\":\"Siaton\",\"province\":\"NER\"},{\"name\":\"Sibulan\",\"province\":\"NER\"},{\"name\":\"Tanjay\",\"province\":\"NER\",\"city\":true},{\"name\":\"Tayasan\",\"province\":\"NER\"},{\"name\":\"Valencia\",\"province\":\"NER\"},{\"name\":\"Vallehermoso\",\"province\":\"NER\"},{\"name\":\"Zamboanguita\",\"province\":\"NER\"},{\"name\":\"Enrique Villanueva\",\"province\":\"SIG\"},{\"name\":\"Larena\",\"province\":\"SIG\"},{\"name\":\"Lazi\",\"province\":\"SIG\"},{\"name\":\"Maria\",\"province\":\"SIG\"},{\"name\":\"San Juan\",\"province\":\"SIG\"},{\"name\":\"Siquijor\",\"province\":\"SIG\"},{\"name\":\"Almeria\",\"province\":\"BIL\"},{\"name\":\"Biliran\",\"province\":\"BIL\"},{\"name\":\"Cabucgayan\",\"province\":\"BIL\"},{\"name\":\"Caibiran\",\"province\":\"BIL\"},{\"name\":\"Culaba\",\"province\":\"BIL\"},{\"name\":\"Kawayan\",\"province\":\"BIL\"},{\"name\":\"Maripipi\",\"province\":\"BIL\"},{\"name\":\"Naval\",\"province\":\"BIL\"},{\"name\":\"Arteche\",\"province\":\"EAS\"},{\"name\":\"Balangiga\",\"province\":\"EAS\"},{\"name\":\"Balangkayan\",\"province\":\"EAS\"},{\"name\":\"Borongan\",\"province\":\"EAS\",\"city\":true},{\"name\":\"Can-avid\",\"province\":\"EAS\"},{\"name\":\"Dolores\",\"province\":\"EAS\"},{\"name\":\"General MacArthur\",\"province\":\"EAS\"},{\"name\":\"Giporlos\",\"province\":\"EAS\"},{\"name\":\"Guiuan\",\"province\":\"EAS\"},{\"name\":\"Hernani\",\"province\":\"EAS\"},{\"name\":\"Jipapad\",\"province\":\"EAS\"},{\"name\":\"Lawaan\",\"province\":\"EAS\"},{\"name\":\"Llorente\",\"province\":\"EAS\"},{\"name\":\"Maslog\",\"province\":\"EAS\"},{\"name\":\"Maydolong\",\"province\":\"EAS\"},{\"name\":\"Mercedes\",\"province\":\"EAS\"},{\"name\":\"Oras\",\"province\":\"EAS\"},{\"name\":\"Quinapondan\",\"province\":\"EAS\"},{\"name\":\"Salcedo\",\"province\":\"EAS\"},{\"name\":\"San Julian\",\"province\":\"EAS\"},{\"name\":\"San Policarpo\",\"province\":\"EAS\"},{\"name\":\"Sulat\",\"province\":\"EAS\"},{\"name\":\"Taft\",\"province\":\"EAS\"},{\"name\":\"Abuyog\",\"province\":\"LEY\"},{\"name\":\"Alangalang\",\"province\":\"LEY\"},{\"name\":\"Albuera\",\"province\":\"LEY\"},{\"name\":\"Babatngon\",\"province\":\"LEY\"},{\"name\":\"Barugo\",\"province\":\"LEY\"},{\"name\":\"Bato\",\"province\":\"LEY\"},{\"name\":\"Baybay\",\"province\":\"LEY\",\"city\":true},{\"name\":\"Burauen\",\"province\":\"LEY\"},{\"name\":\"Calubian\",\"province\":\"LEY\"},{\"name\":\"Capoocan\",\"province\":\"LEY\"},{\"name\":\"Carigara\",\"province\":\"LEY\"},{\"name\":\"Dagami\",\"province\":\"LEY\"},{\"name\":\"Dulag\",\"province\":\"LEY\"},{\"name\":\"Hilongos\",\"province\":\"LEY\"},{\"name\":\"Hindang\",\"province\":\"LEY\"},{\"name\":\"Inopacan\",\"province\":\"LEY\"},{\"name\":\"Isabel\",\"province\":\"LEY\"},{\"name\":\"Jaro\",\"province\":\"LEY\"},{\"name\":\"Javier\",\"province\":\"LEY\"},{\"name\":\"Julita\",\"province\":\"LEY\"},{\"name\":\"Kananga\",\"province\":\"LEY\"},{\"name\":\"La Paz\",\"province\":\"LEY\"},{\"name\":\"Leyte\",\"province\":\"LEY\"},{\"name\":\"MacArthur\",\"province\":\"LEY\"},{\"name\":\"Mahaplag\",\"province\":\"LEY\"},{\"name\":\"Matag-ob\",\"province\":\"LEY\"},{\"name\":\"Matalom\",\"province\":\"LEY\"},{\"name\":\"Mayorga\",\"province\":\"LEY\"},{\"name\":\"Merida\",\"province\":\"LEY\"},{\"name\":\"Ormoc\",\"province\":\"LEY\",\"city\":true},{\"name\":\"Palo\",\"province\":\"LEY\"},{\"name\":\"Palompon\",\"province\":\"LEY\"},{\"name\":\"Pastrana\",\"province\":\"LEY\"},{\"name\":\"San Isidro\",\"province\":\"LEY\"},{\"name\":\"San Miguel\",\"province\":\"LEY\"},{\"name\":\"Santa Fe\",\"province\":\"LEY\"},{\"name\":\"Tabango\",\"province\":\"LEY\"},{\"name\":\"Tabontabon\",\"province\":\"LEY\"},{\"name\":\"Tacloban\",\"province\":\"LEY\",\"city\":true},{\"name\":\"Tanauan\",\"province\":\"LEY\"},{\"name\":\"Tolosa\",\"province\":\"LEY\"},{\"name\":\"Tunga\",\"province\":\"LEY\"},{\"name\":\"Villaba\",\"province\":\"LEY\"},{\"name\":\"Allen\",\"province\":\"NSA\"},{\"name\":\"Biri\",\"province\":\"NSA\"},{\"name\":\"Bobon\",\"province\":\"NSA\"},{\"name\":\"Capul\",\"province\":\"NSA\"},{\"name\":\"Catarman\",\"province\":\"NSA\"},{\"name\":\"Catubig\",\"province\":\"NSA\"},{\"name\":\"Gamay\",\"province\":\"NSA\"},{\"name\":\"Laoang\",\"province\":\"NSA\"},{\"name\":\"Lapinig\",\"province\":\"NSA\"},{\"name\":\"Las Navas\",\"province\":\"NSA\"},{\"name\":\"Lavezares\",\"province\":\"NSA\"},{\"name\":\"Lope de Vega\",\"province\":\"NSA\"},{\"name\":\"Mapanas\",\"province\":\"NSA\"},{\"name\":\"Mondragon\",\"province\":\"NSA\"},{\"name\":\"Palapag\",\"province\":\"NSA\"},{\"name\":\"Pambujan\",\"province\":\"NSA\"},{\"name\":\"Rosario\",\"province\":\"NSA\"},{\"name\":\"San Antonio\",\"province\":\"NSA\"},{\"name\":\"San Isidro\",\"province\":\"NSA\"},{\"name\":\"San Jose\",\"province\":\"NSA\"},{\"name\":\"San Roque\",\"province\":\"NSA\"},{\"name\":\"San Vicente\",\"province\":\"NSA\"},{\"name\":\"Silvino Lobos\",\"province\":\"NSA\"},{\"name\":\"Victoria\",\"province\":\"NSA\"},{\"name\":\"Almagro\",\"province\":\"WSA\"},{\"name\":\"Basey\",\"province\":\"WSA\"},{\"name\":\"Calbayog\",\"province\":\"WSA\",\"city\":true},{\"name\":\"Calbiga\",\"province\":\"WSA\"},{\"name\":\"Catbalogan\",\"province\":\"WSA\",\"city\":true},{\"name\":\"Daram\",\"province\":\"WSA\"},{\"name\":\"Gandara\",\"province\":\"WSA\"},{\"name\":\"Hinabangan\",\"province\":\"WSA\"},{\"name\":\"Jiabong\",\"province\":\"WSA\"},{\"name\":\"Marabut\",\"province\":\"WSA\"},{\"name\":\"Matuguinao\",\"province\":\"WSA\"},{\"name\":\"Motiong\",\"province\":\"WSA\"},{\"name\":\"Pagsanghan\",\"province\":\"WSA\"},{\"name\":\"Paranas\",\"province\":\"WSA\"},{\"name\":\"Pinabacdao\",\"province\":\"WSA\"},{\"name\":\"San Jorge\",\"province\":\"WSA\"},{\"name\":\"San Jose de Buan\",\"province\":\"WSA\"},{\"name\":\"San Sebastian\",\"province\":\"WSA\"},{\"name\":\"Santa Margarita\",\"province\":\"WSA\"},{\"name\":\"Santa Rita\",\"province\":\"WSA\"},{\"name\":\"Santo Niño\",\"province\":\"WSA\"},{\"name\":\"Tagapul-an\",\"province\":\"WSA\"},{\"name\":\"Talalora\",\"province\":\"WSA\"},{\"name\":\"Tarangnan\",\"province\":\"WSA\"},{\"name\":\"Villareal\",\"province\":\"WSA\"},{\"name\":\"Zumarraga\",\"province\":\"WSA\"},{\"name\":\"Anahawan\",\"province\":\"SLE\"},{\"name\":\"Bontoc\",\"province\":\"SLE\"},{\"name\":\"Hinunangan\",\"province\":\"SLE\"},{\"name\":\"Hinundayan\",\"province\":\"SLE\"},{\"name\":\"Libagon\",\"province\":\"SLE\"},{\"name\":\"Liloan\",\"province\":\"SLE\"},{\"name\":\"Limasawa\",\"province\":\"SLE\"},{\"name\":\"Maasin\",\"province\":\"SLE\",\"city\":true},{\"name\":\"Macrohon\",\"province\":\"SLE\"},{\"name\":\"Malitbog\",\"province\":\"SLE\"},{\"name\":\"Padre Burgos\",\"province\":\"SLE\"},{\"name\":\"Pintuyan\",\"province\":\"SLE\"},{\"name\":\"Saint Bernard\",\"province\":\"SLE\"},{\"name\":\"San Francisco\",\"province\":\"SLE\"},{\"name\":\"San Juan\",\"province\":\"SLE\"},{\"name\":\"San Ricardo\",\"province\":\"SLE\"},{\"name\":\"Silago\",\"province\":\"SLE\"},{\"name\":\"Sogod\",\"province\":\"SLE\"},{\"name\":\"Tomas Oppus\",\"province\":\"SLE\"},{\"name\":\"Baliguian\",\"province\":\"ZAN\"},{\"name\":\"Dapitan\",\"province\":\"ZAN\",\"city\":true},{\"name\":\"Dipolog\",\"province\":\"ZAN\",\"city\":true},{\"name\":\"Godod\",\"province\":\"ZAN\"},{\"name\":\"Gutalac\",\"province\":\"ZAN\"},{\"name\":\"Jose Dalman\",\"province\":\"ZAN\"},{\"name\":\"Kalawit\",\"province\":\"ZAN\"},{\"name\":\"Katipunan\",\"province\":\"ZAN\"},{\"name\":\"La Libertad\",\"province\":\"ZAN\"},{\"name\":\"Labason\",\"province\":\"ZAN\"},{\"name\":\"Leon B. Postigo\",\"province\":\"ZAN\"},{\"name\":\"Liloy\",\"province\":\"ZAN\"},{\"name\":\"Manukan\",\"province\":\"ZAN\"},{\"name\":\"Mutia\",\"province\":\"ZAN\"},{\"name\":\"Piñan\",\"province\":\"ZAN\"},{\"name\":\"Polanco\",\"province\":\"ZAN\"},{\"name\":\"President Manuel A. Roxas\",\"province\":\"ZAN\"},{\"name\":\"Rizal\",\"province\":\"ZAN\"},{\"name\":\"Salug\",\"province\":\"ZAN\"},{\"name\":\"Sergio Osmeña Sr.\",\"province\":\"ZAN\"},{\"name\":\"Siayan\",\"province\":\"ZAN\"},{\"name\":\"Sibuco\",\"province\":\"ZAN\"},{\"name\":\"Sibutad\",\"province\":\"ZAN\"},{\"name\":\"Sindangan\",\"province\":\"ZAN\"},{\"name\":\"Siocon\",\"province\":\"ZAN\"},{\"name\":\"Sirawai\",\"province\":\"ZAN\"},{\"name\":\"Tampilisan\",\"province\":\"ZAN\"},{\"name\":\"Aurora\",\"province\":\"ZAS\"},{\"name\":\"Bayog\",\"province\":\"ZAS\"},{\"name\":\"Dimataling\",\"province\":\"ZAS\"},{\"name\":\"Dinas\",\"province\":\"ZAS\"},{\"name\":\"Dumalinao\",\"province\":\"ZAS\"},{\"name\":\"Dumingag\",\"province\":\"ZAS\"},{\"name\":\"Guipos\",\"province\":\"ZAS\"},{\"name\":\"Josefina\",\"province\":\"ZAS\"},{\"name\":\"Kumalarang\",\"province\":\"ZAS\"},{\"name\":\"Labangan\",\"province\":\"ZAS\"},{\"name\":\"Lakewood\",\"province\":\"ZAS\"},{\"name\":\"Lapuyan\",\"province\":\"ZAS\"},{\"name\":\"Mahayag\",\"province\":\"ZAS\"},{\"name\":\"Margosatubig\",\"province\":\"ZAS\"},{\"name\":\"Midsalip\",\"province\":\"ZAS\"},{\"name\":\"Molave\",\"province\":\"ZAS\"},{\"name\":\"Pagadian\",\"province\":\"ZAS\",\"city\":true},{\"name\":\"Pitogo\",\"province\":\"ZAS\"},{\"name\":\"Ramon Magsaysay\",\"province\":\"ZAS\"},{\"name\":\"San Miguel\",\"province\":\"ZAS\"},{\"name\":\"San Pablo\",\"province\":\"ZAS\"},{\"name\":\"Sominot\",\"province\":\"ZAS\"},{\"name\":\"Tabina\",\"province\":\"ZAS\"},{\"name\":\"Tambulig\",\"province\":\"ZAS\"},{\"name\":\"Tigbao\",\"province\":\"ZAS\"},{\"name\":\"Tukuran\",\"province\":\"ZAS\"},{\"name\":\"Vincenzo A. Sagun\",\"province\":\"ZAS\"},{\"name\":\"Zamboanga\",\"province\":\"ZAS\",\"city\":true},{\"name\":\"Alicia\",\"province\":\"ZSI\"},{\"name\":\"Buug\",\"province\":\"ZSI\"},{\"name\":\"Diplahan\",\"province\":\"ZSI\"},{\"name\":\"Imelda\",\"province\":\"ZSI\"},{\"name\":\"Ipil\",\"province\":\"ZSI\"},{\"name\":\"Kabasalan\",\"province\":\"ZSI\"},{\"name\":\"Mabuhay\",\"province\":\"ZSI\"},{\"name\":\"Malangas\",\"province\":\"ZSI\"},{\"name\":\"Naga\",\"province\":\"ZSI\"},{\"name\":\"Olutanga\",\"province\":\"ZSI\"},{\"name\":\"Payao\",\"province\":\"ZSI\"},{\"name\":\"Roseller Lim\",\"province\":\"ZSI\"},{\"name\":\"Siay\",\"province\":\"ZSI\"},{\"name\":\"Talusan\",\"province\":\"ZSI\"},{\"name\":\"Titay\",\"province\":\"ZSI\"},{\"name\":\"Tungawan\",\"province\":\"ZSI\"},{\"name\":\"Baungon\",\"province\":\"BUK\"},{\"name\":\"Cabanglasan\",\"province\":\"BUK\"},{\"name\":\"Damulog\",\"province\":\"BUK\"},{\"name\":\"Dangcagan\",\"province\":\"BUK\"},{\"name\":\"Don Carlos\",\"province\":\"BUK\"},{\"name\":\"Impasugong\",\"province\":\"BUK\"},{\"name\":\"Kadingilan\",\"province\":\"BUK\"},{\"name\":\"Kalilangan\",\"province\":\"BUK\"},{\"name\":\"Kibawe\",\"province\":\"BUK\"},{\"name\":\"Kitaotao\",\"province\":\"BUK\"},{\"name\":\"Lantapan\",\"province\":\"BUK\"},{\"name\":\"Libona\",\"province\":\"BUK\"},{\"name\":\"Malaybalay\",\"province\":\"BUK\",\"city\":true},{\"name\":\"Malitbog\",\"province\":\"BUK\"},{\"name\":\"Manolo Fortich\",\"province\":\"BUK\"},{\"name\":\"Maramag\",\"province\":\"BUK\"},{\"name\":\"Pangantucan\",\"province\":\"BUK\"},{\"name\":\"Quezon\",\"province\":\"BUK\"},{\"name\":\"San Fernando\",\"province\":\"BUK\"},{\"name\":\"Sumilao\",\"province\":\"BUK\"},{\"name\":\"Talakag\",\"province\":\"BUK\"},{\"name\":\"Valencia\",\"province\":\"BUK\",\"city\":true},{\"name\":\"Catarman\",\"province\":\"CAM\"},{\"name\":\"Guinsiliban\",\"province\":\"CAM\"},{\"name\":\"Mahinog\",\"province\":\"CAM\"},{\"name\":\"Mambajao\",\"province\":\"CAM\"},{\"name\":\"Sagay\",\"province\":\"CAM\"},{\"name\":\"Bacolod\",\"province\":\"LAN\"},{\"name\":\"Baloi\",\"province\":\"LAN\"},{\"name\":\"Baroy\",\"province\":\"LAN\"},{\"name\":\"Iligan\",\"province\":\"LAN\",\"city\":true},{\"name\":\"Kapatagan\",\"province\":\"LAN\"},{\"name\":\"Kauswagan\",\"province\":\"LAN\"},{\"name\":\"Kolambugan\",\"province\":\"LAN\"},{\"name\":\"Lala\",\"province\":\"LAN\"},{\"name\":\"Linamon\",\"province\":\"LAN\"},{\"name\":\"Magsaysay\",\"province\":\"LAN\"},{\"name\":\"Maigo\",\"province\":\"LAN\"},{\"name\":\"Matungao\",\"province\":\"LAN\"},{\"name\":\"Munai\",\"province\":\"LAN\"},{\"name\":\"Nunungan\",\"province\":\"LAN\"},{\"name\":\"Pantao Ragat\",\"province\":\"LAN\"},{\"name\":\"Pantar\",\"province\":\"LAN\"},{\"name\":\"Poona Piagapo\",\"province\":\"LAN\"},{\"name\":\"Salvador\",\"province\":\"LAN\"},{\"name\":\"Sapad\",\"province\":\"LAN\"},{\"name\":\"Sultan Naga Dimaporo\",\"province\":\"LAN\"},{\"name\":\"Tagoloan\",\"province\":\"LAN\"},{\"name\":\"Tangcal\",\"province\":\"LAN\"},{\"name\":\"Tubod\",\"province\":\"LAN\"},{\"name\":\"Aloran\",\"province\":\"MSC\"},{\"name\":\"Baliangao\",\"province\":\"MSC\"},{\"name\":\"Bonifacio\",\"province\":\"MSC\"},{\"name\":\"Calamba\",\"province\":\"MSC\"},{\"name\":\"Clarin\",\"province\":\"MSC\"},{\"name\":\"Concepcion\",\"province\":\"MSC\"},{\"name\":\"Don Victoriano Chiongbian\",\"province\":\"MSC\"},{\"name\":\"Jimenez\",\"province\":\"MSC\"},{\"name\":\"Lopez Jaena\",\"province\":\"MSC\"},{\"name\":\"Oroquieta\",\"province\":\"MSC\",\"city\":true},{\"name\":\"Ozamiz\",\"province\":\"MSC\",\"city\":true},{\"name\":\"Panaon\",\"province\":\"MSC\"},{\"name\":\"Plaridel\",\"province\":\"MSC\"},{\"name\":\"Sapang Dalaga\",\"province\":\"MSC\"},{\"name\":\"Sinacaban\",\"province\":\"MSC\"},{\"name\":\"Tangub\",\"province\":\"MSC\",\"city\":true},{\"name\":\"Tudela\",\"province\":\"MSC\"},{\"name\":\"Alubijid\",\"province\":\"MSR\"},{\"name\":\"Balingasag\",\"province\":\"MSR\"},{\"name\":\"Balingoan\",\"province\":\"MSR\"},{\"name\":\"Binuangan\",\"province\":\"MSR\"},{\"name\":\"Cagayan de Oro\",\"province\":\"MSR\",\"city\":true},{\"name\":\"Claveria\",\"province\":\"MSR\"},{\"name\":\"El Salvador\",\"province\":\"MSR\",\"city\":true},{\"name\":\"Gingoog\",\"province\":\"MSR\",\"city\":true},{\"name\":\"Gitagum\",\"province\":\"MSR\"},{\"name\":\"Initao\",\"province\":\"MSR\"},{\"name\":\"Jasaan\",\"province\":\"MSR\"},{\"name\":\"Kinoguitan\",\"province\":\"MSR\"},{\"name\":\"Lagonglong\",\"province\":\"MSR\"},{\"name\":\"Laguindingan\",\"province\":\"MSR\"},{\"name\":\"Libertad\",\"province\":\"MSR\"},{\"name\":\"Lugait\",\"province\":\"MSR\"},{\"name\":\"Magsaysay\",\"province\":\"MSR\"},{\"name\":\"Manticao\",\"province\":\"MSR\"},{\"name\":\"Medina\",\"province\":\"MSR\"},{\"name\":\"Naawan\",\"province\":\"MSR\"},{\"name\":\"Opol\",\"province\":\"MSR\"},{\"name\":\"Salay\",\"province\":\"MSR\"},{\"name\":\"Sugbongcogon\",\"province\":\"MSR\"},{\"name\":\"Tagoloan\",\"province\":\"MSR\"},{\"name\":\"Talisayan\",\"province\":\"MSR\"},{\"name\":\"Villanueva\",\"province\":\"MSR\"},{\"name\":\"Compostela\",\"province\":\"COM\"},{\"name\":\"Laak\",\"province\":\"COM\"},{\"name\":\"Mabini\",\"province\":\"COM\"},{\"name\":\"Maco\",\"province\":\"COM\"},{\"name\":\"Maragusan\",\"province\":\"COM\"},{\"name\":\"Mawab\",\"province\":\"COM\"},{\"name\":\"Monkayo\",\"province\":\"COM\"},{\"name\":\"Montevista\",\"province\":\"COM\"},{\"name\":\"Nabunturan\",\"province\":\"COM\"},{\"name\":\"New Bataan\",\"province\":\"COM\"},{\"name\":\"Pantukan\",\"province\":\"COM\"},{\"name\":\"Asuncion\",\"province\":\"DAV\"},{\"name\":\"Braulio E. Dujali\",\"province\":\"DAV\"},{\"name\":\"Carmen\",\"province\":\"DAV\"},{\"name\":\"Kapalong\",\"province\":\"DAV\"},{\"name\":\"New Corella\",\"province\":\"DAV\"},{\"name\":\"Panabo\",\"province\":\"DAV\",\"city\":true},{\"name\":\"Samal\",\"province\":\"DAV\",\"city\":true},{\"name\":\"San Isidro\",\"province\":\"DAV\"},{\"name\":\"Santo Tomas\",\"province\":\"DAV\"},{\"name\":\"Tagum\",\"province\":\"DAV\",\"city\":true},{\"name\":\"Talaingod\",\"province\":\"DAV\"},{\"name\":\"Bansalan\",\"province\":\"DAS\"},{\"name\":\"Davao\",\"province\":\"DAS\",\"city\":true},{\"name\":\"Digos\",\"province\":\"DAS\",\"city\":true},{\"name\":\"Hagonoy\",\"province\":\"DAS\"},{\"name\":\"Kiblawan\",\"province\":\"DAS\"},{\"name\":\"Magsaysay\",\"province\":\"DAS\"},{\"name\":\"Malalag\",\"province\":\"DAS\"},{\"name\":\"Matanao\",\"province\":\"DAS\"},{\"name\":\"Padada\",\"province\":\"DAS\"},{\"name\":\"Santa Cruz\",\"province\":\"DAS\"},{\"name\":\"Sulop\",\"province\":\"DAS\"},{\"name\":\"Don Marcelino\",\"province\":\"DAC\"},{\"name\":\"Jose Abad Santos\",\"province\":\"DAC\"},{\"name\":\"Malita\",\"province\":\"DAC\"},{\"name\":\"Santa Maria\",\"province\":\"DAC\"},{\"name\":\"Sarangani\",\"province\":\"DAC\"},{\"name\":\"Baganga\",\"province\":\"DAO\"},{\"name\":\"Banaybanay\",\"province\":\"DAO\"},{\"name\":\"Boston\",\"province\":\"DAO\"},{\"name\":\"Caraga\",\"province\":\"DAO\"},{\"name\":\"Cateel\",\"province\":\"DAO\"},{\"name\":\"Governor Generoso\",\"province\":\"DAO\"},{\"name\":\"Lupon\",\"province\":\"DAO\"},{\"name\":\"Manay\",\"province\":\"DAO\"},{\"name\":\"Mati\",\"province\":\"DAO\",\"city\":true},{\"name\":\"San Isidro\",\"province\":\"DAO\"},{\"name\":\"Tarragona\",\"province\":\"DAO\"},{\"name\":\"Alamada\",\"province\":\"NCO\"},{\"name\":\"Aleosan\",\"province\":\"NCO\"},{\"name\":\"Antipas\",\"province\":\"NCO\"},{\"name\":\"Arakan\",\"province\":\"NCO\"},{\"name\":\"Banisilan\",\"province\":\"NCO\"},{\"name\":\"Carmen\",\"province\":\"NCO\"},{\"name\":\"Kabacan\",\"province\":\"NCO\"},{\"name\":\"Kidapawan\",\"province\":\"NCO\",\"city\":true},{\"name\":\"Libungan\",\"province\":\"NCO\"},{\"name\":\"M'lang\",\"province\":\"NCO\"},{\"name\":\"Magpet\",\"province\":\"NCO\"},{\"name\":\"Makilala\",\"province\":\"NCO\"},{\"name\":\"Matalam\",\"province\":\"NCO\"},{\"name\":\"Midsayap\",\"province\":\"NCO\"},{\"name\":\"Pigcawayan\",\"province\":\"NCO\"},{\"name\":\"Pikit\",\"province\":\"NCO\"},{\"name\":\"President Roxas\",\"province\":\"NCO\"},{\"name\":\"Tulunan\",\"province\":\"NCO\"},{\"name\":\"Alabel\",\"province\":\"SAR\"},{\"name\":\"Glan\",\"province\":\"SAR\"},{\"name\":\"Kiamba\",\"province\":\"SAR\"},{\"name\":\"Maasim\",\"province\":\"SAR\"},{\"name\":\"Maitum\",\"province\":\"SAR\"},{\"name\":\"Malapatan\",\"province\":\"SAR\"},{\"name\":\"Malungon\",\"province\":\"SAR\"},{\"name\":\"Banga\",\"province\":\"SCO\"},{\"name\":\"General Santos\",\"province\":\"SCO\",\"city\":true},{\"name\":\"Koronadal\",\"province\":\"SCO\",\"city\":true},{\"name\":\"Lake Sebu\",\"province\":\"SCO\"},{\"name\":\"Norala\",\"province\":\"SCO\"},{\"name\":\"Polomolok\",\"province\":\"SCO\"},{\"name\":\"Santo Niño\",\"province\":\"SCO\"},{\"name\":\"Surallah\",\"province\":\"SCO\"},{\"name\":\"T'boli\",\"province\":\"SCO\"},{\"name\":\"Tampakan\",\"province\":\"SCO\"},{\"name\":\"Tantangan\",\"province\":\"SCO\"},{\"name\":\"Tupi\",\"province\":\"SCO\"},{\"name\":\"Bagumbayan\",\"province\":\"SUK\"},{\"name\":\"Columbio\",\"province\":\"SUK\"},{\"name\":\"Esperanza\",\"province\":\"SUK\"},{\"name\":\"Isulan\",\"province\":\"SUK\"},{\"name\":\"Kalamansig\",\"province\":\"SUK\"},{\"name\":\"Lambayong\",\"province\":\"SUK\"},{\"name\":\"Lebak\",\"province\":\"SUK\"},{\"name\":\"Lutayan\",\"province\":\"SUK\"},{\"name\":\"Palimbang\",\"province\":\"SUK\"},{\"name\":\"President Quirino\",\"province\":\"SUK\"},{\"name\":\"Senator Ninoy Aquino\",\"province\":\"SUK\"},{\"name\":\"Tacurong\",\"province\":\"SUK\",\"city\":true},{\"name\":\"Buenavista\",\"province\":\"AGN\"},{\"name\":\"Butuan\",\"province\":\"AGN\",\"city\":true},{\"name\":\"Cabadbaran\",\"province\":\"AGN\",\"city\":true},{\"name\":\"Carmen\",\"province\":\"AGN\"},{\"name\":\"Jabonga\",\"province\":\"AGN\"},{\"name\":\"Kitcharao\",\"province\":\"AGN\"},{\"name\":\"Las Nieves\",\"province\":\"AGN\"},{\"name\":\"Magallanes\",\"province\":\"AGN\"},{\"name\":\"Nasipit\",\"province\":\"AGN\"},{\"name\":\"Remedios T. Romualdez\",\"province\":\"AGN\"},{\"name\":\"Santiago\",\"province\":\"AGN\"},{\"name\":\"Tubay\",\"province\":\"AGN\"},{\"name\":\"Bayugan\",\"province\":\"AGS\",\"city\":true},{\"name\":\"Bunawan\",\"province\":\"AGS\"},{\"name\":\"Esperanza\",\"province\":\"AGS\"},{\"name\":\"La Paz\",\"province\":\"AGS\"},{\"name\":\"Loreto\",\"province\":\"AGS\"},{\"name\":\"Prosperidad\",\"province\":\"AGS\"},{\"name\":\"Rosario\",\"province\":\"AGS\"},{\"name\":\"San Francisco\",\"province\":\"AGS\"},{\"name\":\"San Luis\",\"province\":\"AGS\"},{\"name\":\"Santa Josefa\",\"province\":\"AGS\"},{\"name\":\"Sibagat\",\"province\":\"AGS\"},{\"name\":\"Talacogon\",\"province\":\"AGS\"},{\"name\":\"Trento\",\"province\":\"AGS\"},{\"name\":\"Veruela\",\"province\":\"AGS\"},{\"name\":\"Basilisa\",\"province\":\"DIN\"},{\"name\":\"Cagdianao\",\"province\":\"DIN\"},{\"name\":\"Dinagat\",\"province\":\"DIN\"},{\"name\":\"Libjo\",\"province\":\"DIN\"},{\"name\":\"Loreto\",\"province\":\"DIN\"},{\"name\":\"San Jose\",\"province\":\"DIN\"},{\"name\":\"Tubajon\",\"province\":\"DIN\"},{\"name\":\"Alegria\",\"province\":\"SUN\"},{\"name\":\"Bacuag\",\"province\":\"SUN\"},{\"name\":\"Burgos\",\"province\":\"SUN\"},{\"name\":\"Claver\",\"province\":\"SUN\"},{\"name\":\"Dapa\",\"province\":\"SUN\"},{\"name\":\"Del Carmen\",\"province\":\"SUN\"},{\"name\":\"General Luna\",\"province\":\"SUN\"},{\"name\":\"Gigaquit\",\"province\":\"SUN\"},{\"name\":\"Mainit\",\"province\":\"SUN\"},{\"name\":\"Malimono\",\"province\":\"SUN\"},{\"name\":\"Pilar\",\"province\":\"SUN\"},{\"name\":\"Placer\",\"province\":\"SUN\"},{\"name\":\"San Benito\",\"province\":\"SUN\"},{\"name\":\"San Francisco\",\"province\":\"SUN\"},{\"name\":\"San Isidro\",\"province\":\"SUN\"},{\"name\":\"Santa Monica\",\"province\":\"SUN\"},{\"name\":\"Sison\",\"province\":\"SUN\"},{\"name\":\"Socorro\",\"province\":\"SUN\"},{\"name\":\"Surigao\",\"province\":\"SUN\",\"city\":true},{\"name\":\"Tagana-an\",\"province\":\"SUN\"},{\"name\":\"Tubod\",\"province\":\"SUN\"},{\"name\":\"Barobo\",\"province\":\"SUR\"},{\"name\":\"Bayabas\",\"province\":\"SUR\"},{\"name\":\"Bislig\",\"province\":\"SUR\",\"city\":true},{\"name\":\"Cagwait\",\"province\":\"SUR\"},{\"name\":\"Cantilan\",\"province\":\"SUR\"},{\"name\":\"Carmen\",\"province\":\"SUR\"},{\"name\":\"Carrascal\",\"province\":\"SUR\"},{\"name\":\"Cortes\",\"province\":\"SUR\"},{\"name\":\"Hinatuan\",\"province\":\"SUR\"},{\"name\":\"Lanuza\",\"province\":\"SUR\"},{\"name\":\"Lianga\",\"province\":\"SUR\"},{\"name\":\"Lingig\",\"province\":\"SUR\"},{\"name\":\"Madrid\",\"province\":\"SUR\"},{\"name\":\"Marihatag\",\"province\":\"SUR\"},{\"name\":\"San Agustin\",\"province\":\"SUR\"},{\"name\":\"San Miguel\",\"province\":\"SUR\"},{\"name\":\"Tagbina\",\"province\":\"SUR\"},{\"name\":\"Tago\",\"province\":\"SUR\"},{\"name\":\"Tandag\",\"province\":\"SUR\",\"city\":true},{\"name\":\"Akbar\",\"province\":\"BAS\"},{\"name\":\"Al-Barka\",\"province\":\"BAS\"},{\"name\":\"Hadji Mohammad Ajul\",\"province\":\"BAS\"},{\"name\":\"Hadji Muhtamad\",\"province\":\"BAS\"},{\"name\":\"Isabela\",\"province\":\"BAS\",\"city\":true},{\"name\":\"Lamitan\",\"province\":\"BAS\",\"city\":true},{\"name\":\"Lantawan\",\"province\":\"BAS\"},{\"name\":\"Maluso\",\"province\":\"BAS\"},{\"name\":\"Sumisip\",\"province\":\"BAS\"},{\"name\":\"Tabuan-Lasa\",\"province\":\"BAS\"},{\"name\":\"Tipo-Tipo\",\"province\":\"BAS\"},{\"name\":\"Tuburan\",\"province\":\"BAS\"},{\"name\":\"Ungkaya Pukan\",\"province\":\"BAS\"},{\"name\":\"Bacolod-Kalawi\",\"province\":\"LAS\"},{\"name\":\"Balabagan\",\"province\":\"LAS\"},{\"name\":\"Balindong\",\"province\":\"LAS\"},{\"name\":\"Bayang\",\"province\":\"LAS\"},{\"name\":\"Binidayan\",\"province\":\"LAS\"},{\"name\":\"Buadiposo-Buntong\",\"province\":\"LAS\"},{\"name\":\"Bubong\",\"province\":\"LAS\"},{\"name\":\"Bumbaran\",\"province\":\"LAS\"},{\"name\":\"Butig\",\"province\":\"LAS\"},{\"name\":\"Calanogas\",\"province\":\"LAS\"},{\"name\":\"Ditsaan-Ramain\",\"province\":\"LAS\"},{\"name\":\"Ganassi\",\"province\":\"LAS\"},{\"name\":\"Kapai\",\"province\":\"LAS\"},{\"name\":\"Kapatagan\",\"province\":\"LAS\"},{\"name\":\"Lumba-Bayabao\",\"province\":\"LAS\"},{\"name\":\"Lumbaca-Unayan\",\"province\":\"LAS\"},{\"name\":\"Lumbatan\",\"province\":\"LAS\"},{\"name\":\"Lumbayanague\",\"province\":\"LAS\"},{\"name\":\"Madalum\",\"province\":\"LAS\"},{\"name\":\"Madamba\",\"province\":\"LAS\"},{\"name\":\"Maguing\",\"province\":\"LAS\"},{\"name\":\"Malabang\",\"province\":\"LAS\"},{\"name\":\"Marantao\",\"province\":\"LAS\"},{\"name\":\"Marawi\",\"province\":\"LAS\",\"city\":true},{\"name\":\"Marogong\",\"province\":\"LAS\"},{\"name\":\"Masiu\",\"province\":\"LAS\"},{\"name\":\"Mulondo\",\"province\":\"LAS\"},{\"name\":\"Pagayawan\",\"province\":\"LAS\"},{\"name\":\"Piagapo\",\"province\":\"LAS\"},{\"name\":\"Poona Bayabao\",\"province\":\"LAS\"},{\"name\":\"Pualas\",\"province\":\"LAS\"},{\"name\":\"Saguiaran\",\"province\":\"LAS\"},{\"name\":\"Sultan Dumalondong\",\"province\":\"LAS\"},{\"name\":\"Picong\",\"province\":\"LAS\"},{\"name\":\"Tagoloan II\",\"province\":\"LAS\"},{\"name\":\"Tamparan\",\"province\":\"LAS\"},{\"name\":\"Taraka\",\"province\":\"LAS\"},{\"name\":\"Tubaran\",\"province\":\"LAS\"},{\"name\":\"Tugaya\",\"province\":\"LAS\"},{\"name\":\"Wao\",\"province\":\"LAS\"},{\"name\":\"Ampatuan\",\"province\":\"MAG\"},{\"name\":\"Barira\",\"province\":\"MAG\"},{\"name\":\"Buldon\",\"province\":\"MAG\"},{\"name\":\"Buluan\",\"province\":\"MAG\"},{\"name\":\"Cotabato\",\"province\":\"MAG\",\"city\":true},{\"name\":\"Datu Abdullah Sangki\",\"province\":\"MAG\"},{\"name\":\"Datu Anggal Midtimbang\",\"province\":\"MAG\"},{\"name\":\"Datu Blah T. Sinsuat\",\"province\":\"MAG\"},{\"name\":\"Datu Hoffer Ampatuan\",\"province\":\"MAG\"},{\"name\":\"Datu Montawal\",\"province\":\"MAG\"},{\"name\":\"Datu Odin Sinsuat\",\"province\":\"MAG\"},{\"name\":\"Datu Paglas\",\"province\":\"MAG\"},{\"name\":\"Datu Piang\",\"province\":\"MAG\"},{\"name\":\"Datu Salibo\",\"province\":\"MAG\"},{\"name\":\"Datu Saudi-Ampatuan\",\"province\":\"MAG\"},{\"name\":\"Datu Unsay\",\"province\":\"MAG\"},{\"name\":\"General Salipada K. Pendatun\",\"province\":\"MAG\"},{\"name\":\"Guindulungan\",\"province\":\"MAG\"},{\"name\":\"Kabuntalan\",\"province\":\"MAG\"},{\"name\":\"Mamasapano\",\"province\":\"MAG\"},{\"name\":\"Mangudadatu\",\"province\":\"MAG\"},{\"name\":\"Matanog\",\"province\":\"MAG\"},{\"name\":\"Northern Kabuntalan\",\"province\":\"MAG\"},{\"name\":\"Pagalungan\",\"province\":\"MAG\"},{\"name\":\"Paglat\",\"province\":\"MAG\"},{\"name\":\"Pandag\",\"province\":\"MAG\"},{\"name\":\"Parang\",\"province\":\"MAG\"},{\"name\":\"Rajah Buayan\",\"province\":\"MAG\"},{\"name\":\"Shariff Aguak\",\"province\":\"MAG\"},{\"name\":\"Shariff Saydona Mustapha\",\"province\":\"MAG\"},{\"name\":\"South Upi\",\"province\":\"MAG\"},{\"name\":\"Sultan Kudarat\",\"province\":\"MAG\"},{\"name\":\"Sultan Mastura\",\"province\":\"MAG\"},{\"name\":\"Sultan sa Barongis\",\"province\":\"MAG\"},{\"name\":\"Sultan Sumagka\",\"province\":\"MAG\"},{\"name\":\"Talayan\",\"province\":\"MAG\"},{\"name\":\"Upi\",\"province\":\"MAG\"},{\"name\":\"Banguingui\",\"province\":\"SLU\"},{\"name\":\"Hadji Panglima Tahil\",\"province\":\"SLU\"},{\"name\":\"Indanan\",\"province\":\"SLU\"},{\"name\":\"Jolo\",\"province\":\"SLU\"},{\"name\":\"Kalingalan Caluang\",\"province\":\"SLU\"},{\"name\":\"Lugus\",\"province\":\"SLU\"},{\"name\":\"Luuk\",\"province\":\"SLU\"},{\"name\":\"Maimbung\",\"province\":\"SLU\"},{\"name\":\"Old Panamao\",\"province\":\"SLU\"},{\"name\":\"Omar\",\"province\":\"SLU\"},{\"name\":\"Pandami\",\"province\":\"SLU\"},{\"name\":\"Panglima Estino\",\"province\":\"SLU\"},{\"name\":\"Pangutaran\",\"province\":\"SLU\"},{\"name\":\"Parang\",\"province\":\"SLU\"},{\"name\":\"Pata\",\"province\":\"SLU\"},{\"name\":\"Patikul\",\"province\":\"SLU\"},{\"name\":\"Siasi\",\"province\":\"SLU\"},{\"name\":\"Talipao\",\"province\":\"SLU\"},{\"name\":\"Tapul\",\"province\":\"SLU\"},{\"name\":\"Bongao\",\"province\":\"TAW\"},{\"name\":\"Languyan\",\"province\":\"TAW\"},{\"name\":\"Mapun\",\"province\":\"TAW\"},{\"name\":\"Panglima Sugala\",\"province\":\"TAW\"},{\"name\":\"Sapa-Sapa\",\"province\":\"TAW\"},{\"name\":\"Sibutu\",\"province\":\"TAW\"},{\"name\":\"Simunul\",\"province\":\"TAW\"},{\"name\":\"Sitangkai\",\"province\":\"TAW\"},{\"name\":\"South Ubian\",\"province\":\"TAW\"},{\"name\":\"Tandubas\",\"province\":\"TAW\"},{\"name\":\"Turtle Islands\",\"province\":\"TAW\"}]");

/***/ }),

/***/ "./node_modules/philippines/provinces.json":
/*!*************************************************!*\
  !*** ./node_modules/philippines/provinces.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Metro Manila\",\"region\":\"NCR\",\"key\":\"MM\"},{\"name\":\"Abra\",\"region\":\"CAR\",\"key\":\"ABR\"},{\"name\":\"Apayao\",\"region\":\"CAR\",\"key\":\"APA\"},{\"name\":\"Benguet\",\"region\":\"CAR\",\"key\":\"BEN\"},{\"name\":\"Ifugao\",\"region\":\"CAR\",\"key\":\"IFU\"},{\"name\":\"Kalinga\",\"region\":\"CAR\",\"key\":\"KAL\"},{\"name\":\"Mountain Province\",\"region\":\"CAR\",\"key\":\"MOU\"},{\"name\":\"Ilocos Norte\",\"region\":\"I\",\"key\":\"ILN\"},{\"name\":\"Ilocos Sur\",\"region\":\"I\",\"key\":\"ILS\"},{\"name\":\"La Union\",\"region\":\"I\",\"key\":\"LUN\"},{\"name\":\"Pangasinan\",\"region\":\"I\",\"key\":\"PAN\"},{\"name\":\"Batanes\",\"region\":\"II\",\"key\":\"BTN\"},{\"name\":\"Cagayan\",\"region\":\"II\",\"key\":\"CAG\"},{\"name\":\"Isabela\",\"region\":\"II\",\"key\":\"ISA\"},{\"name\":\"Nueva Vizcaya\",\"region\":\"II\",\"key\":\"NUV\"},{\"name\":\"Quirino\",\"region\":\"II\",\"key\":\"QUI\"},{\"name\":\"Aurora\",\"region\":\"III\",\"key\":\"AUR\"},{\"name\":\"Bataan\",\"region\":\"III\",\"key\":\"BAN\"},{\"name\":\"Bulacan\",\"region\":\"III\",\"key\":\"BUL\"},{\"name\":\"Nueva Ecija\",\"region\":\"III\",\"key\":\"NUE\"},{\"name\":\"Pampanga\",\"region\":\"III\",\"key\":\"PAM\"},{\"name\":\"Tarlac\",\"region\":\"III\",\"key\":\"TAR\"},{\"name\":\"Zambales\",\"region\":\"III\",\"key\":\"ZMB\"},{\"name\":\"Batangas\",\"region\":\"IV-A\",\"key\":\"BTG\"},{\"name\":\"Cavite\",\"region\":\"IV-A\",\"key\":\"CAV\"},{\"name\":\"Laguna\",\"region\":\"IV-A\",\"key\":\"LAG\"},{\"name\":\"Quezon\",\"region\":\"IV-A\",\"key\":\"QUE\"},{\"name\":\"Rizal\",\"region\":\"IV-A\",\"key\":\"RIZ\"},{\"name\":\"Marinduque\",\"region\":\"IV-B\",\"key\":\"MAD\"},{\"name\":\"Occidental Mindoro\",\"region\":\"IV-B\",\"key\":\"MDC\"},{\"name\":\"Oriental Mindoro\",\"region\":\"IV-B\",\"key\":\"MDR\"},{\"name\":\"Palawan\",\"region\":\"IV-B\",\"key\":\"PLW\"},{\"name\":\"Romblon\",\"region\":\"IV-B\",\"key\":\"ROM\"},{\"name\":\"Albay\",\"region\":\"V\",\"key\":\"ALB\"},{\"name\":\"Camarines Norte\",\"region\":\"V\",\"key\":\"CAN\"},{\"name\":\"Camarines Sur\",\"region\":\"V\",\"key\":\"CAS\"},{\"name\":\"Catanduanes\",\"region\":\"V\",\"key\":\"CAT\"},{\"name\":\"Masbate\",\"region\":\"V\",\"key\":\"MAS\"},{\"name\":\"Sorsogon\",\"region\":\"V\",\"key\":\"SOR\"},{\"name\":\"Aklan\",\"region\":\"VI\",\"key\":\"AKL\"},{\"name\":\"Antique\",\"region\":\"VI\",\"key\":\"ANT\"},{\"name\":\"Capiz\",\"region\":\"VI\",\"key\":\"CAP\"},{\"name\":\"Guimaras\",\"region\":\"VI\",\"key\":\"GUI\"},{\"name\":\"Iloilo\",\"region\":\"VI\",\"key\":\"ILI\"},{\"name\":\"Negros Occidental\",\"region\":\"VI\",\"key\":\"NEC\"},{\"name\":\"Bohol\",\"region\":\"VII\",\"key\":\"BOH\"},{\"name\":\"Cebu\",\"region\":\"VII\",\"key\":\"CEB\"},{\"name\":\"Negros Oriental\",\"region\":\"VII\",\"key\":\"NER\"},{\"name\":\"Siquijor\",\"region\":\"VII\",\"key\":\"SIG\"},{\"name\":\"Biliran\",\"region\":\"VIII\",\"key\":\"BIL\"},{\"name\":\"Eastern Samar\",\"region\":\"VIII\",\"key\":\"EAS\"},{\"name\":\"Leyte\",\"region\":\"VIII\",\"key\":\"LEY\"},{\"name\":\"Northern Samar\",\"region\":\"VIII\",\"key\":\"NSA\"},{\"name\":\"Samar\",\"region\":\"VIII\",\"key\":\"WSA\"},{\"name\":\"Southern Leyte\",\"region\":\"VIII\",\"key\":\"SLE\"},{\"name\":\"Zamboanga del Norte\",\"region\":\"IX\",\"key\":\"ZAN\"},{\"name\":\"Zamboanga del Sur\",\"region\":\"IX\",\"key\":\"ZAS\"},{\"name\":\"Zamboanga Sibugay\",\"region\":\"IX\",\"key\":\"ZSI\"},{\"name\":\"Bukidnon\",\"region\":\"X\",\"key\":\"BUK\"},{\"name\":\"Camiguin\",\"region\":\"X\",\"key\":\"CAM\"},{\"name\":\"Lanao del Norte\",\"region\":\"X\",\"key\":\"LAN\"},{\"name\":\"Misamis Occidental\",\"region\":\"X\",\"key\":\"MSC\"},{\"name\":\"Misamis Oriental\",\"region\":\"X\",\"key\":\"MSR\"},{\"name\":\"Compostela Valley\",\"region\":\"XI\",\"key\":\"COM\"},{\"name\":\"Davao del Norte\",\"region\":\"XI\",\"key\":\"DAV\"},{\"name\":\"Davao del Sur\",\"region\":\"XI\",\"key\":\"DAS\"},{\"name\":\"Davao Occidental\",\"region\":\"XI\",\"key\":\"DAC\"},{\"name\":\"Davao Oriental\",\"region\":\"XI\",\"key\":\"DAO\"},{\"name\":\"Cotabato\",\"region\":\"XII\",\"key\":\"NCO\"},{\"name\":\"Sarangani\",\"region\":\"XII\",\"key\":\"SAR\"},{\"name\":\"South Cotabato\",\"region\":\"XII\",\"key\":\"SCO\"},{\"name\":\"Sultan Kudarat\",\"region\":\"XII\",\"key\":\"SUK\"},{\"name\":\"Agusan del Norte\",\"region\":\"XIII\",\"key\":\"AGN\"},{\"name\":\"Agusan del Sur\",\"region\":\"XIII\",\"key\":\"AGS\"},{\"name\":\"Dinagat Islands\",\"region\":\"XIII\",\"key\":\"DIN\"},{\"name\":\"Surigao del Norte\",\"region\":\"XIII\",\"key\":\"SUN\"},{\"name\":\"Surigao del Sur\",\"region\":\"XIII\",\"key\":\"SUR\"},{\"name\":\"Basilan\",\"region\":\"ARMM\",\"key\":\"BAS\"},{\"name\":\"Lanao del Sur\",\"region\":\"ARMM\",\"key\":\"LAS\"},{\"name\":\"Maguindanao\",\"region\":\"ARMM\",\"key\":\"MAG\"},{\"name\":\"Sulu\",\"region\":\"ARMM\",\"key\":\"SLU\"},{\"name\":\"Tawi-tawi\",\"region\":\"ARMM\",\"key\":\"TAW\"}]");

/***/ }),

/***/ "./node_modules/philippines/regions.json":
/*!***********************************************!*\
  !*** ./node_modules/philippines/regions.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"NCR\",\"long\":\"National Capital Region\",\"key\":\"NCR\"},{\"name\":\"CAR\",\"long\":\"Cordillera Admininstrative Region\",\"key\":\"CAR\"},{\"name\":\"Region I\",\"long\":\"Ilocos Region\",\"key\":\"I\"},{\"name\":\"Region II\",\"long\":\"Cagayan Valley\",\"key\":\"II\"},{\"name\":\"Region III\",\"long\":\"Central Luzon\",\"key\":\"III\"},{\"name\":\"Region IV-A\",\"long\":\"CALABARZON\",\"key\":\"IV-A\"},{\"name\":\"Region IV-B\",\"long\":\"MIMAROPA\",\"key\":\"IV-B\"},{\"name\":\"Region V\",\"long\":\"Bicol Region\",\"key\":\"V\"},{\"name\":\"Region VI\",\"long\":\"Western Visayas\",\"key\":\"VI\"},{\"name\":\"Region VII\",\"long\":\"Central Visayas\",\"key\":\"VII\"},{\"name\":\"Region VIII\",\"long\":\"Eastern Visayas\",\"key\":\"VIII\"},{\"name\":\"Region IX\",\"long\":\"Zamboange Peninsula\",\"key\":\"IX\"},{\"name\":\"Region X\",\"long\":\"Northen Mindanao\",\"key\":\"X\"},{\"name\":\"Region XI\",\"long\":\"Davao Region\",\"key\":\"XI\"},{\"name\":\"Region XII\",\"long\":\"SOCCSKARGEN\",\"key\":\"XII\"},{\"name\":\"Region XIII\",\"long\":\"Caraga\",\"key\":\"XIII\"},{\"name\":\"ARMM\",\"long\":\"Autonomous Region in Muslim Mindanao\",\"key\":\"ARMM\"}]");

/***/ }),

/***/ "./pages/driver.js":
/*!*************************!*\
  !*** ./pages/driver.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert/with-react */ "@sweetalert/with-react");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\driver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function driver() {
  var clear = 0;
  var submitClick = 0;
  const [fname, setfname] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [lname, setlname] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [mname, setmname] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [email, setemail] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [mobile, setmobile] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [address, setaddress] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [password, setpassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [passwordconfirm, setpasswordconfirm] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [lisencenumber, setlisencenumber] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [vehicle, setvehicle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [zip, setzip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [provinced, setprovinced] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [city, setcity] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [city_dropdown, setcitydropdown] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [plateenumber, setplatenumber] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [profile, setprofile] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [driver, setDriver] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [nbi, setNbi] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [orcr, setOcr] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [profile_name, setProfilename] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [driver_lisence, setDriverlisence] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [nbi_clearance, setNbiclearance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [ocr_clearance, setOcrclearance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const inputFileRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const inputFileRef1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const inputFileRef2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const inputFileRef3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };

  const onBtnClick1 = () => {
    inputFileRef1.current.click();
  };

  const onBtnClick2 = () => {
    inputFileRef2.current.click();
  };

  const onBtnClick3 = () => {
    inputFileRef3.current.click();
  };

  function handleFile(e) {
    let file = e.target.files[0];
    setProfilename(file.name);
    setprofile(file);
    $(".divProfile").css("borderColor", "#2c2c2c");
  }

  function handleFile1(e) {
    let file = e.target.files[0];
    setDriverlisence(file.name);
    setDriver(file);
    $(".divDriver").css("borderColor", "#2c2c2c");
  }

  function handleFile2(e) {
    let file = e.target.files[0];
    setNbiclearance(file.name);
    setNbi(file);
    $(".divNbi").css("borderColor", "#2c2c2c");
  }

  function handleFile3(e) {
    let file = e.target.files[0];
    setOcrclearance(file.name);
    setOcr(file);
    $(".divOcr").css("borderColor", "#2c2c2c");
  }

  const customStyles1 = {
    control: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      background: "rgb(28, 30, 33)",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
      borderRadius: "5px",
      width: "115%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }
    }),
    singleValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
      color: "white"
    })
  };

  const regions = __webpack_require__(/*! philippines/regions */ "./node_modules/philippines/regions.json");

  const province = __webpack_require__(/*! philippines/provinces */ "./node_modules/philippines/provinces.json");

  const cities = __webpack_require__(/*! philippines/cities */ "./node_modules/philippines/cities.json");

  const [regions_api, setRegion] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    value: null,
    name: null
  });
  const [province_api, setProvince] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    value: null,
    name: null
  });
  const [cities_api, setCities] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    value: null,
    name: null
  });
  const [region_change, setRegionChange] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [province_change, setProvinceChange] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [cities_change, setCitiesChange] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  function HandleChangeRegion(e) {
    try {
      setRegionChange(e.value);
      const data = province.filter(person => person.region === e.value).map(d => ({
        id: d.key,
        value: d.key,
        label: d.name
      }));
      setProvince(data);
    } catch (e) {}
  }

  function HandleChangeProvince(e) {
    try {
      setprovinced(e.label);
      setProvinceChange(e.value);
      const data = cities.filter(person => person.province === e.id).map(d => ({
        value: d.name,
        label: d.name
      }));
      setCities(data);
    } catch (e) {
      console.log(e);
    }
  }

  function HandleChangeCity(e) {
    try {
      setcitydropdown(e.value.label);
      setcity(e.label);
    } catch (e) {
      console.log(e);
    }
  }

  function getData() {
    const data_regions = regions.map(d => ({
      value: d.key,
      label: d.name
    }));
    setRegion(data_regions);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
  }, []);

  function fname_change(e) {
    setfname(e.target.value);
    $(".pFname").css("color", "white");
    $(".txtFname").css("borderColor", "#2c2c2c");

    if (e.target.value) {
      clear = 0;
    } else {}
  }

  function mname_change(e) {
    setmname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function lname_change(e) {
    $(".pLname").css("color", "white");
    $(".txtLname").css("borderColor", "#2c2c2c");
    setlname(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function email_change(e) {
    $(".pEmail").css("color", "white");
    $(".txtEmail").css("borderColor", "#2c2c2c");
    setemail(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function mobile_change(e) {
    const re = /^[0-9\b]+$/;
    $(".pMobile").css("color", "white");
    $(".txtMobile").css("borderColor", "#2c2c2c");

    if (e.target.value === '' || re.test(e.target.value)) {
      setmobile(e.target.value);

      if (e.target.value) {
        clear = 0;
      }
    }
  }

  function password_change(e) {
    $(".pPassword").css("color", "white");
    $(".txtPassword").css("borderColor", "#2c2c2c");
    setpassword(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function passwordconfirm_change(e) {
    $(".pConfirmPass").css("color", "white");
    $(".txtConfirmPass").css("borderColor", "#2c2c2c");
    setpasswordconfirm(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function lisence_change(e) {
    $(".pLisence").css("color", "white");
    $(".txtLisence").css("borderColor", "#2c2c2c");
    setlisencenumber(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function zip_change(e) {
    setzip(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function plate_change(e) {
    $(".pPlate").css("color", "white");
    $(".txtPlate").css("borderColor", "#2c2c2c");
    setplatenumber(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function vehicle_change(e) {
    $(".pVehicle").css("color", "white");
    $(".txtVehicle").css("borderColor", "#2c2c2c");
    setvehicle(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function address_change(e) {
    setaddress(e.target.value);

    if (e.target.value) {
      clear = 0;
    }
  }

  function submit(e) {
    e.preventDefault();

    if (submitClick == 1) {
      return false;
    }

    $(e.currentTarget).addClass("btn--loading");

    if (fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (lisencenumber == "") {
      $(".pLisence").css("color", "#d32f2f");
      $(".txtLisence").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (plateenumber == "") {
      $(".pPlate").css("color", "#d32f2f");
      $(".txtPlate").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (profile == "") {
      $(".divProfile").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (driver == "") {
      $(".divDriver").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (nbi == "") {
      $(".divNbi").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (orcr == "") {
      $(".divOcr").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (vehicle == "") {
      $(".pVehicle").css("color", "#d32f2f");
      $(".txtVehicle").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (password == passwordconfirm) {} else {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (password.length < 6 || password.length > 16) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      $(".pError").show();
      submitClick = 0;
    } else {
      $(".pError").hide();
      submitClick = 0;
    }

    if (clear == 0) {
      submitClick = 1;
      console.log("submitting");
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json"
        }
      };
      let formdata = new FormData();
      formdata.set("fname", fname);
      formdata.set("lname", lname);
      formdata.set("mname", mname);
      formdata.append("profile_pic", profile, profile.name);
      formdata.set("email", email);
      formdata.set("mobile_no", mobile);
      formdata.set("address", address);
      formdata.set("city", provinced);
      formdata.set("state", city);
      formdata.set("country", "Philippines");
      formdata.set("zip", zip);
      formdata.set("password", password);
      formdata.set("password_confirmation", passwordconfirm);
      formdata.set("driver_license", driver, driver.name);
      formdata.set("vehicle_type", vehicle);
      formdata.set("plate_no", plateenumber);
      formdata.set("license_no", lisencenumber);
      formdata.set("nbi_clearance", nbi, nbi.name);
      formdata.set("orcr", orcr, orcr.name);
      const apiUrl = "http://localhost:8000/api/auth/register-driver";
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(apiUrl, formdata, options).then(result => {
        $("#driverModal").modal("hide");
        successMessage();
        resetValue();
        $(".btn").removeClass("btn--loading");
        submitClick = 0;
      }).catch(err => {
        console.log(err);
        $("#driverModal").css("z-index", "99");
        $(".modal-backdrop").hide();
        errorMessage();
        $(".btn").removeClass("btn--loading");
        submitClick = 0;
      });
    }
  }

  function successMessage() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()(__jsx("div", {
      style: {
        width: "450px",
        padding: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row align-items-center",
      style: {
        borderLeft: "3px solid #00C853"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "Image/success.png",
      style: {
        width: "32px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "col-lg-10",
      style: {
        textAlign: "left"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pError",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 15
      }
    }, "Success"), __jsx("p", {
      className: "pErrorSub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 15
      }
    }, "Account succesfully created. You may now login."))))));
  }

  function resetValue() {
    setfname("");
    setmname("");
    setlname("");
    setemail("");
    setmobile("");
    setaddress("");
    setzip("");
    setpassword("");
    setpasswordconfirm("");
    setvehicle("");
    setplatenumber("");
    setlisencenumber("");
    setProfilename("");
    setprofile("");
    setDriverlisence("");
    setDriver("");
    setNbiclearance("");
    setNbi("");
    setOcrclearance("");
    setOcr("");
  }

  function errorMessage() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()(__jsx("div", {
      style: {
        width: "450px",
        padding: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row align-items-center",
      style: {
        borderLeft: "3px solid #00C853"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "Image/error.png",
      style: {
        width: "32px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "col-lg-10",
      style: {
        textAlign: "left"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pError",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 15
      }
    }, "Error"), __jsx("p", {
      className: "pErrorSub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 15
      }
    }, "Email is not available or already registered."))))));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid mainConDriver",
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-md fixed-top",
    style: {
      padding: "20px 20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    "data-toggle": "collapse",
    "data-target": "#collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 13
    }
  })), __jsx("nav", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imglogo",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col2 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    "data-toggle": "modal",
    "data-target": "#driverModal",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 19
    }
  }, "Be a JGO Driver")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 19
    }
  }, "Book a Delivery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link nav-driver",
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 19
    }
  }, "Support")))))), __jsx("div", {
    className: "conDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    style: {
      marginLeft: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-12 col-12 align-self-top ",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pComing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 15
    }
  }, "COMING SOON"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    style: {
      padding: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/apple.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 21
    }
  }, "Download on the ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 39
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 23
    }
  }, "App Store")))), __jsx("div", {
    className: "col-lg-12",
    style: {
      padding: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divButton form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/playstore.png",
    className: "imgDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pDownload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 21
    }
  }, "Get it on ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 23
    }
  }, "Play Store")))))), __jsx("div", {
    className: "col-lg-3 col-sm-12 col-12",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/phone1.png",
    className: "img-fluid imgPhone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/phone.gif",
    className: "img-fluid imgGif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-lg-5 colDelivery ",
    style: {
      marginTop: "150px",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/boy.png",
    className: "img-fluid imgDel mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "container-fluid conDriver2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "Image/bar.png",
    className: "imgBar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      marginRight: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logoblack.png",
    className: "img-fluid",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/easyapp.png",
    className: "img-fluid",
    style: {
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divBoxCarousel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "carouselExampleIndicators",
    className: "carousel slide",
    "data-ride": "carousel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "carousel-indicators",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 19
    }
  }, __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": 0,
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 21
    }
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 21
    }
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "carousel-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "carousel-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "pCarouselTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 23
    }
  }, "Step 1"), __jsx("p", {
    className: "pCarouselContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 23
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")), __jsx("div", {
    className: "carousel-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "pCarouselTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 23
    }
  }, "Step 2"), __jsx("p", {
    className: "pCarouselContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 23
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")), __jsx("div", {
    className: "carousel-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "pCarouselTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 23
    }
  }, "Step 3"), __jsx("p", {
    className: "pCarouselContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 23
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")))))), __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/phonehand.png",
    className: "img-fluid mx-auto d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "container-fluid conStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/step1.jpg",
    className: "img-fluid imgStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pStepTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 17
    }
  }, "RIDER"), __jsx("p", {
    className: "pStepsub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/step2.jpg",
    className: "img-fluid imgStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pStepTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 17
    }
  }, "DELIVER"), __jsx("p", {
    className: "pStepsub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/step3.jpg",
    className: "img-fluid imgStep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pStepTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 17
    }
  }, "FAQS"), __jsx("p", {
    className: "pStepsub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")))))), __jsx("div", {
    className: "container-fluid conAbout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "Image/artwork.jpg",
    className: "img-fluid imgArtwork",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "pArtwork",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divAbout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAboutus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 17
    }
  }, "ABOUT US"), __jsx("p", {
    className: "pAboutusSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")))))), __jsx("div", {
    className: "container-fluid conFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "ulFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 17
    }
  }, "COMPANY")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 17
    }
  }, "CONTACT US")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
      columnNumber: 17
    }
  }, "POLICIES")), __jsx("li", {
    className: "liFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 17
    }
  }, "TERM & CONDITION")))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-center pFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 13
    }
  }, "\xA9 2020 JGO Philippines. - All Rights")))), __jsx("div", {
    className: "modal fade",
    id: "driverModal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-driver modal-lg",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body modalDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pModalTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 15
    }
  }, "Jgo - Driver registration form"), __jsx("p", {
    className: "pModalTitleSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 15
    }
  }, "Fill-up all the requird fields. After you submit we will send a link to your email for driver online training."), __jsx("hr", {
    style: {
      backgroundColor: "#414141",
      boder: "1px solid #414141"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "row",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pFname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 19
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: "txtDriver txtFname",
    value: fname,
    onChange: fname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 19
    }
  }, "Middle Name"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    value: mname,
    onChange: mname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 19
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    value: lname,
    className: "txtDriver txtLname",
    onChange: lname_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 19
    }
  }, "Email"), __jsx("input", {
    type: "text",
    value: email,
    className: "txtDriver txtEmail",
    onChange: email_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pMobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 19
    }
  }, "Mobile Number"), __jsx("input", {
    type: "text",
    value: mobile,
    className: "txtDriver txtMobile",
    onChange: mobile_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 19
    }
  }, "Address"), __jsx("input", {
    type: "text",
    value: address,
    className: "txtDriver",
    onChange: address_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 19
    }
  }, "Region"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    options: regions_api,
    onChange: HandleChangeRegion,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 19
    }
  }, "Province"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    options: province_api,
    onChange: HandleChangeProvince,
    styles: customStyles1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 19
    }
  }, "City/Municipality"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    options: cities_api,
    styles: customStyles1,
    onChange: HandleChangeCity,
    value: city_dropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 19
    }
  }, "Country"), __jsx("input", {
    type: "text",
    className: "txtDriver",
    value: "Philippines",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 19
    }
  }, "Zip Code"), __jsx("input", {
    value: zip,
    type: "text",
    className: "txtDriver",
    onChange: zip_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 19
    }
  }, "Password"), __jsx("input", {
    value: password,
    type: "password",
    className: "txtDriver txtPassword",
    onChange: password_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "pError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 19
    }
  }, "Password must be 6-16 characters.")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pConfirmPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    value: passwordconfirm,
    className: "txtDriver txtConfirmPass",
    onChange: passwordconfirm_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pVehicle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 19
    }
  }, "Vehicle Type"), __jsx("input", {
    type: "text",
    value: vehicle,
    className: "txtDriver txtVehicle",
    onChange: vehicle_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pPlate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 19
    }
  }, "Plate Number"), __jsx("input", {
    type: "text",
    value: plateenumber,
    className: "txtDriver txtPlate",
    onChange: plate_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver pLisence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 19
    }
  }, "Lisence Number"), __jsx("input", {
    type: "text",
    value: lisencenumber,
    className: "txtDriver txtLisence",
    onChange: lisence_change,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 19
    }
  }, "Profile Picture"), __jsx("input", {
    onChange: e => handleFile(e),
    ref: inputFileRef,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divProfile text-center",
    onClick: onBtnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 21
    }
  }, profile_name))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 19
    }
  }, "Driver License"), __jsx("input", {
    onChange: e => handleFile1(e),
    ref: inputFileRef1,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divDriver text-center",
    onClick: onBtnClick1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 21
    }
  }, driver_lisence)))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 19
    }
  }, "NBI Clearance"), __jsx("input", {
    onChange: e => handleFile2(e),
    ref: inputFileRef2,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divNbi text-center",
    onClick: onBtnClick2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 21
    }
  }, nbi_clearance))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 19
    }
  }, "ORCR"), __jsx("input", {
    onChange: e => handleFile3(e),
    ref: inputFileRef3,
    id: "file-upload",
    type: "file",
    accept: ".jpg, .png, .jpeg|image",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "divAttachment divOcr text-center",
    onClick: onBtnClick3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pTxtDriver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      color: "#EDC728"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 23
    }
  }, "Drag or Browse"), " a file here"), __jsx("p", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 21
    }
  }, ocr_clearance)))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btnSubmitDriver",
    onClick: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 19
    }
  }, "SIGNUP", __jsx("span", {
    style: {
      marginLeft: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 23
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 23
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 23
    }
  }))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (driver);

/***/ }),

/***/ "@sweetalert/with-react":
/*!*****************************************!*\
  !*** external "@sweetalert/with-react" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sweetalert/with-react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZHJpdmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiXSwibmFtZXMiOlsiY29tcG9uZW50TW91bnQiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInNjcmlwdHMiLCJzcmMiLCJtYXAiLCJpdGVtIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJoZWFkZXIiLCJkcml2ZXIiLCJjbGVhciIsInN1Ym1pdENsaWNrIiwiZm5hbWUiLCJzZXRmbmFtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJsbmFtZSIsInNldGxuYW1lIiwibW5hbWUiLCJzZXRtbmFtZSIsImVtYWlsIiwic2V0ZW1haWwiLCJtb2JpbGUiLCJzZXRtb2JpbGUiLCJhZGRyZXNzIiwic2V0YWRkcmVzcyIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJwYXNzd29yZGNvbmZpcm0iLCJzZXRwYXNzd29yZGNvbmZpcm0iLCJsaXNlbmNlbnVtYmVyIiwic2V0bGlzZW5jZW51bWJlciIsInZlaGljbGUiLCJzZXR2ZWhpY2xlIiwiemlwIiwic2V0emlwIiwicHJvdmluY2VkIiwic2V0cHJvdmluY2VkIiwiY2l0eSIsInNldGNpdHkiLCJjaXR5X2Ryb3Bkb3duIiwic2V0Y2l0eWRyb3Bkb3duIiwicGxhdGVlbnVtYmVyIiwic2V0cGxhdGVudW1iZXIiLCJwcm9maWxlIiwic2V0cHJvZmlsZSIsInNldERyaXZlciIsIm5iaSIsInNldE5iaSIsIm9yY3IiLCJzZXRPY3IiLCJwcm9maWxlX25hbWUiLCJzZXRQcm9maWxlbmFtZSIsImRyaXZlcl9saXNlbmNlIiwic2V0RHJpdmVybGlzZW5jZSIsIm5iaV9jbGVhcmFuY2UiLCJzZXROYmljbGVhcmFuY2UiLCJvY3JfY2xlYXJhbmNlIiwic2V0T2NyY2xlYXJhbmNlIiwiaW5wdXRGaWxlUmVmIiwidXNlUmVmIiwiaW5wdXRGaWxlUmVmMSIsImlucHV0RmlsZVJlZjIiLCJpbnB1dEZpbGVSZWYzIiwib25CdG5DbGljayIsImN1cnJlbnQiLCJjbGljayIsIm9uQnRuQ2xpY2sxIiwib25CdG5DbGljazIiLCJvbkJ0bkNsaWNrMyIsImhhbmRsZUZpbGUiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsIiQiLCJjc3MiLCJoYW5kbGVGaWxlMSIsImhhbmRsZUZpbGUyIiwiaGFuZGxlRmlsZTMiLCJjdXN0b21TdHlsZXMxIiwiY29udHJvbCIsImJhc2UiLCJzdGF0ZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsInJlZ2lvbnMiLCJyZXF1aXJlIiwicHJvdmluY2UiLCJjaXRpZXMiLCJyZWdpb25zX2FwaSIsInNldFJlZ2lvbiIsInZhbHVlIiwicHJvdmluY2VfYXBpIiwic2V0UHJvdmluY2UiLCJjaXRpZXNfYXBpIiwic2V0Q2l0aWVzIiwicmVnaW9uX2NoYW5nZSIsInNldFJlZ2lvbkNoYW5nZSIsInByb3ZpbmNlX2NoYW5nZSIsInNldFByb3ZpbmNlQ2hhbmdlIiwiY2l0aWVzX2NoYW5nZSIsInNldENpdGllc0NoYW5nZSIsIkhhbmRsZUNoYW5nZVJlZ2lvbiIsImRhdGEiLCJmaWx0ZXIiLCJwZXJzb24iLCJyZWdpb24iLCJkIiwiaWQiLCJrZXkiLCJsYWJlbCIsIkhhbmRsZUNoYW5nZVByb3ZpbmNlIiwiY29uc29sZSIsImxvZyIsIkhhbmRsZUNoYW5nZUNpdHkiLCJnZXREYXRhIiwiZGF0YV9yZWdpb25zIiwidXNlRWZmZWN0IiwiZm5hbWVfY2hhbmdlIiwibW5hbWVfY2hhbmdlIiwibG5hbWVfY2hhbmdlIiwiZW1haWxfY2hhbmdlIiwibW9iaWxlX2NoYW5nZSIsInJlIiwidGVzdCIsInBhc3N3b3JkX2NoYW5nZSIsInBhc3N3b3JkY29uZmlybV9jaGFuZ2UiLCJsaXNlbmNlX2NoYW5nZSIsInppcF9jaGFuZ2UiLCJwbGF0ZV9jaGFuZ2UiLCJ2ZWhpY2xlX2NoYW5nZSIsImFkZHJlc3NfY2hhbmdlIiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxlbmd0aCIsInNob3ciLCJoaWRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiYXBwZW5kIiwiYXBpVXJsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsIm1vZGFsIiwic3VjY2Vzc01lc3NhZ2UiLCJyZXNldFZhbHVlIiwiY2F0Y2giLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJzd2FsIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9kZXIiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsaUJBSkYsRUFRRTtBQUFHLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0I3QixhQUEvQixDQVJGLENBVkYsQ0F0QkYsQ0FwTkYsRUFnUUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixTQUFLLEVBQUU7QUFBRW1DLGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFtQyxXQUFPLEVBQUVvRCxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUU7QUFBTSxTQUFLLEVBQUU7QUFBRThCLGdCQUFVLEVBQUU7QUFBZCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FGRixDQURGLENBREYsQ0FoUUYsQ0FERixDQUpGLENBUkYsQ0F6U0YsQ0FERjtBQXlrQkQ7O0FBRWNySyxxRUFBZixFOzs7Ozs7Ozs7OztBQy9rQ0EsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvZHJpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kcml2ZXIuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgY29tcG9uZW50TW91bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCBzY3JpcHRzID0gW3sgc3JjOiBcIlNjcmlwdC9qZ28uanNcIiB9XTtcclxuICAgIHNjcmlwdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBpdGVtLnNyYztcclxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRNb3VudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgaGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkpnbyBXZWJzaXRlPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIkNzcy9pbmRleC5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LURmWGR6Mmh0UEgwbHNTU3M1bkNUcHVqL3p5NEMrT0dwYW1vRlZ5MzhNVkJuRStJYmJWWVVldytPckNYYVJrZmpcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LU9nVlJ2dUFUUDF6N0pqSExrdU9VN1h3NzA0K2g4MzVMcis2UUw5VXZZalpFM0lwdTZUcDc1ajdCaC9rUjBKS0lcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5RHp6aV9WQmNmMk9lZjZMVFZpTFU3NjdVUE5IbG5JemU0JmxpYnJhcmllcz1wbGFjZXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS43LjEvZGlzdC9sZWFmbGV0LmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTIteG9kWkJOVEM1bjE3WHQyYXRUUHVFMUh4alZNU3ZMVlc5b2NxVUtMc0NDNUNYZGJxQ21ibEFzaE9NQVM2L2tlcXEvc01aTVoxOXNjUjRQc1pDaFNSN0E9PVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuNy4xL2Rpc3QvbGVhZmxldC5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItWFFvWU1xTVRLOEx2ZHhYWUczblo0NDhoT0VRaWdsZnFrSnMxTk9RVjQ0Y1duVXJCYzhQa0FPY1h5MjB3MHZsYVhhVlVlYXJJT0JoaVhaNVYzeW54d0E9PVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cIlwiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gIFxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiZ28uanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IENvbXBvbmVudGRpZG1vdW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50ZGlkbW91bnRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGRyaXZlcigpIHtcclxuICB2YXIgY2xlYXIgPSAwO1xyXG4gIHZhciBzdWJtaXRDbGljayA9IDA7XHJcbiAgY29uc3QgW2ZuYW1lLCBzZXRmbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG5hbWUsIHNldGxuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttbmFtZSwgc2V0bW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9iaWxlLCBzZXRtb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldGFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmRjb25maXJtLCBzZXRwYXNzd29yZGNvbmZpcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc2VuY2VudW1iZXIsIHNldGxpc2VuY2VudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZlaGljbGUsIHNldHZlaGljbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ppcCwgc2V0emlwXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm92aW5jZWQsIHNldHByb3ZpbmNlZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eSwgc2V0Y2l0eV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eV9kcm9wZG93biwgc2V0Y2l0eWRyb3Bkb3duXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGF0ZWVudW1iZXIsIHNldHBsYXRlbnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRwcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkcml2ZXIsIHNldERyaXZlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmJpLCBzZXROYmldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29yY3IsIHNldE9jcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3Byb2ZpbGVfbmFtZSwgc2V0UHJvZmlsZW5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RyaXZlcl9saXNlbmNlLCBzZXREcml2ZXJsaXNlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYmlfY2xlYXJhbmNlLCBzZXROYmljbGVhcmFuY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29jcl9jbGVhcmFuY2UsIHNldE9jcmNsZWFyYW5jZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjEgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkJ0bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2sxID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMiA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjIuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazMgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYzLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWxlKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcm9maWxlbmFtZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0cHJvZmlsZShmaWxlKTtcclxuICAgICQoXCIuZGl2UHJvZmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXREcml2ZXJsaXNlbmNlKGZpbGUubmFtZSk7XHJcbiAgICBzZXREcml2ZXIoZmlsZSk7XHJcbiAgICAkKFwiLmRpdkRyaXZlclwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXROYmljbGVhcmFuY2UoZmlsZS5uYW1lKTtcclxuICAgIHNldE5iaShmaWxlKTtcclxuICAgICQoXCIuZGl2TmJpXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShmaWxlLm5hbWUpO1xyXG4gICAgc2V0T2NyKGZpbGUpO1xyXG4gICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI4LCAzMCwgMzMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjExNSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lvbnMgPSByZXF1aXJlKFwicGhpbGlwcGluZXMvcmVnaW9uc1wiKTtcclxuICBjb25zdCBwcm92aW5jZSA9IHJlcXVpcmUoXCJwaGlsaXBwaW5lcy9wcm92aW5jZXNcIik7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVxdWlyZShcInBoaWxpcHBpbmVzL2NpdGllc1wiKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbnNfYXBpLCBzZXRSZWdpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwcm92aW5jZV9hcGksIHNldFByb3ZpbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY2l0aWVzX2FwaSwgc2V0Q2l0aWVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3JlZ2lvbl9jaGFuZ2UsIHNldFJlZ2lvbkNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvdmluY2VfY2hhbmdlLCBzZXRQcm92aW5jZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0aWVzX2NoYW5nZSwgc2V0Q2l0aWVzQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVDaGFuZ2VSZWdpb24oZSkge1xyXG4gICB0cnkge1xyXG4gICAgc2V0UmVnaW9uQ2hhbmdlKGUudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3ZpbmNlXHJcbiAgICAgIC5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLnJlZ2lvbiA9PT0gZS52YWx1ZSlcclxuICAgICAgLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBpZDogZC5rZXksXHJcbiAgICAgICAgdmFsdWU6IGQua2V5LFxyXG4gICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgIH0pKTtcclxuICAgIHNldFByb3ZpbmNlKGRhdGEpO1xyXG4gICB9IGNhdGNoKGUpIHtcclxuXHJcbiAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhbmRsZUNoYW5nZVByb3ZpbmNlKGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldHByb3ZpbmNlZChlLmxhYmVsKTtcclxuICAgICAgc2V0UHJvdmluY2VDaGFuZ2UoZS52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjaXRpZXNcclxuICAgICAgICAuZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5wcm92aW5jZSA9PT0gZS5pZClcclxuICAgICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgICAgdmFsdWU6IGQubmFtZSxcclxuICAgICAgICAgIGxhYmVsOiBkLm5hbWUsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICBzZXRDaXRpZXMoZGF0YSk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7IFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGFuZGxlQ2hhbmdlQ2l0eShlKSB7XHJcbiAgIHRyeSB7XHJcbiAgICBzZXRjaXR5ZHJvcGRvd24oZS52YWx1ZS5sYWJlbCk7XHJcbiAgICBzZXRjaXR5KGUubGFiZWwpO1xyXG4gICB9Y2F0Y2goZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7IFxyXG4gICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YV9yZWdpb25zID0gcmVnaW9ucy5tYXAoKGQpID0+ICh7XHJcbiAgICAgIHZhbHVlOiBkLmtleSxcclxuICAgICAgbGFiZWw6IGQubmFtZSxcclxuICAgIH0pKTtcclxuICAgIHNldFJlZ2lvbihkYXRhX3JlZ2lvbnMpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGZuYW1lX2NoYW5nZShlKSB7XHJcbiAgICBzZXRmbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAkKFwiLnBGbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRGbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbW5hbWVfY2hhbmdlKGUpIHtcclxuICAgIHNldG1uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjbGVhciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxuYW1lX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBMbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRMbmFtZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRsbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBlbWFpbF9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wRW1haWxcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0ZW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbW9iaWxlX2NoYW5nZShlKSB7XHJcbiAgICBjb25zdCByZSA9IC9eWzAtOVxcYl0rJC87XHJcbiAgICAkKFwiLnBNb2JpbGVcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0TW9iaWxlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycgfHwgcmUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgc2V0bW9iaWxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgY2xlYXIgPSAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBhc3N3b3JkX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiMyYzJjMmNcIik7XHJcbiAgICBzZXRwYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwYXNzd29yZGNvbmZpcm1fY2hhbmdlKGUpIHtcclxuICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dENvbmZpcm1QYXNzXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIHNldHBhc3N3b3JkY29uZmlybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsaXNlbmNlX2NoYW5nZShlKSB7XHJcbiAgICAkKFwiLnBMaXNlbmNlXCIpLmNzcyhcImNvbG9yXCIsIFwid2hpdGVcIik7XHJcbiAgICAkKFwiLnR4dExpc2VuY2VcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0bGlzZW5jZW51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB6aXBfY2hhbmdlKGUpIHtcclxuICAgIHNldHppcChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwbGF0ZV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wUGxhdGVcIikuY3NzKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICQoXCIudHh0UGxhdGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjMmMyYzJjXCIpO1xyXG4gICAgc2V0cGxhdGVudW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gdmVoaWNsZV9jaGFuZ2UoZSkge1xyXG4gICAgJChcIi5wVmVoaWNsZVwiKS5jc3MoXCJjb2xvclwiLCBcIndoaXRlXCIpO1xyXG4gICAgJChcIi50eHRWZWhpY2xlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiIzJjMmMyY1wiKTtcclxuICAgIHNldHZlaGljbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIGNsZWFyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkcmVzc19jaGFuZ2UoZSkge1xyXG4gICAgc2V0YWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgY2xlYXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBpZiAoc3VibWl0Q2xpY2sgPT0gMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICBpZiAoZm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBGbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Rm5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobG5hbWUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBMbmFtZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TG5hbWVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBFbWFpbFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0RW1haWxcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTW9iaWxlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRNb2JpbGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAocGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkY29uZmlybSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChsaXNlbmNlbnVtYmVyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5wTGlzZW5jZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0TGlzZW5jZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChwbGF0ZWVudW1iZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBQbGF0ZVwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGxhdGVcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvZmlsZSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIuZGl2UHJvZmlsZVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChkcml2ZXIgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdkRyaXZlclwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChuYmkgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLmRpdk5iaVwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuICAgIGlmIChvcmNyID09IFwiXCIpIHtcclxuICAgICAgJChcIi5kaXZPY3JcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZlaGljbGUgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLnBWZWhpY2xlXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRWZWhpY2xlXCIpLmNzcyhcImJvcmRlckNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgY2xlYXIgPSAxO1xyXG4gICAgICAkKFwiLmJ0blwiKS5yZW1vdmVDbGFzcyhcImJ0bi0tbG9hZGluZ1wiKTtcclxuICAgICAgc3VibWl0Q2xpY2sgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZCA9PSBwYXNzd29yZGNvbmZpcm0pIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucENvbmZpcm1QYXNzXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRDb25maXJtUGFzc1wiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIucFBhc3N3b3JkXCIpLmNzcyhcImNvbG9yXCIsIFwiI2QzMmYyZlwiKTtcclxuICAgICAgJChcIi50eHRQYXNzd29yZFwiKS5jc3MoXCJib3JkZXJDb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgIGNsZWFyID0gMTtcclxuICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBwYXNzd29yZC5sZW5ndGggPiAxNikge1xyXG4gICAgICAkKFwiLnBDb25maXJtUGFzc1wiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0Q29uZmlybVBhc3NcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICAkKFwiLnBQYXNzd29yZFwiKS5jc3MoXCJjb2xvclwiLCBcIiNkMzJmMmZcIik7XHJcbiAgICAgICQoXCIudHh0UGFzc3dvcmRcIikuY3NzKFwiYm9yZGVyQ29sb3JcIiwgXCIjZDMyZjJmXCIpO1xyXG4gICAgICBjbGVhciA9IDE7XHJcbiAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAkKFwiLnBFcnJvclwiKS5zaG93KCk7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucEVycm9yXCIpLmhpZGUoKTtcclxuICAgICAgc3VibWl0Q2xpY2sgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGVhciA9PSAwKSB7XHJcbiAgICAgIHN1Ym1pdENsaWNrID0gMTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0aW5nXCIpO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgIGZvcm1kYXRhLnNldChcImZuYW1lXCIsIGZuYW1lKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwibG5hbWVcIiwgbG5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJtbmFtZVwiLCBtbmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcInByb2ZpbGVfcGljXCIsIHByb2ZpbGUsIHByb2ZpbGUubmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImVtYWlsXCIsIGVtYWlsKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwibW9iaWxlX25vXCIsIG1vYmlsZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImFkZHJlc3NcIiwgYWRkcmVzcyk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNpdHlcIiwgcHJvdmluY2VkKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwic3RhdGVcIiwgY2l0eSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNvdW50cnlcIiwgXCJQaGlsaXBwaW5lc1wiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiemlwXCIsIHppcCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIsIHBhc3N3b3JkKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsIHBhc3N3b3JkY29uZmlybSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyaXZlcl9saWNlbnNlXCIsIGRyaXZlciwgZHJpdmVyLm5hbWUpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJ2ZWhpY2xlX3R5cGVcIiwgdmVoaWNsZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBsYXRlX25vXCIsIHBsYXRlZW51bWJlcik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImxpY2Vuc2Vfbm9cIiwgbGlzZW5jZW51bWJlcik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcIm5iaV9jbGVhcmFuY2VcIiwgbmJpLCBuYmkubmFtZSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcIm9yY3JcIiwgb3Jjciwgb3Jjci5uYW1lKTtcclxuXHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyLWRyaXZlclwiO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGFwaVVybCwgZm9ybWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNkcml2ZXJNb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICBzdWNjZXNzTWVzc2FnZSgpO1xyXG4gICAgICAgICAgcmVzZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgJChcIi5idG5cIikucmVtb3ZlQ2xhc3MoXCJidG4tLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICBzdWJtaXRDbGljayA9IDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICQoXCIjZHJpdmVyTW9kYWxcIikuY3NzKFwiei1pbmRleFwiLCBcIjk5XCIpO1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1iYWNrZHJvcFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UoKTtcclxuICAgICAgICAgICQoXCIuYnRuXCIpLnJlbW92ZUNsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICAgICAgc3VibWl0Q2xpY2sgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VjY2Vzc01lc3NhZ2UoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjMDBDODUzXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvc3VjY2Vzcy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U3VjY2VzczwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgc3VjY2VzZnVsbHkgY3JlYXRlZC4gWW91IG1heSBub3cgbG9naW4uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldFZhbHVlKCkge1xyXG4gICAgc2V0Zm5hbWUoXCJcIik7XHJcbiAgICBzZXRtbmFtZShcIlwiKTtcclxuICAgIHNldGxuYW1lKFwiXCIpO1xyXG4gICAgc2V0ZW1haWwoXCJcIik7XHJcbiAgICBzZXRtb2JpbGUoXCJcIik7XHJcbiAgICBzZXRhZGRyZXNzKFwiXCIpO1xyXG4gICAgc2V0emlwKFwiXCIpO1xyXG4gICAgc2V0cGFzc3dvcmQoXCJcIik7XHJcbiAgICBzZXRwYXNzd29yZGNvbmZpcm0oXCJcIik7XHJcbiAgICBzZXR2ZWhpY2xlKFwiXCIpO1xyXG4gICAgc2V0cGxhdGVudW1iZXIoXCJcIik7XHJcbiAgICBzZXRsaXNlbmNlbnVtYmVyKFwiXCIpO1xyXG4gICAgc2V0UHJvZmlsZW5hbWUoXCJcIik7XHJcbiAgICBzZXRwcm9maWxlKFwiXCIpO1xyXG4gICAgc2V0RHJpdmVybGlzZW5jZShcIlwiKTtcclxuICAgIHNldERyaXZlcihcIlwiKTtcclxuICAgIHNldE5iaWNsZWFyYW5jZShcIlwiKTtcclxuICAgIHNldE5iaShcIlwiKTtcclxuICAgIHNldE9jcmNsZWFyYW5jZShcIlwiKTtcclxuICAgIHNldE9jcihcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVycm9yTWVzc2FnZSgpIHtcclxuICAgIHN3YWwoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICMwMEM4NTNcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9lcnJvci5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBFbWFpbCBpcyBub3QgYXZhaWxhYmxlIG9yIGFscmVhZHkgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG1haW5Db25Ecml2ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIGZpeGVkLXRvcFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHggMjBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZHJpdmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJlIGEgSkdPIERyaXZlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtZHJpdmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCb29rIGEgRGVsaXZlcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWRyaXZlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uRHJpdmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNTBweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTEyIGNvbC0xMiBhbGlnbi1zZWxmLXRvcCBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ29taW5nXCI+Q09NSU5HIFNPT048L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgc3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZCdXR0b24gZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2FwcGxlLnBuZ1wiIGNsYXNzTmFtZT1cImltZ0Rvd25sb2FkXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBvbiB0aGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BcHAgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJ1dHRvbiBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3BsYXlzdG9yZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nRG93bmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBpdCBvbiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkgU3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0xMiBjb2wtMTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Bob25lMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nUGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9waG9uZS5naWZcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nR2lmXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sRGVsaXZlcnkgXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvYm95LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nRGVsIG14LWF1dG8gZC1mbGV4XCJcclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uRHJpdmVyMlwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvYmFyLnBuZ1wiIGNsYXNzTmFtZT1cImltZ0JhclwiPjwvaW1nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2xvZ29ibGFjay5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vhc3lhcHAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Qm94Q2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2xpZGUtdG89ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2xpZGUtdG89ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1zbGlkZS10bz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcm91c2VsVGl0bGVcIj5TdGVwIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2Fyb3VzZWxDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vZG8gY29uc2VxdWF0LkR1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2Fyb3VzZWxUaXRsZVwiPlN0ZXAgMjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJvdXNlbENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9kbyBjb25zZXF1YXQuRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJvdXNlbFRpdGxlXCI+U3RlcCAzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcm91c2VsQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb2RvIGNvbnNlcXVhdC5EdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Bob25laGFuZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4XCJcclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uU3RlcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3N0ZXAxLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdTdGVwXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwU3RlcFRpdGxlXCI+UklERVI8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwU3RlcHN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWRcclxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3N0ZXAyLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdTdGVwXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwU3RlcFRpdGxlXCI+REVMSVZFUjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBTdGVwc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZFxyXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvci5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlN0ZXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvc3RlcDMuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ1N0ZXBcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBTdGVwVGl0bGVcIj5GQVFTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFN0ZXBzdWJcIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkXHJcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uQWJvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9hcnR3b3JrLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nQXJ0d29ya1wiXHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBcnR3b3JrXCI+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cclxuICAgICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBYm91dHVzXCI+QUJPVVQgVVM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWJvdXR1c1N1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWRcclxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICAgICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xyXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5EdWlzIGF1dGVcclxuICAgICAgICAgICAgICAgICAgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW1cclxuICAgICAgICAgICAgICAgICAgZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXRcclxuICAgICAgICAgICAgICAgICAgY3VwaWRhdGF0IG5vbiBwcm9pZGVudFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uRm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1bEZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCI+Q09NUEFOWTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNuZXdzXCI+Q09OVEFDVCBVUzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+UE9MSUNJRVM8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlGb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPlRFUk0gJiBDT05ESVRJT048L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcEZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIMKpIDIwMjAgSkdPIFBoaWxpcHBpbmVzLiAtIEFsbCBSaWdodHNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJkcml2ZXJNb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1kcml2ZXIgbW9kYWwtbGdcIlxyXG4gICAgICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1vZGFsRHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVcIj5KZ28gLSBEcml2ZXIgcmVnaXN0cmF0aW9uIGZvcm08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGFsVGl0bGVTdWJcIj5cclxuICAgICAgICAgICAgICAgIEZpbGwtdXAgYWxsIHRoZSByZXF1aXJkIGZpZWxkcy4gQWZ0ZXIgeW91IHN1Ym1pdCB3ZSB3aWxsIHNlbmQgYVxyXG4gICAgICAgICAgICAgICAgbGluayB0byB5b3VyIGVtYWlsIGZvciBkcml2ZXIgb25saW5lIHRyYWluaW5nLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvZGVyOiBcIjFweCBzb2xpZCAjNDE0MTQxXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2hyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwRm5hbWVcIj5GaXJzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+TWlkZGxlIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge21uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttbmFtZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExuYW1lXCI+TGFzdCBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bG5hbWVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBFbWFpbFwiPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBNb2JpbGVcIj5Nb2JpbGUgTnVtYmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlciB0eHRNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttb2JpbGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7YWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRyZXNzX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlJlZ2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZWdpb25zX2FwaX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlUmVnaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+UHJvdmluY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm92aW5jZV9hcGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZUNoYW5nZVByb3ZpbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q2l0eS9NdW5pY2lwYWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaXRpZXNfYXBpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzMX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlQ2hhbmdlQ2l0eX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eV9kcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+Q291bnRyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dERyaXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQaGlsaXBwaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlppcCBDb2RlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7emlwfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt6aXBfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQYXNzd29yZFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZF9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5QYXNzd29yZCBtdXN0IGJlIDYtMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlciBwQ29uZmlybVBhc3NcIj5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3Bhc3N3b3JkY29uZmlybX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0Q29uZmlybVBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZGNvbmZpcm1fY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBWZWhpY2xlXCI+VmVoaWNsZSBUeXBlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dmVoaWNsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0VmVoaWNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZlaGljbGVfY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyIHBQbGF0ZVwiPlBsYXRlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3BsYXRlZW51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHREcml2ZXIgdHh0UGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwbGF0ZV9jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXIgcExpc2VuY2VcIj5MaXNlbmNlIE51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2xpc2VuY2VudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0RHJpdmVyIHR4dExpc2VuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtsaXNlbmNlX2NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlByb2ZpbGUgUGljdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2UHJvZmlsZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e3Byb2ZpbGVfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5Ecml2ZXIgTGljZW5zZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMShlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjF9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZEcml2ZXIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2sxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57ZHJpdmVyX2xpc2VuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPk5CSSBDbGVhcmFuY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTIoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdkF0dGFjaG1lbnQgZGl2TmJpIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrMn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUeHREcml2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNFREM3MjhcIiB9fT5EcmFnIG9yIEJyb3dzZTwvc3Bhbj4gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e25iaV9jbGVhcmFuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVHh0RHJpdmVyXCI+T1JDUjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMyhlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjN9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2QXR0YWNobWVudCBkaXZPY3IgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2szfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFR4dERyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VEQzcyOFwiIH19PkRyYWcgb3IgQnJvd3NlPC9zcGFuPiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57b2NyX2NsZWFyYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0blN1Ym1pdERyaXZlclwiIG9uQ2xpY2s9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU0lHTlVQXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcml2ZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9