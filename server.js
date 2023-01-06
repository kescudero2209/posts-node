const { createPost, getPost } = require("./posts");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/posts", async (req, res) => {
    const travels = await getPost();
    res.json(travels);
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
