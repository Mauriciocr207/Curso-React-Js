import { NavLink } from "react-router-dom";

const routes = [
    ["/", "Home"],
    ["/about", "About"],
    ["/login", "Login"],
]

export default function NavBar() {
    return (
        <div className="flex gap-4">
            {routes.map(([route, pageName]) => (
                <NavLink 
                    key={route} 
                    to={route}
                    className={({isActive}) => `py-2 border-b-2 hover:border-gray-300 transition-colors ${isActive ? "border-blue-500":"border-transparent"}`}
                >
                    <p className="text-xs font-semibold text-gray-700" to={route}>{pageName}</p>
                </NavLink>
            ))}
        </div>
    )
}