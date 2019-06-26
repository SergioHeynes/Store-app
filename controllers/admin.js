const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  
  const product = new Product(title, imageUrl, price, description);

  product.save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};


exports.getEditProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: 'true'
  });
};

exports.postEditProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};
