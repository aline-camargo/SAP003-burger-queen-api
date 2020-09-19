require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres123",
    "database": "bq-api-node_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "bq_api_test",
    "host": "db",
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
}