import { render } from "@testing-library/react";

import "jest-canvas-mock";

import Form from "../dist/cjs/main";
import { getGenericFormInputsData } from "../dist/cjs/utils";

const data = getGenericFormInputsData("username");

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<Form data={data} submitURL={"/"} />);
  });
});
