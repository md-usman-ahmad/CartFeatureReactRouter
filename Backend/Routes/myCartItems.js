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

Router.get("/singleItem", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);
        const {pId} = request.query;
        const {currentLoggedInuserId} = request;

        let query = "select * from CartItems where pId = ? AND cartBy = ?";
        let params = [pId , currentLoggedInuserId];

        let outputFromDB = await dbQuery(query,params);
        console.log("addToCart k baad DB se wo item updated quantity k saath larhe = ", outputFromDB);
        response.send(outputFromDB);

    } catch (error) {
        console.log("/myCartItems/singleItem error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;