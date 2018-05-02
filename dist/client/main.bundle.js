(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ \"./client/Loading.js\");\n\n\n\n\nconst LoadableBar = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Bar */ \"./client/Bar.js\")),\n  modules: ['./Bar'],\n  webpack: () => [/*require.resolve*/(/*! ./Bar */ \"./client/Bar.js\")],\n  loading: _Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst LoadableFoo = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Foo */ \"./client/Foo.js\")),\n  modules: ['./Foo'],\n  webpack: () => [/*require.resolve*/(/*! ./Foo */ \"./client/Foo.js\")],\n  loading: _Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      loadComponent: false\n    };\n  }\n\n  handleShowFoo(e) {\n    this.setState({\n      loadComponent: true\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        null,\n        \"I am a real app, yay\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { onClick: this.handleShowFoo.bind(this) },\n        \"Show Foo!\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadableBar, null),\n      this.state.loadComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadableFoo, null)\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/Loading.js":
/*!***************************!*\
  !*** ./client/Loading.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Loading = props => {\n  if (props.error) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      \"Error!\"\n    );\n  } else if (props.pastDelay) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      \"Loading...\"\n    );\n  } else {\n    return null;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./client/Loading.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./client/App.js\");\n\n\n\n\n\nreact_loadable__WEBPACK_IMPORTED_MODULE_2___default.a.preloadReady().then(() => {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), document.getElementById('root'));\n});\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

},[["./client/index.js","runtime~main","vendors"]]]);