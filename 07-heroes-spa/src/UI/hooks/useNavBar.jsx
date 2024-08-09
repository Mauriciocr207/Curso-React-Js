import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/context/AuthContext";

export default function useNavBar() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleLogOut = () => {
        logout();
        navigate("/login", {replace: true})
    };

    return {
        openNav,
        setOpenNav,
        handleLogOut,
        user
    };
}
