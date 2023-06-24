"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TextArea = ({ name, register, placeholder, required, rows, }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "comment", className: "sr-only", children: ["Your ", name] }), (0, jsx_runtime_1.jsx)("textarea", Object.assign({ id: name, rows: rows || 6, className: "w-full min-h-[125px] px-2 py-2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-900", placeholder: placeholder }, register(name, { required })))] }));
exports.default = TextArea;
//# sourceMappingURL=TextArea.js.map