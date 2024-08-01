import { useMemo, useState } from "react";
import useCounter from "../hooks/useCounter"
import Small from "./Small";

const someHeavySyncFunction = (interations) => {
    for (let index = 0; index < interations; index++) {
        console.log('Ahi vamos...');
    }

    return `${interations} iterations made`;
}

export default function MemoHook() {
    const { counter, increment } = useCounter(500);
    const [ show, setShow ] = useState(false);
    const heavyMessage = useMemo(() => someHeavySyncFunction(counter), [counter]);

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />
            <h2>{heavyMessage}</h2>
            <button className="mt-5 bg-blue-500 rounded-lg p-3" onClick={() => increment()}>
                +1
            </button>
            <button className="ml-5 mt-5 bg-white ring-2 ring-blue-500 rounded-lg p-3" onClick={() => setShow(!show)}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}