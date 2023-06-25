import { ReactHookFormPropertiesRestrictions } from "./input";

export type TextAreaOptions = {
  required?: boolean | string;
  minLength?: ReactHookFormPropertiesRestrictions<number>;
  maxLength?: ReactHookFormPropertiesRestrictions<number>;
  disabled?: boolean;
  rows?: number;
};

export type FormTextArea = {
  element: "textarea";
  name: string;
  placeholder: string;
} & TextAreaOptions;

export type TextArea = FormTextArea & { register: any };
