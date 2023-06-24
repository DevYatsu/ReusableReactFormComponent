"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTextArea = exports.genSelect = exports.genInput = void 0;
const genInput = (name, placeholder, options) => {
    return Object.assign({ name, placeholder }, options);
};
exports.genInput = genInput;
const genSelect = (name, values) => {
    return { name, values, element: "select" };
};
exports.genSelect = genSelect;
const genTextArea = (name, placeholder, options) => {
    return Object.assign(Object.assign({ name, placeholder }, options), { element: "textarea" });
};
exports.genTextArea = genTextArea;
//# sourceMappingURL=generateFormFields.js.map