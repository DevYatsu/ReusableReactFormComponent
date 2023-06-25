import { Select } from "../../@types/select";
type SelectProps = Omit<Select, "register" | "element">;
declare const SelectGeneratedByForm: ({ name, register, values, disabled, className, label, }: Select) => import("react/jsx-runtime").JSX.Element;
declare const Select: ({ values, name, disabled, className, label }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export { Select, SelectGeneratedByForm };
