import express from "express";

let router =  express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send('Xin chao ');
    });
    router.get("/users", (req, res) => {
        return res.send('Xin chao cac ban ');
    })
    return app.use("/", router);
}

module.exports = initWebRoutes;