const express = require("express");
const app = express();

const constants = require("./constants.js");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

const getProductsRouter = require("./Routes/getProducts.js")
app.use("/getProducts", getProductsRouter);




app.listen(constants.PORT, function(){
    console.log(`server is running on PORT : ${constants.PORT}`);
})