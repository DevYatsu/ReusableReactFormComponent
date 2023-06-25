"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Input_1 = require("../components/Input");
const link_1 = tslib_1.__importDefault(require("next/link"));
const Select_1 = require("../components/Select");
const TextArea_1 = require("../components/TextArea");
const navigation_1 = require("next/navigation");
const react_hook_form_1 = require("react-hook-form");
const react_1 = tslib_1.__importDefault(require("react"));
function Form({ data, children, goal, title, submitURL, className = "", mistakeInstruction = "", isSimpleForm = false, extraData, successRedirectionURL, removeRequestProps = [], }) {
    if ((!children && !data) || (children && data)) {
        throw new Error('Either "children" components or "data" prop must be provided, but not both.');
    }
    const { register, handleSubmit, formState: { errors }, getValues, } = (0, react_hook_form_1.useForm)();
    const router = (0, navigation_1.useRouter)();
    const onSubmit = async (data) => {
        if (removeRequestProps && removeRequestProps.length !== 0) {
            removeRequestProps.forEach((prop) => delete data[prop]);
        }
        const response = await fetch(submitURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
        const responseBody = await response.json();
        if (responseBody.status === 200 && successRedirectionURL) {
            router.push(successRedirectionURL);
        }
    };
    const inputNames = new Set();
    return ((0, jsx_runtime_1.jsxs)("div", { className: `w-11/12 p-12 bg-slate-100 dark:bg-slate-900/40 sm:w-8/12 md:w-1/2 lg:w-5/12 ${className} ${isSimpleForm ? "w-full p-0 bg-inherit" : ""}`, children: [isSimpleForm ? ("") : ((0, jsx_runtime_1.jsxs)("h1", { className: "text-xl font-semibold", children: ["Hello there ?,", " ", (0, jsx_runtime_1.jsx)("span", { className: "font-normal", children: goal === "register"
                            ? "please fill in your information to register"
                            : goal === "login"
                                ? "please fill in your information to login"
                                : title })] })), (0, jsx_runtime_1.jsxs)("form", { className: "mt-6", onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-between gap-3", children: data
                            ? data.map((input, index) => {
                                var _a, _b;
                                const { name } = input;
                                if (inputNames.has(name)) {
                                    throw new Error(`Two Form Fields cannot share a same name!! (${name})`);
                                }
                                inputNames.add(name);
                                return ((0, jsx_runtime_1.jsxs)("div", { children: [input.element !== undefined &&
                                            input.element === "select" ? ((0, jsx_runtime_1.jsx)(Select_1.SelectGeneratedByForm, Object.assign({}, input, { register: register }))) : input.element !== undefined &&
                                            input.element === "textarea" ? ((0, jsx_runtime_1.jsx)(TextArea_1.TextAreaGeneratedByForm, Object.assign({}, input, { register: register }))) : ((0, jsx_runtime_1.jsx)(Input_1.InputGeneratedByForm, Object.assign({}, input, { register: register, getValues: getValues }))), ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.message) && ((0, jsx_runtime_1.jsx)("span", { className: "text-sm text-red-500", children: `${(_b = errors[name]) === null || _b === void 0 ? void 0 : _b.message}` }))] }, `${input.name}-${index}`));
                            })
                            : react_1.default.Children.map(children, (child, index) => {
                                var _a, _b;
                                if (react_1.default.isValidElement(child)) {
                                    const { name } = child.props;
                                    if (inputNames.has(name)) {
                                        throw new Error(`Two Form Fields cannot share a same name!! (${name})`);
                                    }
                                    inputNames.add(name);
                                    let componentToReturn;
                                    if (child.type === Input_1.Input) {
                                        componentToReturn = ((0, jsx_runtime_1.jsx)(Input_1.InputGeneratedByForm, Object.assign({}, child.props, { register: register, getValues: getValues })));
                                    }
                                    else if (child.type === Select_1.Select) {
                                        componentToReturn = ((0, jsx_runtime_1.jsx)(Select_1.SelectGeneratedByForm, Object.assign({}, child.props, { register: register })));
                                    }
                                    else if (child.type === TextArea_1.TextArea) {
                                        componentToReturn = ((0, jsx_runtime_1.jsx)(TextArea_1.TextAreaGeneratedByForm, Object.assign({}, child.props, { register: register })));
                                    }
                                    return ((0, jsx_runtime_1.jsxs)("div", { children: [componentToReturn, ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.message) && ((0, jsx_runtime_1.jsx)("span", { className: "text-sm text-red-500", children: `${(_b = errors[name]) === null || _b === void 0 ? void 0 : _b.message}` }))] }, `${child.props.name}.${index}`));
                                }
                                return child;
                            }) }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-900 shadow-lg focus:outline-none hover:bg-indigo-800 hover:shadow-none", children: goal === "register"
                            ? "Sign Up"
                            : goal === "login"
                                ? "Sign In"
                                : "Submit" }), (0, jsx_runtime_1.jsx)("p", { className: "inline-block mt-4 text-xs text-gray-500 cursor-pointer dark:hover:text-white hover:text-black", children: goal === "register" ? ((0, jsx_runtime_1.jsx)(link_1.default, { href: "/login", children: "Already registered? Login" })) : goal === "login" ? ((0, jsx_runtime_1.jsx)(link_1.default, { href: "/register", children: "Not Registered? Join Us" })) : typeof mistakeInstruction === "object" ? ((0, jsx_runtime_1.jsx)(link_1.default, { href: mistakeInstruction[0], children: mistakeInstruction[1] ? mistakeInstruction[1] : "" })) : ((0, jsx_runtime_1.jsx)(link_1.default, { href: "/", children: mistakeInstruction ? mistakeInstruction : "" })) })] })] }));
}
exports.default = Form;
//# sourceMappingURL=Form.js.map