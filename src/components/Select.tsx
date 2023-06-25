import { Select } from "../../@types/select";

type SelectProps = Omit<Select, "register" | "element">;

const SelectGeneratedByForm = ({
  name,
  register,
  values,
  disabled,
  className,
}: Select) => (
  <>
    <label
      htmlFor={name}
      className=" block mb-2 text-sm font-medium text-slate-900 dark:text-white uppercase"
    >
      {name
        .split("")
        .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
        .join("")}
    </label>
    <select
      name={name}
      className={`bg-slate-50 border border-slate-300 py-1 text-slate-900 w-full text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      {...register(name, { disabled })}
    >
      {values.map((option) => (
        <option value={option.value} key={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  </>
);

const Select = ({ values, name, disabled, className }: SelectProps) => {
  const options = {
    disabled,
  };
  console.log(options);

  return (
    <>
      <label
        htmlFor={name}
        className=" block mb-2 text-sm font-medium text-slate-900 dark:text-white uppercase"
      >
        {name
          .split("")
          .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
          .join("")}
      </label>
      <select
        name={name}
        className={`bg-slate-50 border border-slate-300 py-1 text-slate-900 w-full text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      >
        {values.map((option) => (
          <option value={option.value} key={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </>
  );
};

export { Select, SelectGeneratedByForm };
