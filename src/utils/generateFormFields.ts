import { FormInput, InputOptions } from "../../@types/input";
import { FormSelect, SelectValues } from "../../@types/select";
import { FormTextArea, TextAreaOptions } from "../../@types/textarea";

export const genInput = (
  name: string,
  placeholder: string,
  options: InputOptions
): FormInput => {
  return { name, placeholder, ...options };
};
export const genSelect = (name: string, values: SelectValues): FormSelect => {
  return { name, values, element: "select" };
};
export const genTextArea = (
  name: string,
  placeholder: string,
  options: TextAreaOptions
): FormTextArea => {
  return { name, placeholder, ...options, element: "textarea" };
};
