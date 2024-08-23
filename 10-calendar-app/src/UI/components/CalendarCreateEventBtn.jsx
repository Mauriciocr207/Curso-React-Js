import { Button } from "@nextui-org/button";
import { func } from "prop-types"
import { FaPlus } from "react-icons/fa6";

export default function CalendarCreateEventBtn({ onClick }) {
  return (
    <Button className="absolute right-10 bottom-10 rounded-full min-w-14 w-14 h-14" color="primary" onClick={onClick} >
      <FaPlus className="text-2xl" />
    </Button>
  )
}

CalendarCreateEventBtn.propTypes = {
  onClick: func
}