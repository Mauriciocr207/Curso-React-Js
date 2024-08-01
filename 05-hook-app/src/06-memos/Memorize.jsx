import { useState } from "react";
import useCounter from "../hooks/useCounter"
import Small from "./Small";

export default function Memorize() {
    const { counter, increment } = useCounter(0);
    const [ show, setShow ] = useState(false);

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />
            <button className="mt-5 bg-blue-500 rounded-lg p-3" onClick={() => increment()}>
                +1
            </button>
            <button className="ml-5 mt-5 bg-white ring-2 ring-blue-500 rounded-lg p-3" onClick={() => setShow(!show)}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}