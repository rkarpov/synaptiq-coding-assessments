## DatePicker

DatePicker is a resuable component library for selecting a single calendar
date. User may select a date from a calendar grid and choose previous or
following months. Years will update automatically depending on what is the
previous or next month. This library will default to the current day, month,
and year unless the user decides to pass in optional params to specify these
values.

## Setup

The library can be imported into any app within nextJS as follows

```js
import { DatePicker } from "@/lib/datepicker";
```

You may render DatePicker with optional params to specify the day, month, and
year. The following will render a selected date of April 15, 2024. Note the
initial month starts from index 0 for January.

```js
<DatePickerContainer initialDate={15} initialMonth={3} initialYear={2024} />
```

## Implementation

The calendar days are generated within the library on client side. There is a
helper function setup to get the calendar grid setup in an array. Null values
are placed in cells that are empty prior to the first day of the calender
month for that year

## Possible Followups

If this type of library is desirable, then next steps should be to create a
react library isntead of relying on this psuedo library code. Otherwise
refactor and migrate files into an app directory.

Potential room for improvements includes error handling, logging, increasing
visibility of previous and next month dates, dropdowns or popovers for
selecting other months and/or years, selecting a date range.

## Helpful Dev Commands

`npm run build` to ensure i can build any node modules
`npm run dev` to run a local dev environment to test dev changes
`npm run storybook` to run storybook stories environment
`npm run test` to run unit tests
`yarn` to ensure yarn runs correctly
`yarn test` to run workflow pipeline tests by yarn
`npm run lint` to test for es lint issues
`tsc` to lint test for tsc errors
