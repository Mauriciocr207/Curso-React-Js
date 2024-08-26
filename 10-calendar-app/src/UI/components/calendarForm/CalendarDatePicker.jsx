import { DatePicker } from "@nextui-org/date-picker";
import { Button, ButtonGroup } from "@nextui-org/button";
import { getNextMonth, getTomorrow, getNow } from "../../helpers";
import { object, func, string, bool, oneOfType } from "prop-types";

export default function CalendarDatePicker({ label, value, name, minValue, onChange, isInvalid, errorMessage, isDisabled }) {
  return (
    <DatePicker
        label={label}
        labelPlacement="inside"
        hideTimeZone
        value={value}
        minValue={minValue}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        name={name}
        onChange={(dt) =>
            onChange({
                target: { name, value: dt },
            })
        }
        showMonthAndYearPickers
        timeInputProps={{
            classNames: {
                base: "!pb-12",
            }
        }}
        CalendarTopContent={
            <ButtonGroup
                fullWidth
                className="px-3 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
                radius="full"
                size="sm"
                variant="bordered"
            >
            <Button onPress={() => onChange({ target: { name, value: getNow() } })} >Hoy</Button>
            <Button onPress={() => onChange({ target: { name, value: getTomorrow() } })} >Mañana</Button>
            <Button onPress={() => onChange({ target: { name, value: getNextMonth() } })} >+1 Mes</Button>
            </ButtonGroup>
        }
        isDisabled={isDisabled}
    />
  )
}

CalendarDatePicker.propTypes = {
    label: string,
    value: object.isRequired,
    name: string.isRequired,
    minValue: object.isRequired,
    onChange: func.isRequired,
    isInvalid: bool,
    errorMessage: oneOfType([string, bool, func]),
    isDisabled: bool,
}