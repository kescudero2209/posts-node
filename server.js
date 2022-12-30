const { getPost } = require("./posts");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/posts", async (req, res) => {
  const posts = await getPost();
  res.json(posts);
});

app.listen(3000, console.log("SERVIDOR ENCENDIDO"));