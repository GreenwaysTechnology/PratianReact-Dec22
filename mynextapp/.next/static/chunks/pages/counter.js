/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/counter"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=E%3A%5Csession%5Cpratian%5Cdec22%5CReactSession%5Cmynextapp%5Cpages%5Ccounter%5Cindex.tsx&page=%2Fcounter!":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=E%3A%5Csession%5Cpratian%5Cdec22%5CReactSession%5Cmynextapp%5Cpages%5Ccounter%5Cindex.tsx&page=%2Fcounter! ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/counter\",\n      function () {\n        return __webpack_require__(/*! ./pages/counter/index.tsx */ \"./pages/counter/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/counter\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1FJTNBJTVDc2Vzc2lvbiU1Q3ByYXRpYW4lNUNkZWMyMiU1Q1JlYWN0U2Vzc2lvbiU1Q215bmV4dGFwcCU1Q3BhZ2VzJTVDY291bnRlciU1Q2luZGV4LnRzeCZwYWdlPSUyRmNvdW50ZXIhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNERBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9kNWI4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvY291bnRlclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvY291bnRlci9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2NvdW50ZXJcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=E%3A%5Csession%5Cpratian%5Cdec22%5CReactSession%5Cmynextapp%5Cpages%5Ccounter%5Cindex.tsx&page=%2Fcounter!\n"));

/***/ }),

/***/ "./features/counter/coutner.tsx":
/*!**************************************!*\
  !*** ./features/counter/coutner.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Counter\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterSlice */ \"./features/counter/counterSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst Counter = (props)=>{\n    _s();\n    const value = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.counter.value);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Counter Increment Value : \",\n                    value\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.increment)());\n                },\n                children: \"Increment\"\n            }, void 0, false, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.decrement)());\n                },\n                children: \"Decrement\"\n            }, void 0, false, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementByAmount)(2));\n                },\n                children: \"IncrementByAmount\"\n            }, void 0, false, {\n                fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\features\\\\counter\\\\coutner.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Counter, \"Nsft19KCGn8HEUpoe9GMalF4FFI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Counter;\n\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb3VudGVyL2NvdXRuZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXVEO0FBQ2tCO0FBRXpFLE1BQU1LLFVBQVVDLENBQUFBLFFBQVM7O0lBRXJCLE1BQU1DLFFBQVFQLHdEQUFXQSxDQUFDUSxDQUFBQSxRQUFTQSxNQUFNQyxPQUFPLENBQUNGLEtBQUs7SUFDdEQsTUFBTUcsV0FBV1Qsd0RBQVdBO0lBRTVCLHFCQUFPOzswQkFDSCw4REFBQ1U7O29CQUFHO29CQUEyQko7Ozs7Ozs7MEJBQy9CLDhEQUFDSztnQkFBT0MsU0FBUyxJQUFNO29CQUNuQkgsU0FBU1Isd0RBQVNBO2dCQUN0QjswQkFBRzs7Ozs7OzBCQUNILDhEQUFDVTtnQkFBT0MsU0FBUyxJQUFNO29CQUNuQkgsU0FBU1Asd0RBQVNBO2dCQUN0QjswQkFBRzs7Ozs7OzBCQUNILDhEQUFDUztnQkFBT0MsU0FBUyxJQUFNO29CQUNuQkgsU0FBU04sZ0VBQWlCQSxDQUFDO2dCQUMvQjswQkFBRzs7Ozs7Ozs7QUFFWDtHQWpCTUM7O1FBRVlMLG9EQUFXQTtRQUNSQyxvREFBV0E7OztLQUgxQkk7QUFtQlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvY291bnRlci9jb3V0bmVyLnRzeD8zMDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gZnJvbSBcIi4vY291bnRlclNsaWNlXCI7XHJcblxyXG5jb25zdCBDb3VudGVyID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlci52YWx1ZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGgxPkNvdW50ZXIgSW5jcmVtZW50IFZhbHVlIDoge3ZhbHVlfTwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGluY3JlbWVudCgpKVxyXG4gICAgICAgIH19PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWNyZW1lbnQoKSlcclxuICAgICAgICB9fT5EZWNyZW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaW5jcmVtZW50QnlBbW91bnQoMikpXHJcbiAgICAgICAgfX0+SW5jcmVtZW50QnlBbW91bnQ8L2J1dHRvbj5cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgeyBDb3VudGVyIH0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiQ291bnRlciIsInByb3BzIiwidmFsdWUiLCJzdGF0ZSIsImNvdW50ZXIiLCJkaXNwYXRjaCIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/counter/coutner.tsx\n"));

/***/ }),

/***/ "./pages/counter/index.tsx":
/*!*********************************!*\
  !*** ./pages/counter/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counter_coutner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/counter/coutner */ \"./features/counter/coutner.tsx\");\n\n\nconst CounterPage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_counter_coutner__WEBPACK_IMPORTED_MODULE_1__.Counter, {}, void 0, false, {\n            fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\pages\\\\counter\\\\index.tsx\",\n            lineNumber: 6,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\session\\\\pratian\\\\dec22\\\\ReactSession\\\\mynextapp\\\\pages\\\\counter\\\\index.tsx\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\n_c = CounterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CounterPage);\nvar _c;\n$RefreshReg$(_c, \"CounterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBd0Q7QUFHeEQsTUFBTUMsY0FBY0MsQ0FBQUEsUUFBUztJQUN6QixxQkFBTyw4REFBQ0M7a0JBQ0gsNEVBQUNILDhEQUFPQTs7Ozs7Ozs7OztBQUVqQjtLQUpNQztBQUtOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvdW50ZXIvaW5kZXgudHN4P2E0ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi8uLi9mZWF0dXJlcy9jb3VudGVyL2NvdXRuZXJcIlxyXG5cclxuXHJcbmNvbnN0IENvdW50ZXJQYWdlID0gcHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgIDxDb3VudGVyLz5cclxuICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJQYWdlIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJDb3VudGVyUGFnZSIsInByb3BzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/counter/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=E%3A%5Csession%5Cpratian%5Cdec22%5CReactSession%5Cmynextapp%5Cpages%5Ccounter%5Cindex.tsx&page=%2Fcounter!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);