"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTextArea = exports.genSelect = exports.genInput = void 0;
class FormField {
    constructor(name) {
        this.name = name;
        this._element = "input";
    }
    setElement(element, placeholderOrValues, options) {
        if (element === "select" && typeof placeholderOrValues === "object")
            return new SelectField(this.name, placeholderOrValues);
        if (typeof placeholderOrValues === "string") {
            if (element === "textarea")
                return new TextAreaField(this.name, placeholderOrValues, options);
            return new InputField(this.name, placeholderOrValues, options);
        }
        throw new Error(`The second argument must be either an array of values if the first argument is "select" or a string`);
    }
}
class InputField extends FormField {
    constructor(name, placeholder, options) {
        super(name);
        this.placeholder = placeholder;
        this.options = options;
        this._element = "input";
    }
    init() {
        return Object.assign({ name: this.name, placeholder: this.placeholder }, this.options);
    }
    addPlaceholder(placeholder) {
        this.placeholder = placeholder;
        return this;
    }
}
class SelectField extends FormField {
    constructor(name, values) {
        super(name);
        this.values = values;
        this._element = "select";
    }
    init() {
        if (this.values.length === 0)
            throw new Error("You need to set values using the setValues method");
        return { name: this.name, values: this.values, element: this._element };
    }
    setValues(values) {
        this.values = values;
        return this;
    }
}
class TextAreaField extends FormField {
    constructor(name, placeholder, options) {
        super(name);
        this.placeholder = placeholder;
        this.options = options;
        this._element = "textarea";
    }
    init() {
        return Object.assign({ name: this.name, placeholder: this.placeholder, element: this._element }, this.options);
    }
}
``;
const genInput = (name, placeholder, options) => {
    return new InputField(name, placeholder, options).init();
};
exports.genInput = genInput;
const genSelect = (name, values) => {
    return new SelectField(name, values).init();
};
exports.genSelect = genSelect;
const genTextArea = (name, placeholder, options) => {
    return new TextAreaField(name, placeholder, options).init();
};
exports.genTextArea = genTextArea;
//# sourceMappingURL=generateFormFields.js.map