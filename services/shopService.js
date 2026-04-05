const Product = require('../models/product');

exports.getAllProducts = async () => {
  return await Product.findAll();
};

exports.getProductById = async (prodId) => {
  return await Product.findByPk(prodId);
};

exports.getCart = async (user) => {
  const cart = await user.getCart();
  return await cart.getProducts();
};

exports.addToCart = async (user, prodId) => {
  const cart = await user.getCart();
  const products = await cart.getProducts({ where: { id: prodId } });

  let product;
  let newQuantity = 1;

  if (products.length > 0) {
    product = products[0];
    newQuantity = product.cartItem.quantity + 1;
  } else {
    product = await Product.findByPk(prodId);
  }

  return await cart.addProduct(product, {
    through: { quantity: newQuantity }
  });
};

exports.deleteCartProduct = async (user, prodId) => {
  const cart = await user.getCart();
  const products = await cart.getProducts({ where: { id: prodId } });
  const product = products[0];
  return await product.cartItem.destroy();
};

exports.createOrder = async (user) => {
  const cart = await user.getCart();
  const products = await cart.getProducts();

  const order = await user.createOrder();

  await order.addProducts(
    products.map(product => {
      product.orderItem = { quantity: product.cartItem.quantity };
      return product;
    })
  );

  return await cart.setProducts(null);
};

exports.getOrders = async (user) => {
  return await user.getOrders({ include: ['products'] });
};