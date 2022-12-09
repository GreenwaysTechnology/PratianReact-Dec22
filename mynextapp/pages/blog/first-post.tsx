import { useRouter } from "next/router";


const FirstPost = props => {
    const router = useRouter()
    return <div>
        <p>Ramboll is a global architecture, engineering and consultancy company founded in Denmark in 1945. Our 16,500 experts create sustainable solutions across globe</p>
        <button onClick={() => {
            router.back()
        }}>back</button>
    </div>
}
export default FirstPost