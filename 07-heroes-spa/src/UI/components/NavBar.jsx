import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { pages } from "../../heroes/pages";
import { FaBars } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import useNavBar from "../hooks/useNavBar";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {pages.map(({ name, to }) => (
      <Typography
        key={name}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal w-fit"
      >
        <NavLink
          to={to}
          className={({ isActive }) =>
            `flex items-center border-b-2 transition-colors duration-300 ${
              isActive ? "border-blue-500" : "border-transparent"
            }`
          }
        >
          {name}
        </NavLink>
      </Typography>
    ))}
    <SearchBar/>
  </ul>
);

export default function NavBar() {
  const { openNav, setOpenNav, handleLogOut, user } = useNavBar();
  
 
  return (
    <div className="p-5 h-[5.986rem] lg:h-fit max-w-6xl m-auto mt-3">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="tracking-tight mr-4 cursor-pointer py-1.5 font-bold text-xl text-gray-700 flex gap-4 items-center"
          >
            Heroes App
            <span className="text-sm text-gray-600 border-l-2 border-gray-500 pl-4" data-testid="NavBar.Name">Hola {user.name} 😀</span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <Button
              onClick={handleLogOut}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
              data-testid="NavBar.LogoutButton"
              ripple={false} // only for test, disable for using animation on button
            >
              <span>Cerrar Sesión</span>
            </Button>
            <IconButton
              variant="text"
              className="text-lg ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ?  <RiCloseLargeLine/> : <FaBars/>}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav} className="lg:hidden">
          <div>
            {openNav && (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                
              >
                {navList}
                <Button fullWidth variant="text" size="sm" onClick={handleLogOut}>
                  <span>Cerrar Sesión</span>
                </Button>
              </motion.div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
