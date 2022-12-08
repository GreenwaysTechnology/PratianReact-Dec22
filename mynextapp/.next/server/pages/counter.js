"use strict";
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
exports.id = "pages/counter";
exports.ids = ["pages/counter"];
exports.modules = {

/***/ "./features/counter/counterSlice.ts":
/*!******************************************!*\
  !*** ./features/counter/counterSlice.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterReducer\": () => (/* binding */ counterReducer),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: 10\n};\n//action  =  'sliceName/reducerName'\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        increment (state) {\n            state.value++;\n        },\n        decrement (state) {\n            state.value--;\n        },\n        incrementByAmount (state, action) {\n            state.value += action.payload;\n        }\n    }\n});\nconst { increment , decrement , incrementByAmount  } = counterSlice.actions;\nconst counterReducer = counterSlice.reducer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNqQkMsT0FBTztBQUNYO0FBQ0Esb0NBQW9DO0FBQ3BDLE1BQU1DLGVBQWVILDZEQUFXQSxDQUFDO0lBQzdCSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDTkMsV0FBVUMsS0FBSyxFQUFFO1lBQ2JBLE1BQU1MLEtBQUs7UUFDZjtRQUNBTSxXQUFVRCxLQUFLLEVBQUU7WUFDYkEsTUFBTUwsS0FBSztRQUNmO1FBQ0FPLG1CQUFrQkYsS0FBSyxFQUFFRyxNQUFNLEVBQUU7WUFDN0JILE1BQU1MLEtBQUssSUFBSVEsT0FBT0MsT0FBTztRQUNqQztJQUNKO0FBQ0o7QUFDTyxNQUFNLEVBQUVMLFVBQVMsRUFBRUUsVUFBUyxFQUFFQyxrQkFBaUIsRUFBRSxHQUFHTixhQUFhUyxPQUFPO0FBQ3hFLE1BQU1DLGlCQUFpQlYsYUFBYVcsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215bmV4dGFwcC8uL2ZlYXR1cmVzL2NvdW50ZXIvY291bnRlclNsaWNlLnRzPzJiYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiAxMFxyXG59XHJcbi8vYWN0aW9uICA9ICAnc2xpY2VOYW1lL3JlZHVjZXJOYW1lJ1xyXG5jb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnY291bnRlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluY3JlbWVudChzdGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSsrXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWNyZW1lbnQoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUudmFsdWUtLVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jcmVtZW50QnlBbW91bnQoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gPSBjb3VudGVyU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgY291bnRlclJlZHVjZXIgPSBjb3VudGVyU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiY291bnRlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5jcmVtZW50Iiwic3RhdGUiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiY291bnRlclJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/counter/counterSlice.ts\n");

/***/ }),

/***/ "./features/counter/coutner.tsx":
/*!**************************************!*\
  !*** ./features/counter/coutner.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Counter\": () => (/* binding */ Counter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterSlice */ \"./features/counter/counterSlice.ts\");\n\n\n\nconst Counter = (props)=>{\n    const value = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.counter.value);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Counter Increment Value : \",\n                    value\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.increment)());\n                },\n                children: \"Increment\"\n            }, void 0, false, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.decrement)());\n                },\n                children: \"Decrement\"\n            }, void 0, false, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementByAmount)(2));\n                },\n                children: \"IncrementByAmount\"\n            }, void 0, false, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb3VudGVyL2NvdXRuZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXVEO0FBQ2tCO0FBRXpFLE1BQU1LLFVBQVVDLENBQUFBLFFBQVM7SUFFckIsTUFBTUMsUUFBUVAsd0RBQVdBLENBQUNRLENBQUFBLFFBQVNBLE1BQU1DLE9BQU8sQ0FBQ0YsS0FBSztJQUN0RCxNQUFNRyxXQUFXVCx3REFBV0E7SUFFNUIscUJBQU87OzBCQUNILDhEQUFDVTs7b0JBQUc7b0JBQTJCSjs7Ozs7OzswQkFDL0IsOERBQUNLO2dCQUFPQyxTQUFTLElBQU07b0JBQ25CSCxTQUFTUix3REFBU0E7Z0JBQ3RCOzBCQUFHOzs7Ozs7MEJBQ0gsOERBQUNVO2dCQUFPQyxTQUFTLElBQU07b0JBQ25CSCxTQUFTUCx3REFBU0E7Z0JBQ3RCOzBCQUFHOzs7Ozs7MEJBQ0gsOERBQUNTO2dCQUFPQyxTQUFTLElBQU07b0JBQ25CSCxTQUFTTixnRUFBaUJBLENBQUM7Z0JBQy9COzBCQUFHOzs7Ozs7OztBQUVYO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXluZXh0YXBwLy4vZmVhdHVyZXMvY291bnRlci9jb3V0bmVyLnRzeD8zMDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gZnJvbSBcIi4vY291bnRlclNsaWNlXCI7XHJcblxyXG5jb25zdCBDb3VudGVyID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlci52YWx1ZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGgxPkNvdW50ZXIgSW5jcmVtZW50IFZhbHVlIDoge3ZhbHVlfTwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGluY3JlbWVudCgpKVxyXG4gICAgICAgIH19PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWNyZW1lbnQoKSlcclxuICAgICAgICB9fT5EZWNyZW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaW5jcmVtZW50QnlBbW91bnQoMikpXHJcbiAgICAgICAgfX0+SW5jcmVtZW50QnlBbW91bnQ8L2J1dHRvbj5cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgeyBDb3VudGVyIH0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiQ291bnRlciIsInByb3BzIiwidmFsdWUiLCJzdGF0ZSIsImNvdW50ZXIiLCJkaXNwYXRjaCIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/counter/coutner.tsx\n");

/***/ }),

/***/ "./pages/counter/index.tsx":
/*!*********************************!*\
  !*** ./pages/counter/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counter_coutner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/counter/coutner */ \"./features/counter/coutner.tsx\");\n\n\nconst CounterPage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_counter_coutner__WEBPACK_IMPORTED_MODULE_1__.Counter, {}, void 0, false, {\n            fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\pages\\\\counter\\\\index.tsx\",\n            lineNumber: 6,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\pages\\\\counter\\\\index.tsx\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBd0Q7QUFHeEQsTUFBTUMsY0FBY0MsQ0FBQUEsUUFBUztJQUN6QixxQkFBTyw4REFBQ0M7a0JBQ0gsNEVBQUNILDhEQUFPQTs7Ozs7Ozs7OztBQUVqQjtBQUNBLGlFQUFlQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXluZXh0YXBwLy4vcGFnZXMvY291bnRlci9pbmRleC50c3g/YTRkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL2NvdW50ZXIvY291dG5lclwiXHJcblxyXG5cclxuY29uc3QgQ291bnRlclBhZ2UgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgPENvdW50ZXIvPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlclBhZ2UiXSwibmFtZXMiOlsiQ291bnRlciIsIkNvdW50ZXJQYWdlIiwicHJvcHMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/counter/index.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/counter/index.tsx"));
module.exports = __webpack_exports__;

})();