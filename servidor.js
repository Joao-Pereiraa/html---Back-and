const express = require('express')
const nunjucks = require('nunjucks')

const servidor = express()
const videos = require("./data")

servidor.use(express.static('public'))

servidor.set("view engine", "njk")

nunjucks.configure("views", {
    express: servidor,
    autoescape: false,
    noCache: true
})

servidor.get("/", function(req, res){

const about = {
    avatar_img:"rocketseat.png",
    name:"Rocketseat",
    role:"Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
    description:" principais tecnologias em programação encontradas aqui:" ,
    description1:" Javascript ",
    description2:"Javascript + ES6+",
    description3:"NodeJS",
    description4:"ReactJS",
    description5:"React Native",
    links:[
        {name:"github" ,url:"https://github.com/Rocketseat"},
        {name:"Facebook" ,url:"https://www.facebook.com/rocketseat//"},
        {name:"Instagran" ,url:"https://www.instagram.com/rocketseat_oficial/?hl=pt-br"}
    ]
}

    return res.render("about",{ about })
})

servidor.get("/courses", function(req, res){
    return res.render("courses",{ items: videos})
})

servidor.get("/video", function(req,res){
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id
      })

      if(!video){
          return res.status(404).render("not-found");
      }

      return res.render("video", {item:video})
})

servidor.listen(5000, function(){
    console.log("server is running")
})

servidor.use(function(req, res) {
    res.status(404).render("not-found");
  });