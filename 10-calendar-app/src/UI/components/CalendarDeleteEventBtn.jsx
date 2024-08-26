import { Button } from "@nextui-org/button";
import { func } from "prop-types"
import { FaRegTrashAlt } from "react-icons/fa";

export default function CalendarDeleteEventBtn({ onClick }) {
  return (
    <Button className="min-w-8 w-8 h-8" isIconOnly color="danger" variant="flat" onClick={onClick} >
      <FaRegTrashAlt className="text-lg" />
    </Button>
  )
}

CalendarDeleteEventBtn.propTypes = {
  onClick: func
}