export type SelectValues = { value: string; displayValue: string }[];

export type FormSelect = {
  element: "select";
  name: string;
  values: SelectValues;
};

export type Select = FormSelect & { register: any };
