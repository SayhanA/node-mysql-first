const db = require("./database");

const createTable = async (tableName, tableColumns) => {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS ${tableName}(
        tableColumns.map((col) => ${col.name} ${col.type} ${col.options || ""})
            .join(", "))
        )`);
  } catch (error) {
    console.error(`Error creating table: ${tableName}: `, error.message);
  }
};

module.exports = createTable;
