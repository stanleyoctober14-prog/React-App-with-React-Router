import Nav from "../../components/Nav/Nav"
import AboutMe from "./AboutMe"
import Hero from "./Hero"

const Home = () => {
    return (
        <section className="home">
            <Nav />
            <Hero />
            <AboutMe />
        </section>
    )
}

export default Home