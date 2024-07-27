import { Card, Typography } from "@material-tailwind/react";
import {string} from "prop-types";
import GifGroup from "./GifGroup";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridLoading from "./GifGridLoading";

export default function GifGrid({ category }) {
    const {gifGroups, isLoading} = useFetchGifs(category);

    return (
        <>
        {
            isLoading ? 
            <GifGridLoading/>
            :
            <Card className="mb-10 w-full p-5">
                <Typography variant="h5" className="text-black mb-3">{category}</Typography>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {gifGroups.map(gifGroup => <GifGroup key={JSON.stringify(gifGroup)} gifs={gifGroup}/>)}
                </div>
            </Card>
        }
        </>
    );
}

GifGrid.propTypes = {
    category: string.isRequired
}
