"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Select = ({ name, register, values }) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("select", Object.assign({}, register(name), { children: values.map((option) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.displayValue }))) })) }));
exports.default = Select;
//# sourceMappingURL=Select.js.map