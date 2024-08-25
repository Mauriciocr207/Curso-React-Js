import { Notyf } from "notyf";
import { createContext } from "react";

export default createContext(
    new Notyf({
        position: {
            x: "rigth",
            y: "top"
        },
        duration: 3000,
        dismissible: true
    })
)