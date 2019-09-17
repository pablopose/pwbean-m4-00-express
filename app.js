/* Servidor Web Hecho con Express y garra */
const express = require("express")

const server = express()

const port = process.env.PORT || 2000

server.listen(2000)

server.get("/", function(request, response){

	response.end("Hola desde Express :)")

})