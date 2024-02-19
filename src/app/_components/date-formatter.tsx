import { toDate, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = toDate(dateString); // Convert the date string to a Date object
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>; // Format the date
};

export default DateFormatter;
