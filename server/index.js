const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
var items = require("./data");
const fileupload = require('express-fileupload'); 



const UserRoutes = require("./routes/User.routes");
const AuthRoutes = require("./routes/Auth.routes");
const Path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;


app.use(fileupload({useTempFiles: true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname + "/../public")));



app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});