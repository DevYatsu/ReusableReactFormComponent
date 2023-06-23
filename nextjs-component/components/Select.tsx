import React from "react";
import { SelectProps } from "../types/form";

const Select = ({ name, register, values }: SelectProps) => (
  <>
    <select {...register(name)}>
      {values.map((option) => (
        <option value={option.value}>{option.displayValue}</option>
      ))}
    </select>
  </>
);

export default Select;
