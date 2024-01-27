import { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'
import {AuthContext} from '../Context/AuthContext'

export const Navbar = () => {

    const {cart} = useContext(cartContext);

    const {currentUser} = useContext(AuthContext);

    const [user,setUser] = useState(null);

    useEffect(() => {
        if(currentUser === null || !currentUser){
            setUser(false);
        } else {
            setUser(true);
        }
    })

    return (
        <div className="navbar">
            <div className="navbar-items">
                <h1>E-SHOP</h1>
                <ul>
                    {user === false ? <Link to='/login'><li>LOG IN</li></Link> : <Link to='/logout'><li>LOG OUT</li></Link>}
                    {user === false && <Link to='/register'><li>REGISTER</li></Link>}
                    <Link to='/newProduct'><li className='newproduct'><button>Add Product</button></li></Link>
                    <Link to='/cart'>{cart ? <p style={{fontSize:50,padding:15,color:'green'}}>{<AiOutlineShoppingCart/>}</p> : <p style={{fontSize:50,padding:15}}>{<AiOutlineShoppingCart/>}</p>}</Link>
                </ul>
            </div>
        </div>
    )
}