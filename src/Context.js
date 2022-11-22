import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [complete, setComplete] = useState(true)
    const [todoList, setTodoList] = useState([])
    const [newTask,setNewTask] = useState({id: 0 , todo: '', completed: false})
    const [text,setText] = useState('')
    const [rerender, setRerender] = useState(false);
    
    useEffect(()=> setNewTask({id: todoList.length + 1 , todo: text, completed: false}),[text,todoList])
    
    const fetchTodo = useCallback(
        () => {
            fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(json => setTodoList(json.todos))
        },
        [],
        );
        
        useEffect(() => {
            fetchTodo()
        }, [fetchTodo])

        const handelSubmit = (e)=> {
            e.preventDefault()
            setText('')
            todoList.push(newTask)
        }
        const handleComplete = (e,completed,id)=> {
            e.preventDefault()
            setRerender(!rerender)
            todoList[id - 1].completed = !completed
        }
        const handleDelete = (e,id)=> {
            e.preventDefault()
            setRerender(!rerender)
            const todo = todoList.filter((x)=> x.id !== id )
            setTodoList(todo)
        }

        const todo = todoList.filter((x)=> x.completed === false )
        const done = todoList.filter((x)=> x.completed === true )

        return (
            <AppContext.Provider
            value={{ 
        todoList,newTask,setNewTask,
        text,setText,handelSubmit,
        todo,done,complete,setComplete,
        handleComplete,handleDelete
        }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
