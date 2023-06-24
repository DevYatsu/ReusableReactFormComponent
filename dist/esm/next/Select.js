import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const Select = ({ name, register, values }) => (_jsx(_Fragment, { children: _jsx("select", Object.assign({}, register(name), { children: values.map((option) => (_jsx("option", { value: option.value, children: option.displayValue }, option.value))) })) }));
export default Select;
//# sourceMappingURL=Select.js.map