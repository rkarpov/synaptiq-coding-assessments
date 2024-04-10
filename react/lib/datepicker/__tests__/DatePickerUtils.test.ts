import { generateCalendar, calendarDates } from '../DatePickerUtils';

describe('generateCalendar', () => {
  it('generates calendar dates correctly for a given year and month', () => {
    const year = 2024;
    const month = 5;
    const expectedDates: calendarDates = [
      null, null, null, null, null, null, 1, 
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
      14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 28, 29, 30
    ];
    const result: calendarDates = generateCalendar({ year, month });
    expect(result).toEqual(expectedDates);
  });
});
