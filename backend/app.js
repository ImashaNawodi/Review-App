const express = require("express");
require("./db");
const userRouter = require("./routes/user");

const app = express();
//convert everything coming form the json format
app.use(express.json());
app.use("/api/user", userRouter);
//MVC

app.get("/about", (req, res) => {
  res.send("<h1>Hello </h1>");
});
app.post("sign-in", (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) 
    return res.json({ error: "email/password missing!" });
    next();
 },
  (req,res) => {
    res.send("Hello")
  }
);

app.listen(8000, () => {
  console.log("The port is listenning to the port 8000");
});
