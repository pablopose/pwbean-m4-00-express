/* Servidor Web Hecho con Express y garra */
const express = require("express")
const bodyParser = require("body-parser")

const server = express()

const port = process.env.PORT || 2000

server.listen( port )

server.use( bodyParser.urlencoded({extended :  false }))
server.use( bodyParser.json() )

server.get("/", function(request, response){

	//response.end("Hola desde Express :)")

	response.sendFile(__dirname + "/index.html")

})

server.get("/noticias", function(request, response){
	const noticias = [
		{ titulo: "Aprendiendo Express", autor : "SM", detalle: "En desarollo..." }, 
		{ titulo: "Olvidando Simple Node.JS", autor : "SM", detalle: "Hasta la vista, Node" }
	]

	res.json( noticias )
})

server.post( "/enviar", function(req, res){

	console.log ( req.body.correo )
	res.json( req.body )

})
