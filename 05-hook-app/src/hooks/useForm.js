import { useState } from "react";

export default function useForm(form) {
    const [formState, setFormState] = useState(form);

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState(prevForm => ({...prevForm, [name]:value}))
    }

    const onResetForm = (e) => {
        e?.preventDefault();
        setFormState(form)
    };

    return {
        formState,
        onInputChange,
        onResetForm
    }
}