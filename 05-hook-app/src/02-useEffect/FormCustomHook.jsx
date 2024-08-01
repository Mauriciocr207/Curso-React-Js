import { useEffect } from "react";
import useForm from "../hooks/useForm";

export default function FormCustomHook() {
    
    const { formState, onInputChamge, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    useEffect(() => {
        // console.log('mount form');
    }, [])

    useEffect(() => { 
        // console.log('form change');
    }, [formState])
    
    useEffect(() => {
        // console.log('email change');
    }, [email])

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800">Simple form</h1>
            <form className="mt-5 max-w-[40rem] m-auto">
                <h3 className="text-xl text-gray-500">Formulario simple para practicar react</h3>
                <div className="w-2/3 m-auto mt-2 text-left p-4">
                    <label htmlFor="username" className="block text-base font-bold text-gray-500">Nombre de usuario</label>
                    <input 
                        type="text"
                        className="w-full mt-2 rounded-md shadow-md p-2 text-black border-0 ring-1 ring-inset ring-gray-300 outline-none"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onInputChamge}
                    />
                </div>
                <div className="w-2/3 m-auto mt-2 text-left p-4">
                    <label htmlFor="username" className="block text-base font-bold text-gray-500">Email</label>
                    <input 
                        type="text"
                        className="w-full mt-2 rounded-md shadow-md p-2 text-black border-0 ring-2 ring-inset ring-gray-300 outline-none"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onInputChamge}
                    />
                </div>
                <div className="w-2/3 m-auto mt-2 text-left p-4">
                    <label htmlFor="username" className="block text-base font-bold text-gray-500">Contraseña</label>
                    <input 
                        type="password"
                        className="w-full mt-2 rounded-md shadow-md p-2 text-black border-0 ring-2 ring-inset ring-gray-300 outline-none"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={onInputChamge}
                    />
                </div>

                <div className="w-2/3 m-auto flex p-4 justify-end">
                    <button onClick={onResetForm} className="bg-gray-800 rounded-lg py-2 px-4 text-white">Resetear</button>
                </div>
            </form>
        </>
    )
}