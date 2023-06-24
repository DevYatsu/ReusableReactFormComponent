import { Select } from "../../@types/select";

const Select = ({ name, register, values, disabled }: Select) => (
  <>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {name
        .split("")
        .map((l) => (l === l.toUpperCase() ? ` ${l}` : l))
        .join("")}
    </label>

    <select
      {...register(name, { disabled })}
      className="bg-gray-50 border border-gray-300 text-gray-900 w-full text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {values.map((option) => (
        <option value={option.value} key={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  </>
);

export default Select;
