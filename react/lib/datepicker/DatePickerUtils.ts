type generateCalendarProps = {
  year: number;
  month: number;
};

/**
 *  calendarDates = [ null1, null2, ... nullFirstDayOfMonth-1, day1, ... day31 ]
 **/
export type calendarDates = Array<number | null>;

/**
  Generates calendar dates for a given year, month.
  Fills in empty days of the week prior to first calendar day.
 **/
export const generateCalendar = ({
  year,
  month,
}: generateCalendarProps): calendarDates => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const calendarDates = [];

  // Add empty cells for days of previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDates.push(null);
  }

  // Add cells for days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDates.push(day);
  }

  return calendarDates;
};
