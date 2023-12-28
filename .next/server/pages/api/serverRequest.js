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
exports.id = "pages/api/serverRequest";
exports.ids = ["pages/api/serverRequest"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/serverRequest.tsx":
/*!*************************************!*\
  !*** ./pages/api/serverRequest.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// api/server.tsx\n\n// Define your Mongoose schema for the form data\nconst formDataSchemaWork = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    email: String,\n    phone: String,\n    message: String\n});\n// Create a Mongoose model based on the schema\nconst FormDataModelWork = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Work) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"work\", formDataSchemaWork);\nconst mongoURI = \"mongodb+srv://datainsight:12345@cluster0.lf0iiaq.mongodb.net/AIConsultingDB\";\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongoURI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n}) // Type assertion to ConnectOptions\n.then(()=>{\n    console.log(\"Connected to MongoDB\");\n}).catch((error)=>{\n    console.error(\"MongoDB connection error:\", error);\n});\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        try {\n            const { name , email , phone , message  } = req.body;\n            // Create a new document using the FormDataModel\n            const newFormDataWork = new FormDataModelWork({\n                name,\n                email,\n                phone,\n                message\n            });\n            console.log(newFormDataWork);\n            // Save the form data to MongoDB\n            await newFormDataWork.save();\n            console.log(\"Form submitted successfully\");\n        } catch (error) {\n            console.error(\"Error saving form data:\", error);\n            res.status(500).json({\n                error: \"Error saving form data\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmVyUmVxdWVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUJBQWlCO0FBR2U7QUFFaEMsZ0RBQWdEO0FBQ2hELE1BQU1DLHFCQUFxQixJQUFJRCx3REFBZSxDQUFDO0lBQzdDRyxNQUFNQztJQUNOQyxPQUFPRDtJQUNQRSxPQUFPRjtJQUNQRyxTQUFTSDtBQUNYO0FBRUEsOENBQThDO0FBQzlDLE1BQU1JLG9CQUFvQlIsNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsUUFBUUM7QUFFekUsTUFBTVcsV0FBVztBQUVqQlosdURBQWdCLENBQUNZLFVBQVU7SUFDekJFLGlCQUFpQixJQUFJO0lBQ3JCQyxvQkFBb0IsSUFBSTtBQUMxQixHQUE4QixtQ0FBbUM7Q0FDOURDLElBQUksQ0FBQyxJQUFNO0lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQztBQUNkLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVO0lBQ2hCSCxRQUFRRyxLQUFLLENBQUMsNkJBQTZCQTtBQUM3QztBQUVGLE1BQU1DLFVBQVUsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ25FLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUVyQixLQUFJLEVBQUVFLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR2UsSUFBSUcsSUFBSTtZQUVoRCxnREFBZ0Q7WUFDaEQsTUFBTUMsa0JBQWtCLElBQUlsQixrQkFBa0I7Z0JBQzVDTDtnQkFDQUU7Z0JBQ0FDO2dCQUNBQztZQUNGO1lBQ0FVLFFBQVFDLEdBQUcsQ0FBQ1E7WUFDWixnQ0FBZ0M7WUFDaEMsTUFBTUEsZ0JBQWdCQyxJQUFJO1lBRTFCVixRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9FLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLDJCQUEyQkE7WUFDekNHLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVULE9BQU87WUFBeUI7UUFDekQ7SUFDRixPQUFPO1FBQ0xHLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVQsT0FBTztRQUFxQjtJQUNyRCxDQUFDO0FBQ0g7QUFFQSxpRUFBZUMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpYmktd2VicGFnZS8uL3BhZ2VzL2FwaS9zZXJ2ZXJSZXF1ZXN0LnRzeD84NDIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS9zZXJ2ZXIudHN4XG5cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuLy8gRGVmaW5lIHlvdXIgTW9uZ29vc2Ugc2NoZW1hIGZvciB0aGUgZm9ybSBkYXRhXG5jb25zdCBmb3JtRGF0YVNjaGVtYVdvcmsgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBlbWFpbDogU3RyaW5nLFxuICBwaG9uZTogU3RyaW5nLFxuICBtZXNzYWdlOiBTdHJpbmcsXG59KTtcblxuLy8gQ3JlYXRlIGEgTW9uZ29vc2UgbW9kZWwgYmFzZWQgb24gdGhlIHNjaGVtYVxuY29uc3QgRm9ybURhdGFNb2RlbFdvcmsgPSBtb25nb29zZS5tb2RlbHMuV29yayB8fCBtb25nb29zZS5tb2RlbCgnd29yaycsIGZvcm1EYXRhU2NoZW1hV29yayk7XG5cbmNvbnN0IG1vbmdvVVJJID0gJ21vbmdvZGIrc3J2Oi8vZGF0YWluc2lnaHQ6MTIzNDVAY2x1c3RlcjAubGYwaWlhcS5tb25nb2RiLm5ldC9BSUNvbnN1bHRpbmdEQic7XG5cbm1vbmdvb3NlLmNvbm5lY3QobW9uZ29VUkksIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG59IGFzIG1vbmdvb3NlLkNvbm5lY3RPcHRpb25zKSAvLyBUeXBlIGFzc2VydGlvbiB0byBDb25uZWN0T3B0aW9uc1xuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICB9KTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lLCBtZXNzYWdlIH0gPSByZXEuYm9keTtcblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGRvY3VtZW50IHVzaW5nIHRoZSBGb3JtRGF0YU1vZGVsXG4gICAgICBjb25zdCBuZXdGb3JtRGF0YVdvcmsgPSBuZXcgRm9ybURhdGFNb2RlbFdvcmsoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGhvbmUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0Zvcm1EYXRhV29yayk7XG4gICAgICAvLyBTYXZlIHRoZSBmb3JtIGRhdGEgdG8gTW9uZ29EQlxuICAgICAgYXdhaXQgbmV3Rm9ybURhdGFXb3JrLnNhdmUoKTtcblxuICAgICAgY29uc29sZS5sb2coJ0Zvcm0gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZm9ybSBkYXRhOicsIGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBzYXZpbmcgZm9ybSBkYXRhJyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJmb3JtRGF0YVNjaGVtYVdvcmsiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJwaG9uZSIsIm1lc3NhZ2UiLCJGb3JtRGF0YU1vZGVsV29yayIsIm1vZGVscyIsIldvcmsiLCJtb2RlbCIsIm1vbmdvVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwibmV3Rm9ybURhdGFXb3JrIiwic2F2ZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/serverRequest.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/serverRequest.tsx"));
module.exports = __webpack_exports__;

})();