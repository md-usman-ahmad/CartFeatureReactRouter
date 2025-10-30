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

const getCategoryProductsRouter = require("./Routes/getCategoryProducts.js")
const signupRouter = require("./Routes/signup.js");
const loginRouter = require("./Routes/login.js");
const addProductRouter = require("./Routes/addProduct.js");
const myCartItemsRouter = require("./Routes/myCartItems.js");
app.use("/getCategoryProducts", getCategoryProductsRouter);
app.use("/signup" , signupRouter);
app.use("/login" , loginRouter);
app.use("/addProduct" , addProductRouter);
app.use("/myCartItems" , myCartItemsRouter);




app.listen(constants.PORT, function(){
    console.log(`server is running on PORT : ${constants.PORT}`);
})