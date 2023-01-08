const { Router } = require('express');

class Routes {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/health', (req, res) => {
      return res.status(200).json({ message: 'Server is on' });
    });
  }
}

module.exports = new Routes().router;
