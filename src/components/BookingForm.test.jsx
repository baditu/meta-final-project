import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "./BookingForm";

jest.mock("../context/UserContext", () => ({
  useUserContext: jest.fn(),
}));

jest.mock("../services/timesAPI", () => ({
  generateRandomTimes: jest.fn(),
}));

describe("Booking Form should render correctly", () => {
  it("should render correctly", () => {
    const mockUserState = {
      availableTimes: ["10:00 AM", "12:00 PM", "2:00 PM"],
    };
    const mockDispatch = jest.fn();
    const mockGeneratedTimes = ["1:00 PM", "3:00 PM"];

    require("../services/timesAPI").generateRandomTimes.mockReturnValue(
      mockGeneratedTimes
    );

    require("../context/UserContext").useUserContext.mockReturnValue({
      state: mockUserState,
      dispatch: mockDispatch,
    });

    render(<BookingForm />);
    expect(screen.getByLabelText("Choose date *")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByLabelText("Special requests")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("should dispatch action when date input is changed", async () => {
    const mockUserState = {
      availableTimes: ["10:00 AM", "12:00 PM", "2:00 PM"],
    };
    const mockDispatch = jest.fn();
    const mockHandleChange = jest.fn();
    const mockNextStep = jest.fn();
    const mockOnBlur = jest.fn();
    const mockGeneratedTimes = ["10AM", "12AM", "3PM", "5PM", "6PM"];

    require("../context/UserContext").useUserContext.mockReturnValue({
      state: mockUserState,
      dispatch: mockDispatch,
    });

    render(
      <BookingForm
        formState={{
          reservationDate: "",
          reservationTime: "",
          numberOfPeople: "",
          occasion: "",
          specialRequest: "",
        }}
        handleChange={mockHandleChange}
        nextStep={mockNextStep}
        onBlur={mockOnBlur}
      />
    );

    fireEvent.change(screen.getByLabelText("Choose date *"), {
      target: { value: "2024-01-27" },
    });

    expect(mockDispatch).toHaveBeenCalled();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
