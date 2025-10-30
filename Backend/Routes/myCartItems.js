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

Router.post("/addToCart", async function(request,response){
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
        console.log("addToCart k baad DB se wo particular item updated quantity k saath larhe = ", outputFromDB);
        response.send(outputFromDB);

    } catch (error) {
        console.log("/myCartItems/singleItem error(GET) = ",error);
        response.status(500).send(error);
    }
})

Router.patch("/removeFromCart", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);
        const {pId,title} = request.query;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        let query = "select * from CartItems where pId = ? AND cartBy = ?";
        let params = [pId , currentLoggedInuserId];
        let outputFromDB = await dbQuery(query , params);
        console.log("checking the quantity of the Product = ",outputFromDB);

        if(outputFromDB[0].quantity > 1){
            query = `update CartItems
                     set quantity = quantity - 1
                     where pId = ? AND cartBy = ?   
                    `
            params = [pId , currentLoggedInuserId];
            await dbQuery(query , params);
            response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Item-${title} quantity decremented by 1`);
        } else{
            query = "delete from CartItems where pId = ? AND cartBy = ?";
            params = [pId , currentLoggedInuserId];
            await dbQuery(query , params);
            response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Item-${title} deleted`);
        }


    } catch (error) {
        console.log("/myCartItems/removeFromCart error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;