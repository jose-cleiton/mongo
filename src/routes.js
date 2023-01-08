const { Router } = require('express');

const ProductController = require('./controllers/ProductControllers');

class Routes {
  constructor(ProductController) {
    this.router = Router();
    this.ProductController = ProductController;
    this.routes();
  }

  routes() {
    this.router.get('/health', (req, res) => {
      return res.status(200).json({ message: 'Server is on' });
    });

    this.router.post('/products', this.ProductController.store);

    this.router.get('/products', this.ProductController.index);
    this.router.get('/products/:id', this.ProductController.show);
    this.router.put('/products/:id', this.ProductController.update);
  }
}

module.exports = new Routes(ProductController).router;
