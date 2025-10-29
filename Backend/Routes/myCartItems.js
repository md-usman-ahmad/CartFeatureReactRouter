const express = require("express");
const Router = express();
const dbQuery = require("../database/dbhelper.js");
const { AuthMiddleware } = require("../middleware.js");

Router.use(AuthMiddleware);

Router.get("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        const { currentLoggedInuserId , currentLoggedInusername } = request;
        console.log("currentLoggedInuserId = ",currentLoggedInuserId);

        let query = "select * from CartItems where cartBy = ?";
        let params = [currentLoggedInuserId];
        let outputFromDB = await dbQuery(query , params);

        response.send(outputFromDB);
        
    } catch (error) {
        console.log("myCartItems error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;