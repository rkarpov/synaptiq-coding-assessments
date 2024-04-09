import React from "react";
import { calendarDates } from "./DatePickerUtils";

const DATE_NAMES = ["S", "M", "T", "W", "T", "F", "S"];

type DatePickerDisplayProps = {
	currentMonthName: String;
	currentYear: number;
	calendarDates: calendarDates;
};

const DatePickerDisplay = ({
	currentMonthName,
	currentYear,
	calendarDates,
}: DatePickerDisplayProps) => {
	return (
		<div className="DatePicker">
			<header className="font-bold text-3xl text-center">
				{currentMonthName} {currentYear}
			</header>
			<div className="mt-5 grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-7">
				{DATE_NAMES.map((day: String) => (
					<div className="p-2 flex justify-center">{day}</div>
				))}
				{calendarDates.map((date: number | null) => (
					<div className="p-2 flex justify-center">{date}</div>
				))}
			</div>
		</div>
	);
};

export default DatePickerDisplay;
