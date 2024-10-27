//Theo ES6
// Dùng let để giới hạn function trong file
// Không nên dùng var vì nó sẽ global   

import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");  //ejs là file html, gõ login trong html
    app.set("views", "./src/views"); //đường dẫn đến file html
}

module.exports = configViewEngine;