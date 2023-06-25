"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.TextArea = exports.Input = exports.Form = void 0;
const tslib_1 = require("tslib");
const Form_1 = tslib_1.__importDefault(require("./form/Form"));
exports.Form = Form_1.default;
const Input_1 = require("../components/Input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return Input_1.Input; } });
const TextArea_1 = require("../components/TextArea");
Object.defineProperty(exports, "TextArea", { enumerable: true, get: function () { return TextArea_1.TextArea; } });
const Select_1 = require("../components/Select");
Object.defineProperty(exports, "Select", { enumerable: true, get: function () { return Select_1.Select; } });
//# sourceMappingURL=index.js.map