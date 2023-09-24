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
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const data = await fetch(url);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0Q7Ozs7Ozs7Ozs7OztBQ051QztBQUN2QztBQUNBLGdCQUFnQixvREFBVTtBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3M/MWExYSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NDhhNiIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2NsYXNzZXMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY2xhc3Nlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZnVuY3Rpb25zL2RhdGFDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mdW5jdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZnVuY3Rpb25zL2lwLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Z1bmN0aW9ucy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Z1bmN0aW9ucy9yZW5kZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZnVuY3Rpb25zL3NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Z1bmN0aW9ucy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi4vZnVuY3Rpb25zL3BhZ2VMb2FkJztcclxuaW1wb3J0IFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCByZW5kZXJEYXRhIGZyb20gJy4uL2Z1bmN0aW9ucy9yZW5kZXJEYXRhJztcclxuaW1wb3J0IGdldElwIGZyb20gJy4uL2Z1bmN0aW9ucy9pcC1hcGknO1xyXG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi4vZnVuY3Rpb25zL3dlYXRoZXItYXBpJztcclxuXHJcbmNsYXNzIFdlYXRoZXJBcHAge1xyXG4gICNzdG9yYWdlSGFuZGxlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiNzdG9yYWdlSGFuZGxlciA9IG5ldyBTdG9yYWdlSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICBwYWdlTG9hZCgpO1xyXG4gICAgdGhpcy4jYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBsb2NhdGlvbiA9IHRoaXMuI3N0b3JhZ2VIYW5kbGVyLmdldExvY2F0aW9uRGF0YSgpO1xyXG4gICAgaWYgKGxvY2F0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGF3YWl0IGdldElwKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTG9jYXRpb24odGhpcy5jdXJyZW50TG9jYXRpb24pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50TG9jYXRpb24pO1xyXG4gICAgdGhpcy5nZXREYXRhQW5kUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMb2NhdGlvbigpIHtcclxuICAgIHRoaXMuI3N0b3JhZ2VIYW5kbGVyLnVwZGF0ZVN0b3JhZ2UodGhpcy5jdXJyZW50TG9jYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUFuZFJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudExvY2F0aW9uKTtcclxuICAgIGdldFdlYXRoZXJEYXRhKHRoaXMuY3VycmVudExvY2F0aW9uKS50aGVuKChkYXRhKSA9PiByZW5kZXJEYXRhKGRhdGEpKTtcclxuICB9XHJcblxyXG4gICNhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHRoaXMuI3NlYXJjaE9uRW50ZXIoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gICNzZWFyY2hPbkVudGVyKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxvY2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuZ2V0RGF0YUFuZFJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckFwcDtcclxuIiwiY2xhc3MgU3RvcmFnZUhhbmRsZXIge1xyXG4gIGdldExvY2F0aW9uRGF0YSgpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRMb2NhdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RvcmFnZShkYXRhKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VsZWN0ZWRMb2NhdGlvbicsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZUhhbmRsZXI7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZURhdGFDb250YWluZXIoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAnaC04MCcsXHJcbiAgICAnZmxleCcsXHJcbiAgICAnanVzdGlmeS1jZW50ZXInLFxyXG4gICAgJ2l0ZW1zLWNlbnRlcicsXHJcbiAgICAnZm9udC1tYWluJyxcclxuICAgICd0ZXh0LXppbmMtMjAwJyxcclxuICAgICdmbGV4LWNvbCcsXHJcbiAgICAnbWQ6ZmxleC1yb3cnLFxyXG4gICAgJ21kOmp1c3RpZnktc3RhcnQnLFxyXG4gICAgJ21kOnBsLTI4JyxcclxuICAgICdtZDpwdC0yOCcsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LTd4bCcsICdtZDpwci0zJyk7XHJcbiAgbG9jYXRpb25EaXYuaWQgPSAnbG9jYXRpb24nO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XHJcblxyXG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAndGV4dC05eGwnLFxyXG4gICAgJ2JvcmRlci1iLTQnLFxyXG4gICAgJ21kOmJvcmRlci1iLTAnLFxyXG4gICAgJ21kOmJvcmRlci14LTQnLFxyXG4gICAgJ21kOnB4LTInLFxyXG4gICk7XHJcbiAgdGVtcERpdi5pZCA9ICd0ZW1wZXJhdHVyZSc7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBEaXYpO1xyXG5cclxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ3B0LTMnLCAnbWQ6cHQtMCcsICdtZDpwbC0zJyk7XHJcbiAgaW5mb0Rpdi5pZCA9ICdpbmZvJztcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURhdGFDb250YWluZXI7XHJcbiIsImltcG9ydCBjcmVhdGVTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXIuanMnO1xyXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdmbGV4JyxcclxuICAgICdqdXN0aWZ5LWNlbnRlcicsXHJcbiAgICAnZm9udC1tYWluJyxcclxuICAgICd0ZXh0LXppbmMtMjAwJyxcclxuICAgICdoLTI4JyxcclxuICAgICdpdGVtcy1jZW50ZXInLFxyXG4gICAgJ2JnLXNsYXRlLTcwMCcsXHJcbiAgICAnZ2FwLVsxMCVdJyxcclxuICAgICdweC0xMCcsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlZnQudGV4dENvbnRlbnQgPSAnd2VhdGhlci4nO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsZWZ0KTtcclxuICBsZWZ0LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAndGV4dC00eGwnLFxyXG4gICAgJ2FuaW1hdGVfX2FuaW1hdGVkJyxcclxuICAgICdhbmltYXRlX19mYWRlSW5MZWZ0JyxcclxuICAgICdzZWxlY3Qtbm9uZScsXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQmFyID0gY3JlYXRlU2VhcmNoQmFyKCk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcclxuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0SXAoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaXBpZnkub3JnP2Zvcm1hdD1qc29uJykpLmpzb24oKTtcclxuICByZXR1cm4gZGF0YS5pcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0SXA7XHJcbiIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgY3JlYXRlRGF0YUNvbnRhaW5lciBmcm9tICcuL2RhdGFDb250YWluZXInO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZURhdGFDb250YWluZXIoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkO1xyXG4iLCJmdW5jdGlvbiByZW5kZXJEYXRhKGRhdGEpIHtcclxuICBjb25zdCB0ZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xyXG4gIHRlbXBlcmF0dXJlRGl2LnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYyArICfCsCc7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XHJcbiAgbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XHJcblxyXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mbycpO1xyXG4gIGluZm9EaXYudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckRhdGE7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEJhcigpIHtcclxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaC4uLicpO1xyXG4gIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2JnLXppbmMtNDAwJyxcclxuICAgICdwLTInLFxyXG4gICAgJ2p1c3RpZnktYmV0d2VlbicsXHJcbiAgICAnaXRlbXMtY2VudGVyJyxcclxuICAgICdnYXAtMycsXHJcbiAgICAncm91bmRlZC1sZycsXHJcbiAgICAnbWluLXctMCcsXHJcbiAgICAnYmctemluYy00MDAnLFxyXG4gICAgJ291dGxpbmUtMCcsXHJcbiAgICAnc2hyaW5rJyxcclxuICAgICdwbGFjZWhvbGRlci16aW5jLTYwMCcsXHJcbiAgICAndGV4dC1zbGF0ZS02MDAnLFxyXG4gICAgJ2FuaW1hdGVfX2FuaW1hdGVkJyxcclxuICAgICdhbmltYXRlX19mYWRlSW5SaWdodCcsXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHNlYXJjaEJhcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoQmFyO1xyXG4iLCJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gIGNvbnN0IGFwaUtleSA9ICcwMzg0ZTJmZWM3Mjc0MDg1Yjc0MTkwMjEwMjMxMzA5JztcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufWA7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XHJcblxyXG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIGlmIChqc29uRGF0YS5lcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGpzb25EYXRhLmVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGpzb25EYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV2VhdGhlckFwcCBmcm9tICcuL2NsYXNzZXMvYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBXZWF0aGVyQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=