import DatePickerContainer from "../datepicker/DatePickerContainer";
import { Meta } from "@storybook/react";
import "./styles.css";
const meta: Meta = {
  title: "Libs/DatePicker",
  component: DatePickerContainer,
  parameters: {
    layout: "centered",
  },
} as const;

export default meta;

type Story = typeof meta;

export const DefaultStateUsingCurrentMonthYear: Story = {
  args: {},
};

export const DateSelectedWithNullDates: Story = {
  args: {
    initialMonth: 5,
    initialYear: 2024,
    initialDate: 1,
  },
};

export const DateSelectedWithoutNullDates: Story = {
  args: {
    initialMonth: 9,
    initialYear: 2023,
    initialDate: 1,
  },
};
