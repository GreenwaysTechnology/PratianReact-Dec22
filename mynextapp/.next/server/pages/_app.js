/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./features/counter/counterSlice.ts":
/*!******************************************!*\
  !*** ./features/counter/counterSlice.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterReducer\": () => (/* binding */ counterReducer),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: 10\n};\n//action  =  'sliceName/reducerName'\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        increment (state) {\n            state.value++;\n        },\n        decrement (state) {\n            state.value--;\n        },\n        incrementByAmount (state, action) {\n            state.value += action.payload;\n        }\n    }\n});\nconst { increment , decrement , incrementByAmount  } = counterSlice.actions;\nconst counterReducer = counterSlice.reducer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNqQkMsT0FBTztBQUNYO0FBQ0Esb0NBQW9DO0FBQ3BDLE1BQU1DLGVBQWVILDZEQUFXQSxDQUFDO0lBQzdCSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDTkMsV0FBVUMsS0FBSyxFQUFFO1lBQ2JBLE1BQU1MLEtBQUs7UUFDZjtRQUNBTSxXQUFVRCxLQUFLLEVBQUU7WUFDYkEsTUFBTUwsS0FBSztRQUNmO1FBQ0FPLG1CQUFrQkYsS0FBSyxFQUFFRyxNQUFNLEVBQUU7WUFDN0JILE1BQU1MLEtBQUssSUFBSVEsT0FBT0MsT0FBTztRQUNqQztJQUNKO0FBQ0o7QUFDTyxNQUFNLEVBQUVMLFVBQVMsRUFBRUUsVUFBUyxFQUFFQyxrQkFBaUIsRUFBRSxHQUFHTixhQUFhUyxPQUFPO0FBQ3hFLE1BQU1DLGlCQUFpQlYsYUFBYVcsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215bmV4dGFwcC8uL2ZlYXR1cmVzL2NvdW50ZXIvY291bnRlclNsaWNlLnRzPzJiYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiAxMFxyXG59XHJcbi8vYWN0aW9uICA9ICAnc2xpY2VOYW1lL3JlZHVjZXJOYW1lJ1xyXG5jb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnY291bnRlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluY3JlbWVudChzdGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSsrXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWNyZW1lbnQoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUudmFsdWUtLVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jcmVtZW50QnlBbW91bnQoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gPSBjb3VudGVyU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgY291bnRlclJlZHVjZXIgPSBjb3VudGVyU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiY291bnRlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5jcmVtZW50Iiwic3RhdGUiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiY291bnRlclJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/counter/counterSlice.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_3__.appStore,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRVE7QUFDSDtBQUVwQixTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQU8sOERBQUNKLGlEQUFRQTtRQUFDSyxPQUFPSiw0Q0FBUUE7a0JBQzlCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRTVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW5leHRhcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e2FwcFN0b3JlfT5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvUHJvdmlkZXI+XG59XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJhcHBTdG9yZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appStore\": () => (/* binding */ appStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/counter/counterSlice */ \"./features/counter/counterSlice.ts\");\n\n\nconst appStore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        counter: _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__.counterReducer\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlEO0FBQ2dCO0FBRzFELE1BQU1FLFdBQVdGLGdFQUFjQSxDQUFDO0lBQ25DRyxTQUFTO1FBQ0xDLFNBQVNILDBFQUFjQTtJQUMzQjtBQUNKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW5leHRhcHAvLi9zdG9yZS9pbmRleC50cz9iNWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgY291bnRlclJlZHVjZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBwU3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgY291bnRlcjogY291bnRlclJlZHVjZXJcclxuICAgIH1cclxufSkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjb3VudGVyUmVkdWNlciIsImFwcFN0b3JlIiwicmVkdWNlciIsImNvdW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();