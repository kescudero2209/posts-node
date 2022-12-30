require('dotenv').config()
const { Pool } = require("pg");

const pool = new Pool({
host: process.env.HOST,
user: process.env.USER,
password: process.env.PASSWORD,
database: process.env.DATABASE,
allowExitOnIdle: true,
});

const getPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    console.log(rows);
    return rows;
  };

  module.exports = { getPost };
  