"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenericFormInputsData = exports.genTextArea = exports.genSelect = exports.genInput = exports.TextArea = exports.Select = exports.Input = exports.NextForm = exports.Form = void 0;
const tslib_1 = require("tslib");
require("./index.css");
const main_1 = tslib_1.__importDefault(require("./main"));
exports.Form = main_1.default;
const next_1 = tslib_1.__importDefault(require("./next"));
exports.NextForm = next_1.default;
const components_1 = require("./components");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return components_1.Input; } });
Object.defineProperty(exports, "Select", { enumerable: true, get: function () { return components_1.Select; } });
Object.defineProperty(exports, "TextArea", { enumerable: true, get: function () { return components_1.TextArea; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "genInput", { enumerable: true, get: function () { return utils_1.genInput; } });
Object.defineProperty(exports, "genSelect", { enumerable: true, get: function () { return utils_1.genSelect; } });
Object.defineProperty(exports, "genTextArea", { enumerable: true, get: function () { return utils_1.genTextArea; } });
Object.defineProperty(exports, "getGenericFormInputsData", { enumerable: true, get: function () { return utils_1.getGenericFormInputsData; } });
//# sourceMappingURL=index.js.map