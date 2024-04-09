import React, { useState } from "react";
import { generateCalendar, calendarDates } from "./DatePickerUtils";
import DatePickerDisplay from "./DatePickerDisplay";

const DatePickerContainer = () => {
	const [selectedDate, setSelectedDate] = useState<number | null>(null);

	const handleDateClick = (date: number | null) => {
		setSelectedDate(date);
	};

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
				onClickDate={handleDateClick}
				selectedDate={selectedDate}
			/>
		</>
	);
};

export default DatePickerContainer;
