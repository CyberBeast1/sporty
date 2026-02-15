import express from "express";

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello.");
});

app.listen(port, () => {
  console.log(`Server Listening on : http://localhost:${port}`);
});
