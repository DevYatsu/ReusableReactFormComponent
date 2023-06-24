import { render } from "@testing-library/react";

import "jest-canvas-mock";

import generateData from "../lib/utils";
import { MainForm } from "../index";

const data = generateData("username");

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<MainForm data={data} submitURL={"/"} />);
  });
});
