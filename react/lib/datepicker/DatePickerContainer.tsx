import React from "react";
import { generateCalendar, calendarDates } from "./DatePickerUtils";
import DatePickerDisplay from "./DatePickerDisplay";

const DatePickerContainer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonthDigit = currentDate.getMonth();
	const currentMonthName = currentDate.toLocaleString("default", {
		month: "long",
	});
	const calendarDates: calendarDates = generateCalendar({
		year: currentYear,
		month: currentMonthDigit,
	});

	return (
		<>
			<DatePickerDisplay
				calendarDates={calendarDates}
				currentMonthName={currentMonthName}
				currentYear={currentYear}
			/>
		</>
	);
};

export default DatePickerContainer;
