"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx("label", { htmlFor: name, className: "block text-xs font-semibold text-gray-600 uppercase dark:text-gray-200", children: name
                    .split("")
                    .map((letter) => letter === letter.toUpperCase() ? ` ${letter}` : letter)
                    .join("") }), _jsx("input", Object.assign({ id: name, type: type || "text", name: name, placeholder: placeholder }, register(name, {
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
export default Input;
//# sourceMappingURL=Input.js.map