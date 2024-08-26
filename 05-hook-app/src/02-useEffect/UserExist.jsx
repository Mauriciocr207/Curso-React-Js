import { useEffect, useState } from "react"

export default function UserExist() {
  const [ coords, setCoords ] = useState({x:0, y:0});


  useEffect(() => {
    const onMouseMove = ({x,y}) => setCoords({x,y});

    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

    return (
      <>
          <p className="text-red-400 font-medium">Usuario ya existe</p>
          <p>{JSON.stringify(coords)}</p>
      </>
    )
}