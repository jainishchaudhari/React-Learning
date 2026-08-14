import {createContext, useContext } from "react";

export const TodoContexts = createContext({
    todos: [
        {
            id:1

        }, {}, {}
    ]
})


export const useTodo = () => {
    return useContext(TodoContexts)
}

export const Todoprovider  = TodoContexts.Provider