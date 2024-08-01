import { useState } from "react";

import { func } from "prop-types";

export default function Form({ onAddTodo }) {
  const [ inputTodo, setInputTodo ] = useState("");
  const [ showAlert, setShowAlert ] = useState(false);

  const onChangeInputTodo = (e) => {
    const { value } = e.target;
    setInputTodo(value);

    if(!value) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputTodo) {
      setShowAlert(true);
      return;
    }

    onAddTodo(inputTodo);
    setInputTodo('');
  }

  return (
    <div className="bg-white p-6 md:col-start-2 shadow-xl rounded-lg h-fit">
      <h2 className="font-semibold text-lg border-b border-gray-300 text-left pb-2">
        Agregar TODO
      </h2>
      <form className="mt-5">
        <div>
          <label className="font-semibold text-left block text-sm" htmlFor="addTodo">
            Añade una tarea
          </label>
          <div className="w-full mt-3 rounded flex overflow-hidden">
            <input
              className="py-1.5 px-3 w-full outline-none bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 hover:transition-colors"
              placeholder="Escribe aquí"
              type="text"
              name="addTodo"
              value={inputTodo}
              onChange={onChangeInputTodo}
            />
            <button onClick={handleSubmit} className="w-[5rem] bg-black text-white font-semibold py-1.5 px-4 text-[.8rem] hover:bg-gray-800 hover:transition-colors ">
              Agregar
            </button>
          </div>
          {showAlert && <p className="text-left text-[.7rem] p-1 text-red-600 font-semibold">No olvides el nombre de tu tarea :D</p>}
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  onAddTodo: func.isRequired
}
