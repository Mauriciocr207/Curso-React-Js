import { useContext } from "react"
import UserContext from "./context/UserContext";

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
        <h1>Login Page</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

        <button 
          className="bg-blue-500 p-2 rounded-lg text-white mt-5"
          onClick={() => setUser({id: 123, name: 'Mau', email: 'mau@gmail.com'})}
        >
          Iniciar Sesión
        </button>
    </>
  )
}