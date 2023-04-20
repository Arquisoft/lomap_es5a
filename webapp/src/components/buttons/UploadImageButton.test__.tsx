import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import UploadImageButton from "./UploadImageButton";
import { MemoryRouter } from "react-router-dom";

describe("UploadImageButton component", () => {

  afterAll(cleanup);
    
  it("renderiza correctamente", () => {
    const mockSetPointToShow = jest.fn();

    jest.mock("../../store/point.store", () => ({
      usePointDetailsStore: () => ({
      setPointToShow: mockSetPointToShow,
      }),
    }));

    render(
        <MemoryRouter>
            <UploadImageButton />
        </MemoryRouter>
    );
    const uploadimage = screen.getByTestId("uploadimage"); 
    expect(uploadimage).toBeInTheDocument();

    const input = screen.getByTestId("input"); 
    expect(input).toBeInTheDocument();

    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    fireEvent.change(input, {target: {files: file}});
    expect(mockSetPointToShow).toHaveBeenCalled();
  });

  // eslint-disable-next-line jest/expect-expect
  it("renderiza correctamente dentro del if", () => {
    const mockSetPointToShow = jest.fn();

    jest.mock("../../store/point.store", () => ({
      usePointDetailsStore: () => ({
      setPointToShow: mockSetPointToShow,
      }),
    }));

    render(
        <MemoryRouter>
            <UploadImageButton />
        </MemoryRouter>
    );
    const input = screen.getByTestId("input"); 
    fireEvent.change(input, {target: {files: undefined}})
  });

});