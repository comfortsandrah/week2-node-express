import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.json({
    message: "My Week 2 API!"
  });
});

app.post("/user", (req, res) => {
  const {name, email } = req.body;
  if(!name || !email){
    return res.status(400).json({
      message: "Name and email are required"
    })
  }
  res.json({
    message: `Hello, ${name}!`
  })
});

//user/:id profile

app.get("/user/:id",(_req,res)=>{
  const id = _req.params.id;
  res.json({
    message: `User ${id} Profile`
  })
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});