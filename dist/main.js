/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//--- create a todo factory function  | Information holder\n/*\n    A factory function to generate todo objects\n    @params {String} title -  Name of the todo\n    @params {String} description - Description of the  of the todo task\n    @params {Datetime} dueDate - Date when task is due\n    @params {Number} priority - A number to rank how important a task is\n*/\nfunction todoFactory(title,\n        description,\n        dueDate,\n        priority) {\n            function getTitle(){\n                return title;\n            };\n            function getDescription(){\n                return description;\n            };\n            function getDueDate(){\n                return dueDate;\n            };\n            function getPriority(){\n                return priority;\n            };\n            function setTitle(text){\n                title = text;\n                return true;\n            };\n            function setDescription(text){\n                description = text;\n                return true;\n            };\n            function setDueDate(date){\n                dueDate = date;\n                return true;\n            };\n            function setPriority(num){\n                priority = num;\n                return true;\n            };\n            return {\n                getTitle, getDescription, getDueDate, getPriority,\n                setTitle, setDescription, setDueDate, setPriority,\n            }\n        }\n//--- create a projects factory function | Information holder\n//--- create a todoManager factory function | Service providers\n//--- create a projectsManager factory function | Service provider\n \n\n//# sourceURL=webpack://web-todo-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;