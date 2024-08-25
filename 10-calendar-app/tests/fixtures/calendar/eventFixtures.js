import { parseZonedDateTime } from "@internationalized/date";

export const event = {
    title: "mi cumpleaños",
    notes: "Este es un recordatorio de mi cumpleaños\n",
    start: parseZonedDateTime("2024-08-25T01:06:26.081-06:00[America/Mexico_City]"),
    end: parseZonedDateTime("2024-08-25T03:06:26.081-06:00[America/Mexico_City]"),
    user: {
        name: "user",
        id: "66c83a9cd34c1b99b3544c12",
    },
    id: "66c9867c40d3b81ca9011260",
};


export const events = [
    {
        title: "cumple user",
        notes: "hola\n",
        start: parseZonedDateTime("2024-08-24T01:06:26.081-06:00[America/Mexico_City]"),
        end: parseZonedDateTime("2024-08-24T03:06:26.081-06:00[America/Mexico_City]"),
        user: {
            name: "user",
            id: "66c83a9cd34c1b99b3544c12",
        },
        id: "66c9867c40d3b81ca9011260",
    },
    {
        title: "asd",
        notes: "asdasdsad",
        start: parseZonedDateTime("2024-08-24T01:51:03.493-06:00[America/Mexico_City]"),
        end: parseZonedDateTime("2024-08-24T03:51:03.493-06:00[America/Mexico_City]"),
        user: {
            name: "Mau",
            id: "66c8b6492456b8e899837ced",
        },
        id: "66c990e971b365e69c3f03f3",
    },
    {
        title: "Mi cumpleaños",
        start: parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]"),
        end: parseZonedDateTime("2022-11-08T00:45[America/Los_Angeles]"),
        user: {
            name: "test user",
            id: "66ca06a1b9d7da0278a2374d",
        },
        id: "66ca1cf86650cf665abc792a",
    },
];
