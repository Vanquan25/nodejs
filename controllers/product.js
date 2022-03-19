import Product from "../models/product";
import User from "../models/user";

// Product
// them product
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm?"
        })
    }
}

export const list = async (req, res) => { 
    try {
        const products = await Product.find().sort({createAt: -1});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const product = await Product.findOne(filter);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json({
            message: "Da xoa thanh cong",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id}
    const doc = req.body;
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// User
export const adduser = async (req, res) => {
    try {
        const user = await User(req.body).save();
        res.json(user)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được tài khoản "
        })
    }
}

export const listUser = async (req, res) => { 
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}