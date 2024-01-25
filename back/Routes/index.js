const {login} = require("../Controllers/login")
const {getCharById} = require("../Controllers/getCharById");
const {postFav,deleteFav} =require("../Controllers/HandleFavorites");

const router = require("express").Router();


//realizamos una ruta:
router.get("/character/:id", getCharById );

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);


module.exports = router //si es uno solo no hace falta llaves. 




