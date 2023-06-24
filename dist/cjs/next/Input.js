"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const checkPassword = (getValues) => {
    const { password, passwordConfirmation } = getValues();
    return password === passwordConfirmation || "passwords do not match";
};
const Input = ({ type, name, placeholder, register, minLength, maxLength, pattern, min, max, disabled, required, getValues, isPasswordConfirm, }) => {
    const regPattern = pattern
        ? typeof pattern === "string"
            ? new RegExp(pattern)
            : { value: new RegExp(pattern.value), message: pattern.message }
        : undefined;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block text-xs font-semibold text-gray-600 uppercase dark:text-gray-200", children: name
                    .split("")
                    .map((letter) => letter === letter.toUpperCase() ? ` ${letter}` : letter)
                    .join("") }), (0, jsx_runtime_1.jsx)("input", Object.assign({ id: name, type: type || "text", name: name, placeholder: placeholder }, register(name, {
                required,
                minLength,
                maxLength,
                disabled,
                pattern: regPattern,
                min,
                max,
                validate: isPasswordConfirm ? checkPassword(getValues) : undefined,
            }), { autoComplete: "on", className: "block w-full p-3 mt-2 text-indigo-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" }))] }));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map