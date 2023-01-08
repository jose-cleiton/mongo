const Product = require('../models/ProductModel');

class ProductController {
  constructor(Product) {
    this.Product = Product;
  }

  store = async (req, res) => {
    const createdProduct = await this.Product.model.create(req.body);
    return res.status(200).json(createdProduct);
  }

  index = async (req, res) => {
    const products = await this.Product.model.find({});
    return res.status(200).json(products);
   
  }

  show = async (req, res) => {

    const {id}= req.params
    const product = await this.Product.model.findById(id);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    return res.status(200).json(product);   
   
  }

  update = async (req, res, next) => {
    // ...
  }

  destroy = async (req, res, next) => {
    // ...
  }
}

module.exports = new ProductController(Product);
