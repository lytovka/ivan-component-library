import { render } from "@testing-library/react";
import React from "react";
import { Heading } from "./Heading";

describe("src/Heading", () => {
  it("should render Heading with black color by default", () => {
    const { getByTestId } = render(
      <Heading data-testid="heading">Default heading</Heading>
    );

    expect(getByTestId("heading")).toHaveStyle("color: black");
  });

  it("should render Heading with correct color when fontColor is provided", () => {
    const { getByTestId } = render(
      <Heading fontColor="purple" data-testid="heading">
        Purple heading
      </Heading>
    );

    expect(getByTestId("heading")).toHaveStyle("color: purple");
  });
});
