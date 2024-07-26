import { number } from 'prop-types'
import { useState } from 'react';

export default function CounterApp({value}) {
    const [count, setCount] = useState(value);

    function handleIncrement() {
        setCount(p => ++p);
    }

    function handleDecrement() {
        setCount(p => --p);
    }

    function handleReset() {
        setCount(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="CounterApp.count">{count}</h2>
            <button data-testid="CounterApp.inc" onClick={handleIncrement}>+</button>
            <button data-testid="CounterApp.dec" onClick={handleDecrement}>-</button>
            <button data-testid="CounterApp.res" onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: number.isRequired,
}