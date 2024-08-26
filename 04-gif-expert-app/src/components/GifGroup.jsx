import {array} from "prop-types"
import GifItem from "./GifItem"

export default function GifGroup({gifs}) {
    return (
        <div className="grid gap-4">
            {gifs.map(gif => <GifItem key={gif.id} {...gif}/>)}
        </div>
    )
}

GifGroup.propTypes = {
    gifs: array.isRequired,
}