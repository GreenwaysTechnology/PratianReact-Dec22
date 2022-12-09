
import { useRouter } from 'next/router'

const TodoDetails = props => {
    const router = useRouter()
    //Read previous route parameters - dynamic route parameter value
    const { id } = router.query
    return <div>
          <h1>{id} Todo Details</h1>
    </div>
}
export default TodoDetails