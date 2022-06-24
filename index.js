const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT

//middleware

app.use(express.json()); //req.body
app.use(cors());

if (process.env.NODE_ENV === "production") {
  //server static content
  //mpm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

//Routes//

//register and login routes

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
