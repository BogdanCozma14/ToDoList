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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    font-family:'Poppins', sans-serif;\n    box-sizing: border-box;\n}\nbody {\n    min-height: 100vh;\n    background: linear-gradient(to right, #9e6082, #e2c100);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.toDoList {\n    flex-grow: 1;\n    width: 100rem;\n    height: 55rem;\n    margin: 1rem;\n    padding: 1rem;\n    background-color: #fff;\n    display: grid;\n    border: 3px solid red;\n    grid-template-columns: 1fr 4fr;\n}\n.toDoList a {\n    font-size: 1rem;\n    cursor: pointer;\n    transition: .4s;\n    margin-left: 5px\n}\n.toDoList i {\n    color: rgba(0, 0, 0, 0.2);\n}\n.toDoList i:hover {\n    color: #f91809;\n    cursor: pointer;\n}\n.toDoList a:hover {\n    background-color: rgba(249, 24, 9, 0.4);\n    transition: .2s;\n    color: #fff;\n    text-decoration: underline 2px #f91809;\n}\n.view-tasks {\n    border: 2px solid green;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n.view-tasks h3 {\n    margin-top: 0.5rem;\n}\n.add-task {\n    display: flex;\n    align-items: center;\n}\n.add-task button.addTask {\n    border-radius: 50%;\n    background-color: #f91809;\n    border: 2px solid #f91809;\n    color: #fff;\n    font-size: 1.2rem;\n    height: 1.4rem;\n    width: 1.4rem;\n    margin-top: 0.4rem;\n    margin-right: 0.6rem;\n    cursor: pointer;\n}\n.addTask:hover {\n    filter: brightness(80%);\n    transition: .2s;\n}\n.add-task h3 {\n    color: #f91809;\n    margin-top: 10px;\n}\n/* form for adding a new task */\n#task-form {\n    display: none;  /* Hidden by default */\n    margin-top: 1rem;\n}\n#task-form input, \n#task-form select, \n#task-form button {\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n    width: 100%;\n}\n.common, .projects, .team {\n    display: flex;\n    flex-direction: column;\n    gap: .4rem;  \n}\n/* ckeck tasks section */\n.check-tasks {\n    margin-left: 5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n}\n.check-tasks h1 {\n    margin-bottom: 2rem;\n}\n.personal-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.personal-task, .team-task {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 5px;\n    margin-bottom: 1rem;\n}\n.personal-task h3, .team-task h3 {\n    flex-grow: 1;\n}\n.checkTask {\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    border: 2px solid #000;\n    cursor: pointer;\n    transition: .4s;\n}\n.checkTask:hover {\n    background-color: #f91809;\n    border-color: #f91809;\n    transition: .3s;\n}\n/* for when the button is checked ( the task is checked)*/\n.checkTask.checked {\n    background-color: #f91809;\n    border-color: #f91809;\n}\n/* the title of the task when the task is checked */\nh3.checked {\n    text-decoration: line-through #f91809;\n}\n.addNewTask {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n.addPersonalTask, .addTeamTask {\n    font-size: 1.5rem;\n    color: #f91809;\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n.addNewTask h4 {\n    color: rgba(0, 0, 0, 0.4);\n}\n/* team projects */\n.team-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.personal-projects div, .team-projects div {\n    margin-left: 1rem;\n}\n/* the buttos for updating and deleting tasks */\n.updateTask {\n    width: 70px;\n    background-color: #09f940;\n    border-radius: 5px;\n    border: none;\n    color: rgba(0, 0, 0, 0.7);\n    font-size: 1rem;\n    cursor: pointer;\n    transition: .4s;\n}\n.updateTask:hover {\n    background-color: #09f972;\n    transition: .2s;\n}\n.deleteTask {\n    width: 70px;\n    background-color: #f90931;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    font-size: 1rem;\n    cursor: pointer;\n    transition: .4s;\n}\n.deleteTask:hover {\n    background-color: #f90909 ;\n    transition: .2s;\n}\n/* styling for the form with updating the tasks */\n.updateForm {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n}\n\n.updateForm input {\n    padding: 5px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n.updateForm button {\n    padding: 5px 10px;\n    background-color: #f91809;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.updateForm button[type=\"submit\"] {\n    background-color: green;\n}\n.updateForm button[type=\"button\"] {\n    background-color: grey;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n// references for the add task button \nconst addTaskButton = document.querySelector('.addTask');\nconst taskForm = document.getElementById('task-form');\nconst submitTaskButton = document.getElementById('submit-task');\n// Toggle the form's visibility when the \"Add Task\" button is clicked\naddTaskButton.addEventListener('click', () => {\n    // Check if the form is already visible\n    if (taskForm.style.display === 'none' || taskForm.style.display === '') {\n        taskForm.style.display = 'block';  // Show the form\n        addTaskButton.innerText = 'X';\n    } \n    else {\n        taskForm.style.display = 'none';   // Hide the form\n        addTaskButton.innerText = '+';\n    }\n});\n// Add event listener for submitting a new task\nsubmitTaskButton.addEventListener('click', (e) => {\n    e.preventDefault();  // Prevent form submission behavior\n\n    // Get input values from the form\n    const title = document.getElementById('task-title').value;\n    const dueDate = document.getElementById('due-date').value;\n    const priority = document.getElementById('priority').value;\n\n    // Validate the input (make sure nothing is empty)\n    if (title && dueDate && priority) {\n        // Add the new task\n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(title, dueDate, priority);\n        // Hide the form after task is added\n        taskForm.style.display = 'none';\n        addTaskButton.innerText = '+';\n        // Clear the input fields\n        document.getElementById('task-title').value = '';\n        document.getElementById('due-date').value = '';\n    } else {\n        alert(\"Please fill in all fields.\");\n    }\n});\n\n// adding some default tasks to the to do list\n(0,_todo__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(\"do 30 minutes of yoga\", \"2024-10-10\", 'personal');\n(0,_todo__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(\"Plan user research session\", \"2024-10-12\", \"team\");\n(0,_todo__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(\"Buy groceries\", \"2024-10-11\", 'personal');\n(0,_todo__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(\"Go take out my dog for a walk\", \"2024-10-11\", \"personal\");\n(0,_todo__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(\"Help the team with documentation\", \"2024-10-22\" ,\"team\");\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   todos: () => (/* binding */ todos)\n/* harmony export */ });\nconst createTodo = (title, dueDate, priority) => {\n    return {\n        title,\n        dueDate,\n        priority,\n        checked: false,\n        toogleCheck() {\n            this.checked = !this.checked;\n        }\n    };\n};\nlet todos = [];\nconst addTaskToDom = (task) => {\n    const container = task.priority === 'personal' \n    ? document.querySelector('.personal-projects')\n    : document.querySelector('.team-projects');\n    const taskDiv = document.createElement(\"div\");\n    taskDiv.classList.add(task.priority === \"personal\" ? 'personal-task': 'team-task');\n    const checkbox = document.createElement(\"button\");\n    checkbox.classList.add('checkTask');\n    const taskTitle = document.createElement(\"h3\");\n    // buttons for updating tasks\n    const updateTask = document.createElement(\"button\");\n    updateTask.innerText = \"Update task\";\n    updateTask.classList.add(\"updateTask\");\n    updateTask.addEventListener(\"click\", () => openUpdateForm(task, taskDiv));\n    // buttons for deleting tasks\n    const deleteTask = document.createElement(\"button\");\n    deleteTask.innerText = \"Delete task\";\n    deleteTask.classList.add(\"deleteTask\");\n    deleteTask.addEventListener(\"click\", () => {\n        todos = todos.filter(t => t != task); // remove the task from the array\n        container.removeChild(taskDiv);\n    })\n    // adding event listener for checking the task\n    checkbox.addEventListener(\"click\", () => {\n        task.toogleCheck();\n        checkbox.classList.add(\"checked\");\n        taskTitle.classList.add(\"checked\");\n    });\n    taskTitle.textContent = `${task.title} (Due: ${task.dueDate})`;\n\n    taskDiv.appendChild(checkbox);\n    taskDiv.appendChild(taskTitle);\n    taskDiv.appendChild(updateTask);\n    taskDiv.appendChild(deleteTask);\n    container.appendChild(taskDiv);\n};\n\n// function to update a task from the list of tasks\nconst openUpdateForm = (task, taskDiv) => {\n    // create the form\n    const form = document.createElement(\"form\");\n    form.classList.add(\"updateForm\");\n    // input for title\n    const titleInput = document.createElement(\"input\");\n    titleInput.type = \"text\";\n    titleInput.value = task.title;\n    titleInput.required = true;\n    // input for due date\n    const dueDateInput = document.createElement(\"input\");\n    dueDateInput.type = \"date\";\n    dueDateInput.value = task.dueDate;\n    dueDateInput.required = true;\n    // submit button\n    const submitButton = document.createElement(\"button\");\n    submitButton.type = \"submit\";\n    submitButton.innerText = \"Update task\";\n    // cancel button\n    const cancelButton = document.createElement(\"button\");\n    cancelButton.type = \"button\";\n    cancelButton.innerText = \"Cancel\";\n    cancelButton.addEventListener(\"click\", () => {\n        taskDiv.removeChild(form); // remove the form if the cancel button is clicked\n    });\n    // on the form submission, the task will be updated in DOM\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        task.title = titleInput.value;\n        task.dueDate = dueDateInput.value;\n        // update task\n        taskDiv.querySelector(\"h3\").textContent = `${task.title} (Due: ${task.dueDate})`;\n        // after the task is updated, the form needs to be removed\n        taskDiv.removeChild(form);\n    });\n    form.appendChild(titleInput);\n    form.appendChild(dueDateInput);\n    form.appendChild(submitButton);\n    form.appendChild(cancelButton);\n    taskDiv.appendChild(form);\n};\n// function for adding a new task [that will be exported in index.js (main.js) ]\nconst addNewTask = (title, dueDate, priority) => {\n    const newTask = createTodo(title, dueDate, priority);\n    todos.push(newTask);\n    addTaskToDom(newTask);\n};\n\n\n\n//# sourceURL=webpack://todolist/./src/todo.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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