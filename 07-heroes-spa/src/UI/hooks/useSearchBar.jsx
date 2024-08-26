import { useEffect, useState } from "react";
import FuseSearch from "../../heroes/helpers/FuseSearch";
import { useNavigate } from "react-router-dom";

export default function useSearchBar() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [heroes, setHeroes] = useState([]);
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      setHeroes(FuseSearch.search(inputValue, { limit: 5 }));
    }, [inputValue]);
  
    useEffect(() => {
      setOpen(!!heroes.length);
    }, [heroes]);
  
    const handleSelectHero = (id) => {
      setOpen(false);
      navigate(`/hero/${id}`, {replace: true})
      setInputValue('');
    }

    return {
        inputValue,
        setInputValue,
        heroes,
        open,
        setOpen,
        handleSelectHero
    }
}