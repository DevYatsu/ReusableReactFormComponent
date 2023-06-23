"use client";
import React from "react";
import Input from "./Input";
import { FormProps } from "./types/form";
import Select from "./Select";
import TextArea from "./TextArea";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

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
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<T>();

  const onSubmit: SubmitHandler<T> = async (data: { [x: string]: any }) => {
    if (removeRequestProps && removeRequestProps.length !== 0) {
      removeRequestProps.forEach((prop) => delete data[prop]);
    }

    const response = await fetch(submitURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": "your-csrf-token",
        "Strict-Transport-Security":
          "max-age=31536000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "X-XSS-Protection": "1; mode=block",
      },
      body: extraData
        ? JSON.stringify(Object.assign(data, { ...extraData }))
        : JSON.stringify(data),
      credentials: "same-origin",
    });

    const responseBody = await response.json();

    if (
      responseBody.status === 200 &&
      successRedirectionURL &&
      redirectFunction
    ) {
      redirectFunction(successRedirectionURL);
    }
  };

  return (
    <div
      className={`w-11/12 p-12 bg-slate-100 dark:bg-slate-900/40 sm:w-8/12 md:w-1/2 lg:w-5/12 ${className} ${
        isSimpleForm ? "w-full p-0 bg-inherit" : ""
      }`}
    >
      {isSimpleForm ? (
        ""
      ) : (
        <h1 className="text-xl font-semibold">
          Hello there ?,{" "}
          <span className="font-normal">
            {goal === "register"
              ? "please fill in your information to register"
              : goal === "login"
              ? "please fill in your information to login"
              : title}
          </span>
        </h1>
      )}
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between gap-3">
          {data.map((input, index) => (
            <div key={`${input.name}-${index}`}>
              {input.element !== undefined && input.element === "select" ? (
                <Select {...input} register={register} />
              ) : input.element !== undefined &&
                input.element === "textarea" ? (
                <TextArea {...input} register={register} />
              ) : (
                <Input {...input} register={register} getValues={getValues} />
              )}
              {errors[input.name]?.message && (
                <span className="text-sm text-red-500">
                  {`${errors[input.name]?.message}`}
                </span>
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-900 shadow-lg focus:outline-none hover:bg-indigo-800 hover:shadow-none"
        >
          {goal === "register"
            ? "Sign Up"
            : goal === "login"
            ? "Sign In"
            : "Submit"}
        </button>
        <p className="inline-block mt-4 text-xs text-gray-500 cursor-pointer dark:hover:text-white hover:text-black">
          {goal === "register" ? (
            <a href={"/login"}>Already registered? Login</a>
          ) : goal === "login" ? (
            <a href={"/register"}>Not Registered? Join Us</a>
          ) : typeof mistakeInstruction === "object" ? (
            <a href={mistakeInstruction[0]}>
              {mistakeInstruction[1] ? mistakeInstruction[1] : ""}
            </a>
          ) : (
            <a href={"/"}>{mistakeInstruction ? mistakeInstruction : ""}</a>
          )}
        </p>
      </form>
    </div>
  );
}