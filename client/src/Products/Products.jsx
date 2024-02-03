import ruza from './ruza.jpg'
import axios from 'axios'
import {useContext, useEffect, useState} from 'react' 
import {useQuery} from '@tanstack/react-query'
import {QueryClient,useMutation, useQueryClient} from '@tanstack/react-query'
import './Products.css'
import { cartContext } from '../Context/CartContext'

export const Products = () => {



    const {data,isLoading} = useQuery({
        queryFn: () => axios.get('http://localhost:7000/api/getProducts').then((e) => {return e.data}),
        queryKey: ["products"],
    });


    const {addProduct,setCart} = useContext(cartContext);



    return (
        <div className="products">
            {isLoading ? 
                <p>loading</p>
            :
                data?.map(product => 
                    <div className="product">
                        <img src={"../images/" + product?.image} alt="" />
                        <div className="product-info">
                            <h1>{product?.name}</h1>
                            <p style={{color:'red'}}>{`${product?.price}$`}</p>
                            <p class='text'>{product?.bio}</p>
                            <div className="product-buttons">
                                <button id='button1' onClick={() => addProduct(product)}>Buy Product</button>
                                <button id='button2' >View Product</button>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}