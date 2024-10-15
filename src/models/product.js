class Product {
    constructor(id, name, imageUrl, price) {
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.price = price;
    }
  
    static fromJson(json) {
      return new Product(
        json.id,
        json.name,
        json.imageUrl,
        parseFloat(json.price)
      );
    }
  }
  
  module.exports = Product;
  