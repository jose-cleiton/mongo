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

    try {
      const {id}= req.params
    const product = await this.Product.model.findById(id);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    return res.status(200).json(product);   
    } catch (error) {
      return res.status(404).json({
        message: 'Verify the product id'
      });
    }
   
  }

  update = async (req, res) => {

try {
  
  const { id } = req.params
  await this.Product.model.findByIdAndUpdate(id, req.body)
  return res.status(200).json({
    message: 'Product updated successfully'
  })
} catch (error) {
  return res.status(404).json({
    message: 'Product not found'
  });
  
}
    // ...
  }

  remove = async (req, res) => {
    try {
      const { id } = req.params;
      await this.Product.model.findByIdAndRemove(id);
      return res.status(200).json({
        message: 'Product deleted successfully'
      })
      // ...
    }
    catch (error) { 
      return res.status(404).json({
        message: 'Product not found'
      });
    }
  }
}

module.exports = new ProductController(Product);
