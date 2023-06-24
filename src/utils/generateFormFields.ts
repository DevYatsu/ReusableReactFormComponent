import { FormInput, InputOptions } from "../../@types/input";
import { FormSelect, SelectOptions, SelectValues } from "../../@types/select";
import { FormTextArea, TextAreaOptions } from "../../@types/textarea";

export function genInput(
  name: string,
  placeholder: string,
  options?: InputOptions
): FormInput {
  return { name, placeholder, ...options };
}
export function genSelect(
  name: string,
  values: SelectValues,
  options?: SelectOptions
): FormSelect {
  return { name, values, element: "select", ...options };
}
export function genTextArea(
  name: string,
  placeholder: string,
  options?: TextAreaOptions
): FormTextArea {
  return { name, placeholder, ...options, element: "textarea" };
}
