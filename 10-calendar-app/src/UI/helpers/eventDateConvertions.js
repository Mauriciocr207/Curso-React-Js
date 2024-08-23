import { fromDate, getLocalTimeZone } from "@internationalized/date";

export function zonedDateTimePropsToDate(event) {
  const { start, end } = event;
  return {
    ...event,
    start: start.toDate(),
    end: end.toDate(),
  };
}

export function datePropsToZonedDateTime(event) {
    const { start, end } = event;
    return {
        ...event,
        start: fromDate(start, getLocalTimeZone()),
        end: fromDate(end, getLocalTimeZone()),
    };
}