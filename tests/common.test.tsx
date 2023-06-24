import { render } from "@testing-library/react";

import "jest-canvas-mock";

import Form from "../lib/main";
import { getGenericFormInputsData } from "../lib/utils";

const data = getGenericFormInputsData("username");

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<Form data={data} submitURL={"/"} />);
  });
});
