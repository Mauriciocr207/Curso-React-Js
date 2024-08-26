import { useState } from "react";
import {
  useGetTodoByIdQuery,
  useGetTodosQuery,
} from "./features/todos/todosApi";

const Todo = (title, completed) => (
  <li>
    <strong>{completed ? "Done " : "Pending "}</strong>
    {title}
  </li>
);

export default function TodoApp() {
  // const { data: todos, isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const handleChangePage = (page) => setTodoId(page);

  return (
    <>
      <h1>TODOS</h1>
      <span>RTK Query</span>
      <p>isLoading {isLoading ? "true" : "false"}</p>
      <ul>{JSON.stringify(todo)}</ul>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          disabled={isLoading}
          onClick={() => todoId > 1 && handleChangePage(todoId - 1)}
        >
          Prev Page
        </button>
        <span>page {todoId}</span>
        <button disabled={isLoading} onClick={() => handleChangePage(todoId + 1)}>
          Next Page
        </button>
      </div>
    </>
  );
}
