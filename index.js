const http = require('http');

class Server {
  constructor(app) {
    this.app = app;
    this.server = http.createServer(this.app);
  }

  start() {
    this.server.listen(3000);
    console.log('Server listening on port 3000');
  }
}

new Server(require('./app')).start();
