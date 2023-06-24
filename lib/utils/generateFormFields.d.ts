import { FormInput, InputOptions } from "../../@types/input";
import { FormSelect, SelectOptions, SelectValues } from "../../@types/select";
import { FormTextArea, TextAreaOptions } from "../../@types/textarea";
export declare function genInput(name: string, placeholder: string, options?: InputOptions): FormInput;
export declare function genSelect(name: string, values: SelectValues, options?: SelectOptions): FormSelect;
export declare function genTextArea(name: string, placeholder: string, options?: TextAreaOptions): FormTextArea;
