import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaBook } from "react-icons/fa";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroItem({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) {
  return (
    <Card className="w-full flex-col justify-between" >
      <CardHeader floated={false} color="gray" className="relative h-56">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt="hero-image"
            className="overflow-hidden relative bottom-20 sm:bottom-36 md:bottom-10 w-full"
          />
        </motion.div>
      </CardHeader>
      <CardBody className="grid gap-2">
        <Typography variant="h6" color="blue-gray" className="flex items-center gap-4 font-semibold text-gray-700 text-[.9rem]">
          <MdOutlineRadioButtonChecked />
          {superhero}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="flex items-center gap-4 font-semibold text-gray-700 text-[.9rem]">
          <FaBook />
          {publisher}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="flex items-center gap-4 font-semibold text-gray-700 text-[.9rem]">
          <RxAvatar />
          {alter_ego}
        </Typography>
        <Typography className="text-sm font-normal">
          Apareció por primera vez en {first_appearance}.
          {characters !== alter_ego ? `Personajes: ${characters}`:''}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <Link to={`/hero/${id}`}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
