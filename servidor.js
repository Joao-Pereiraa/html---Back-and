const express = require('express')
const nunjucks = require('nunjucks')

const servidor = express()

servidor.use(express.static('public'))

servidor.set("view engine", "njk")

nunjucks.configure("views", {
    express: servidor
})

servidor.get("/", function(req, res){
    return res.render("about")
})

servidor.get("/courses", function(req, res){
    return res.render("courses")
})

servidor.listen(5000, function(){
    console.log("server is running")
})

servidor.use(function(req, res) {
    res.status(404).render("not-found");
  });