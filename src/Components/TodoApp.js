import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import './TodoApp.css'
const TodoApp = () => {
    const {setText,text,handelSubmit} = useGlobalContext()
  return (
    <div className='todo-app'>
        <h1>Todo App</h1>
        <form className='form-control' onSubmit={handelSubmit}>
            <input type='text' required value={text} className='todo' placeholder='task' onChange={(e)=> setText(e.target.value)} />
            <button className='btn-submit'  >Submit</button>
        </form>
        <div className='tabs'>
            <NavLink to="/">All</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/done">Done</NavLink>
        </div>
    </div>
  )
}

export default TodoApp