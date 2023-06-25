export type SelectValues = { value: string; displayValue: string }[];

export type SelectOptions = {
  disabled?: boolean;
  className?: string;
  label?: string;
};

export type FormSelect = {
  element: "select";
  name: string;
  values: SelectValues;
} & SelectOptions;

export type Select = FormSelect & { register: any };
