import { ReactNode } from "react";
import { FormInput } from "./input";
import { FormSelect } from "./select";
import { FormTextArea } from "./textarea";

export type FormData = (FormInput | FormSelect | FormTextArea)[];

export type FormGoal = "register" | "login";
export type extraFormData = {
  postId?: string;
  responseToPostUser?: string;
  responseToCommentId?: string;
  responseToCommentUser?: string;
  postUserId?: string;
};

export type FormProps = {
  children?: ReactNode;
  data?: FormData;
  children?: ReactNode;
  goal?: FormGoal;
  title?: string;
  submitURL: string;
  className?: string;
  mistakeInstruction?: string | [href: string, instruction: string];
  isSimpleForm?: boolean;
  extraData?: extraFormData | Record<string, any>;
  successRedirectionURL?: string;
  removeRequestProps?: string[];
  redirectFunction?: (string) => void;
};
