import { Navbar } from "../Navbar/Navbar"
import { useState } from "react";
import axios from 'axios'
import "./NewProduct.css"

export const NewProduct = () =>{
    const [picture, setPicture] = useState();
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [price,setPrice] = useState(0);

    const Add = async() => {
        const formData = new FormData();
        formData.append('file', picture);
        formData.append('name', name);
        formData.append('bio', description);
        formData.append('price', price);

        await axios.post('http://localhost:7000/api/upload/addProduct',formData);
    }
    return (
        <div className="App">
            <Navbar />
            <div class="new-product">
                <label for="pname">Product Name</label>
                <input type="text" onChange={e => setName(e.target.value)}/>
                <label for="pbio">Product Description</label>
                <input type="text" onChange={e => setDescription(e.target.value)}/>
                <label for="price">Price</label>
                <input type="number" onChange={e => setPrice(e.target.value)}/>
                <label for="image">Image</label>
                <input type="file" onChange={e => setPicture(e.target.files[0])} />
                <button onClick={Add}>Add Product</button>
            </div>
        </div>
    )
}