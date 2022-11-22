import { AiOutlineCheckCircle,AiFillDelete } from 'react-icons/ai';
import { HiOutlineMinus } from 'react-icons/hi';
import { useGlobalContext } from '../../Context';
const Done = () => {
    const {done,handleComplete,handleDelete} = useGlobalContext()
    return (
        <div className='todo-list'>
        {done.map((task)=> {
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

export default Done