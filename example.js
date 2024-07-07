import express from "express";
import log from "./index.js";
const app = express();
const port = 8081;

// !! EXAMPLE CODE STARTS HERE !!
app.use(log);

app.get("/", (req, res) => {
  // ! NORMAL CONSOLE WE USE;
  const user = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Bob Smith", age: 28 },
  ]
  req.log(user);
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
