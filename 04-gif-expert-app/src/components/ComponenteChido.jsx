import { useEffect, useReducer, useRef, useState } from "react"

export default function ComponenteChido() {
    
    const ref = useRef(null);


    useEffect(() => {
        if(ref.current) {
            console.log(ref.current.value);
        }
    }, []);


    return <>
        <div>
            <h1>Bienvenidos a nuestra página</h1>
            <p>Texto alternativo...</p>
            <input type="text" ref={ref}/>
        </div>
    </>
}