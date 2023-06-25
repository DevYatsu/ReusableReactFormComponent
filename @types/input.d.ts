import { HTMLInputTypeAttribute } from "react";

export type ReactHookFormPropertiesRestrictions<T> =
  | {
      value: T;
      message: string;
    }
  | T;

export type InputOptions = {
  isPasswordConfirm?: boolean;
  minLength?: ReactHookFormPropertiesRestrictions<number>;
  maxLength?: ReactHookFormPropertiesRestrictions<number>;
  pattern?: ReactHookFormPropertiesRestrictions<string>;
  min?: ReactHookFormPropertiesRestrictions<number>;
  max?: ReactHookFormPropertiesRestrictions<number>;
  required?: boolean | string;
  disabled?: boolean;
  className?: string;
  label?: string;
};

export type FormInput = {
  element?: "input";
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
} & InputOptions;

export type Input = FormInput & { register: any; getValues: any };
