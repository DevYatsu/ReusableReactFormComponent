import { render } from "@testing-library/react";

import "jest-canvas-mock";

import File from "../lib/main/Form";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<File data={[]} submitURL={"/"} />);
  });
});
