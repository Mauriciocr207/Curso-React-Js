import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import {
  getNow,
  getToday
} from "../helpers";
import {
  CalendarInput,
  CalendarTextArea,
  CalendarDatePicker,
} from "./calendarForm";
import { func, bool } from "prop-types";
import useForm from "../hooks/useForm";
import { calendarFormValidation } from "../validation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEvent,
  updateEvent,
  deleteEvent
} from "../../app/features/calendar";
import CalendarDeleteEventBtn from "./CalendarDeleteEventBtn";

const getInitialForm = (event) => {
  return event || {
    title: "",
    notes: "",
    start: getNow(),
    end: getNow().add({ hours: 2 }),
  };
};

export default function CalendarModal({ isOpen, onClose }) {
  const { current: event } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const {
    title,
    notes,
    start,
    end,
    formState,
    setFormState,
    onInputChange,
    isFormValid,
    errors,
    onSubmitForm,
    onResetForm,
  } = useForm(getInitialForm(event), calendarFormValidation);

  useEffect(() => {
    setFormState(getInitialForm(event));
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm();
    if (isFormValid) {
      if (event) {
        dispatch(updateEvent({ ...formState }));
      } else {
        dispatch(createEvent({ ...formState }));
      }

      onResetForm();
    }
  };

  const handleDeleteBtnClick = () => dispatch(deleteEvent({ ...formState }));

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="px-2" >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex justify-between items-center gap-1 text-2xl text-gray-800">
              {event 
                ? (
                  <>
                    Editar Evento
                    <CalendarDeleteEventBtn onClick={handleDeleteBtnClick} />
                  </>
                )
                : "Nuevo Evento"
              }
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-gray-700">
                  {" "}
                  Selecciona tus fechas{" "}
                </h5>
                <CalendarDatePicker
                  name="start"
                  value={start}
                  minValue={getToday()}
                  onChange={onInputChange}
                />
                <CalendarDatePicker
                  name="end"
                  value={end}
                  minValue={start}
                  onChange={onInputChange}
                  isInvalid={!!errors.end}
                  errorMessage={errors.end}
                />
                <h5 className="font-semibold text-gray-700 mt-2 ">
                  {" "}
                  Título y notas{" "}
                </h5>
                <CalendarInput
                  value={title}
                  onChange={onInputChange}
                  name="title"
                  isInvalid={!!errors.title}
                  errorMessage={errors.title}
                />
                <CalendarTextArea
                  name="notes"
                  value={notes}
                  onChange={onInputChange}
                  isInvalid={!!errors.notes}
                  errorMessage={errors.notes}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                className="font-semibold"
              >
                Cerrar
              </Button>
              <Button
                type="submit"
                className="bg-primary-500 text-white font-semibold"
              >
                {event ? "Guardar" : "Crear"}
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}

CalendarModal.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
};
