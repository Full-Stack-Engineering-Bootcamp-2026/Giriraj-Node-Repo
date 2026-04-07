const Product = require('../models/product');

exports.createProduct = async (user, data) => {
  const product=new Product(data.title,data.price,data.description,data.imageUrl);
  return await product.save();
};

exports.getProductForEdit = async (user, prodId) => {
  const products = await user.getProducts({ where: { id: prodId } });
  return products[0];
};

exports.updateProduct = async (prodId, data) => {
  const product = await Product.findByPk(prodId);

  product.title = data.title;
  product.price = data.price;
  product.description = data.description;
  product.imageUrl = data.imageUrl;

  return await product.save();
};

exports.getAdminProducts = async (user) => {
  return await user.getProducts();
};

exports.deleteProduct = async (prodId) => {
  const product = await Product.findByPk(prodId);
  return await product.destroy();
};