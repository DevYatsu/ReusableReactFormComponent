import { Select } from "../@types/select";

const Select = ({ name, register, values }: Select) => (
  <>
    <select {...register(name)}>
      {values.map((option) => (
        <option value={option.value} key={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  </>
);

export default Select;
