import { memo, useEffect } from "react";

function ShowIncrement({increment}) {
    console.log('si me volví a renderizar :(');
    useEffect(() => {
        console.log('hey');
    }, [increment]);

    return (
        <button 
            className="bg-blue-500 text-white font-bold rounded-lg p-3 mt-5"
            onClick={() => increment(5)}
        >
            Incrementar
        </button>
    )
}

export default memo(ShowIncrement);