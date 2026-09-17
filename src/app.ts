import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));

//Middleware: Logs the HTTP method and URL of every incoming request
app.use((_req, _res, next)=>{
  console.log(`${_req.method} ${_req.url}`);
  next();
});

app.get("/", (_req, res) => {
  res.json({
    message: "My Week 2 API!"
  });
});

//Post user

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  if (typeof name !== "string" || typeof email !== "string" || !name.trim() || !email.trim()) {
    return res.status(400).json({
      message: "Name and email are required"
    })
  }
  res.json({
    message: `Hello, ${name}!`
  })
});

//Get user/:id profile

app.get("/user/:id", (_req, res) => {
  const id = _req.params.id;
  res.json({
    message: `User ${id} Profile`
  })
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});