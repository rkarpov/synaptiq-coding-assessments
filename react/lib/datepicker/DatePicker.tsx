import React from "react";
import { generateCalendar, calendarDates } from "./DatePickerUtils";

const DATE_NAMES = ["S", "M", "T", "W", "T", "F", "S"];

const Datepicker = () => {
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
		<div className="DatePicker">
			<header className="font-bold text-3xl text-center">
				{currentMonthName} {currentYear}
			</header>
			<div className="mt-5 grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-7">
				{DATE_NAMES.map((day) => (
					<div className="p-2 flex justify-center">{day}</div>
				))}
				{calendarDates.map((date) => (
					<div className="p-2 flex justify-center">{date}</div>
				))}
			</div>
		</div>
	);
};

export default Datepicker;
