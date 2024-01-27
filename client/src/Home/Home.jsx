import { Navbar } from "../Navbar/Navbar"
import { Products } from "../Products/Products"
import "./Home.css"


export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Products />
        </div>
    )
}