const express = require("express");
const Router = express.Router();
const {AuthMiddleware} = require("../middleware.js");
const dbQuery = require("../database/dbhelper");


Router.use(AuthMiddleware);

Router.post("/", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {imgsrc , title , slogan , price , category , pId} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        // check krrhe ki phle se ye item already cart me present hai ki nhi 
        let query = "select * from CartItems  where cartBy = ? AND pId = ?";
        let params = [currentLoggedInuserId , pId];
        let outputFromDB = await dbQuery(query,params);
        console.log(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) already Carted this Item Or Not = `,outputFromDB);

        if(outputFromDB.length === 0 ){
            query = "insert into CartItems(imgsrc , title , slogan , price , category , quantity ,pId , cartBy) values(?,?,?,?,?,?,?,?)";
            params = [imgsrc , title , slogan , price , category , 1 ,pId , currentLoggedInuserId];
            await dbQuery(query,params);

            response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Item-${title} added into Cart`);
        } else {
            query  = `update CartItems
                      set quantity = quantity + 1
                      where pId = ? AND cartBy = ?  
                     `
            params = [pId,currentLoggedInuserId];
            await dbQuery(query,params);
            response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Item-${title} quantity incremented by 1`);
        }
    } catch (error) {
        console.log("addToCart error(POST) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;