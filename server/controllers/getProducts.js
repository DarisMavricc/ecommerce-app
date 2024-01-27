import Product from "../models/ProductModel.js";

export const getProducts = async(req,res) => {
    const products = await Product.find();
    res.status(200).json(products);
}