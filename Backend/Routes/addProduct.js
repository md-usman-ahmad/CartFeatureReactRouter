const express = require("express");
const dbQuery = require("../database/dbhelper");
const Router = express();

Router.post("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {imgsrc , title , slogan , price , category} = request.body;
        if(imgsrc && title && slogan && price && category){
            let query = "insert into Products(imgsrc , title , slogan , price , category) values(?,?,?,?,?)";
            let params = [imgsrc , title , slogan , price , category];
            await dbQuery(query,params);

            response.send(`${category} Product added`);
        } else {
            throw "Enter every Field (Backend)"
        }


    } catch (error) {
        console.log("addProduct error(POST) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;