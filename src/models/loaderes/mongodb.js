const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

class MongoDB {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect('mongodb+srv://jose-cleiton:2003@cluster0.8sarvtr.mongodb.net/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = MongoDB;

