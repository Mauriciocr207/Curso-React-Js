import { Navigate, useNavigate, useParams } from "react-router-dom";
import HeroModel from "../models/HeroModel";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@material-tailwind/react";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function HeroPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => HeroModel.getHeroById(id), [id]);
  
  useEffect(() => {
    document.addEventListener('dragstart', function(evt) {
      if (evt.target.tagName == 'IMG') {
        evt.preventDefault();
      }
    });
  }, [])

  if (!hero) return <Navigate to="/marvel" />;


  return (
    <div className="relative isolate overflow-hidden pl-6 rounded-3xl sm:rounded-[2rem] sm:pl-16 lg:flex lg:gap-x-20 lg:pl-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
      >
        <Button
          variant="text"
          className="inline-flex items-center mb-10 text-sm font-semibold leading-6 text-black"
          style={{ textTransform: "none" }}
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack className="text-2xl" /> Regresar
        </Button>
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          {hero.superhero}...
          <br />
          Conviértete en un heroe
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          {hero.superhero}, también conocido como {hero.alter_ego}, ha sido uno
          de los superhéroes más reconocidos de {""}
          {hero.publisher}. Su primera aparición fue en {hero.first_appearance}.{" "}
          {""}
          {hero.characters !== hero.alter_ego
            ? `Algunos personajes reconocidos son ${hero.characters}`
            : ""}
        </p>
      </motion.div>
      <div className="relative mt-16 h-[17rem] lg:h-auto lg:mt-8 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className=""
        >
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt="hero-image"
            className="absolute -left-10 -top-3 w-[40rem] md:left-0 md:w-full lg:top-[7rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </div>
  );
}
