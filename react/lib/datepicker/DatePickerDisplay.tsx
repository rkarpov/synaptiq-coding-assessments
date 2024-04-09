import React from "react";
import { calendarDates } from "./DatePickerUtils";

const DATE_NAMES = ["S", "M", "T", "W", "T", "F", "S"];
const LEFT_ARROW = "←";
const RIGHT_ARROW = "→";
export const PREVIOUS_MONTH = "previous";
export const NEXT_MONTH = "next";

type DatePickerDisplayProps = {
	currentMonthName: String;
	currentYear: number;
	calendarDates: calendarDates;
	onClickDate: (date: number | null) => void;
	onMonthChange: (direction: typeof PREVIOUS_MONTH | typeof NEXT_MONTH) => void;
	selectedDate: number | null;
};

const DatePickerDisplay = ({
	currentMonthName,
	currentYear,
	calendarDates,
	onClickDate,
	onMonthChange,
	selectedDate,
}: DatePickerDisplayProps) => {
	return (
		<>
			<header
				aria-label="Date Picker Header"
				className="font-bold text-3xl text-center"
			>
				Single Date Picker
			</header>
			<div className="mt-4 px-4 flex justify-between rounded border border-gray-400">
				<button
					aria-label="Previous Month"
					onClick={() => onMonthChange(PREVIOUS_MONTH)}
					id="left"
				>
					<span>{LEFT_ARROW}</span>
				</button>
				<label aria-label="Selected Month and Year">
					{selectedDate
						? `${currentMonthName} ${selectedDate}, ${currentYear}`
						: "Pick a Date"}
				</label>
				<button
					aria-label="Next Month"
					onClick={() => onMonthChange(NEXT_MONTH)}
					id="right"
				>
					<span>{RIGHT_ARROW}</span>
				</button>
			</div>
			<div className="mt-2 grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-7 rounded border border-gray-400">
				{DATE_NAMES.map((day: String, idx: number) => (
					<div
						key={`${idx}-day`}
						className="p-2 flex justify-center text-gray-400"
						role="columnheader"
					>
						{day}
					</div>
				))}
				{calendarDates.map((date: number | null, idx: number) => (
					<button
						aria-label={date ? `${date}` : "Empty"}
						aria-pressed={selectedDate === date}
						className={`p-2 flex justify-center ${
							date === null ? "cursor-default" : "cursor-pointer"
						} ${date && selectedDate === date && "bg-blue-500 text-white"}`}
						key={`${idx}-date`}
						onClick={() => onClickDate(date)}
						role="gridcell"
						tabIndex={date === null ? -1 : 0}
					>
						{date}
					</button>
				))}
			</div>
		</>
	);
};

export default DatePickerDisplay;
