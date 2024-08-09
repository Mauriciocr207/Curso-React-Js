import { useState } from "react"

export default function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);

    return  {
        counter,
        increment(value = 1) {
            setCounter(c => c+value);
        },
        decrement(value = 1) {
            setCounter(c => c-value);
        },
        reset() {
            setCounter(initialValue);
        }
    }
}