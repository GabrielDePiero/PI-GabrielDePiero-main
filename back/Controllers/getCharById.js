const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
try {
  const {id} = req.params;
 const {data} = await axios.get(`${URL}/${id}`);

 let character = {  //aca creamos character para tener un objeto creado con todas las propiedades del destructuring
  id: data.id,
  name: data.name,
  gender: data.gender,
  origin: data.origin,
  image: data.image,
  status: data.status,
  species: data.species
}
return character.name 
? res.json(character) //recordemos que si repsonde bien ya responde con un status 200.
: res.status(404).send("Not found!") 

} catch (error) {
 res.status(500).send(error.message); 
}
};


module.exports = {
    getCharById,
};