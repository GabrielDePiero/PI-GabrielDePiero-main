const express = require("express");
const server = express();
const morgan = require("morgan")
const router = require("./Routes/index")


//aca van las middlewares 
server.use(express.json()); //para usarlos es el use, parsea  la informacion
server.use(morgan("dev"))   // otro middleware recomendado que lo imprime

server.use((req, res, next) => {  //pregunta si tiene acceso, recien cuando le da acceso llega a nuestro servidor
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use("/rickandmorty", router)





server.listen(3001, ()=> console.log("Listening on port 3001!")) // listen se usa para que el servidor este "escuchando" y este listo para recibir solicitudes entrantes.








