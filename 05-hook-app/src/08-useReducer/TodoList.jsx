import Banner from "./Banner";
import TodoItem from "./TodoItem";
import { array } from "prop-types";

function getTodoListState(todoList) {
  const countTodos = todoList.length;
  const countDoneTodos = todoList.reduce((total, todo) => total + todo.done, 0);
  const countPendingTodos = countTodos - countDoneTodos;
  return {
    done: countDoneTodos,
    pending: countPendingTodos
  }
}

export default function TodoList({ todoItems }) {  
  return (
    <div className="md:row-start-1 md:pt-3">
        {
          todoItems.length !== 0
            ? <Banner {...getTodoListState(todoItems)}/>
            : <p className="text-xl mt-10 font-bold text-gray-600">Nada por aquí :(</p> 
        }
        <ul>
          {todoItems.map((item) => <TodoItem key={item.id} {...item}/>)}
        </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoItems: array.isRequired
}