import { TextArea } from "../../@types/textarea";
type TextAreaProps = Omit<TextArea, "register" | "element">;
declare const TextAreaGeneratedByForm: ({ name, register, placeholder, required, rows, minLength, maxLength, disabled, className, }: TextArea) => import("react/jsx-runtime").JSX.Element;
declare const TextArea: ({ name, placeholder, rows, required, minLength, maxLength, disabled, className, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export { TextArea, TextAreaGeneratedByForm };
