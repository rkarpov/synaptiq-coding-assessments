import React from "react";
import { calendarDates } from "./DatePickerUtils";

const DATE_NAMES = ["S", "M", "T", "W", "T", "F", "S"];

type DatePickerDisplayProps = {
	currentMonthName: String;
	currentYear: number;
	calendarDates: calendarDates;
	onClickDate: (date: number | null) => void;
	selectedDate: number | null;
};

const DatePickerDisplay = ({
	currentMonthName,
	currentYear,
	calendarDates,
	onClickDate,
	selectedDate,
}: DatePickerDisplayProps) => {
	return (
		<div className="DatePicker">
			<header className="font-bold text-3xl text-center">
				{currentMonthName} {currentYear}
			</header>
			{/* TODO dry classname css for tailwind grid. Lookup best practices */}
			<div className="mt-5 bg-gray-200 mt-5 grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-7">
				{DATE_NAMES.map((day: String, idx: number) => (
					<div
						key={`${idx}-day`}
						className="p-2 flex justify-center bg-gray-200"
					>
						{day}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-7">
				{calendarDates.map((date: number | null, idx: number) => (
					<div
						className={`p-2 flex justify-center ${
							date === null ? "cursor-default" : "cursor-pointer"
						} ${date && selectedDate === date && "bg-blue-500 text-white"}`}
						key={`${idx}-date`}
						onClick={() => onClickDate(date)}
					>
						{date}
					</div>
				))}
			</div>
		</div>
	);
};

export default DatePickerDisplay;
