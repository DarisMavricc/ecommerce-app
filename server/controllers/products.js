import Product from "../models/ProductModel.js";
import multer from "multer";
const upload = multer({ dest: 'images/' })

export const addProduct = async(req,res) => {
    const file = req.file;
    const {name,bio,price} = req.body;
    if(!name || !bio || !price) {
        res.status(400).json("You should fill all fields");
    } else {
        const product = Product.create({
            name: name,
            bio: bio,
            price: price,
            image: file.filename
        })
        if(product) {
            const newProduct = await product;
            console.log(`New Product Added: id:${newProduct._id}`);
        }
    }
}
