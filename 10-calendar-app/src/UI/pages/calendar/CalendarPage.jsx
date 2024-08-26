import { Calendar } from "react-big-calendar";
import {
  CalendarCreateEventBtn,
  CalendarEvent,
  CalendarModal,
  NavBar,
} from "../../components";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  getMessagesES,
  localizer,
  zonedDateTimePropsToDate,
  datePropsToZonedDateTime,
} from "../../helpers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../app/features/calendar/calendarSlice";
import {
  openCreateEventModal,
  openUpdateEventModal,
  startGetEvents,
} from "../../../app/features/calendar";
import { useEffect } from "react";

export default function CalendarPage() {
  const { isModalOpen, events } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetEvents());
  }, []);

  const handleModalClose = () => dispatch(closeModal());

  const onAddEventButtonClick = () => dispatch(openCreateEventModal());

  const onDoubleClickEvent = (event) =>
    dispatch(openUpdateEventModal(datePropsToZonedDateTime(event)));

  const onViewChangedEvent = (view) => {
    localStorage.setItem("lastView", view);
    setLastView(view);
  };

  return (
    <section className="relative">
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events.map((event) => zonedDateTimePropsToDate(event))}
        startAccessor="start"
        endAccessor="end"
        className="p-5"
        style={{ height: "calc(100vh - 69px)" }}
        messages={getMessagesES()}
        eventPropGetter={(event) => {
          const isMyEvent = user.id === event.user.id
          return {
            style: {
              backgroundColor: isMyEvent ? "#347CF7":"#464660",
              borderRadius: "5px",
              opacity: 0.8,
              color: "white",
            },
          };
        }}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClickEvent}
        onView={onViewChangedEvent}
        view={lastView}
      />
      <CalendarModal isOpen={isModalOpen} onClose={handleModalClose} />
      <CalendarCreateEventBtn onClick={onAddEventButtonClick} />
    </section>
  );
}
