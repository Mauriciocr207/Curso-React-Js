import useCounter from "../hooks/useCounter";

export default function CounterCustomHook() {
    const { 
        counter,
        increment,
        decrement,
        reset
    } = useCounter(0)

    return (
        <>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Counter App
            </h2>
            <p className="text-lg mt-10">Counter: {counter}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <button onClick={increment} 
                    className="rounded-md bg-gray-900 px-5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >+</button>
                <button onClick={reset} 
                    className="rounded-md bg-gray-900 px-5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >reset</button>
                <button onClick={decrement} 
                    className="rounded-md bg-gray-900 px-5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >-</button>
            </div>
        </>
    );
}
