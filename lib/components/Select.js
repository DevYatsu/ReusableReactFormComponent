"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectGeneratedByForm = exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SelectGeneratedByForm = ({ name, register, values, disabled, className, label, }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block mb-2 text-sm font-medium text-gray-900 uppercase dark:text-white", children: label
                ? label
                : name
                    .split("")
                    .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
                    .join("") }), (0, jsx_runtime_1.jsx)("select", Object.assign({ name: name, className: `bg-gray-50 border border-gray-300 py-1 text-gray-900 w-full text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}` }, register(name, { disabled }), { children: values.map((option) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.displayValue }, option.value))) }))] }));
exports.SelectGeneratedByForm = SelectGeneratedByForm;
const Select = ({ values, name, disabled, className, label }) => {
    const options = {
        disabled,
        label,
    };
    console.log(options);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block mb-2 text-sm font-medium text-gray-900 uppercase dark:text-white", children: name
                    .split("")
                    .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
                    .join("") }), (0, jsx_runtime_1.jsx)("select", { name: name, className: `bg-gray-50 border border-gray-300 py-1 text-gray-900 w-full text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`, children: values.map((option) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.displayValue }, option.value))) })] }));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map