import { memo } from "react";

function Hijo({ numero, incrementar }) {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="bg-blue-500 p-3 rounded-lg mr-3 mt-3 "
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}

export default memo(Hijo);


