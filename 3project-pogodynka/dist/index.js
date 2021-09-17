/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        this.apiKey = '68caf2c48879f95743bb493a36ee0d8e';
        this.getInput();
        this.getData();
        setInterval(() => this.refreshData(), 120000);
    }
    saveCityInfo(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const weather = yield this.getWeather(city);
            if (weather.cod !== "404") {
                this.saveData(weather.name);
            }
        });
    }
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
            const weatherResponse = yield fetch(openWeatherUrl);
            const weatherData = yield weatherResponse.json();
            return weatherData;
        });
    }
    createWeatherElement(city, localStorageName) {
        return __awaiter(this, void 0, void 0, function* () {
            const weatherData = yield this.getWeather(city);
            console.log(weatherData);
            const temp = Math.round(parseInt(weatherData["main"].temp, 10) - 273.15);
            const weatherType = weatherData.weather[0].main;
            const pressure = weatherData["main"].pressure;
            const humidity = weatherData["main"].humidity;
            this.createBox(temp, weatherType, city, localStorageName, pressure, humidity);
        });
    }
    saveData(data) {
        let keys = Object.keys(localStorage).length - 1;
        localStorage.setItem('weatherData' + keys, JSON.stringify(data));
        this.createWeatherElement(data, 'weatherData' + keys);
    }
    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('weatherData' + i);
                const localStorageName = 'weatherData' + i;
                const parseData = JSON.parse(data);
                this.createWeatherElement(parseData, localStorageName);
                console.log(parseData);
            }
        }
        else {
            return {};
        }
    }
    refreshData() {
        const allElements = document.querySelectorAll(".city_card");
        allElements.forEach(element => {
            element.parentElement.removeChild(element);
        });
        this.getData();
    }
    getInput() {
        this.btnAdd = document.querySelector(".btn-add");
        this.cityInput = document.querySelector("#cityInput");
        this.btnAdd.addEventListener("click", () => this.showData());
    }
    showData() {
        const dataInput = this.cityInput.value;
        this.saveCityInfo(dataInput);
    }
    createBox(temp, weaterType, city, localStorageName, pressure, humidity) {
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const buttonElement = document.createElement("button");
        buttonElement.addEventListener("click", function () {
            divElement.parentElement.removeChild(divElement);
            localStorage.removeItem(localStorageName);
        });
        buttonElement.innerText = "Remove";
        divElement.classList.add("city_card");
        this.createTemp(divElement, temp);
        this.createWeather(divElement, weaterType);
        this.createCountry(divElement, city);
        this.createPressure(divElement, pressure);
        this.createHumidity(divElement, humidity);
        weaterBox.appendChild(divElement);
        divElement.appendChild(buttonElement);
    }
    createCountry(elem, city) {
        const spanElement = document.createElement("div");
        spanElement.classList.add("city__box--top-country");
        spanElement.innerText = city;
        elem.appendChild(spanElement);
    }
    createTemp(elem, temp) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city__box--top-temp");
        spanElement.innerHTML = temp.toString() + "&#x2103";
        elem.appendChild(spanElement);
    }
    createWeather(elem, weatherType) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city__box--top-weater");
        spanElement.innerHTML = weatherType;
        elem.appendChild(spanElement);
    }
    createPressure(elem, pressure) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city__box--top-weater");
        spanElement.innerHTML = "Pressure: " + pressure;
        elem.appendChild(spanElement);
    }
    createHumidity(elem, humidity) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city__box--top-weater");
        spanElement.innerHTML = "Humidity: " + humidity;
        elem.appendChild(spanElement);
    }
}
exports.App = App;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const app = new app_1.App();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQWEsR0FBRztJQVFaO1FBUEEsV0FBTSxHQUFHLGtDQUFrQztRQVF2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsV0FBVyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLENBQUM7SUFDaEQsQ0FBQztJQUVLLFlBQVksQ0FBQyxJQUFZOztZQUUzQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFF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QUFXLENBQUMsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxjQUFjLENBQUMsSUFBb0IsRUFBRSxRQUFnQjtRQUNqRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbkQsV0FBVyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxjQUFjLENBQUMsSUFBb0IsRUFBRSxRQUFnQjtRQUNqRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbkQsV0FBVyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ2pDLENBQUM7Q0FFSjtBQW5JRCxrQkFtSUM7Ozs7Ozs7Ozs7Ozs7OztBQ25JRCwrREFBNEI7QUFJNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgYXBpS2V5ID0gJzY4Y2FmMmM0ODg3OWY5NTc0M2JiNDkzYTM2ZWUwZDhlJ1xuICAgIGJ0bkFkZDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY2l0eUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNpdHlOYW1lOiBzdHJpbmc7XG4gICAgZGF0YTogc3RyaW5nO1xuICAgIHdlYXRlckJveDogSFRNTERpdkVsZW1lbnQ7XG4gICAgZGF0YTE6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dCgpO1xuICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9PiB0aGlzLnJlZnJlc2hEYXRhKCksIDEyMDAwMClcbiAgICB9XG5cbiAgICBhc3luYyBzYXZlQ2l0eUluZm8oY2l0eTogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlcihjaXR5KTtcblxuICAgICAgICBpZiAod2VhdGhlci5jb2QgIT09IFwiNDA0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGEod2VhdGhlci5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFdlYXRoZXIoY2l0eTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3BlbldlYXRoZXJVcmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHt0aGlzLmFwaUtleX1gO1xuICAgICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChvcGVuV2VhdGhlclVybCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVdlYXRoZXJFbGVtZW50KGNpdHk6IHN0cmluZywgbG9jYWxTdG9yYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB0aGlzLmdldFdlYXRoZXIoY2l0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKVxuICAgICAgICBjb25zdCB0ZW1wID0gTWF0aC5yb3VuZChwYXJzZUludCh3ZWF0aGVyRGF0YVtcIm1haW5cIl0udGVtcCwgMTApIC0gMjczLjE1KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlclR5cGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgICAgIGNvbnN0IHByZXNzdXJlID0gd2VhdGhlckRhdGFbXCJtYWluXCJdLnByZXNzdXJlO1xuICAgICAgICBjb25zdCBodW1pZGl0eSA9IHdlYXRoZXJEYXRhW1wibWFpblwiXS5odW1pZGl0eTtcbiAgICAgICAgdGhpcy5jcmVhdGVCb3godGVtcCwgd2VhdGhlclR5cGUsIGNpdHksIGxvY2FsU3RvcmFnZU5hbWUsIHByZXNzdXJlLCBodW1pZGl0eSk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5sZW5ndGggLSAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlckRhdGEnICsga2V5cywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB0aGlzLmNyZWF0ZVdlYXRoZXJFbGVtZW50KGRhdGEsICd3ZWF0aGVyRGF0YScgKyBrZXlzKVxuICAgIH1cblxuICAgIFxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChrZXlzID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJEYXRhJyArIGkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZU5hbWUgPSAnd2VhdGhlckRhdGEnICsgaTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlV2VhdGhlckVsZW1lbnQocGFyc2VEYXRhLCBsb2NhbFN0b3JhZ2VOYW1lKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnNlRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZyZXNoRGF0YSgpe1xuICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eV9jYXJkXCIpXG4gICAgICAgIGFsbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgICAgfSk7ICBcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7ICAgICAgXG4gICAgfVxuXG4gICAgZ2V0SW5wdXQoKSB7XG4gICAgICAgIHRoaXMuYnRuQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWRkXCIpXG4gICAgICAgIHRoaXMuY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5SW5wdXRcIik7XG4gICAgICAgIHRoaXMuYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dEYXRhKCkpXG4gICAgfVxuXG4gICAgc2hvd0RhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFJbnB1dCA9IHRoaXMuY2l0eUlucHV0LnZhbHVlO1xuICAgICAgICB0aGlzLnNhdmVDaXR5SW5mbyhkYXRhSW5wdXQpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlQm94KHRlbXA6IG51bWJlciwgd2VhdGVyVHlwZTogc3RyaW5nLCBjaXR5OiBzdHJpbmcsIGxvY2FsU3RvcmFnZU5hbWU6IHN0cmluZywgcHJlc3N1cmU6IHN0cmluZywgaHVtaWRpdHk6IHN0cmluZykge1xuICAgICAgICBjb25zdCB3ZWF0ZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG4gICAgICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2RWxlbWVudClcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZU5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICBidXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwiUmVtb3ZlXCI7XG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNpdHlfY2FyZFwiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUZW1wKGRpdkVsZW1lbnQsIHRlbXApXG4gICAgICAgIHRoaXMuY3JlYXRlV2VhdGhlcihkaXZFbGVtZW50LCB3ZWF0ZXJUeXBlKVxuICAgICAgICB0aGlzLmNyZWF0ZUNvdW50cnkoZGl2RWxlbWVudCwgY2l0eSlcbiAgICAgICAgdGhpcy5jcmVhdGVQcmVzc3VyZShkaXZFbGVtZW50LCBwcmVzc3VyZSlcbiAgICAgICAgdGhpcy5jcmVhdGVIdW1pZGl0eShkaXZFbGVtZW50LCBodW1pZGl0eSlcbiAgICAgICAgd2VhdGVyQm94LmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpXG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudClcbiAgICB9XG4gICAgY3JlYXRlQ291bnRyeShlbGVtOiBIVE1MRGl2RWxlbWVudCwgY2l0eTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNpdHlfX2JveC0tdG9wLWNvdW50cnlcIik7XG4gICAgICAgIHNwYW5FbGVtZW50LmlubmVyVGV4dCA9IGNpdHk7XG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpXG4gICAgfVxuICAgIGNyZWF0ZVRlbXAoZWxlbTogSFRNTERpdkVsZW1lbnQsIHRlbXA6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2l0eV9fYm94LS10b3AtdGVtcFwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcC50b1N0cmluZygpICsgXCImI3gyMTAzXCI7XG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpXG4gICAgfVxuICAgIGNyZWF0ZVdlYXRoZXIoZWxlbTogSFRNTERpdkVsZW1lbnQsIHdlYXRoZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNpdHlfX2JveC0tdG9wLXdlYXRlclwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gd2VhdGhlclR5cGVcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbWVudClcbiAgICB9XG4gICAgY3JlYXRlUHJlc3N1cmUoZWxlbTogSFRNTERpdkVsZW1lbnQsIHByZXNzdXJlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNpdHlfX2JveC0tdG9wLXdlYXRlclwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJQcmVzc3VyZTogXCIgKyBwcmVzc3VyZTtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbWVudClcbiAgICB9XG4gICAgY3JlYXRlSHVtaWRpdHkoZWxlbTogSFRNTERpdkVsZW1lbnQsIGh1bWlkaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNpdHlfX2JveC0tdG9wLXdlYXRlclwiKTtcbiAgICAgICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJIdW1pZGl0eTogXCIgKyBodW1pZGl0eTtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbWVudClcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcblxuXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTsiXSwic291cmNlUm9vdCI6IiJ9