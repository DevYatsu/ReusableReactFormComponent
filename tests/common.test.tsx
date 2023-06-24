import { render } from "@testing-library/react";

import "jest-canvas-mock";

import Form from "../lib/main/Form";
import React from "react";

interface Props {
  test: string;
}

describe("Common render", () => {
  it("renders without crashing", () => {
    render(
      <Form<Props>
        data={[{ name: "test", placeholder: "enter sth..." }]}
        submitURL={"/"}
      />
    );
  });
});
