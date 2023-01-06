const { createPost, getPost } = require("./posts");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/posts", async (req, res) => {
  try{
    const posts = await getPost();
    if(posts.length !=0){
        res.json(posts);
    } else {
        res.status(204).send("No Content:",err);
    }
}catch (err) {
  res.status(500).json({ message: "Error al obtener los datos" });
}
  
});

app.post("/posts", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  if (!payload.titulo || !payload.url || !payload.descripcion) {
    console.log("Faltan campos por llenar");
    return res.send({ error: "Faltan campos por llenar" });
  }
  const posts = await createPost(payload);
  res.json(posts);
});

app.listen(3000, console.log("SERVIDOR ENCENDIDO"));
