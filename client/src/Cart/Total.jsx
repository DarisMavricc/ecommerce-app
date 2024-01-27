import { Cart } from "./Cart"
import { Navbar } from "../Navbar/Navbar"
import icon from "./1699920401306slika2.jpg"
import "./Total.css"

export const Total = () => {
    return (
        <div className="total">
            <div className="cart">
            <Navbar />
            <div className="cart-items">
                <h1>Your Cart (40) items</h1>
                <div className="products">
                    <div className="items">
                        <p className="item-name">Item</p>
                        <p className="item-price">Price</p>
                        <p className="item-total">Total</p>
                    </div>
                    <div className="item">
                            <div className="image-name"><img src={icon} alt="" /><p>Logitech g213 Tastatura</p></div>
                            <div className="price"><p>49$</p></div>
                            <div className="total"><p>49$</p></div>
                            <button>X</button>
                    </div>
                    <div className="item">
                            <div className="image-name"><img src={icon} alt="" /><p>Logitech g213 Tastatura</p></div>
                            <div className="price"><p>49$</p></div>
                            <div className="total"><p>49$</p></div>
                            <button>X</button>
                    </div>
                    <div className="item">
                            <div className="image-name"><img src={icon} alt="" /><p>Logitech g213 Tastatura</p></div>
                            <div className="price"><p>49$</p></div>
                            <div className="total"><p>49$</p></div>
                            <button>X</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}