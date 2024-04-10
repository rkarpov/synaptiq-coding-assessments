import React, { useState, useMemo, useEffect } from "react";
import { generateCalendar, calendarDates } from "./DatePickerUtils";
import DatePickerDisplay, {
  PREVIOUS_MONTH,
  NEXT_MONTH,
} from "./DatePickerDisplay";

const DECEMBER = 11;
const JANUARY = 0;

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
  const [selectedMonth, setSelectedMonth] = useState<number | null>(
    initialMonth
  );
  const [selectedYear, setSelectedYear] = useState<number | null>(initialYear);

  const currentDate = new Date();
  const currentYear =
    selectedYear === null ? currentDate.getFullYear() : selectedYear;
  const currentMonthIdx =
    selectedMonth === null ? currentDate.getMonth() : selectedMonth;
  const currentMonthName = new Date(
    currentYear,
    currentMonthIdx,
    1
  ).toLocaleString("default", {
    month: "long",
  });

  // only generate calendar dates if month and year changes
  const calendarDates: calendarDates = useMemo(() => {
    return generateCalendar({ year: currentYear, month: currentMonthIdx });
  }, [currentMonthIdx, currentYear]);

  // prevent switching months with a selected date value that exceeds the number of days available
  // for that calendar month. If for example user selects Jan 31 and clicks to the next month,
  // then we should expect to see Feb 28 or 29.
  useEffect(() => {
    if (selectedDate !== null) {
      const maxSelectableDate = new Date(
        currentYear,
        currentMonthIdx + 1,
        0
      ).getDate();
      if (selectedDate > maxSelectableDate) {
        setSelectedDate(maxSelectableDate);
      }
    }
  }, [selectedDate, currentYear, currentMonthIdx]);

  const handleDateClick = (date: number | null) => {
    setSelectedDate((prevDate) => (prevDate === date ? null : date));
  };

  const handleMonthChange = (
    direction: typeof PREVIOUS_MONTH | typeof NEXT_MONTH
  ) => {
    let newMonth = currentMonthIdx;
    let newYear = currentYear;
    if (direction === NEXT_MONTH) {
      newMonth = currentMonthIdx === DECEMBER ? JANUARY : currentMonthIdx + 1;
      newYear = currentMonthIdx === DECEMBER ? currentYear + 1 : currentYear;
    } else {
      newMonth = currentMonthIdx === JANUARY ? DECEMBER : currentMonthIdx - 1;
      newYear = currentMonthIdx === JANUARY ? currentYear - 1 : currentYear;
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
