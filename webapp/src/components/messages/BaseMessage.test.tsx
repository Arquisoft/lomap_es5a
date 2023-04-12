import React from "react";
import { cleanup, render } from "@testing-library/react";
import BaseMessage from "./BaseMessage";

describe("BaseMessage component", () => {

    afterAll(cleanup);
    
  it("renderiza correctamente", () => {
    const text = "Test message";
    const type = "success";
    const { getByText, container } = render(
      <BaseMessage text={text} type={type} />
    );
    
    const messageContainer = container.querySelector('.base-message-container');
    expect(messageContainer).toBeInTheDocument();
    expect(messageContainer?.classList.contains('base-message__success')).toBe(true);
    expect(messageContainer?.classList.contains('base-message__error')).toBe(false);
    
    const messageText = getByText(text);
    expect(messageText).toBeInTheDocument();
  });
});
