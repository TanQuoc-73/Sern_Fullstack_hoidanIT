import express from "express";
import homeController from "../controllers/homeController";

let router =  express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/users", (req, res) => {
        return res.send('Xin chao cac ban ');
    })
    router.get("/about", homeController.getAboutPage)
    
    return app.use("/", router);
}

module.exports = initWebRoutes;