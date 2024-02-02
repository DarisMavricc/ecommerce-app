import "./Cart.css"
import { Navbar } from "../Navbar/Navbar"
import { useContext, useEffect } from "react";
import { cartContext } from "../Context/CartContext";
import { useState } from "react";

export const Cart = () => {


    const {product} = useContext(cartContext);

    const [total,setTotal] = useState(0);


    const shipping = 2;

    const sum = () => {
        let price = 0;
        product.map((p) => {
        price += parseInt(p.price);
        })
        setTotal(price);
    }

    useEffect(() => {
        sum();
    },[]) 

    


    const removeItem = (e) => {
        const index = product.findIndex(product => product.name === e.name);
        product.splice(index, 1);
        console.log(product);
        setTotal(total - parseInt(e.price));
    }


    return (
        <div className="cart">
            <Navbar />
            <h1>Your Cart</h1>
            <div className="cart-items">
                <div className="products">
                    <div className="items">
                        <p className="item-name">Item</p>
                        <p className="item-price">Price</p>
                        <p className="item-total">Total</p>
                    </div>
                    <div className="all-items">
                    {product.map((p) => {
                        return (
                            <div className="item">
                                <div className="image-name"><img src={"../images/" + p.image} alt="" /><p>{`${p.name}`}</p></div>
                                <div className="price"><p>{`${p.price}$`}</p></div>
                                <div className="total"><p>{`${p.price}$`}</p></div>
                                <button onClick={() => removeItem(p)}>X</button>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="finalPrice">
                    <div className="subtotal">
                        <p>Subtotal</p><p>{`${total}$`}</p>
                    </div>
                    <div className="Tax">
                        <p>Shipping</p><p>{`${shipping}$`}</p>
                    </div>
                    <div className="final">
                        <p>Total</p><p>{`${total + shipping}$`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}