import { Link } from "react-router-dom"
import "./nav.css"

const Nav = () => {

    return (
        <nav>
            <Link to="/">Home</Link>

            <ul>
                <li>
                    <Link to="/about">About</Link>

                </li>
                <li>
                    <Link to="/works">Works</Link>

                </li>
                {/* <li></li> */}
            </ul>
        </nav>
    )
}

export default Nav