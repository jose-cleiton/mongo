

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
    const { productId } = req.params;
    const product = await this.Product.model.findById(productId);
    return res.status(200).json(product);
   
  }

  show = async (req, res, next) => {
    
    // ...
  }

  update = async (req, res, next) => {
    // ...
  }

  destroy = async (req, res, next) => {
    // ...
  }
}

module.exports = new ProductController(Product);
