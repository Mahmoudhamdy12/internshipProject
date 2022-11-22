import { useGlobalContext } from '../../Context';
import { AiOutlineCheckCircle,AiFillDelete } from 'react-icons/ai';
import { HiOutlineMinus } from 'react-icons/hi';

const Todo = () => {
    const {todo,handleComplete,handleDelete} = useGlobalContext()
    return (
        <div className='todo-list'>
        {todo.map((task)=> {
        const { id,todo, completed} = task;
        return (
          <div key={id} className='task'>
            {completed ? <AiOutlineCheckCircle className={completed ? 'done' : ''}/> : <HiOutlineMinus />}
            <p className={completed ? 'done' : ''}>{todo}</p>
            <button className='btn-move' onClick={(e)=> handleComplete(e,completed,id) } >{completed ? 'Move to Todo' : 'Move to done'}</button>
            <AiFillDelete onClick={(e)=> handleDelete(e,id)}/>
          </div>
        )
      })}
        </div>
    )
}

export default Todo