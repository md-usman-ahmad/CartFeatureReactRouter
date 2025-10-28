const express = require("express");
const dbQuery = require("../database/dbhelper");
const Router = express.Router();

Router.get("/", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);
        const {categoryName} = request.query;

        let query = "select * from Products where category = ?";
        let params = [categoryName]
        let outputFromDB = await dbQuery(query,params);
        console.log(`Fetched Each ${categoryName} Products`);

        response.send(outputFromDB);

    } catch (error) {
        console.log("getPRoducts error(GET) = ",error);
        response.status(500).send(error);
    }
})

Router.get("/singleProduct" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);
        const {categoryName , productId} = request.query;

        let query = "select * from Products where category = ? AND productId = ?";
        let params = [categoryName , productId];
        let outputFromDB = await dbQuery(query,params);
        console.log(`Fetched a Product title-${outputFromDB[0].title} `);
        response.send(outputFromDB);
    } catch (error) {
        console.log("getPRoducts error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;