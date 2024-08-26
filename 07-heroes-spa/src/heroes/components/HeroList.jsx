import { useMemo } from "react";
import HeroModel from "../models/HeroModel";
import HeroItem from "./HeroItem";

export default function HeroList({ publisher }) {
  const heroes = useMemo(() => HeroModel.getHeroesByPublishera(publisher), [ publisher ]);
  return (
    <div className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3 w-full">
      {heroes.map((hero) => (
        <HeroItem key={hero.id} {...hero} />
      ))}
    </div>
  );
}