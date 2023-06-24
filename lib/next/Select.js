"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Select = ({ name, register, values, disabled }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: name
                .split("")
                .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
                .join("") }), (0, jsx_runtime_1.jsx)("select", Object.assign({}, register(name, { disabled }), { className: "bg-gray-50 border border-gray-300 text-gray-900 w-full lg:w-9/12 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: values.map((option) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.displayValue }, option.value))) }))] }));
exports.default = Select;
//# sourceMappingURL=Select.js.map