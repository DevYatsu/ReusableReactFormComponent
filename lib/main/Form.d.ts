import { FormProps } from "../../@types/form";
import { FieldValues } from "react-hook-form";
export default function Form<T extends FieldValues>({
  data,
  goal,
  title,
  submitURL,
  className,
  mistakeInstruction,
  isSimpleForm,
  extraData,
  successRedirectionURL,
  removeRequestProps,
  redirectFunction,
}: FormProps): import("react/jsx-runtime").JSX.Element;
