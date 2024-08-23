import { string, shape } from "prop-types"

export default function CalendarEvent({event}) {
  const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <span>- {user.name}</span>
    </>
  )
}

CalendarEvent.propTypes = {
  event: shape({
    title: string.isRequired,
    user: shape({
      name: string.isRequired
    })
  })
}