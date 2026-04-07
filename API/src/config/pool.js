import mysql from "mysql2";
import "dotenv/config";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  idleTimeout: 60000,
  maxIdle: 0,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 100,
});

export default pool.promise();
