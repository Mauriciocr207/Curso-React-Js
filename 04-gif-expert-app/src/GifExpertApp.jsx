import { Alert, Typography } from "@material-tailwind/react"
import { useState } from "react"
import {AddCategory, GifGrid} from "./components";

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);
  const [opernAlert, setOpenAlert] = useState(false);

  const addCategory = (category) => {
    if(categories.includes(category)) {
      setOpenAlert(true);
      setTimeout(() => setOpenAlert(false), 3000);
      return;
    }

    setCategories(categories => [category, ...categories]);
  }

  return (<>
    <div className="w-full h-screen pt-24 pb-10">
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Typography variant="h2">Gif Expert App</Typography>
            <Typography variant="small" className="text-gray-700">
              Encuentra tus gifs favoritos aquí 😉
            </Typography>
            <AddCategory onNewCategory={addCategory}/>
            <Alert 
              className="bg-red-400 mt-2 w-72 mx-auto p-4"
              open={opernAlert}
              onClose={() => setOpenAlert(false)}
              animate={{
                mount: {y:0},
                unmount: {y:0}
              }}
            >
              <p className="text-center w-full">Esta categoría ya existe</p>
            </Alert>
          </div>
        </div>
      </header>
      <div className="mt-10 lg:w-[40rem] m-auto pb-10">
        {categories.map(category => <GifGrid key={category} category={category}/>)}
      </div>
   </div>
  </>)
}