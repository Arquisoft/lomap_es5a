import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import BaseSelect from "./BaseSelect";
import { shallow } from "enzyme";

describe("BaseSelect component", () => {

  afterAll(cleanup);
  
  const handleChange = jest.fn();

  const options = [    { value: "option1", content: "Option 1" },    { value: "option2", content: "Option 2" },    { value: "option3", content: "Option 3" },  ];
  const props = {
    id: "test-id",
    label: "Test Label",
    name: "test-name",
    options: options,
    showContent: true,
    handleChange: handleChange,
    styles: { color: "red" },
  };

  it("Renderiza el componente con correct props", () => {
    const { getByLabelText } = render(<BaseSelect {...props} />);
    expect(getByLabelText("Test Label")).toBeInTheDocument();
    expect(getByLabelText("Test Label")).toHaveAttribute("name", "test-name");
    expect(getByLabelText("Test Label")).toHaveAttribute("id", "test-id");
    expect(getByLabelText("Test Label")).toHaveStyle("color: red");
  });

  it("Renderiza las opciones de forma correcta", () => {
    const { getByLabelText, getByText } = render(<BaseSelect {...props} />);
    fireEvent.change(getByLabelText("Test Label"), {
      target: { value: "option1" },
    });
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });

  it("llama handleChange function on select change", () => {
    const { getByLabelText } = render(<BaseSelect {...props} />);
    fireEvent.change(getByLabelText("Test Label"), {
      target: { value: "option1" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders select", () => {
    const wrapper = shallow(<BaseSelect {...props} />);
    const select = wrapper.find("select");

    expect(select).toHaveLength(1);
    expect(select.props().name).toEqual(props.name);
    expect(select.props().id).toEqual(props.id);
    expect(select.props().className).toEqual("base-select-item");
    expect(select.props().style).toEqual(props.styles);
  });

  it("renderiza un option para cada option en las propiedades option", () => {
    const wrapper = shallow(<BaseSelect {...props} />);
    const options = wrapper.find("option");

    expect(options).toHaveLength(props.options.length + 1); // +1 for the default option

    options.forEach((option, index) => {
      const optionIndex = index - 1;
      const optionProps = optionIndex >= 0 ? props.options[optionIndex] : null;
      const value = optionProps ? optionProps.value : "no-opt";
      //const defaultValue = optionProps ? undefined : "no-opt";
      const text = optionProps ? optionProps.content : "Selecciona una opción";
  
      expect(option.props().value).toEqual(value);
      //expect(option.props().defaultValue).toEqual("no-opt");
      expect(option.text()).toEqual(text);
    });

  });
});
