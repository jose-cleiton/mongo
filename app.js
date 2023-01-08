const express = require('express');

class App {
  constructor(routes) {
    this.express = express();
    this.routes = routes;
    this.middlewares();
    this.mountRoutes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  mountRoutes() {
    this.express.use(this.routes);
  }
}

module.exports = new App(require('./src/routes')).express;
