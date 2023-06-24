import { render } from "@testing-library/react";

import "jest-canvas-mock";

import Form from "../lib/main";
import { genSelect, genTextArea } from "../lib/utils";

const data = [
  genTextArea("comment", "Comment...", {
    required: "Please enter a comment.",
  }),
  genSelect("comment", [
    { value: "test", displayValue: "test" },
    { value: "test2", displayValue: "test2" },
  ]),
];

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<Form data={data} submitURL={"/"} />);
  });
});
