import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";
import { getNow, getToday } from "../helpers";
import {
  CalendarInput,
  CalendarTextArea,
  CalendarDatePicker,
} from "./calendarForm";
import { func, bool } from "prop-types";
import useForm from "../hooks/useForm";
import { calendarFormValidation } from "../validation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteEvent,
  startCreateEvent,
  startUpdateEvent,
} from "../../app/features/calendar";
import CalendarDeleteEventBtn from "./CalendarDeleteEventBtn";

const getInitialForm = (event) => {
  return (
    event || {
      title: "",
      notes: "",
      start: getNow(),
      end: getNow().add({ hours: 2 }),
    }
  );
};

export default function CalendarModal({ isOpen, onClose }) {
  const {
    current: event,
    isLoading,
    errorMessage,
  } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [modifyPermission, setModifyPermission] = useState(true);

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
    if (!isLoading && !errorMessage) {
      onResetForm();
    }
  }, [isLoading]);

  useEffect(() => {
    setModifyPermission(!event || event?.user?.id === user.id);
    setFormState(getInitialForm(event));
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm();
    if (isFormValid) {
      if (event) {
        dispatch(startUpdateEvent({ ...formState }));
      } else {
        dispatch(startCreateEvent({ ...formState }));
      }
    }
  };

  const handleDeleteBtnClick = () =>
    dispatch(startDeleteEvent({ ...formState }));

  const handleCloseModal = () => {
    onResetForm();
    onClose();
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={handleCloseModal}
      className="px-2"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <form data-testid="form" onSubmit={handleSubmit}>
            <ModalHeader className="flex justify-between items-center gap-1 text-2xl text-gray-800">
              {event ? (
                <>
                  {modifyPermission ? (
                    <>
                      Editar Evento
                      <CalendarDeleteEventBtn onClick={handleDeleteBtnClick} />
                    </>
                  ) : (
                    "Evento"
                  )}
                </>
              ) : (
                "Nuevo Evento"
              )}
            </ModalHeader>
            <ModalBody>
              {errorMessage && (
                <Card className="bg-danger text-white font-semibold px-5 py-2 text-center">
                  {errorMessage}
                </Card>
              )}
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-gray-700">
                  {" "}
                  Selecciona tus fechas{" "}
                </h5>
                <CalendarDatePicker
                  label="start"
                  name="start"
                  value={start}
                  minValue={getToday()}
                  onChange={onInputChange}
                  isDisabled={!modifyPermission}
                />
                <CalendarDatePicker
                  label="end"
                  name="end"
                  value={end}
                  minValue={start}
                  onChange={onInputChange}
                  isInvalid={!!errors.end}
                  errorMessage={errors.end}
                  isDisabled={!modifyPermission}
                />
                <h5 className="font-semibold text-gray-700 mt-2 ">
                  {" "}
                  Título y notas{" "}
                </h5>
                <CalendarInput
                  label="title"
                  value={title}
                  onChange={onInputChange}
                  name="title"
                  isInvalid={!!errors.title}
                  errorMessage={errors.title}
                  isDisabled={!modifyPermission}
                />
                <CalendarTextArea
                  label="notes"
                  name="notes"
                  value={notes}
                  onChange={onInputChange}
                  isInvalid={!!errors.notes}
                  errorMessage={errors.notes}
                  isDisabled={!modifyPermission}
                />
              </div>
            </ModalBody>
            {modifyPermission && (
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
                  data-testid="submit-btn"
                  disabled={isLoading}
                  type="submit"
                  className="bg-primary-500 text-white font-semibold"
                >
                  {isLoading ? (
                    <Spinner color="white" size="sm" />
                  ) : event ? (
                    "Guardar"
                  ) : (
                    "Crear"
                  )}
                </Button>
              </ModalFooter>
            )}
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
