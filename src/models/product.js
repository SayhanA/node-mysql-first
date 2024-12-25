const { v4: uuid } = require("uuid");
const db = require("../utils/database");

class Product {
  constructor(
    name,
    description,
    price,
    image,
    status,
    created_at,
    created_by,
    discount
  ) {
    (this.id = uuid()),
      (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.image = image),
      (this.status = status),
      (this.created_at = created_at),
      (this.created_by = created_by),
      (this.discount = discount);
  }

  save() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        image TEXT,
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        created_by VARCHAR(255),
        discount DECIMAL(10, 2) DEFAULT 0
      );
    `;

    const insertData = `INSERT INTO products (id, name, description, price, image, status, created_at, created_by, discount) VALUES (?,?,?,?,?,?,?,?,?);`;

    try {
      db.execute(insertData, [
        this.id,
        this.name,
        this.description,
        this.price,
        this.image,
        this.status,
        this.created_at,
        this.created_by,
        this.discount,
      ]);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Product;
