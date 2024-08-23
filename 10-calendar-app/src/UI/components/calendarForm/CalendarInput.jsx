import { Input } from "@nextui-org/input";
import { string, func, bool, oneOfType } from "prop-types"
import { FaNoteSticky } from "react-icons/fa6";

export default function CalendarInput({ value, onChange, name, isInvalid, errorMessage }) {
  return (
    <Input
      label="Título"
      classNames={{
        inputWrapper: "h-[4rem] ",
      }}
      placeholder="Alguna nota por aquí..."
      labelPlacement="inside"
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      startContent={
        <FaNoteSticky className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
      }
      description="Escribe una descripción corta"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

CalendarInput.propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    name: string.isRequired,
    isInvalid: bool,
    errorMessage: oneOfType([string, bool])
}