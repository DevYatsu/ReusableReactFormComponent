import { FormInput, InputOptions } from "../../@types/input";
import { FormSelect, SelectValues } from "../../@types/select";
import { FormTextArea, TextAreaOptions } from "../../@types/textarea";
export declare const genInput: (name: string, placeholder: string, options: InputOptions) => FormInput;
export declare const genSelect: (name: string, values: SelectValues) => FormSelect;
export declare const genTextArea: (name: string, placeholder: string, options: TextAreaOptions) => FormTextArea;
