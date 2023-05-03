/**
 * Package Import
 */
import React from "react";
import { render, screen } from "@testing-library/react";

/**
 * Local Import
 */
import Box from "./index";
import { axe } from "jest-axe";

/**
 * Tests
 */
describe("Box", () => {
  it("should renders snapshot", () => {
    const { container } = render(<Box bgColor={""} children={""} />);
    expect(container).toMatchSnapshot();
  });

  it("should not have basic accessibility violations", async () => {
    const { container } = render(<Box bgColor={""} children={""} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
