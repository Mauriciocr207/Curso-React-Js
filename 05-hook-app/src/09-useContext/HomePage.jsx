import { useContext } from "react"
import UserContext from "./context/UserContext";

export default function HomePage() {
  const { user } = useContext(UserContext)

  return (
    <>
        <h1>Home Page</h1>
        <hr />
        <pre data-testid="HomePage.Pre">
          { JSON.stringify(user, null, 3) }
        </pre>
    </>
  )
}