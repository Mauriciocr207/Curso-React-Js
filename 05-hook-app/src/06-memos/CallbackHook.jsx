import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

export default function CallbackHook() {
    const [ counter, setCounter ] = useState(0);

    const increment = useCallback((value) => {
        setCounter(p => p+value);
    }, []);
    

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment}/>
        </>
    )
}