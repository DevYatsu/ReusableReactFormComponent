"use client";
import { Input } from "../../@types/input";

const checkPassword = (getValues: any) => {
  const { password, passwordConfirmation } = getValues();
  return password === passwordConfirmation || "passwords do not match";
};

type InputProps = Omit<Input, "register" | "getValues">;

const InputGeneratedByForm = ({
  type,
  name,
  placeholder,
  register,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  disabled,
  required,
  getValues,
  isPasswordConfirm,
  className,
  label,
}: Input) => {
  const regPattern = pattern
    ? typeof pattern === "string"
      ? new RegExp(pattern)
      : { value: new RegExp(pattern.value), message: pattern.message }
    : undefined;

  return (
    <>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-600 uppercase dark:text-gray-200"
      >
        {label
          ? label
          : name
              .split("")
              .map((letter: string) =>
                letter === letter.toUpperCase() ? ` ${letter}` : letter
              )
              .join("")}
      </label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        {...register(name, {
          required,
          minLength,
          maxLength,
          disabled,
          pattern: regPattern,
          min,
          max,
          validate: isPasswordConfirm ? checkPassword(getValues) : undefined,
        })}
        autoComplete="on"
        className={`block w-full p-3 mt-2 text-indigo-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${className}`}
      />
    </>
  );
};

const Input = ({
  type,
  name,
  placeholder,
  minLength,
  maxLength,
  min,
  max,
  required,
  disabled,
  isPasswordConfirm,
  pattern,
  className,
  label,
}: InputProps) => {
  const options = {
    minLength,
    maxLength,
    min,
    max,
    required,
    disabled,
    isPasswordConfirm,
    pattern,
    label,
  };
  console.log(options);

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-600 uppercase dark:text-gray-200"
      >
        {name
          .split("")
          .map((letter: string) =>
            letter === letter.toUpperCase() ? ` ${letter}` : letter
          )
          .join("")}
      </label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        autoComplete="on"
        className={`block w-full p-3 mt-2 text-indigo-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${className}`}
      />
    </div>
  );
};

export { Input, InputGeneratedByForm };
