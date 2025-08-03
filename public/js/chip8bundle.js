/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Chip8.js":
/*!**********************!*\
  !*** ./src/Chip8.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chip8: () => (/* binding */ Chip8)\n/* harmony export */ });\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display */ \"./src/Display.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n\nvar Chip8 = /*#__PURE__*/_createClass(function Chip8() {\n  _classCallCheck(this, Chip8);\n  console.log(\"New Chip8 instance\");\n  this.display = new _Display__WEBPACK_IMPORTED_MODULE_0__.Display();\n});\n\n//# sourceURL=webpack://chip8-emulator/./src/Chip8.js?\n}");

/***/ }),

/***/ "./src/Display.js":
/*!************************!*\
  !*** ./src/Display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/displayConstants */ \"./src/constants/displayConstants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Display = /*#__PURE__*/function () {\n  function Display() {\n    _classCallCheck(this, Display);\n    // console.log(\"New Display instance\");\n    this.screen = document.querySelector(\"canvas\"); //seleciona o canvas da tela\n    this.screen.width = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER; //define a largura do canvas\n    this.screen.height = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER; //define a altura do canvas\n\n    this.context = this.screen.getContext(\"2d\"); // pega o contexto do canvas 2d\n    this.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_BACKGROUND_COLOR_BLACK; //define a cor preta\n    this.context.fillRect(0, 0, this.screen.width, this.screen.height);\n    this.frameBuffer = [];\n    this.reset();\n  }\n  return _createClass(Display, [{\n    key: \"reset\",\n    value: function reset() {\n      for (var y = 0; y < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT; y++) {\n        this.frameBuffer.push([]);\n        for (var x = 0; x < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH; x++) {\n          this.frameBuffer[y].push(1);\n        }\n      }\n      this.context.fillRect(0, 0, this.screen.width, this.screen.height);\n      this.drawBuffer();\n    }\n  }, {\n    key: \"drawBuffer\",\n    value: function drawBuffer() {\n      for (var h = 0; h < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT; h++) {\n        this.frameBuffer.push([]);\n        for (var w = 0; w < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH; w++) {\n          this.drawPixel(h, w, this.frameBuffer[h][w]);\n        }\n      }\n    }\n  }, {\n    key: \"drawPixel\",\n    value: function drawPixel(h, w, value) {\n      if (value) {\n        this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_COLOR_GREEN;\n      } else {\n        this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_BACKGROUND_COLOR_BLACK;\n      }\n      this.context.fillRect(w * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER, h * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER, _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER, _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLIER);\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://chip8-emulator/./src/Display.js?\n}");

/***/ }),

/***/ "./src/constants/displayConstants.js":
/*!*******************************************!*\
  !*** ./src/constants/displayConstants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DISPLAY_BACKGROUND_COLOR_BLACK: () => (/* binding */ DISPLAY_BACKGROUND_COLOR_BLACK),\n/* harmony export */   DISPLAY_COLOR_GREEN: () => (/* binding */ DISPLAY_COLOR_GREEN),\n/* harmony export */   DISPLAY_HEIGHT: () => (/* binding */ DISPLAY_HEIGHT),\n/* harmony export */   DISPLAY_MULTIPLIER: () => (/* binding */ DISPLAY_MULTIPLIER),\n/* harmony export */   DISPLAY_WIDTH: () => (/* binding */ DISPLAY_WIDTH)\n/* harmony export */ });\nvar DISPLAY_WIDTH = 64;\nvar DISPLAY_HEIGHT = 32;\nvar DISPLAY_BACKGROUND_COLOR_BLACK = \"#000000\";\nvar DISPLAY_MULTIPLIER = 10;\nvar DISPLAY_COLOR_GREEN = \"#3F6A17\";\n\n//# sourceURL=webpack://chip8-emulator/./src/constants/displayConstants.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chip8 */ \"./src/Chip8.js\");\n\nvar chip8 = new _Chip8__WEBPACK_IMPORTED_MODULE_0__.Chip8();\n\n//# sourceURL=webpack://chip8-emulator/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;