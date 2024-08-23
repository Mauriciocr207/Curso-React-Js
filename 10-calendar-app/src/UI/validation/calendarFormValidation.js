import { differenceInSeconds } from "date-fns";

const calendarFormValidation = {
    title: [
        (value) => value.trim().length > 0,
        "El título no puede estar vacío"
    ],
    notes: [
        (value) => value.trim().length > 0,
        "La descripción no puede estar vacía"
    ],
    end: (() => {
        let errorMessage = null;
        return [
            (value, form) => {
                const { start } = form;
                const timeDifInSec = differenceInSeconds(value.toDate(), start.toDate());
                
                if(timeDifInSec < 0) {
                    const formatter = new Intl.DateTimeFormat('es-ES', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    });
                    const time = formatter.format(start.toDate());
                    errorMessage = `Selecciona ${time} o superior`;
                }                
                
                return timeDifInSec > 0;
            },
            /**
             * nextui library allow pass a function
             * to return a string as errorMessage
             */
            (value) => {
                if(value.isInvalid) {
                    return errorMessage;
                }
            }
        ]
    })()
}

export default calendarFormValidation;
