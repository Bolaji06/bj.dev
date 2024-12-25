import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ChatTextArea from "./ChatTextArea";

describe("ChatTextArea component", () => {
  const formAction = jest.fn();
  const addMessage = jest.fn();
  const setTextInput = jest.fn();

  const defaultProps = {
    formAction,
    isPending: false,
    textInput: "",
    setTextInput,
    addMessage,
  };

  it("renders correctly", () => {
    const { container } = render(<ChatTextArea {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("calls handleOnChange when textarea value changes", () => {
    const { getByPlaceholderText } = render(<ChatTextArea {...defaultProps} />);
    const textarea = getByPlaceholderText("Ask AI about Bolaji Bolajoko");
    const newValue = "New text";
    fireEvent.change(textarea, { target: { value: newValue } });
    expect(setTextInput).toHaveBeenCalledTimes(1);
    expect(setTextInput).toHaveBeenCalledWith(newValue);
  });

  it("calls handleOnInput when textarea input changes", () => {
    const { getByPlaceholderText } = render(<ChatTextArea {...defaultProps} />);
    const textarea = getByPlaceholderText("Ask AI about Bolaji Bolajoko");
    const newValue = "New text";
    fireEvent.input(textarea, { target: { value: newValue } });
    expect(textarea.style.height).toBe(`${textarea.scrollHeight}px`);
  });

  it("calls handleButtonClick when button is clicked", () => {
    const { getByRole, getByPlaceholderText } = render(
      <ChatTextArea {...defaultProps} />
    );
    const button = getByRole("button");
    const newValue = "New text";
    const textarea = getByPlaceholderText("Ask AI about Bolaji Bolajoko");
    fireEvent.change(textarea, { target: { value: newValue } });
    fireEvent.click(button);
    expect(addMessage).toHaveBeenCalledTimes(1);
    expect(addMessage).toHaveBeenCalledWith({
      sender: "user",
      text: newValue.trim(),
    });
  });

  it("disables button when textInput is empty", () => {
    const { getByRole } = render(<ChatTextArea {...defaultProps} />);
    const button = getByRole("button");
    expect(button).toBeDisabled();
  });

  it("disables button when isPending is true", () => {
    const props = { ...defaultProps, isPending: true };
    const { getByRole } = render(<ChatTextArea {...props} />);
    const button = getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls formAction when form is submitted", () => {
    const { getByRole } = render(<ChatTextArea {...defaultProps} />);
    const form = getByRole("form");
    fireEvent.submit(form);
    expect(formAction).toHaveBeenCalledTimes(1);
  });
});
