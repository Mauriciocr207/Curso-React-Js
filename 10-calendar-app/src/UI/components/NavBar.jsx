import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/navbar";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";

export default function NavBar() {

  return (
    <Navbar className="bg-gray-800">
      <NavbarContent>
        <NavbarBrand className="text-white">
          LOGO
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" variant="bordered" className="bg-red-500/20 font-semibold tracking-wide">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
