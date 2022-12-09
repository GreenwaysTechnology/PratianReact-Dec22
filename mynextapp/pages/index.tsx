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
        <li>
          <Link href={"/blog"}>
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href={{
            pathname: '/product',
            query: {
              sortBy: 'asc',
              filterBy:'review'

            }
          }}>
            <span>Product</span>
          </Link>
        </li>
      </ul>
    </nav>
    <div>
      <p>
        React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality
      </p>
    </div>
  </div >
}

export default HomePage;