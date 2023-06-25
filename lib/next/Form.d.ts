import { FormProps } from "../../@types/form";
import { FieldValues } from "react-hook-form";
type Form = Omit<FormProps, "redirectFunction">;
export default function Form<T extends FieldValues>({ data, children, goal, title, submitURL, className, mistakeInstruction, isSimpleForm, extraData, successRedirectionURL, removeRequestProps, }: Form): import("react/jsx-runtime").JSX.Element;
export {};
