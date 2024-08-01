import { useRef } from "react";

export default function FocusScreenApp() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1 className="text-3xl font-semibold text-gray-700">Focus Screen</h1>
            <div className="w-1/3 m-auto">
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="Ingrese su nombre"
                    className="w-full mt-10 p-3 ring-2 ring-gray-500 rounded-lg text-md font-semibold outline-none"
                />
                <button onClick={onClick} className="mt-4 p-3 bg-blue-500 rounded-xl text-white text-md font-semibold">
                    Set focus
                </button>
            </div>
        </>
    )
}