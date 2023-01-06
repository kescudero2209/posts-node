require('dotenv').config()
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true, 
});

 const createPost = async (payload) => {
    const SQLquery = {
      text: 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
      values: [
        payload.titulo,
        payload.url,
        payload.descripcion,
      ],
    }
    try {
      const result = await pool.query(SQLquery)
      console.log("result",result.rows)
      return result.rows
    } catch (e) {
      console.log('error al insertar datos en tabla product: ', e.code, e.message)
      throw new Error(e)
    }
  }

const getPost = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
};


module.exports = { createPost, getPost };
  