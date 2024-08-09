import {
  Avatar,
  Collapse,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa"
import useSearchBar from "../hooks/useSearchBar";

export default function SearchBar() {
    const {
        inputValue,
        setInputValue,
        heroes,
        open,
        handleSelectHero
    } = useSearchBar();
  

  return (
    <div className="relative w-full lg:w-[16rem]">
      <Input
        type="search"
        label="Búsqueda"
        icon={<FaSearch className="text-gray-700" />}
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        data-testid="SearchBar.Input"
      />
      <Collapse
        open={open}
        className="bg-white ring-gray-400 absolute shadow-xl rounded-lg w-full mt-3 overflow-hidden"
      >
        <List>
          {heroes.map(({ item }) => (
            <ListItem
              key={item.id}
              onClick={() => handleSelectHero(item.id)}
              data-testid="SearchBar.Item"
            >
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="hero image"
                  src={`/assets/heroes/${item.id}.jpg`}
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {item.superhero}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {item.alter_ego}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
