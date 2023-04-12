import { render, screen, fireEvent, cleanup } from "@testing-library/react";
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
            onChange={onChange} type={""}      />
    );

    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByDisplayValue(inputValue);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", inputName);
  });

  test("renders clear button when showClearButton prop is true and input has value", () => {
    const inputValue = "Test Value";
    const onClear = jest.fn();

    render(
      <BaseTextInput
            value={inputValue}
            showClearButton={true}
            onChange={jest.fn()} label={""} type={""}      />
    );
    //
    //
    const props = {
        label: "Test input",
        name: "test-input",
        value: "Test value",
        onChange: jest.fn(),
        onInput: jest.fn(),
        onPaste: jest.fn(),
        showClearButton: true,
        type: "text",
        id: "test-input-id",
        placeholder: "Test placeholder",
        styles: {},
        required: true,
        disabled: false,
        onClear, // Pass onClear function as prop
      };
    const cont = document.createElement("div");
    render(<BaseTextInput {...props} />);
    const clearButton = cont.querySelector(
      'button[type="button"][aria-label="Clear input"]'
    );
    expect(clearButton).not.toBeNull();

    // simulate click event on the clear button
    if (clearButton instanceof HTMLButtonElement) {
        clearButton.click();
    }
    expect(onClear).toHaveBeenCalled();
  });

  test("does not render clear button when showClearButton prop is false", () => {
    const inputValue = "Test Value";

    render(
      <BaseTextInput value={inputValue} showClearButton={false} onChange={jest.fn()} label={""} type={""} />
    );

    const clearButtonElement = screen.queryByText("Borrar");
    expect(clearButtonElement).not.toBeInTheDocument();
  });
});
