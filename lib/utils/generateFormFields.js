"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTextArea = exports.genSelect = exports.genInput = void 0;
function genInput(name, placeholder, options) {
    return Object.assign({ name, placeholder }, options);
}
exports.genInput = genInput;
function genSelect(name, values, options) {
    return Object.assign({ name, values, element: "select" }, options);
}
exports.genSelect = genSelect;
function genTextArea(name, placeholder, options) {
    return Object.assign(Object.assign({ name, placeholder }, options), { element: "textarea" });
}
exports.genTextArea = genTextArea;
//# sourceMappingURL=generateFormFields.js.map