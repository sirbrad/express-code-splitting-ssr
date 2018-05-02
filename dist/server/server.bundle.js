/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ \"./client/Loading.js\");\n\n\n\n\nconst LoadableBar = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Bar */ \"./client/Bar.js\")),\n  modules: ['./Bar'],\n  webpack: () => [/*require.resolve*/(/*! ./Bar */ \"./client/Bar.js\")],\n  loading: _Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst LoadableFoo = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Foo */ \"./client/Foo.js\")),\n  modules: ['./Foo'],\n  webpack: () => [/*require.resolve*/(/*! ./Foo */ \"./client/Foo.js\")],\n  loading: _Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      loadComponent: false\n    };\n  }\n\n  handleShowFoo(e) {\n    this.setState({\n      loadComponent: true\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        null,\n        \"I am a real app, yay\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { onClick: this.handleShowFoo.bind(this) },\n        \"Show Foo!\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadableBar, null),\n      this.state.loadComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadableFoo, null)\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/Loading.js":
/*!***************************!*\
  !*** ./client/Loading.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Loading = props => {\n  if (props.error) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      \"Error!\"\n    );\n  } else if (props.pastDelay) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      \"Loading...\"\n    );\n  } else {\n    return null;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./client/Loading.js?");

/***/ }),

/***/ "./dist/manifest.json":
/*!****************************!*\
  !*** ./dist/manifest.json ***!
  \****************************/
/*! exports provided: main.js, 0.bundle.js, 1.bundle.js, runtime~main.js, vendors.js, default */
/***/ (function(module) {

eval("module.exports = {\"main.js\":\"/client/main.bundle.js\",\"0.bundle.js\":\"/client/0.bundle.js\",\"1.bundle.js\":\"/client/1.bundle.js\",\"runtime~main.js\":\"/client/runtime~main.bundle.js\",\"vendors.js\":\"/client/vendors.bundle.js\"};\n\n//# sourceURL=webpack:///./dist/manifest.json?");

/***/ }),

/***/ "./dist/react-loadable.json":
/*!**********************************!*\
  !*** ./dist/react-loadable.json ***!
  \**********************************/
/*! exports provided: ./App, ./Loading, ./client/index.js, ./Bar, ./Foo, fbjs/lib/ExecutionEnvironment, ./camelize, fbjs/lib/camelizeStyleName, fbjs/lib/containsNode, fbjs/lib/emptyFunction, fbjs/lib/emptyObject, fbjs/lib/getActiveElement, ./hyphenate, fbjs/lib/hyphenateStyleName, fbjs/lib/invariant, ./isNode, ./isTextNode, fbjs/lib/shallowEqual, fbjs/lib/warning, object-assign, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, ./cjs/react-dom.development.js, react-dom, react-loadable, ./cjs/react.development.js, react, default */
/***/ (function(module) {

eval("module.exports = {\"./App\":[{\"id\":\"./client/App.js\",\"name\":\"./client/App.js\",\"file\":\"main.bundle.js\"}],\"./Loading\":[{\"id\":\"./client/Loading.js\",\"name\":\"./client/Loading.js\",\"file\":\"main.bundle.js\"}],\"./client/index.js\":[{\"id\":\"./client/index.js\",\"name\":\"./client/index.js\",\"file\":\"main.bundle.js\"}],\"./Bar\":[{\"id\":\"./client/Bar.js\",\"name\":\"./client/Bar.js\",\"file\":\"0.bundle.js\"}],\"./Foo\":[{\"id\":\"./client/Foo.js\",\"name\":\"./client/Foo.js\",\"file\":\"1.bundle.js\"}],\"fbjs/lib/ExecutionEnvironment\":[{\"id\":\"./node_modules/fbjs/lib/ExecutionEnvironment.js\",\"name\":\"./node_modules/fbjs/lib/ExecutionEnvironment.js\",\"file\":\"vendors.bundle.js\"}],\"./camelize\":[{\"id\":\"./node_modules/fbjs/lib/camelize.js\",\"name\":\"./node_modules/fbjs/lib/camelize.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/camelizeStyleName\":[{\"id\":\"./node_modules/fbjs/lib/camelizeStyleName.js\",\"name\":\"./node_modules/fbjs/lib/camelizeStyleName.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/containsNode\":[{\"id\":\"./node_modules/fbjs/lib/containsNode.js\",\"name\":\"./node_modules/fbjs/lib/containsNode.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/emptyFunction\":[{\"id\":\"./node_modules/fbjs/lib/emptyFunction.js\",\"name\":\"./node_modules/fbjs/lib/emptyFunction.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/emptyObject\":[{\"id\":\"./node_modules/fbjs/lib/emptyObject.js\",\"name\":\"./node_modules/fbjs/lib/emptyObject.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/getActiveElement\":[{\"id\":\"./node_modules/fbjs/lib/getActiveElement.js\",\"name\":\"./node_modules/fbjs/lib/getActiveElement.js\",\"file\":\"vendors.bundle.js\"}],\"./hyphenate\":[{\"id\":\"./node_modules/fbjs/lib/hyphenate.js\",\"name\":\"./node_modules/fbjs/lib/hyphenate.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/hyphenateStyleName\":[{\"id\":\"./node_modules/fbjs/lib/hyphenateStyleName.js\",\"name\":\"./node_modules/fbjs/lib/hyphenateStyleName.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/invariant\":[{\"id\":\"./node_modules/fbjs/lib/invariant.js\",\"name\":\"./node_modules/fbjs/lib/invariant.js\",\"file\":\"vendors.bundle.js\"}],\"./isNode\":[{\"id\":\"./node_modules/fbjs/lib/isNode.js\",\"name\":\"./node_modules/fbjs/lib/isNode.js\",\"file\":\"vendors.bundle.js\"}],\"./isTextNode\":[{\"id\":\"./node_modules/fbjs/lib/isTextNode.js\",\"name\":\"./node_modules/fbjs/lib/isTextNode.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/shallowEqual\":[{\"id\":\"./node_modules/fbjs/lib/shallowEqual.js\",\"name\":\"./node_modules/fbjs/lib/shallowEqual.js\",\"file\":\"vendors.bundle.js\"}],\"fbjs/lib/warning\":[{\"id\":\"./node_modules/fbjs/lib/warning.js\",\"name\":\"./node_modules/fbjs/lib/warning.js\",\"file\":\"vendors.bundle.js\"}],\"object-assign\":[{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"vendors.bundle.js\"}],\"prop-types/checkPropTypes\":[{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"vendors.bundle.js\"}],\"./factoryWithTypeCheckers\":[{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"vendors.bundle.js\"}],\"prop-types\":[{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"vendors.bundle.js\"}],\"./lib/ReactPropTypesSecret\":[{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"vendors.bundle.js\"}],\"./cjs/react-dom.development.js\":[{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"vendors.bundle.js\"}],\"react-dom\":[{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"vendors.bundle.js\"}],\"react-loadable\":[{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"vendors.bundle.js\"}],\"./cjs/react.development.js\":[{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"vendors.bundle.js\"}],\"react\":[{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"vendors.bundle.js\"}]};\n\n//# sourceURL=webpack:///./dist/react-loadable.json?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _App = __webpack_require__(/*! ../client/App */ \"./client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _manifest = __webpack_require__(/*! ../dist/manifest */ \"./dist/manifest.json\");\n\nvar _manifest2 = _interopRequireDefault(_manifest);\n\nvar _webpack = __webpack_require__(/*! react-loadable/webpack */ \"react-loadable/webpack\");\n\nvar _reactLoadable3 = __webpack_require__(/*! ../dist/react-loadable.json */ \"./dist/react-loadable.json\");\n\nvar _reactLoadable4 = _interopRequireDefault(_reactLoadable3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\nvar html = function html(markup, bundles) {\n  return \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <meta charset=\\\"utf-8\\\">\\n        <title>React SSR!</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\" + markup + \"</div>\\n        <script src=\\\"/client/runtime~main.bundle.js\\\"></script>\\n        <script src=\\\"/client/vendors.bundle.js\\\"></script>\\n        \" + bundles.map(function (bundle) {\n    return \"<script src=\\\"/client/\" + bundle.file + \"\\\"></script>\";\n  }).join('\\n') + \"\\n        <script src=\\\"/client/main.bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \";\n};\n\napp.use(_express2.default.static('dist'));\napp.get('/*', function (req, res) {\n  var modules = [];\n  var markup = (0, _server.renderToString)(_react2.default.createElement(\n    _reactLoadable2.default.Capture,\n    { report: function report(moduleName) {\n        return modules.push(moduleName);\n      } },\n    _react2.default.createElement(_App2.default, null)\n  ));\n\n  var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);\n\n  res.end(html(markup, bundles));\n});\n\n_reactLoadable2.default.preloadAll().then(function () {\n  app.listen(3000, function () {\n    return console.log('Example app listening on port 3000!');\n  });\n}).catch(function (err) {\n  console.log(err);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable/webpack\");\n\n//# sourceURL=webpack:///external_%22react-loadable/webpack%22?");

/***/ })

/******/ });