import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DatePickerContainer from "../DatePickerContainer";

describe("DatePickerContainer", () => {
	it("shows header with text", () => {
		const { getByRole } = render(<DatePickerContainer />);
		const header = getByRole("heading", { name: /Date Picker Heading/i });
		expect(header).toBeInTheDocument();
		expect(header.textContent).toBe("Single Date Picker");
	});

	it("displays correct label text when selectedDate is null", () => {
		const { getByLabelText } = render(<DatePickerContainer />);
		const label = getByLabelText("Selected Month and Year");
		expect(label).toBeInTheDocument();
		expect(label.textContent).toBe("Pick a Date");
	});

	it("displays correct label text when selectedDate is not null", () => {
		const { getByLabelText } = render(
			<DatePickerContainer
				initialDate={15}
				initialMonth={3}
				initialYear={2024}
			/>
		);
		const label = getByLabelText("Selected Month and Year");
		expect(label).toBeInTheDocument();
		expect(label.textContent).toBe(`April 15, 2024`);
	});

	it("selects a date when clicked", () => {
		const { getByText } = render(<DatePickerContainer />);
		const dateElement = getByText("15");
		fireEvent.click(dateElement);
		expect(dateElement).toHaveAttribute("aria-selected", "true");
	});

	it("changes the month when clicking the next month button", () => {
		const { getByLabelText } = render(
			<DatePickerContainer
				initialDate={15}
				initialMonth={3}
				initialYear={2024}
			/>
		);
		const nextMonthButton = getByLabelText("Next Month");
		fireEvent.click(nextMonthButton);
		const selectedMonthAndYearLabel = getByLabelText("Selected Month and Year");
		expect(selectedMonthAndYearLabel).toHaveTextContent("May 15, 2024");
	});

	it("changes the month when clicking the previous month button", () => {
		const { getByLabelText } = render(
			<DatePickerContainer
				initialDate={15}
				initialMonth={3}
				initialYear={2024}
			/>
		);
		const previousMonthButton = getByLabelText("Previous Month");
		fireEvent.click(previousMonthButton);
		const selectedMonthAndYearLabel = getByLabelText("Selected Month and Year");
		expect(selectedMonthAndYearLabel).toHaveTextContent("March 15, 2024");
	});

	it("changes the day when selected date is greater than next month's date range", () => {
		const { getByLabelText } = render(
			<DatePickerContainer
				initialDate={31}
				initialMonth={0}
				initialYear={2024}
			/>
		);
		const nextMonthButton = getByLabelText("Next Month");
		fireEvent.click(nextMonthButton);
		const selectedMonthAndYearLabel = getByLabelText("Selected Month and Year");
		expect(selectedMonthAndYearLabel).toHaveTextContent("February 29, 2024");
	});
});
