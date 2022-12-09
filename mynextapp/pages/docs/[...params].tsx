import { useRouter } from "next/router"



const DocsPage = props => {
    const router = useRouter()
    const params = router.query
    return <div>
        <p>Ramboll is a global architecture, engineering and consultancy company founded in Denmark in 1945. Our 16,500 experts create sustainable solutions across globe</p>
    </div>
}
export default DocsPage