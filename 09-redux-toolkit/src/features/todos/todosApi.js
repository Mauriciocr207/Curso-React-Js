import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: build => ({
        getTodos: build.query({ query: () => "/todos" }),
        getTodoById: build.query({ query: (todoId) => `/todos/${todoId}`, })
    })
})

export const {
    useGetTodosQuery,
    useGetTodoByIdQuery
} = todosApi;

export default todosApi;
