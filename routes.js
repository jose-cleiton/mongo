const { Router } = require('express');

class Routes {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // adicione suas rotas aqui
  }
}

module.exports = new Routes().router;
