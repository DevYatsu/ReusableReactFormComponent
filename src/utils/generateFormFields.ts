import { FormInput, InputOptions } from "../../@types/input";
import { FormSelect, SelectValues } from "../../@types/select";
import { FormTextArea, TextAreaOptions } from "../../@types/textarea";

type FieldOptions = TextAreaOptions | InputOptions;

class FormField {
  public name: string;
  public _element: "select" | "textarea" | "input";

  constructor(name: string) {
    this.name = name;
    this._element = "input";
  }

  setElement(
    element: "select" | "textarea" | "input",
    placeholderOrValues: string | SelectValues,
    options?: FieldOptions
  ) {
    if (element === "select" && typeof placeholderOrValues === "object")
      return new SelectField(this.name, placeholderOrValues);
    if (typeof placeholderOrValues === "string") {
      if (element === "textarea")
        return new TextAreaField(this.name, placeholderOrValues, options);
      return new InputField(this.name, placeholderOrValues, options);
    }

    throw new Error(
      `The second argument must be either an array of values if the first argument is "select" or a string`
    );
  }
}

class InputField extends FormField {
  public placeholder: string;
  public options?: FieldOptions;

  constructor(name: string, placeholder: string, options?: FieldOptions) {
    super(name);
    this.placeholder = placeholder;
    this.options = options;
  }

  init(): FormInput {
    return { name: this.name, placeholder: this.placeholder, ...this.options };
  }

  addPlaceholder(placeholder: string) {
    this.placeholder = placeholder;
    return this;
  }
}
class SelectField extends FormField {
  public values: SelectValues;
  public _element: "select";

  constructor(name: string, values: SelectValues) {
    super(name);
    this.values = values;
    this._element = "select";
  }

  init(): FormSelect {
    if (this.values.length === 0)
      throw new Error("You need to set values using the setValues method");

    return { name: this.name, values: this.values, element: this._element };
  }

  setValues(values: SelectValues) {
    this.values = values;
    return this;
  }
}
class TextAreaField extends FormField {
  public placeholder: string;
  public options?: FieldOptions;
  public _element: "textarea";

  constructor(name: string, placeholder: string, options?: FieldOptions) {
    super(name);
    this.placeholder = placeholder;
    this.options = options;
    this._element = "textarea";
  }

  init(): FormTextArea {
    return {
      name: this.name,
      placeholder: this.placeholder,
      element: this._element,
      ...this.options,
    };
  }
}

export const genInput = (
  name: string,
  placeholder: string,
  options: InputOptions
): FormInput => {
  return new InputField(name, placeholder, options).init();
};
export const genSelect = (name: string, values: SelectValues): FormSelect => {
  return new SelectField(name, values).init();
};
export const genTextArea = (
  name: string,
  placeholder: string,
  options: TextAreaOptions
): FormTextArea => {
  return new TextAreaField(name, placeholder, options).init();
};
