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
exports.id = "pages/api/server";
exports.ids = ["pages/api/server"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/server.tsx":
/*!******************************!*\
  !*** ./pages/api/server.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// api/server.tsx\n\n// Define your Mongoose schema for the form data\nconst formDataSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    email: String,\n    phone: String,\n    message: String\n});\n// Create a Mongoose model based on the schema\nconst FormDataModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Contact) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Contact\", formDataSchema);\nconst mongoURI = \"mongodb+srv://datainsight:12345@cluster0.lf0iiaq.mongodb.net/AIConsultingDB\";\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongoURI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n}) // Type assertion to ConnectOptions\n.then(()=>{\n    console.log(\"Connected to MongoDB\");\n}).catch((error)=>{\n    console.error(\"MongoDB connection error:\", error);\n});\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        try {\n            const { name , email , phone , message  } = req.body;\n            // Create a new document using the FormDataModel\n            const newFormData = new FormDataModel({\n                name,\n                email,\n                phone,\n                message\n            });\n            // Save the form data to MongoDB\n            await newFormData.save();\n            res.status(200).json({\n                message: \"Form data saved successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error saving form data:\", error);\n            res.status(500).json({\n                error: \"Error saving form data\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQkFBaUI7QUFHZTtBQUVoQyxnREFBZ0Q7QUFDaEQsTUFBTUMsaUJBQWlCLElBQUlELHdEQUFlLENBQUM7SUFDekNHLE1BQU1DO0lBQ05DLE9BQU9EO0lBQ1BFLE9BQU9GO0lBQ1BHLFNBQVNIO0FBQ1g7QUFFQSw4Q0FBOEM7QUFDOUMsTUFBTUksZ0JBQWdCUixnRUFBdUIsSUFBSUEscURBQWMsQ0FBQyxXQUFXQztBQUUzRSxNQUFNVyxXQUFXO0FBRWpCWix1REFBZ0IsQ0FBQ1ksVUFBVTtJQUN6QkUsaUJBQWlCLElBQUk7SUFDckJDLG9CQUFvQixJQUFJO0FBQzFCLEdBQThCLG1DQUFtQztDQUM5REMsSUFBSSxDQUFDLElBQU07SUFDVkMsUUFBUUMsR0FBRyxDQUFDO0FBQ2QsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7SUFDaEJILFFBQVFHLEtBQUssQ0FBQyw2QkFBNkJBO0FBQzdDO0FBRUYsTUFBTUMsVUFBVSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDbkUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBRXJCLEtBQUksRUFBRUUsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUFHZSxJQUFJRyxJQUFJO1lBRWhELGdEQUFnRDtZQUNoRCxNQUFNQyxjQUFjLElBQUlsQixjQUFjO2dCQUNwQ0w7Z0JBQ0FFO2dCQUNBQztnQkFDQUM7WUFDRjtZQUVBLGdDQUFnQztZQUNoQyxNQUFNbUIsWUFBWUMsSUFBSTtZQUV0QkosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRXRCLFNBQVM7WUFBK0I7UUFDakUsRUFBRSxPQUFPYSxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDRyxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFVCxPQUFPO1lBQXlCO1FBQ3pEO0lBQ0YsT0FBTztRQUNMRyxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVULE9BQU87UUFBcUI7SUFDckQsQ0FBQztBQUNIO0FBRUEsaUVBQWVDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haWJpLXdlYnBhZ2UvLi9wYWdlcy9hcGkvc2VydmVyLnRzeD8yM2Y1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS9zZXJ2ZXIudHN4XG5cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuLy8gRGVmaW5lIHlvdXIgTW9uZ29vc2Ugc2NoZW1hIGZvciB0aGUgZm9ybSBkYXRhXG5jb25zdCBmb3JtRGF0YVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGVtYWlsOiBTdHJpbmcsXG4gIHBob25lOiBTdHJpbmcsXG4gIG1lc3NhZ2U6IFN0cmluZyxcbn0pO1xuXG4vLyBDcmVhdGUgYSBNb25nb29zZSBtb2RlbCBiYXNlZCBvbiB0aGUgc2NoZW1hXG5jb25zdCBGb3JtRGF0YU1vZGVsID0gbW9uZ29vc2UubW9kZWxzLkNvbnRhY3QgfHwgbW9uZ29vc2UubW9kZWwoJ0NvbnRhY3QnLCBmb3JtRGF0YVNjaGVtYSk7XG5cbmNvbnN0IG1vbmdvVVJJID0gJ21vbmdvZGIrc3J2Oi8vZGF0YWluc2lnaHQ6MTIzNDVAY2x1c3RlcjAubGYwaWlhcS5tb25nb2RiLm5ldC9BSUNvbnN1bHRpbmdEQic7XG5cbm1vbmdvb3NlLmNvbm5lY3QobW9uZ29VUkksIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG59IGFzIG1vbmdvb3NlLkNvbm5lY3RPcHRpb25zKSAvLyBUeXBlIGFzc2VydGlvbiB0byBDb25uZWN0T3B0aW9uc1xuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICB9KTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lLCBtZXNzYWdlIH0gPSByZXEuYm9keTtcblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGRvY3VtZW50IHVzaW5nIHRoZSBGb3JtRGF0YU1vZGVsXG4gICAgICBjb25zdCBuZXdGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YU1vZGVsKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBob25lLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNhdmUgdGhlIGZvcm0gZGF0YSB0byBNb25nb0RCXG4gICAgICBhd2FpdCBuZXdGb3JtRGF0YS5zYXZlKCk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0Zvcm0gZGF0YSBzYXZlZCBzdWNjZXNzZnVsbHknIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZm9ybSBkYXRhOicsIGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBzYXZpbmcgZm9ybSBkYXRhJyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJmb3JtRGF0YVNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsInBob25lIiwibWVzc2FnZSIsIkZvcm1EYXRhTW9kZWwiLCJtb2RlbHMiLCJDb250YWN0IiwibW9kZWwiLCJtb25nb1VSSSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsIm5ld0Zvcm1EYXRhIiwic2F2ZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/server.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/server.tsx"));
module.exports = __webpack_exports__;

})();