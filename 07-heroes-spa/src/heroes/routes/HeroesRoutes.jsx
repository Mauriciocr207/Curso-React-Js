import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../UI";
import { DCPage, MarvelPage, HeroPage } from "../pages";

export default function HeroesRoutes() {

  return (
    <>
        <NavBar/>
        <div className="md:mt-5 px-5 max-w-6xl m-auto">
          <Routes>
              <Route path="marvel" element={<MarvelPage/>}/>
              <Route path="dc" element={<DCPage/>}/>
              <Route path="hero/:id" element={<HeroPage/>}/>
              <Route path="/" element={<Navigate to="marvel"/>} />
          </Routes>
        </div>
    </>
  )
}