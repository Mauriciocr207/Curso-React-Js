import { useEffect, useState } from 'react';

const initialErrors = (initialForm) => {
    let errors = {};
    Object.entries(initialForm).forEach(field => errors[field] = null);
    return errors;
}

const useForm = ( initialForm = {}, validations = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const [ errors, setErrors ] = useState(initialErrors(initialForm));
    const [ isFormValid, setIsFormValid ] = useState(false);

    useEffect(() => {
        setIsFormValid(
            Object.keys(initialForm).every(field => errors[field] === null)
        );
    }, [formState]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        validate(name, value);

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const validate = (name, value) => {
        if(validations[name]) {
            const [ validationFn, errorMessage ] = validations[name];
        
            const passed = validationFn(value);

            setErrors(errors => ({
                ...errors,
                [name]: !passed ? errorMessage : null
            }))
        }
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const registerSubmitForm = () => {
        setFormSubmitted(true);

        if(Object.values(errors).every(error => error === null)) 
            Object.entries(formState).forEach((input) => validate(...input));
    }

    return {
        ...formState,
        formState,
        setFormState,
        onInputChange,
        onResetForm,
        errors,
        isFormValid,
        formSubmitted,
        registerSubmitForm
    }
}

export default useForm;