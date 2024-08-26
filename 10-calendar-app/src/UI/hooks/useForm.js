import { useEffect, useState } from 'react';

const initialErrors = (validations) => {
    let errors = {};
    Object.keys(validations).forEach( (field) =>  errors[field] = null );
    return errors;
}

const useForm = ( initialForm = {}, validations = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );
    const [ errors, setErrors ] = useState(initialErrors(validations));
    const [ isFormValid, setIsFormValid ] = useState(true);

    useEffect(() => {
        const formaValid = Object.entries(formState).every(input => validate(...input).passed);
        setIsFormValid(formaValid);
    }, [formState]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        validateAndShowErrors(name, value);

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const validate = (name, value) => {
        let passed = true;
        let errorMessage = null;

        if(validations[name]) {
            const [ validationFn, msg ] = validations[name];
            passed = validationFn(value, formState);
            errorMessage = msg;
        }

        return {
            passed,
            errorMessage
        }
    }

    const validateAndShowErrors = (name, value) => {
        const { passed, errorMessage } = validate(name, value);

        setErrors(errors => {
            return {
                ...errors,
                [name]: !passed ? errorMessage : false
            }
        })
    }

    const onResetForm = () => {
        setFormState( initialForm );
        setErrors(initialErrors(validations));
    }

    const onSubmitForm = () => {
        Object.entries(validations).forEach(([field]) => validateAndShowErrors(field, formState[field]));
    }

    return {
        ...formState,
        formState,
        setFormState,
        onInputChange,
        onResetForm,
        onSubmitForm,
        errors,
        isFormValid,
        setIsFormValid
    }
}

export default useForm;