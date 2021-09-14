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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class MyCalc {
    constructor() {
        this.howManyInputs = document.getElementById("#addInput");
        this.inputArray = [];
        this.startApp();
    }
    startApp() {
        this.getOutputs();
        this.createInputs();
    }
    getOutputs() {
        this.sum = document.querySelector("#sum");
        this.avg = document.querySelector("#avg");
        this.min = document.querySelector("#min");
        this.max = document.querySelector("#max");
    }
    createInputs() {
        this.inputContainer = document.querySelector(".inputContainer");
        this.input = document.getElementById("addInput");
        this.input.addEventListener("blur", () => {
            const howmuch = +this.input.value;
            this.inputContainer.innerHTML = "";
            this.inputArray = [];
            for (let i = 0; i < howmuch; i++) {
                const input = document.createElement("input");
                input.id = `input${i}`;
                input.className = "data";
                input.type = "number";
                this.inputContainer.appendChild(input);
                this.inputArray.push(input);
                console.log(this.inputContainer);
                input.addEventListener("input", () => this.computeData());
            }
        });
    }
    computeData() {
        const values = this.inputArray.filter((el) => el.value.length > 0).map((el) => +el.value);
        if (values.length > 0) {
            const sum = values.reduce((a, b) => a + b, 0);
            const avg = sum / values.length;
            const min = Math.min(...values);
            const max = Math.max(...values);
            this.showOutput(sum, avg, min, max);
        }
        else {
            this.showOutput(0, 0, 0, 0);
        }
    }
    showOutput(sum, avg, min, max) {
        this.sum.value = sum.toString();
        this.avg.value = avg.toString();
        this.min.value = min.toString();
        this.max.value = max.toString();
    }
}
const myCalc = new MyCalc();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFNLE1BQU07SUFlUjtRQWJBLGtCQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUM7UUFFMUUsZUFBVSxHQUF1QixFQUFFLENBQUM7UUFZaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsVUFBVTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJ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QUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBDLENBQUM7Q0FFSjtBQUNELE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImNsYXNzIE15Q2FsYyB7XG4gICAgICAgIFxuICAgIGhvd01hbnlJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiNhZGRJbnB1dFwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpbnB1dENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgaW5wdXRBcnJheTogSFRNTElucHV0RWxlbWVudFtdID0gW107XG4gICAgdXNlcklucHV0OiBOdW1iZXI7XG4gICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgc3VtOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGF2ZzogSFRNTElucHV0RWxlbWVudDtcbiAgICBtaW46IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgbWF4OiBIVE1MSW5wdXRFbGVtZW50O1xuXG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0QXBwKCk7XG4gICAgfVxuXG4gICAgc3RhcnRBcHAoKSB7XG4gICAgICAgIHRoaXMuZ2V0T3V0cHV0cygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0cygpO1xuICAgIH1cblxuXG4gICAgZ2V0T3V0cHV0cygpIHtcbiAgICAgICAgdGhpcy5zdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bVwiKTtcbiAgICAgICAgdGhpcy5hdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F2Z1wiKTtcbiAgICAgICAgdGhpcy5taW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pblwiKTtcbiAgICAgICAgdGhpcy5tYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heFwiKTtcbiAgICB9XG4gICAgY3JlYXRlSW5wdXRzKCl7XG4gICAgICAgIHRoaXMuaW5wdXRDb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dENvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5wdXRcIilcblxuXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG93bXVjaCA9ICt0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5pbnB1dEFycmF5ID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG93bXVjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQuaWQgPSBgaW5wdXQke2l9YDtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImRhdGFcIlxuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRBcnJheS5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB0aGlzLmNvbXB1dGVEYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICBjb21wdXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5pbnB1dEFycmF5LmZpbHRlcigoZWwpID0+IGVsLnZhbHVlLmxlbmd0aCA+IDApLm1hcCgoZWwpID0+ICtlbC52YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VtID0gdmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgICAgICAgICAgY29uc3QgYXZnID0gc3VtIC8gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XG4gICAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWx1ZXMpO1xuXG4gICAgICAgICAgICB0aGlzLnNob3dPdXRwdXQoc3VtLCBhdmcsIG1pbiwgbWF4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd091dHB1dCgwICwgMCAsIDAgLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzaG93T3V0cHV0KHN1bTogbnVtYmVyLCBhdmc6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3VtLnZhbHVlID0gc3VtLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuYXZnLnZhbHVlID0gYXZnLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubWluLnZhbHVlID0gbWluLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubWF4LnZhbHVlID0gbWF4LnRvU3RyaW5nKCk7XG5cbiAgICB9XG5cbn1cbmNvbnN0IG15Q2FsYyA9IG5ldyBNeUNhbGMoKTtcblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=