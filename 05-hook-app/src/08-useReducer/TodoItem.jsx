import { MdDelete } from "react-icons/md";
import { string, bool, number } from "prop-types";
import { useContext } from "react";
import TodosContext from "./context/TodosContext";

export default function TodoItem({ id, name, done }) {

  const { handleDeleteTodo, handleChangeTodo } = useContext(TodosContext);

  const handleCheck = () => handleChangeTodo({id, name, done: !done});

  return (
    <li className="bg-white rounded-lg shadow-lg p-4 flex items-center mb-3">
      <div className="flex items-center">
        <input type="checkbox" className="w-full" defaultChecked={done} onChange={handleCheck}/>
      </div>
      <h3 className="w-full pl-2 text-left font-bold text-xl " style={{textDecorationLine: done && "line-through"}}>{name}</h3>
      <button onClick={() => handleDeleteTodo(id)} className="h-full w-[1.2rem] flex justify-center">
        <MdDelete className="w-full text-red-500"/>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired, 
  done: bool.isRequired
}
