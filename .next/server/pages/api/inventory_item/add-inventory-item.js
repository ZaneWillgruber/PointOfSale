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
exports.id = "pages/api/inventory_item/add-inventory-item";
exports.ids = ["pages/api/inventory_item/add-inventory-item"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./db.ts":
/*!***************!*\
  !*** ./db.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n// db.ts\n\nconst connection = async ()=>{\n    return await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"rootpassword\",\n        database: \"GATS\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRO0FBQzJCO0FBRW5DLE1BQU1DLGFBQWEsVUFBWTtJQUM3QixPQUFPLE1BQU1ELHNFQUFzQixDQUFDO1FBQ2xDRyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7QUFDRjtBQUVBLGlFQUFlTCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vZGIudHM/YzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi50c1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncm9vdHBhc3N3b3JkJyxcclxuICAgIGRhdGFiYXNlOiAnR0FUUycsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0aW9uOyJdLCJuYW1lcyI6WyJteXNxbCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/inventory_item/add-inventory-item.ts":
/*!************************************************************!*\
  !*** ./src/pages/api/inventory_item/add-inventory-item.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { name , price , reorder_point  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const [result] = await connection.query(\"INSERT INTO inventory_items (name, price, reorder_point) VALUES (?, ?, ?)\", [\n            name,\n            price,\n            reorder_point\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Inventory item added successfully\",\n            id: result.insertId\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ludmVudG9yeV9pdGVtL2FkZC1pbnZlbnRvcnktaXRlbS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVnQztBQUVoQyxpRUFBZSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDbEUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsY0FBYSxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFL0MsTUFBTUMsYUFBYSxNQUFNUiwrQ0FBRUE7UUFDM0IsTUFBTSxDQUFDUyxPQUFPLEdBQUcsTUFBTUQsV0FBV0UsS0FBSyxDQUFDLDZFQUE2RTtZQUFDTjtZQUFNQztZQUFPQztTQUFjO1FBQ2pKLE1BQU1FLFdBQVdHLEdBQUc7UUFFcEJULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFxQ0MsSUFBSSxPQUFxQkMsUUFBUTtRQUFDO0lBQ3pHLE9BQU87UUFDTGQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ3ZELENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vc3JjL3BhZ2VzL2FwaS9pbnZlbnRvcnlfaXRlbS9hZGQtaW52ZW50b3J5LWl0ZW0udHM/YmZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgT2tQYWNrZXQgfSBmcm9tICdteXNxbDInO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vLi4vZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBuYW1lLCBwcmljZSwgcmVvcmRlcl9wb2ludCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIGludmVudG9yeV9pdGVtcyAobmFtZSwgcHJpY2UsIHJlb3JkZXJfcG9pbnQpIFZBTFVFUyAoPywgPywgPyknLCBbbmFtZSwgcHJpY2UsIHJlb3JkZXJfcG9pbnRdKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnSW52ZW50b3J5IGl0ZW0gYWRkZWQgc3VjY2Vzc2Z1bGx5JywgaWQ6IChyZXN1bHQgYXMgT2tQYWNrZXQpLmluc2VydElkIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiZGIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwicHJpY2UiLCJyZW9yZGVyX3BvaW50IiwiYm9keSIsImNvbm5lY3Rpb24iLCJyZXN1bHQiLCJxdWVyeSIsImVuZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaWQiLCJpbnNlcnRJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/inventory_item/add-inventory-item.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/inventory_item/add-inventory-item.ts"));
module.exports = __webpack_exports__;

})();