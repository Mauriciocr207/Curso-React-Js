import { createContext } from "react";
import { Notyf } from "notyf"

const NotyfContext = createContext(
    new Notyf({
        position: {
            x: "rigth",
            y: "top"
        },
        duration: 2000,
        types: [
            {
                type: 'success',
                className: 'alert-rounded'
            },
            {
                type: 'error',
                className: 'alert-rounded'
            }
        ],
        dismissible: true
    })
)

export default NotyfContext;