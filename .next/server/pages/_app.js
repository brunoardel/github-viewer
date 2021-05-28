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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_css_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/reset.css */ "./public/css/reset.css");
/* harmony import */ var _public_css_reset_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_reset_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_css_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/css/fonts.css */ "./public/css/fonts.css");
/* harmony import */ var _public_css_fonts_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_fonts_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme */ "./theme/index.js");


var _jsxFileName = "C:\\Users\\Hardel\\Documents\\Projetos\\Github\\github-viewer\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/images/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"], {
      theme: theme__WEBPACK_IMPORTED_MODULE_7__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

App.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};
  const {
    req
  } = ctx;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./public/css/fonts.css":
/*!******************************!*\
  !*** ./public/css/fonts.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/reset.css":
/*!******************************!*\
  !*** ./public/css/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme/index.js":
/*!************************!*\
  !*** ./theme/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography */ "./theme/typography.js");
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overrides */ "./theme/overrides/index.js");




const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: _palette__WEBPACK_IMPORTED_MODULE_1__["default"],
  typography: _typography__WEBPACK_IMPORTED_MODULE_2__["default"],
  overrides: _overrides__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./theme/overrides/MuiButton.js":
/*!**************************************!*\
  !*** ./theme/overrides/MuiButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  label: {
    color: 'white',
    fontSize: 16
  }
});

/***/ }),

/***/ "./theme/overrides/MuiPaper.js":
/*!*************************************!*\
  !*** ./theme/overrides/MuiPaper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  elevation1: {
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
  }
});

/***/ }),

/***/ "./theme/overrides/index.js":
/*!**********************************!*\
  !*** ./theme/overrides/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MuiButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MuiButton */ "./theme/overrides/MuiButton.js");
/* harmony import */ var _MuiPaper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MuiPaper */ "./theme/overrides/MuiPaper.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  MuiButton: _MuiButton__WEBPACK_IMPORTED_MODULE_0__["default"],
  MuiPaper: _MuiPaper__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./theme/palette.js":
/*!**************************!*\
  !*** ./theme/palette.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);


const white = '#FFFFFF';
const black = '#000000';
/* harmony default export */ __webpack_exports__["default"] = ({
  black,
  white,
  primary: {
    contrastText: black,
    dark: '#ee7656',
    main: '#ee7656',
    light: '#ecfa84'
  },
  secondary: {
    contrastText: black,
    dark: '#ff6420',
    main: '#ff8200',
    light: '#ff8e5d'
  },
  text: {
    primary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[900],
    secondary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[600],
    link: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[600]
  },
  background: {
    default: '#e0dfda',
    paper: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[200]
  },
  icon: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[600]
});

/***/ }),

/***/ "./theme/typography.js":
/*!*****************************!*\
  !*** ./theme/typography.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  fontFamily: ['Graphik', 'sans-serif'],
  h1: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 400,
    fontSize: '96px',
    lineHeight: '106px'
  },
  h2: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 400,
    fontSize: '60px',
    lineHeight: '66px'
  },
  h3: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 400,
    fontSize: '48px',
    lineHeight: '53px'
  },
  h4: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 400,
    fontSize: '34px',
    lineHeight: '37px'
  },
  h5: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '26px'
  },
  h6: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '22px'
  },
  subtitle1: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontSize: '16px',
    lineHeight: '18px'
  },
  subtitle2: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '15px'
  },
  body1: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontSize: '16px',
    lineHeight: '18px'
  },
  body2: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontSize: '14px',
    lineHeight: '15px'
  },
  button: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontSize: '15px'
  },
  caption: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontSize: '12px',
    lineHeight: '13px'
  },
  overline: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '13px',
    textTransform: 'uppercase'
  }
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9vdmVycmlkZXMvTXVpQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3RoZW1lL292ZXJyaWRlcy9NdWlQYXBlci5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9vdmVycmlkZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwb2dyYXBoeSIsIm92ZXJyaWRlcyIsImxhYmVsIiwiY29sb3IiLCJmb250U2l6ZSIsImVsZXZhdGlvbjEiLCJib3hTaGFkb3ciLCJNdWlCdXR0b24iLCJNdWlQYXBlciIsIndoaXRlIiwiYmxhY2siLCJwcmltYXJ5IiwiY29udHJhc3RUZXh0IiwiZGFyayIsIm1haW4iLCJsaWdodCIsInNlY29uZGFyeSIsInRleHQiLCJjb2xvcnMiLCJibHVlR3JleSIsImxpbmsiLCJibHVlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsImdyZXkiLCJpY29uIiwiZm9udEZhbWlseSIsImgxIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2Iiwic3VidGl0bGUxIiwic3VidGl0bGUyIiwiYm9keTEiLCJib2R5MiIsImJ1dHRvbiIsImNhcHRpb24iLCJvdmVybGluZSIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FB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LDhDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3Jlc2V0LmNzcydcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9mb250cy5jc3MnXG5cbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSdcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9XG4gIGNvbnN0IHsgcmVxIH0gPSBjdHhcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYWdlUHJvcHMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL3R5cG9ncmFwaHknXG5pbXBvcnQgb3ZlcnJpZGVzIGZyb20gJy4vb3ZlcnJpZGVzJ1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZSxcbiAgdHlwb2dyYXBoeSxcbiAgb3ZlcnJpZGVzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbGFiZWw6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVsZXZhdGlvbjE6IHtcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAxcHggcmdiYSg2Myw2Myw2OCwwLjA1KSwgMCAxcHggM3B4IDAgcmdiYSg2Myw2Myw2OCwwLjE1KSdcbiAgfVxufTtcbiIsImltcG9ydCBNdWlCdXR0b24gZnJvbSAnLi9NdWlCdXR0b24nXG5pbXBvcnQgTXVpUGFwZXIgZnJvbSAnLi9NdWlQYXBlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBNdWlCdXR0b24sXG4gIE11aVBhcGVyLFxufVxuIiwiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBncmV5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xuXG5jb25zdCB3aGl0ZSA9ICcjRkZGRkZGJ1xuY29uc3QgYmxhY2sgPSAnIzAwMDAwMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBibGFjayxcbiAgd2hpdGUsXG4gIHByaW1hcnk6IHtcbiAgICBjb250cmFzdFRleHQ6IGJsYWNrLFxuICAgIGRhcms6ICcjZWU3NjU2JyxcbiAgICBtYWluOiAnI2VlNzY1NicsXG4gICAgbGlnaHQ6ICcjZWNmYTg0JyxcbiAgfSxcbiAgc2Vjb25kYXJ5OiB7XG4gICAgY29udHJhc3RUZXh0OiBibGFjayxcbiAgICBkYXJrOiAnI2ZmNjQyMCcsXG4gICAgbWFpbjogJyNmZjgyMDAnLFxuICAgIGxpZ2h0OiAnI2ZmOGU1ZCcsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiBjb2xvcnMuYmx1ZUdyZXlbOTAwXSxcbiAgICBzZWNvbmRhcnk6IGNvbG9ycy5ibHVlR3JleVs2MDBdLFxuICAgIGxpbms6IGNvbG9ycy5ibHVlWzYwMF0sXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBkZWZhdWx0OiAnI2UwZGZkYScsXG4gICAgcGFwZXI6IGNvbG9ycy5ncmV5WzIwMF0sXG4gIH0sXG5cbiAgaWNvbjogY29sb3JzLmJsdWVHcmV5WzYwMF0sXG59XG4iLCJpbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9udEZhbWlseTogWydHcmFwaGlrJywgJ3NhbnMtc2VyaWYnXSxcbiAgaDE6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGZvbnRTaXplOiAnOTZweCcsXG4gICAgbGluZUhlaWdodDogJzEwNnB4JyxcbiAgfSxcbiAgaDI6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGZvbnRTaXplOiAnNjBweCcsXG4gICAgbGluZUhlaWdodDogJzY2cHgnLFxuICB9LFxuICBoMzoge1xuICAgIGNvbG9yOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgZm9udFNpemU6ICc0OHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnNTNweCcsXG4gIH0sXG4gIGg0OiB7XG4gICAgY29sb3I6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBmb250U2l6ZTogJzM0cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICczN3B4JyxcbiAgfSxcbiAgaDU6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgbGluZUhlaWdodDogJzI2cHgnLFxuICB9LFxuICBoNjoge1xuICAgIGNvbG9yOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gIH0sXG4gIHN1YnRpdGxlMToge1xuICAgIGNvbG9yOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgfSxcbiAgc3VidGl0bGUyOiB7XG4gICAgY29sb3I6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgbGluZUhlaWdodDogJzE1cHgnLFxuICB9LFxuICBib2R5MToge1xuICAgIGNvbG9yOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgfSxcbiAgYm9keTI6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNXB4JyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgIGZvbnRTaXplOiAnMTVweCcsXG4gIH0sXG4gIGNhcHRpb246IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxM3B4JyxcbiAgfSxcbiAgb3ZlcmxpbmU6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMTNweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIH0sXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==