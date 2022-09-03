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

/***/ "./Context/AuthModalContext.tsx":
/*!**************************************!*\
  !*** ./Context/AuthModalContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthModalProvider\": () => (/* binding */ AuthModalProvider),\n/* harmony export */   \"UseAuthContext\": () => (/* binding */ UseAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthModalProvider({ children  }) {\n    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onClose = ()=>{\n        setOpen(false);\n    };\n    const onOpen = ()=>{\n        setOpen(true);\n    };\n    const value = {\n        isOpen,\n        onClose,\n        onOpen\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\Context\\\\AuthModalContext.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\nfunction UseAuthContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);\n    if (context === undefined) {\n        throw new Error(\"UseAuthContext must be used within a AuthModalProvider\");\n    }\n    return context;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L0F1dGhNb2RhbENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTREO0FBVzVELE1BQU1HLFlBQVksaUJBQUdILG9EQUFhLENBQzlCSSxTQUFTLENBQ1o7QUFFRCxTQUFTQyxpQkFBaUIsQ0FBQyxFQUFFQyxRQUFRLEdBQTBCLEVBQUU7SUFDN0QsTUFBTSxLQUFDQyxNQUFNLE1BQUVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFekMsTUFBTU8sT0FBTyxHQUFHLElBQU07UUFDbEJELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUVELE1BQU1FLE1BQU0sR0FBRyxJQUFNO1FBQ2pCRixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakI7SUFFRCxNQUFNRyxLQUFLLEdBQUc7UUFBRUosTUFBTTtRQUFFRSxPQUFPO1FBQUVDLE1BQU07S0FBRTtJQUV6QyxxQkFDSSw4REFBQ1AsWUFBWSxDQUFDUyxRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFBR0wsUUFBUTs7Ozs7WUFBeUIsQ0FDekU7Q0FDTDtBQUVELFNBQVNPLGNBQWMsR0FBRztJQUN0QixNQUFNQyxPQUFPLEdBQUdiLGlEQUFVLENBQUNFLFlBQVksQ0FBQztJQUN4QyxJQUFJVyxPQUFPLEtBQUtWLFNBQVMsRUFBRTtRQUN2QixNQUFNLElBQUlXLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO0tBQzdFO0lBQ0QsT0FBT0QsT0FBTyxDQUFDO0NBQ2xCO0FBRTRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29sbmZ0LXJlZmFjdG9yLy4vQ29udGV4dC9BdXRoTW9kYWxDb250ZXh0LnRzeD8wMzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBBdXRoTW9kYWxDb250ZXh0SW50ZXJmYWNlIHtcbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgb25PcGVuOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5pbnRlcmZhY2UgQXV0aE1vZGFsUHJvdmlkZXJQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoTW9kYWxDb250ZXh0SW50ZXJmYWNlIHwgdW5kZWZpbmVkPihcbiAgICB1bmRlZmluZWRcbik7XG5cbmZ1bmN0aW9uIEF1dGhNb2RhbFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aE1vZGFsUHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uT3BlbiA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsdWUgPSB7IGlzT3Blbiwgb25DbG9zZSwgb25PcGVuIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFVzZUF1dGhDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VBdXRoQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQXV0aE1vZGFsUHJvdmlkZXJcIik7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyBVc2VBdXRoQ29udGV4dCwgQXV0aE1vZGFsUHJvdmlkZXIgfTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIk1vZGFsQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhNb2RhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJzZXRPcGVuIiwib25DbG9zZSIsIm9uT3BlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJVc2VBdXRoQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Context/AuthModalContext.tsx\n");

/***/ }),

/***/ "./Context/UserContext.tsx":
/*!*********************************!*\
  !*** ./Context/UserContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction UserReducer(state, action) {\n    switch(action.type){\n        case \"login\":\n            {\n                return {\n                    access_token: action.state?.access_token,\n                    id_token: action.state?.id_token,\n                    id: action.state?.id\n                };\n            }\n        case \"logout\":\n            {\n                return {\n                    access_token: undefined,\n                    id_token: undefined,\n                    id: undefined\n                };\n            }\n        default:\n            {\n                throw new Error(`Unhandled action: ${action}`);\n            }\n    }\n}\nfunction UserProvider({ children  }) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(UserReducer, {\n        access_token: undefined,\n        id_token: undefined,\n        id: undefined\n    });\n    const get_access_token = ()=>{\n        return state.access_token;\n    };\n    const value = {\n        state,\n        dispatch,\n        get_access_token\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\Context\\\\UserContext.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\nfunction useUser() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (context === undefined) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L1VzZXJDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4RDtBQW9COUQsTUFBTUcsV0FBVyxpQkFBR0gsb0RBQWEsQ0FBbUNJLFNBQVMsQ0FBQztBQUU5RSxTQUFTQyxXQUFXLENBQUNDLEtBQVksRUFBRUMsTUFBYyxFQUFFO0lBQ2xELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNsQixLQUFLLE9BQU87WUFBRTtnQkFDYixPQUFPO29CQUNOQyxZQUFZLEVBQUVGLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFRyxZQUFZO29CQUN4Q0MsUUFBUSxFQUFFSCxNQUFNLENBQUNELEtBQUssRUFBRUksUUFBUTtvQkFDaENDLEVBQUUsRUFBRUosTUFBTSxDQUFDRCxLQUFLLEVBQUVLLEVBQUU7aUJBQ3BCLENBQUM7YUFDRjtRQUNELEtBQUssUUFBUTtZQUFFO2dCQUNkLE9BQU87b0JBQUVGLFlBQVksRUFBRUwsU0FBUztvQkFBRU0sUUFBUSxFQUFFTixTQUFTO29CQUFFTyxFQUFFLEVBQUVQLFNBQVM7aUJBQUUsQ0FBQzthQUN2RTtRQUNEO1lBQVM7Z0JBQ1IsTUFBTSxJQUFJUSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9DO0tBQ0Q7Q0FDRDtBQUVELFNBQVNNLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQXFCLEVBQUU7SUFDdEQsTUFBTSxLQUFDUixLQUFLLE1BQUVTLFFBQVEsTUFBSWIsaURBQVUsQ0FBQ0csV0FBVyxFQUFFO1FBQ2pESSxZQUFZLEVBQUVMLFNBQVM7UUFDdkJNLFFBQVEsRUFBRU4sU0FBUztRQUNuQk8sRUFBRSxFQUFFUCxTQUFTO0tBQ2IsQ0FBQztJQUVGLE1BQU1ZLGdCQUFnQixHQUFHLElBQU07UUFDOUIsT0FBT1YsS0FBSyxDQUFDRyxZQUFZLENBQUM7S0FDMUI7SUFFRCxNQUFNUSxLQUFLLEdBQUc7UUFBRVgsS0FBSztRQUFFUyxRQUFRO1FBQUVDLGdCQUFnQjtLQUFFO0lBQ25ELHFCQUFPLDhEQUFDYixXQUFXLENBQUNlLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHSCxRQUFROzs7OztZQUF3QixDQUFDO0NBQzdFO0FBRUQsU0FBU0ssT0FBTyxHQUFHO0lBQ2xCLE1BQU1DLE9BQU8sR0FBR25CLGlEQUFVLENBQUNFLFdBQVcsQ0FBQztJQUN2QyxJQUFJaUIsT0FBTyxLQUFLaEIsU0FBUyxFQUFFO1FBQzFCLE1BQU0sSUFBSVEsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FDOUQ7SUFDRCxPQUFPUSxPQUFPLENBQUM7Q0FDZjtBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvbG5mdC1yZWZhY3Rvci8uL0NvbnRleHQvVXNlckNvbnRleHQudHN4P2I0ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFVzZXJQcm92aWRlclByb3BzID0geyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH07XG50eXBlIFN0YXRlID0ge1xuXHRhY2Nlc3NfdG9rZW46IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0aWRfdG9rZW46IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG50eXBlIEFjdGlvbiA9IHtcblx0dHlwZTogXCJsb2dpblwiIHwgXCJsb2dvdXRcIjtcblx0c3RhdGU/OiBTdGF0ZTtcbn07XG50eXBlIERpc3BhdGNoID0gKGFjdGlvbjogQWN0aW9uKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgVXNlckNvbnRleHRJbnRlcmZhY2Uge1xuXHRzdGF0ZTogU3RhdGU7XG5cdGRpc3BhdGNoOiBEaXNwYXRjaDtcblx0Z2V0X2FjY2Vzc190b2tlbjogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRJbnRlcmZhY2UgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmZ1bmN0aW9uIFVzZXJSZWR1Y2VyKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgXCJsb2dpblwiOiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRhY2Nlc3NfdG9rZW46IGFjdGlvbi5zdGF0ZT8uYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHRpZF90b2tlbjogYWN0aW9uLnN0YXRlPy5pZF90b2tlbixcblx0XHRcdFx0aWQ6IGFjdGlvbi5zdGF0ZT8uaWQsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYXNlIFwibG9nb3V0XCI6IHtcblx0XHRcdHJldHVybiB7IGFjY2Vzc190b2tlbjogdW5kZWZpbmVkLCBpZF90b2tlbjogdW5kZWZpbmVkLCBpZDogdW5kZWZpbmVkIH07XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbjogJHthY3Rpb259YCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIFVzZXJQcm92aWRlcih7IGNoaWxkcmVuIH06IFVzZXJQcm92aWRlclByb3BzKSB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihVc2VyUmVkdWNlciwge1xuXHRcdGFjY2Vzc190b2tlbjogdW5kZWZpbmVkLFxuXHRcdGlkX3Rva2VuOiB1bmRlZmluZWQsXG5cdFx0aWQ6IHVuZGVmaW5lZCxcblx0fSk7XG5cblx0Y29uc3QgZ2V0X2FjY2Vzc190b2tlbiA9ICgpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuYWNjZXNzX3Rva2VuO1xuXHR9O1xuXG5cdGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2gsIGdldF9hY2Nlc3NfdG9rZW4gfTtcblx0cmV0dXJuIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZnVuY3Rpb24gdXNlVXNlcigpIHtcblx0Y29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwidXNlVXNlciBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVXNlclByb3ZpZGVyXCIpO1xuXHR9XG5cdHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyBVc2VyUHJvdmlkZXIsIHVzZVVzZXIgfTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJVc2VyQ29udGV4dCIsInVuZGVmaW5lZCIsIlVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWNjZXNzX3Rva2VuIiwiaWRfdG9rZW4iLCJpZCIsIkVycm9yIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImdldF9hY2Nlc3NfdG9rZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlVXNlciIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Context/UserContext.tsx\n");

/***/ }),

/***/ "./Layout/index.tsx":
/*!**************************!*\
  !*** ./Layout/index.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Layout = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\Layout\\\\index.tsx\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9MYXlvdXQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksR0FBSztJQUN0RCxxQkFBTyw4REFBQ0QsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O2lCQUFJLENBQUM7Q0FDcEM7QUFFRCxpRUFBZUYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29sbmZ0LXJlZmFjdG9yLy4vTGF5b3V0L2luZGV4LnRzeD83Mzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layout/index.tsx\n");

/***/ }),

/***/ "./Theme/Components/Button.ts":
/*!************************************!*\
  !*** ./Theme/Components/Button.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Button = {\n    baseStyle: {\n        borderRadius: 24\n    },\n    variants: {\n        solid: (props)=>({})\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9UaGVtZS9Db21wb25lbnRzL0J1dHRvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHO0lBQ2RDLFNBQVMsRUFBRTtRQUNWQyxZQUFZLEVBQUUsRUFBRTtLQUNoQjtJQUNEQyxRQUFRLEVBQUU7UUFDVEMsS0FBSyxFQUFFLENBQUNDLEtBQTBCLEdBQUssQ0FBQyxFQUFFLENBQUM7S0FDM0M7Q0FDRDtBQUVELGlFQUFlTCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25nb2xuZnQtcmVmYWN0b3IvLi9UaGVtZS9Db21wb25lbnRzL0J1dHRvbi50cz8wZGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiQGNoYWtyYS11aS90aGVtZVwiO1xuY29uc3QgQnV0dG9uID0ge1xuXHRiYXNlU3R5bGU6IHtcblx0XHRib3JkZXJSYWRpdXM6IDI0LFxuXHR9LFxuXHR2YXJpYW50czoge1xuXHRcdHNvbGlkOiAocHJvcHM6IFRoZW1lQ29tcG9uZW50UHJvcHMpID0+ICh7fSksXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiYmFzZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwidmFyaWFudHMiLCJzb2xpZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Theme/Components/Button.ts\n");

/***/ }),

/***/ "./Theme/Components/index.ts":
/*!***********************************!*\
  !*** ./Theme/Components/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./Theme/Components/Button.ts\");\n\nconst components = {\n    Button: _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (components);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9UaGVtZS9Db21wb25lbnRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCO0FBQzlCLE1BQU1DLFVBQVUsR0FBRztJQUFFRCxNQUFNO0NBQUU7QUFFN0IsaUVBQWVDLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvbG5mdC1yZWZhY3Rvci8uL1RoZW1lL0NvbXBvbmVudHMvaW5kZXgudHM/OTE4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuY29uc3QgY29tcG9uZW50cyA9IHsgQnV0dG9uIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHM7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Theme/Components/index.ts\n");

/***/ }),

/***/ "./Theme/colors.ts":
/*!*************************!*\
  !*** ./Theme/colors.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst strawberry = {\n    100: \"#de8c92\",\n    200: \"#d97980\",\n    300: \"#d3656d\",\n    400: \"#ce525b\",\n    500: \"#c83f49\",\n    600: \"#b43942\",\n    700: \"#a0323a\",\n    800: \"#8c2c33\",\n    900: \"#78262c\"\n};\nconst colors = {\n    strawberry\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9UaGVtZS9jb2xvcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsR0FBRztBQUNsQixPQUFHLEVBQUUsU0FBUztBQUNkLE9BQUcsRUFBRSxTQUFTO0FBQ2QsT0FBRyxFQUFFLFNBQVM7QUFDZCxPQUFHLEVBQUUsU0FBUztBQUNkLE9BQUcsRUFBRSxTQUFTO0FBQ2QsT0FBRyxFQUFFLFNBQVM7QUFDZCxPQUFHLEVBQUUsU0FBUztBQUNkLE9BQUcsRUFBRSxTQUFTO0FBQ2QsT0FBRyxFQUFFLFNBQVM7Q0FDZDtBQUVELE1BQU1DLE1BQU0sR0FBRztJQUNkRCxVQUFVO0NBQ1Y7QUFFRCxpRUFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29sbmZ0LXJlZmFjdG9yLy4vVGhlbWUvY29sb3JzLnRzPzhkNTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyYXdiZXJyeSA9IHtcblx0MTAwOiBcIiNkZThjOTJcIixcblx0MjAwOiBcIiNkOTc5ODBcIixcblx0MzAwOiBcIiNkMzY1NmRcIixcblx0NDAwOiBcIiNjZTUyNWJcIixcblx0NTAwOiBcIiNjODNmNDlcIixcblx0NjAwOiBcIiNiNDM5NDJcIixcblx0NzAwOiBcIiNhMDMyM2FcIixcblx0ODAwOiBcIiM4YzJjMzNcIixcblx0OTAwOiBcIiM3ODI2MmNcIixcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcblx0c3RyYXdiZXJyeSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG9ycztcbiJdLCJuYW1lcyI6WyJzdHJhd2JlcnJ5IiwiY29sb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Theme/colors.ts\n");

/***/ }),

/***/ "./Theme/index.ts":
/*!************************!*\
  !*** ./Theme/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components */ \"./Theme/Components/index.ts\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ \"./Theme/colors.ts\");\n\n\n\nconst overrides = {\n    colors: _colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    components: _Components__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nconst withDefaultColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultColorScheme)({\n    colorScheme: \"strawberry\",\n    components: [\n        \"Button\"\n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)(overrides, withDefaultColor));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9UaGVtZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RTtBQUNqQztBQUNSO0FBRTlCLE1BQU1JLFNBQVMsR0FBRztJQUFFRCxNQUFNO0lBQUVELFVBQVU7Q0FBRTtBQUV4QyxNQUFNRyxnQkFBZ0IsR0FBR0osd0VBQXNCLENBQUM7SUFDL0NLLFdBQVcsRUFBRSxZQUFZO0lBQ3pCSixVQUFVLEVBQUU7UUFBQyxRQUFRO0tBQUM7Q0FDdEIsQ0FBQztBQUVGLGlFQUFlRiw2REFBVyxDQUFDSSxTQUFTLEVBQUVDLGdCQUFnQixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25nb2xuZnQtcmVmYWN0b3IvLi9UaGVtZS9pbmRleC50cz8xODI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lLCB3aXRoRGVmYXVsdENvbG9yU2NoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBjb21wb25lbnRzIGZyb20gXCIuL0NvbXBvbmVudHNcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4vY29sb3JzXCI7XG5cbmNvbnN0IG92ZXJyaWRlcyA9IHsgY29sb3JzLCBjb21wb25lbnRzIH07XG5cbmNvbnN0IHdpdGhEZWZhdWx0Q29sb3IgPSB3aXRoRGVmYXVsdENvbG9yU2NoZW1lKHtcblx0Y29sb3JTY2hlbWU6IFwic3RyYXdiZXJyeVwiLFxuXHRjb21wb25lbnRzOiBbXCJCdXR0b25cIl0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kVGhlbWUob3ZlcnJpZGVzLCB3aXRoRGVmYXVsdENvbG9yKTtcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIndpdGhEZWZhdWx0Q29sb3JTY2hlbWUiLCJjb21wb25lbnRzIiwiY29sb3JzIiwib3ZlcnJpZGVzIiwid2l0aERlZmF1bHRDb2xvciIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Theme/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout */ \"./Layout/index.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Theme */ \"./Theme/index.ts\");\n/* harmony import */ var _Context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/UserContext */ \"./Context/UserContext.tsx\");\n/* harmony import */ var _Context_AuthModalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Context/AuthModalContext */ \"./Context/AuthModalContext.tsx\");\n\n\n\n\n\n\n\nfunction MyApp(AppProps) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: _Theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_UserContext__WEBPACK_IMPORTED_MODULE_5__.UserProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_AuthModalContext__WEBPACK_IMPORTED_MODULE_6__.AuthModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ...AppProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\pages\\\\_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\pages\\\\_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gkher\\\\Documents\\\\shits\\\\template\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRUE7QUFDbUI7QUFDckI7QUFDeUI7QUFDVTtBQUNoRSxTQUFTSyxLQUFLLENBQUNDLFFBQWtCLEVBQUU7SUFDbEMscUJBQ0MsOERBQUNMLDREQUFjO1FBQUNNLEtBQUssRUFBRUwsOENBQUs7a0JBQzNCLDRFQUFDQyw4REFBWTtzQkFDWiw0RUFBQ0Msd0VBQWlCOzBCQUNqQiw0RUFBQ0osK0NBQU07b0JBQUUsR0FBR00sUUFBUTs7Ozs7d0JBQUc7Ozs7O29CQUNKOzs7OztnQkFDTjs7Ozs7WUFDQyxDQUNoQjtDQUNGO0FBRUQsaUVBQWVELEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvbG5mdC1yZWZhY3Rvci8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXRcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi4vVGhlbWVcIjtcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9Db250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBBdXRoTW9kYWxQcm92aWRlciB9IGZyb20gXCIuLi9Db250ZXh0L0F1dGhNb2RhbENvbnRleHRcIjtcbmZ1bmN0aW9uIE15QXBwKEFwcFByb3BzOiBBcHBQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxDaGFrcmFQcm92aWRlciB0aGVtZT17VGhlbWV9PlxuXHRcdFx0PFVzZXJQcm92aWRlcj5cblx0XHRcdFx0PEF1dGhNb2RhbFByb3ZpZGVyPlxuXHRcdFx0XHRcdDxMYXlvdXQgey4uLkFwcFByb3BzfS8+XG5cdFx0XHRcdDwvQXV0aE1vZGFsUHJvdmlkZXI+XG5cdFx0XHQ8L1VzZXJQcm92aWRlcj5cblx0XHQ8L0NoYWtyYVByb3ZpZGVyPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJDaGFrcmFQcm92aWRlciIsIlRoZW1lIiwiVXNlclByb3ZpZGVyIiwiQXV0aE1vZGFsUHJvdmlkZXIiLCJNeUFwcCIsIkFwcFByb3BzIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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