"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaGeneratedByForm = exports.TextArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextAreaGeneratedByForm = ({ name, register, placeholder, required, rows, minLength, maxLength, disabled, className, label, }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "comment", className: "sr-only", children: ["Your", " ", label
                    ? label
                    : name
                        .split("")
                        .map((letter) => letter === letter.toUpperCase() ? ` ${letter}` : letter)
                        .join("")] }), (0, jsx_runtime_1.jsx)("textarea", Object.assign({ id: name, rows: rows || 6, className: `w-full min-h-[125px] px-2 py-2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-900 ${className}`, placeholder: placeholder }, register(name, { required, minLength, maxLength, disabled })))] }));
exports.TextAreaGeneratedByForm = TextAreaGeneratedByForm;
const TextArea = ({ name, placeholder, rows, required, minLength, maxLength, disabled, className, label, }) => {
    const options = { required, rows, minLength, maxLength, label, disabled };
    console.log(options);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "comment", className: "sr-only", children: ["Your ", name] }), (0, jsx_runtime_1.jsx)("textarea", { id: name, rows: rows || 6, className: `w-full min-h-[125px] px-2 py-2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-900 ${className}`, placeholder: placeholder })] }));
};
exports.TextArea = TextArea;
//# sourceMappingURL=TextArea.js.map