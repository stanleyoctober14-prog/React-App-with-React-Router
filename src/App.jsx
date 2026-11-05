import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Work from "./pages/Work/Work"
import WorkDetails from "./pages/Work/WorkDetails"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Work />} />
            <Route path="/works/:id" element={<WorkDetails />} />
        </Routes>
    )
}

export default App