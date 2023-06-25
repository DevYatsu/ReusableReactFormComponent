import { Input } from "../../@types/input";
type InputProps = Omit<Input, "register" | "getValues">;
declare const InputGeneratedByForm: ({ type, name, placeholder, register, minLength, maxLength, pattern, min, max, disabled, required, getValues, isPasswordConfirm, className, }: Input) => import("react/jsx-runtime").JSX.Element;
declare const Input: ({ type, name, placeholder, minLength, maxLength, min, max, required, disabled, isPasswordConfirm, pattern, className, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export { Input, InputGeneratedByForm };
