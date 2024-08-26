import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import getArraysIntoArray from "../helpers/getArraysIntoArray";

export const useFetchGifs = (category) => {
    const [gifGroups, setGifGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getInitGifs = async () => {
        const newGifs = await getGifs(category);
        if(!newGifs.length) return;
        const formatGifs = getArraysIntoArray(newGifs);
        setGifGroups(formatGifs);
        setIsLoading(false)
    }
 
    useEffect(() => {
        getInitGifs();
    }, []);

    return {
        gifGroups,
        isLoading
    }
}