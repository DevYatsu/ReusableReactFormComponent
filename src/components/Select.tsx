import { Select } from "../../@types/select";

type SelectProps = Omit<Select, "register" | "element">;

const SelectGeneratedByForm = ({
  name,
  register,
  values,
  disabled,
  className,
  label,
}: Select) => (
  <>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900 uppercase dark:text-white"
    >
      {label
        ? label
        : name
            .split("")
            .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
            .join("")}
    </label>
    <select
      name={name}
      className={`bg-gray-200 border border-gray-300 py-1 focus:bg-gray-300 text-gray-900 dark:text-indigo-800 w-full text-center text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      {...register(name, { disabled })}
    >
      {values.map((option) => (
        <option
          value={option.value}
          key={option.value}
          className="antialiased uppercase "
        >
          {option.displayValue}
        </option>
      ))}
    </select>
  </>
);

const Select = ({ values, name, disabled, className, label }: SelectProps) => {
  const options = {
    disabled,
    label,
  };
  console.log(options);

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 uppercase dark:text-white"
      >
        {name
          .split("")
          .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
          .join("")}
      </label>
      <select
        name={name}
        className={`bg-gray-200 border border-gray-300 py-1 text-gray-900 w-full text-center text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
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
