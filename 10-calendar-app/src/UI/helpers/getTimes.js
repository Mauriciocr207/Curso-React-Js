import { getLocalTimeZone, now, today } from "@internationalized/date";

export function getNow() { return now(getLocalTimeZone()) };

export function getTomorrow() { return now(getLocalTimeZone()).add({days: 1}) };

export function getNextMonth() { return now(getLocalTimeZone()).add({months: 1}) };

export function getToday() { return today(getLocalTimeZone()) };