"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./main.scss");
const hello = "yep, it's workin still sick";
document.body.innerHTML = hello;
const app = new app_1.App();
app.getThis('');
document.addEventListener('click', (ev) => { app.getThis(ev); });
//# sourceMappingURL=index.js.map