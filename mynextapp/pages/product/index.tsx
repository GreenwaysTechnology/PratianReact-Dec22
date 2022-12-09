import { useRouter } from "next/router"


const ProductPage = props => {
    const router = useRouter()
    const query = router.query
    return <>
        <p>{JSON.stringify(query)}</p>

        <button onClick={() => {
            router.push('/about')
        }}>GoTo</button>
    </>
}
export default ProductPage