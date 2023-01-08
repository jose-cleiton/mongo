class Product {
  constructor() { 
    this.mongoose = require('mongoose');
    this.Schema = this.mongoose.Schema;
    this.ObjectId = this.Schema.ObjectId;
    this.ProductSchema = new this.Schema({
      id: this.ObjectId,
      title: String,
      description: String,
      price: Number
    });
    this.model = this.mongoose.model('product', this.ProductSchema);
  }
}

module.exports = new Product();
