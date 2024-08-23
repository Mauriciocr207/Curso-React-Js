import { Textarea } from "@nextui-org/input";
import { TbFileDescription } from "react-icons/tb";
import { string, func, bool, oneOfType } from "prop-types"

export default function CalendarTextArea({ value, onChange, name, isInvalid, errorMessage }) {
  return (
    <Textarea
      label="Descripción"
      placeholder="Ingresa tu descripción"
      startContent={
        <TbFileDescription className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
      }
      className="text-red-500"
      classNames={{
        inputWrapper: "gap-1",
        input: "resize-y min-h-[40px] text-black",
        label: "my-1",
      }}
      description="Información adicional"
      value={value}
      onChange={onChange}
      name={name}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    />
  );
}

CalendarTextArea.propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    name: string.isRequired,
    isInvalid: bool,
    errorMessage: oneOfType([string, bool])
}