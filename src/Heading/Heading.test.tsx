import { render } from "@testing-library/react";
import React from "react";
import { Heading } from "./Heading";

const HEADING_ID = "heading";

describe("src/Heading", () => {
  it("should render Heading with black color by default", () => {
    const { getByTestId } = render(
      <Heading data-testid={HEADING_ID}>Default heading</Heading>
    );

    expect(getByTestId("heading")).toHaveStyle("color: black");
  });

  it("should render Heading with correct color when fontColor is provided", () => {
    const { getByTestId } = render(
      <Heading as="h2" data-testid={HEADING_ID} fontColor="purple">
        Purple heading
      </Heading>
    );

    expect(getByTestId("heading")).toHaveStyle("color: purple");
    expect(getByTestId("heading").tagName).toBe("H2");
  });
});
