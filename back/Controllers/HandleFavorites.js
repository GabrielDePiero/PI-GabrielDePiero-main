let myFavorites = [];

const postFav = (req,res) => {
const character = req.body; //en la req.body va a llegar un objeto.

myFavorites.push(character);

return res.status(200).json(myFavorites)

};

const deleteFav = (req,res) => {
const {id} = req.params;

myFavorites = myFavorites.filter((ele)=> ele.id !== Number(id)) //como el id por params viene en string asi que lo vamos a parsear.

return res.status(200).json(myFavorites) 
};

module.exports = {
    postFav, 
    deleteFav

}