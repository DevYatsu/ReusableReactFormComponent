import { ReactHookFormPropertiesRestrictions } from "./input";

export type FormTextArea = {
  element: "textarea";
  name: string;
  placeholder: string;
  required?: boolean | string;
  minLength?: ReactHookFormPropertiesRestrictions<number>;
  maxLength?: ReactHookFormPropertiesRestrictions<number>;
  rows?: number;
};

export type TextArea = FormTextArea & { register: any };
