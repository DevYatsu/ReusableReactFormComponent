import { HTMLInputTypeAttribute } from "react";

export type ReactHookFormPropertiesRestrictions<T> =
  | {
      value: T;
      message: string;
    }
  | T;

export type FormInput = {
  element?: "input";
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  isPasswordConfirm?: boolean;
  minLength?: ReactHookFormPropertiesRestrictions<number>;
  maxLength?: ReactHookFormPropertiesRestrictions<number>;
  pattern?: ReactHookFormPropertiesRestrictions<string>;
  min?: ReactHookFormPropertiesRestrictions<number>;
  max?: ReactHookFormPropertiesRestrictions<number>;
  required?: boolean | string;
  disabled?: boolean;
};

export type Input = FormInput & { register: any; getValues: any };
