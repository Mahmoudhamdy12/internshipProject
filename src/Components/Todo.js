import './Todo.css'
import { useGlobalContext } from '../Context'

const Todo = () => {
    const { cocktails, loading } = useGlobalContext()
  return (
    <div>Todo</div>
  )
}

export default Todo