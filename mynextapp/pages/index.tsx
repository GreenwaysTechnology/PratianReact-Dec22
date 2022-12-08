//Home Page
import Link from "next/link";

const HomePage = props => {
  return <div>
    <h1>Welcome to Next Js!</h1>
    <nav>
      <ul>
        <li>
          <Link href={"/about"}>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href={"/posts"}>
            <span>Posts</span>
          </Link>
        </li>
        <li>
          <Link href={"/counter"}>
            <span>Counter</span>
          </Link>
        </li>
      </ul>
    </nav>
    <hr />
  </div >
}

export default HomePage;