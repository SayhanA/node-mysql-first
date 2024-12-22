const { v4: uuid } = require("uuid");
const db = require("../utils/database");

class User {
  constructor({ name, email, status, password }) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.status = status || "user";
    this.created_at = new Date();
    this.verified = false;
    this.password = password;
  }

  save() {
    return db.execute(
      "INSERT INTO users (id, name, email, status, created_at, verified, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        this.id,
        this.name,
        this.email,
        this.status,
        this.created_at,
        this.verified,
        this.password,
      ]
    );
  }

  static getUserByEmail(email) {
    return db.execute("SELECT * FROM users WHERE email = ?", [email]);
  }
}

module.exports = User;
