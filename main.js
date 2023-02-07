/* class ProductManager {
  constructor() {
    this.products = [];
    this.id = 0;
  }
  addProducts(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios");
    }
    if (this.products.find((p) => p.code === code)) {
      throw new Error("El producto debe tener un codigo unico");
    }
    const product = {
      id: ++this.id,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.log("Not Found");
      return;
    }
    return product;
  }
}

const productManager1 = new ProductManager();
productManager1.addProducts(
  "Puerta",
  "Puerta de Peugeot",
  15000,
  "Puerta.jpg",
  "001",
  10
);
productManager1.addProducts(
  "Capot",
  "Capot de Peugeot",
  20000,
  "Capot.jpg",
  "002",
  20
);
console.log(productManager1.getProducts());
 */

//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO
//PRIMER DESAFIO

//SEGUNDO DESAFIO

const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      this.products = JSON.parse(fs.readFileSync(this.path));
    } catch (error) {
      this.products = [];
    }
  }

  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products));
  }

  addProduct(product) {
    product.id = this.products.length + 1;
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    this.loadProducts();
    return this.products;
  }

  getProductById(id) {
    this.loadProducts();
    for (const product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
    console.log("Not found");
  }

  updateProduct(id, updatedProduct) {
    this.loadProducts();
    for (const [index, product] of this.products.entries()) {
      if (product.id === id) {
        this.products[index] = { ...product, ...updatedProduct };
        this.saveProducts();
        break;
      }
    }
  }

  deleteProduct(id) {
    this.loadProducts();
    this.products = this.products.filter((product) => product.id !== id);
    this.saveProducts();
  }
}
