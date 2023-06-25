import { render } from "@testing-library/react";

import "jest-canvas-mock";

import { Form, Input, Select } from "../lib/alternative";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(
      <Form submitURL={"/"}>
        <Input name={"test"} placeholder={"test"} type="number" />
        <Input name={"test2"} placeholder={"test"} type="number" />
        <Input name={"test3"} placeholder={"test"} type="number" />
        <Select name={"test4"} values={[]} />
      </Form>
    );
  });
});
