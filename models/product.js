// const db=require('../util/database');

// const Cart = require('./cart');

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products (title,price,description,imageUrl) values(?,?,?,?)',[this.title,this.price,this.description,this.imageUrl])
//   }

//   static deleteById(id) {

//   }

//   static fetchAll(cb) {
//     return db.execute("select * from products");
//   }

//   static findById(id, cb) {
//    return db.execute("select * from products where products.id=?",[id]);
// }
// }
const sequelize = require("../util/database.js");
const Sequelize = require("sequelize");

// Model attributes are defined here
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
   price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: { type: Sequelize.STRING, allowNull: false },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
 
});
module.exports = Product;
