"use client";
import { __awaiter } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import { useForm } from "react-hook-form";
export default function Form({ data, goal, title, submitURL, className, mistakeInstruction, isSimpleForm, extraData, successRedirectionURL, removeRequestProps, redirectFunction, }) {
    const { register, handleSubmit, formState: { errors }, getValues, } = useForm();
    const onSubmit = (data) => __awaiter(this, void 0, void 0, function* () {
        if (removeRequestProps && removeRequestProps.length !== 0) {
            removeRequestProps.forEach((prop) => delete data[prop]);
        }
        const response = yield fetch(submitURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": "your-csrf-token",
                "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
                "X-Content-Type-Options": "nosniff",
                "X-Frame-Options": "SAMEORIGIN",
                "X-XSS-Protection": "1; mode=block",
            },
            body: extraData
                ? JSON.stringify(Object.assign(data, Object.assign({}, extraData)))
                : JSON.stringify(data),
            credentials: "same-origin",
        });
        const responseBody = yield response.json();
        if (responseBody.status === 200 &&
            successRedirectionURL &&
            redirectFunction) {
            redirectFunction(successRedirectionURL);
        }
    });
    return (_jsxs("div", { className: `w-11/12 p-12 bg-slate-100 dark:bg-slate-900/40 sm:w-8/12 md:w-1/2 lg:w-5/12 ${className} ${isSimpleForm ? "w-full p-0 bg-inherit" : ""}`, children: [isSimpleForm ? ("") : (_jsxs("h1", { className: "text-xl font-semibold", children: ["Hello there ?,", " ", _jsx("span", { className: "font-normal", children: goal === "register"
                            ? "please fill in your information to register"
                            : goal === "login"
                                ? "please fill in your information to login"
                                : title })] })), _jsxs("form", { className: "mt-6", onSubmit: handleSubmit(onSubmit), children: [_jsx("div", { className: "flex flex-col justify-between gap-3", children: data.map((input, index) => {
                            var _a, _b;
                            return (_jsxs("div", { children: [input.element !== undefined && input.element === "select" ? (_jsx(Select, Object.assign({}, input, { register: register }))) : input.element !== undefined &&
                                        input.element === "textarea" ? (_jsx(TextArea, Object.assign({}, input, { register: register }))) : (_jsx(Input, Object.assign({}, input, { register: register, getValues: getValues }))), ((_a = errors[input.name]) === null || _a === void 0 ? void 0 : _a.message) && (_jsx("span", { className: "text-sm text-red-500", children: `${(_b = errors[input.name]) === null || _b === void 0 ? void 0 : _b.message}` }))] }, `${input.name}-${index}`));
                        }) }), _jsx("button", { type: "submit", className: "w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-900 shadow-lg focus:outline-none hover:bg-indigo-800 hover:shadow-none", children: goal === "register"
                            ? "Sign Up"
                            : goal === "login"
                                ? "Sign In"
                                : "Submit" }), _jsx("p", { className: "inline-block mt-4 text-xs text-gray-500 cursor-pointer dark:hover:text-white hover:text-black", children: goal === "register" ? (_jsx("a", { href: "/login", children: "Already registered? Login" })) : goal === "login" ? (_jsx("a", { href: "/register", children: "Not Registered? Join Us" })) : typeof mistakeInstruction === "object" ? (_jsx("a", { href: mistakeInstruction[0], children: mistakeInstruction[1] ? mistakeInstruction[1] : "" })) : (_jsx("a", { href: "/", children: mistakeInstruction ? mistakeInstruction : "" })) })] })] }));
}
//# sourceMappingURL=Form.js.map