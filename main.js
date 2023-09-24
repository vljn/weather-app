/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/classes/app.js":
/*!****************************!*\
  !*** ./src/classes/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/pageLoad */ "./src/functions/pageLoad.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/classes/storage.js");
/* harmony import */ var _functions_renderData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/renderData */ "./src/functions/renderData.js");
/* harmony import */ var _functions_ip_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/ip-api */ "./src/functions/ip-api.js");
/* harmony import */ var _functions_weather_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/weather-api */ "./src/functions/weather-api.js");






class WeatherApp {
  #storageHandler;

  constructor() {
    this.#storageHandler = new _storage__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  async start() {
    (0,_functions_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.#addEventListeners();
    let location = this.#storageHandler.getLocationData();
    if (location !== null) {
      this.currentLocation = location;
    } else {
      this.currentLocation = await (0,_functions_ip_api__WEBPACK_IMPORTED_MODULE_3__["default"])();
      this.updateLocation(this.currentLocation);
    }
    console.log(this.currentLocation);
    this.getDataAndRender();
  }

  updateLocation() {
    this.#storageHandler.updateStorage(this.currentLocation);
  }

  getDataAndRender() {
    console.log(this.currentLocation);
    (0,_functions_weather_api__WEBPACK_IMPORTED_MODULE_4__["default"])(this.currentLocation).then((data) => (0,_functions_renderData__WEBPACK_IMPORTED_MODULE_2__["default"])(data));
  }

  #addEventListeners() {
    const search = document.querySelector('input');
    search.addEventListener('keypress', (event) => this.#searchOnEnter(event));
  }

  #searchOnEnter(event) {
    if (event.key === 'Enter') {
      console.log(this);
      console.log(event);
      event.preventDefault();
      this.currentLocation = event.target.value;
      this.updateLocation();
      this.getDataAndRender();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherApp);


/***/ }),

/***/ "./src/classes/storage.js":
/*!********************************!*\
  !*** ./src/classes/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class StorageHandler {
  getLocationData() {
    return localStorage.getItem('selectedLocation');
  }

  updateStorage(data) {
    localStorage.setItem('selectedLocation', data);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageHandler);


/***/ }),

/***/ "./src/functions/dataContainer.js":
/*!****************************************!*\
  !*** ./src/functions/dataContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createDataContainer() {
  const container = document.createElement('div');
  container.classList.add(
    'h-80',
    'flex',
    'justify-center',
    'items-center',
    'font-main',
    'text-zinc-200',
    'flex-col',
    'md:flex-row',
    'md:justify-start',
    'md:pl-28',
    'md:pt-28',
  );

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('text-7xl', 'md:pr-3');
  locationDiv.id = 'location';
  container.appendChild(locationDiv);

  const tempDiv = document.createElement('div');
  tempDiv.classList.add(
    'text-9xl',
    'border-b-4',
    'md:border-b-0',
    'md:border-x-4',
    'md:px-2',
  );
  tempDiv.id = 'temperature';
  container.appendChild(tempDiv);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('text-xl', 'pt-3', 'md:pt-0', 'md:pl-3');
  infoDiv.id = 'info';
  container.appendChild(infoDiv);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDataContainer);


/***/ }),

/***/ "./src/functions/header.js":
/*!*********************************!*\
  !*** ./src/functions/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _searchBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBar.js */ "./src/functions/searchBar.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");



function createHeader() {
  const header = document.createElement('header');
  header.classList.add(
    'flex',
    'justify-center',
    'font-main',
    'text-zinc-200',
    'h-28',
    'items-center',
    'bg-slate-700',
    'gap-[10%]',
    'px-10',
  );

  const left = document.createElement('div');
  left.textContent = 'weather.';
  header.appendChild(left);
  left.classList.add(
    'text-4xl',
    'animate__animated',
    'animate__fadeInLeft',
    'select-none',
  );

  const searchBar = (0,_searchBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  header.appendChild(searchBar);

  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/functions/ip-api.js":
/*!*********************************!*\
  !*** ./src/functions/ip-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getIp() {
  const data = await (await fetch('https://api.ipify.org?format=json')).json();
  return data.ip;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getIp);


/***/ }),

/***/ "./src/functions/pageLoad.js":
/*!***********************************!*\
  !*** ./src/functions/pageLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/functions/header.js");
/* harmony import */ var _dataContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataContainer */ "./src/functions/dataContainer.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");




function pageLoad() {
  const body = document.querySelector('body');
  body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  body.appendChild((0,_dataContainer__WEBPACK_IMPORTED_MODULE_1__["default"])());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/functions/renderData.js":
/*!*************************************!*\
  !*** ./src/functions/renderData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderData(data) {
  const temperatureDiv = document.querySelector('#temperature');
  temperatureDiv.textContent = data.current.temp_c + '°';

  const locationDiv = document.querySelector('#location');
  locationDiv.textContent = data.location.name;

  const infoDiv = document.querySelector('#info');
  infoDiv.textContent = data.current.condition.text;
  console.log(data);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);


/***/ }),

/***/ "./src/functions/searchBar.js":
/*!************************************!*\
  !*** ./src/functions/searchBar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSearchBar() {
  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('placeholder', 'Search...');
  searchBar.classList.add(
    'bg-zinc-400',
    'p-2',
    'justify-between',
    'items-center',
    'gap-3',
    'rounded-lg',
    'min-w-0',
    'bg-zinc-400',
    'outline-0',
    'shrink',
    'placeholder-zinc-600',
    'text-slate-600',
    'animate__animated',
    'animate__fadeInRight',
  );

  return searchBar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchBar);


/***/ }),

/***/ "./src/functions/weather-api.js":
/*!**************************************!*\
  !*** ./src/functions/weather-api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getWeatherData(location) {
  const apiKey = '0384e2fec7274085b74190210231309';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const data = await fetch(url, { mode: 'cors' });

  const jsonData = await data.json();

  if (jsonData.error) {
    throw new Error(jsonData.error.message);
  }

  return jsonData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/app */ "./src/classes/app.js");


const app = new _classes_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7QUFDdkM7QUFDQSxnQkFBZ0Isb0RBQVU7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzPzFhMWEiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzQ4YTYiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jbGFzc2VzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2NsYXNzZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Z1bmN0aW9ucy9kYXRhQ29udGFpbmVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZnVuY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Z1bmN0aW9ucy9pcC1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mdW5jdGlvbnMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mdW5jdGlvbnMvcmVuZGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Z1bmN0aW9ucy9zZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mdW5jdGlvbnMvd2VhdGhlci1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4uL2Z1bmN0aW9ucy9wYWdlTG9hZCc7XHJcbmltcG9ydCBTdG9yYWdlSGFuZGxlciBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQgcmVuZGVyRGF0YSBmcm9tICcuLi9mdW5jdGlvbnMvcmVuZGVyRGF0YSc7XHJcbmltcG9ydCBnZXRJcCBmcm9tICcuLi9mdW5jdGlvbnMvaXAtYXBpJztcclxuaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4uL2Z1bmN0aW9ucy93ZWF0aGVyLWFwaSc7XHJcblxyXG5jbGFzcyBXZWF0aGVyQXBwIHtcclxuICAjc3RvcmFnZUhhbmRsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4jc3RvcmFnZUhhbmRsZXIgPSBuZXcgU3RvcmFnZUhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgcGFnZUxvYWQoKTtcclxuICAgIHRoaXMuI2FkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICBsZXQgbG9jYXRpb24gPSB0aGlzLiNzdG9yYWdlSGFuZGxlci5nZXRMb2NhdGlvbkRhdGEoKTtcclxuICAgIGlmIChsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBhd2FpdCBnZXRJcCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxvY2F0aW9uKHRoaXMuY3VycmVudExvY2F0aW9uKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudExvY2F0aW9uKTtcclxuICAgIHRoaXMuZ2V0RGF0YUFuZFJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTG9jYXRpb24oKSB7XHJcbiAgICB0aGlzLiNzdG9yYWdlSGFuZGxlci51cGRhdGVTdG9yYWdlKHRoaXMuY3VycmVudExvY2F0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldERhdGFBbmRSZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRMb2NhdGlvbik7XHJcbiAgICBnZXRXZWF0aGVyRGF0YSh0aGlzLmN1cnJlbnRMb2NhdGlvbikudGhlbigoZGF0YSkgPT4gcmVuZGVyRGF0YShkYXRhKSk7XHJcbiAgfVxyXG5cclxuICAjYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB0aGlzLiNzZWFyY2hPbkVudGVyKGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoT25FbnRlcihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVMb2NhdGlvbigpO1xyXG4gICAgICB0aGlzLmdldERhdGFBbmRSZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJBcHA7XHJcbiIsImNsYXNzIFN0b3JhZ2VIYW5kbGVyIHtcclxuICBnZXRMb2NhdGlvbkRhdGEoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkTG9jYXRpb24nKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0b3JhZ2UoZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTG9jYXRpb24nLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VIYW5kbGVyO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVEYXRhQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2gtODAnLFxyXG4gICAgJ2ZsZXgnLFxyXG4gICAgJ2p1c3RpZnktY2VudGVyJyxcclxuICAgICdpdGVtcy1jZW50ZXInLFxyXG4gICAgJ2ZvbnQtbWFpbicsXHJcbiAgICAndGV4dC16aW5jLTIwMCcsXHJcbiAgICAnZmxleC1jb2wnLFxyXG4gICAgJ21kOmZsZXgtcm93JyxcclxuICAgICdtZDpqdXN0aWZ5LXN0YXJ0JyxcclxuICAgICdtZDpwbC0yOCcsXHJcbiAgICAnbWQ6cHQtMjgnLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgndGV4dC03eGwnLCAnbWQ6cHItMycpO1xyXG4gIGxvY2F0aW9uRGl2LmlkID0gJ2xvY2F0aW9uJztcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xyXG5cclxuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3RleHQtOXhsJyxcclxuICAgICdib3JkZXItYi00JyxcclxuICAgICdtZDpib3JkZXItYi0wJyxcclxuICAgICdtZDpib3JkZXIteC00JyxcclxuICAgICdtZDpweC0yJyxcclxuICApO1xyXG4gIHRlbXBEaXYuaWQgPSAndGVtcGVyYXR1cmUnO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcclxuXHJcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgndGV4dC14bCcsICdwdC0zJywgJ21kOnB0LTAnLCAnbWQ6cGwtMycpO1xyXG4gIGluZm9EaXYuaWQgPSAnaW5mbyc7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEYXRhQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgY3JlYXRlU2VhcmNoQmFyIGZyb20gJy4vc2VhcmNoQmFyLmpzJztcclxuaW1wb3J0ICdhbmltYXRlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnZmxleCcsXHJcbiAgICAnanVzdGlmeS1jZW50ZXInLFxyXG4gICAgJ2ZvbnQtbWFpbicsXHJcbiAgICAndGV4dC16aW5jLTIwMCcsXHJcbiAgICAnaC0yOCcsXHJcbiAgICAnaXRlbXMtY2VudGVyJyxcclxuICAgICdiZy1zbGF0ZS03MDAnLFxyXG4gICAgJ2dhcC1bMTAlXScsXHJcbiAgICAncHgtMTAnLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZWZ0LnRleHRDb250ZW50ID0gJ3dlYXRoZXIuJztcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVmdCk7XHJcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3RleHQtNHhsJyxcclxuICAgICdhbmltYXRlX19hbmltYXRlZCcsXHJcbiAgICAnYW5pbWF0ZV9fZmFkZUluTGVmdCcsXHJcbiAgICAnc2VsZWN0LW5vbmUnLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEJhciA9IGNyZWF0ZVNlYXJjaEJhcigpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImFzeW5jIGZ1bmN0aW9uIGdldElwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvbicpKS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGEuaXA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldElwO1xyXG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IGNyZWF0ZURhdGFDb250YWluZXIgZnJvbSAnLi9kYXRhQ29udGFpbmVyJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVEYXRhQ29udGFpbmVyKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcclxuIiwiZnVuY3Rpb24gcmVuZGVyRGF0YShkYXRhKSB7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcclxuICB0ZW1wZXJhdHVyZURpdi50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyAnwrAnO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xyXG4gIGxvY2F0aW9uRGl2LnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG5cclxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm8nKTtcclxuICBpbmZvRGl2LnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJEYXRhO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVTZWFyY2hCYXIoKSB7XHJcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzZWFyY2hCYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBzZWFyY2hCYXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2guLi4nKTtcclxuICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdiZy16aW5jLTQwMCcsXHJcbiAgICAncC0yJyxcclxuICAgICdqdXN0aWZ5LWJldHdlZW4nLFxyXG4gICAgJ2l0ZW1zLWNlbnRlcicsXHJcbiAgICAnZ2FwLTMnLFxyXG4gICAgJ3JvdW5kZWQtbGcnLFxyXG4gICAgJ21pbi13LTAnLFxyXG4gICAgJ2JnLXppbmMtNDAwJyxcclxuICAgICdvdXRsaW5lLTAnLFxyXG4gICAgJ3NocmluaycsXHJcbiAgICAncGxhY2Vob2xkZXItemluYy02MDAnLFxyXG4gICAgJ3RleHQtc2xhdGUtNjAwJyxcclxuICAgICdhbmltYXRlX19hbmltYXRlZCcsXHJcbiAgICAnYW5pbWF0ZV9fZmFkZUluUmlnaHQnLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzZWFyY2hCYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaEJhcjtcclxuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcclxuICBjb25zdCBhcGlLZXkgPSAnMDM4NGUyZmVjNzI3NDA4NWI3NDE5MDIxMDIzMTMwOSc7XHJcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufWA7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIGlmIChqc29uRGF0YS5lcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGpzb25EYXRhLmVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGpzb25EYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV2VhdGhlckFwcCBmcm9tICcuL2NsYXNzZXMvYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBXZWF0aGVyQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=