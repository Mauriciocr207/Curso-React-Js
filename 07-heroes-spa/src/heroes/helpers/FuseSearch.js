import Fuse from "fuse.js"
import heroes from "../data/heroes"

const fuseOptions = {
    keys: [
        "superhero",
        "alter_ego"
    ]
}

const fuse = new Fuse(heroes, fuseOptions)

export default fuse;