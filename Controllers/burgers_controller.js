var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

    router.get("/", function(req,res){
        console.log("/")
        burger.selectAll(function(data){
            var burgerObject = {
                burger: data
            }
            console.log(burgerObject)
            res.render("index",burgerObject)
        });
    })
    router.post("/burger",function(req,res){
        console.log('/burger')
        console.log(req.body);
        burger.insertOne(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(data){
            res.redirect("index", null);
            // res.render("index")
        })
    })
    router.put("/burger/:id",function(req,res){
        console.log('/burger/:id')
        var condition = "id =" + req.params.id;
        console.log(condition)
        burger.updateOne({devoured:req.body.devoured}, condition, function(data){
            res.json(data)
            // res.redirect("/"); 
        })
    })
//needs burger put and updateone function
module.exports = router;
