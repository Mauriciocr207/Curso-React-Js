import { Input } from "@material-tailwind/react"
import { useState } from "react";
import {func} from "prop-types";

export default function AddCategory({onNewCategory}) {
    const [inputValue, setInputValue] = useState("");
    const [focus, setFocus] = useState(false);

    const onActiveFocus = () => setFocus(true);
    const onInactiveFocus = () => inputValue || setFocus(false);
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if(!inputValue.trim()) return; //checks for empty string

        setInputValue("");
        onNewCategory(inputValue.trim());
    }

    return (
        <form className="relative mx-auto mt-2 flex w-72 flex-col items-end gap-6" onSubmit={onSubmit}>
            <Input 
                size="md" 
                label={focus ? "🔎":"Buscar gif"} 
                onFocus={onActiveFocus} 
                onBlur={onInactiveFocus}
                value={inputValue}
                onChange={onInputChange}
                containerProps={{className: 'min-w-0'}}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: func.isRequired
}