import React from "react";
import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";
import { TestComponentProps } from "./TestComponent.types";

describe("Test Component", () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      $color: "red",
    };
  });

  const renderComponent = () =>
    render(<TestComponent data-testid="heading" {...props} />);

  it("should render Heading with red color", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("heading")).toHaveStyle("color: red");
  });

  it("should render Heading with green color", () => {
    props.$color = "green";
    const { getByTestId } = renderComponent();

    expect(getByTestId("heading")).toHaveStyle("color: green");
  });
});
