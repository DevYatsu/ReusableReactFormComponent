import { InputOptions } from "../../@types/input";
import { SelectValues } from "../../@types/select";
import { TextAreaOptions } from "../../@types/textarea";
export declare const genInput: (name: string, placeholder: string, options: InputOptions) => {
    name: string;
    placeholder: string;
} | {
    isPasswordConfirm?: boolean | undefined;
    minLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    maxLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    pattern?: import("../../@types/input").ReactHookFormPropertiesRestrictions<string> | undefined;
    min?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    max?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    required?: string | boolean | undefined;
    disabled?: boolean | undefined;
    name: string;
    placeholder: string;
} | {
    required?: string | boolean | undefined;
    minLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    maxLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    rows?: number | undefined;
    name: string;
    placeholder: string;
};
export declare const genSelect: (name: string, values: SelectValues) => {
    name: string;
    values: SelectValues;
    element: "input" | "select" | "textarea";
};
export declare const genTextArea: (name: string, placeholder: string, options: TextAreaOptions) => {
    name: string;
    placeholder: string;
    element: "input" | "select" | "textarea";
} | {
    isPasswordConfirm?: boolean | undefined;
    minLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    maxLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    pattern?: import("../../@types/input").ReactHookFormPropertiesRestrictions<string> | undefined;
    min?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    max?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    required?: string | boolean | undefined;
    disabled?: boolean | undefined;
    name: string;
    placeholder: string;
    element: "input" | "select" | "textarea";
} | {
    required?: string | boolean | undefined;
    minLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    maxLength?: import("../../@types/input").ReactHookFormPropertiesRestrictions<number> | undefined;
    rows?: number | undefined;
    name: string;
    placeholder: string;
    element: "input" | "select" | "textarea";
};
