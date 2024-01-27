import { useState, createContext, useContext,useEffect } from "react";


export const cartContext = createContext();


export const CartContextProvider = ({children}) => {

    const [product, setProduct] = useState([])
    const [cart,setCart] = useState(null);


    const addProduct = (pInfo) => {
        const data = {
            image: pInfo.image,
            price: pInfo.price,
            bio: pInfo.bio,
            name: pInfo.name
        }
        product.push(data);
        setCart(true);
    }
    
    return (
        <cartContext.Provider value={{addProduct,cart,product}}>
            {children}
        </cartContext.Provider>
      );
}

 