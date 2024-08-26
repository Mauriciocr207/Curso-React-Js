import { useState } from "react";

export default function CounterApp() {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });

  const onClick = () =>
    setCounter(({ counter1, ...state }) => ({
      counter1: counter1 + 1,
      ...state,
    }));

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Counter App
      </h2>
      <p className="text-lg mt-10">Counter1: {counter1}</p>
      <p className="text-lg mt-10">Counter1: {counter2}</p>
      <p className="text-lg mt-10">Counter1: {counter3}</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={onClick}
          className="rounded-md bg-gray-900 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          +
        </button>
      </div>
    </>
  );
}
