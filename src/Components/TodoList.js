import './TodoList.css'
import { useGlobalContext } from '../Context'
import { AiOutlineCheckCircle,AiFillDelete } from 'react-icons/ai'
const TodoList = () => {
  const {todoList,handleComplete,handleDelete} = useGlobalContext()
  return (
    <div className='todo-list'>
      {todoList.map((task)=> {
        const { id,todo, completed} = task;
        return (
          <div key={id} className='task'>
            <AiOutlineCheckCircle className={completed ? 'done' : ''}  />
            <p className={completed ? 'done' : ''}>{todo}</p>
            <button className='btn-move' onClick={(e)=> handleComplete(e,completed,id) } >{completed ? 'Move to Todo' : 'Move to done'}</button>
            <AiFillDelete onClick={(e)=> handleDelete(e,id)}/> 
          </div>
        )
      })}
    </div>
  )
}

export default TodoList