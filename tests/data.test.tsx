import { render } from "@testing-library/react";

import { Form } from "../lib/main";

import { genInput } from "../lib/utils";

const data = [
  genInput("test", "placeholder test"),
  genInput("test2", "placeholder test"),
];

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<Form data={data} submitURL={"/"}></Form>);
  });
});
