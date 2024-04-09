import React, { useState, useMemo } from "react";
import { generateCalendar, calendarDates } from "./DatePickerUtils";
import DatePickerDisplay, {
	PREVIOUS_MONTH,
	NEXT_MONTH,
} from "./DatePickerDisplay";

type DatePickerContainerProps = {
	initialMonth?: number | null;
	initialYear?: number | null;
	initialDate?: number | null;
};

const DatePickerContainer = ({
	initialMonth = null,
	initialYear = null,
	initialDate = null,
}: DatePickerContainerProps) => {
	const [selectedDate, setSelectedDate] = useState<number | null>(initialDate);
	const [selectedMonth, setSelectedMonth] = useState<number | null>(initialMonth);
	const [selectedYear, setSelectedYear] = useState<number | null>(initialYear);

	const currentDate = new Date();
	const currentYear =
		selectedYear === null ? currentDate.getFullYear() : selectedYear;
	const currentMonthDigit =
		selectedMonth === null ? currentDate.getMonth() : selectedMonth;
	const currentMonthName = new Date(
		currentYear,
		currentMonthDigit,
		1
	).toLocaleString("default", {
		month: "long",
	});

	const calendarDates: calendarDates = useMemo(() => {
		return generateCalendar({ year: currentYear, month: currentMonthDigit });
	}, [selectedMonth, selectedYear]);

	const handleDateClick = (date: number | null) => {
		setSelectedDate((prevDate) => (prevDate === date ? null : date));
	};

	const handleMonthChange = (
		direction: typeof PREVIOUS_MONTH | typeof NEXT_MONTH
	) => {
		let newMonth = currentMonthDigit;
		let newYear = currentYear;
		if (direction === NEXT_MONTH) {
			newMonth = currentMonthDigit === 11 ? 0 : currentMonthDigit + 1;
			newYear = currentMonthDigit === 11 ? currentYear + 1 : currentYear;
		} else {
			newMonth = currentMonthDigit === 0 ? 11 : currentMonthDigit - 1;
			newYear = currentMonthDigit === 0 ? currentYear - 1 : currentYear;
		}
		setSelectedMonth(newMonth);
		setSelectedYear(newYear);
	};

	return (
		<div>
			<DatePickerDisplay
				calendarDates={calendarDates}
				currentMonthName={currentMonthName}
				currentYear={currentYear}
				onClickDate={handleDateClick}
				onMonthChange={handleMonthChange}
				selectedDate={selectedDate}
			/>
		</div>
	);
};

export default DatePickerContainer;
