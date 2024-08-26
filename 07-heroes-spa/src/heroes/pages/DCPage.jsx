import { Typography } from "@material-tailwind/react";
import HeroList from "../components/HeroList";

export default function DCPage() {
  return (
    <>
      <Typography className="text-3xl font-bold text-gray-800 mb-10">
        Marvel
      </Typography>
      <HeroList publisher="DC Comics" />
    </>
  )
}