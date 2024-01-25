const users = require("../utils/users");

const login = (req, res) =>{
const {email, password} = req.query;

const userFound = users.find((user)=>user.email === email && user.password === password ) // el metodo find es como un filter solo que al encontrar la primera coincidencia deja de buscar.

userFound 
? res.status(200).json({access: true}) //access es un estado
: res.status(400).json({access: false})

};

module.exports = {login}