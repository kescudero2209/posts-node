const pool = require("./helpers/connectionDb").getInstance();

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
  console.log("rows",rows);  
  return rows;
};


module.exports = { createPost, getPost };
  