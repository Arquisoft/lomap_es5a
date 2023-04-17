import { cleanup, render, screen } from "@testing-library/react";
import BaseTextInput from "./BaseTextInput";

describe("BaseTextInput component", () => {
  afterAll(cleanup);

  test("renders label and input", () => {
    const label = "Test Label";
    const inputName = "testName";
    const inputValue = "Test Value";
    const onChange = jest.fn();

    render(
      <BaseTextInput
        label={label}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        type={""}
      />
    );

    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByDisplayValue(inputValue);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", inputName);
  });
});
