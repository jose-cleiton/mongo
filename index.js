const http = require('http');
const MongoDB = require('./src/models/loaderes/mongodb');

const mongoDB = new MongoDB();

class Server {
  constructor(app, mongoDB) {
    this.app = app;
    this.server = http.createServer(this.app);
    this.mongoDB = mongoDB;
  }

  start() {

    this.mongoDB.connect();
    this.server.listen(3000);
    console.log('Server listening on port 3000');
  }
}

new Server(require('./app'), mongoDB).start();
