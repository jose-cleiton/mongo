const ProductModel = require('../models/ProductModel');

class ProductController {
  constructor(ProductModel) {
    this.ProductModel = ProductModel;
  }

  store = async (req, res) => {
    const createdProduct = await ProductModel.create(req.body);
    return res.status(200).json(createdProduct);
  }

  index = async (req, res) => {
    const { productId } = req.params;
    const product = await this.ProductModel.findById(productId);
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

module.exports = new ProductController(new ProductModel());
