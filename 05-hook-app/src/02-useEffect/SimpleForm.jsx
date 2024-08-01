import { useEffect } from "react";
import { useState } from "react"
import UserExist from "./UserExist";

export default function SimpleForm() {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const { username, email } = formState;

    const onInputChamge = ({target}) => {
        const { name, value } = target;
        setFormState(prevForm => ({...prevForm, [name]:value}))
    }

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
                        className="mt-2 rounded-md shadow-md p-2 text-black border-0 ring-1 ring-inset ring-gray-300 outline-none"
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
                        className="mt-2 rounded-md shadow-md p-2 text-black border-0 ring-2 ring-inset ring-gray-300 outline-none"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onInputChamge}
                    /> 
                    {username === 'strider2' && <UserExist/>}
                </div>
            </form>
        </>
    )
}