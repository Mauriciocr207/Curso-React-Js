import { useState } from "react";

export default function useForm(form) {
    const [formState, setFormState] = useState(form);

    const onInputChamge = ({target}) => {
        const { name, value } = target;
        setFormState(prevForm => ({...prevForm, [name]:value}))
    }

    const onResetForm = (e) => {
        e.preventDefault();
        setFormState(form)
    };

    return {
        formState,
        onInputChamge,
        onResetForm
    }
}