const Product = require('../models/product');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

const addProduct = (req, res) => {
  const newProduct = Product.fromJson(req.body);
  products.push(newProduct);

  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

  res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};
