import Link from "next/link";
import { useRouter } from "next/router";
/**
 * 
 * router object
 *   Router object will have all information related to routing like urls,parameters
 */

const Blog = props => {
    const router = useRouter()
    console.log(router)
    return <div>
        <ul>
            <li>
                {/* Here /blog is parent url, we should not hardcode parent url */}
                <Link href="/blog/first-post">FirstPost</Link>
            </li>
            <li>
                <Link href={`${router.pathname}/first-post`}>FirstPost</Link>
            </li>
            <li>
                <Link href={`/blog/todos`}>Todos</Link>
            </li>
        </ul>
        <h1>Blogs</h1>
    </div>
}

export default Blog
