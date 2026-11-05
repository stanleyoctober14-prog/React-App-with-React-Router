import Nav from "../../components/Nav/Nav"
import { workDetails } from "../../data/workDetails"
import Card from "./Card"
import "./work.css"

const Work = () => {


    return (
        <section className='work'>
            <Nav />
            <h1>My works</h1>
            <section className="my-works">
                {
                    workDetails.map(({ id, image, name, content }) => {
                        return <Card key={id} cardDetails={{ id, image, name, content }} />
                    })
                }
            </section>
        </section>
    )
}

export default Work