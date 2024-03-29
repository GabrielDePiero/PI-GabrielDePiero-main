import styled from 'styled-components';
import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites.jsx';




const AppContent = styled.div`
  text-align: center;
`;

const AppContentWithBackground = styled.div`
  background: url('/dbd1eef279d8bc436eeeca5940215638.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-right: 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: #8a2be2; 
  color: #fff;
`;


function App() { 
const location = useLocation(); //para saber en que ruta esta ubicado el usuario
const [characters, setCharacters] = useState([]);
const APIKEY = "pi-gabrieldepiero"
const [access, setAccess] = useState(false);
const navigate = useNavigate();

const email = "gabitodepiero@gmail.com"
const password = "rickoso123"


async function login(userData) {
try {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  const {data} = await axios(URL + `?email=${email}&password=${password}`)
  const { access } = data;
  setAccess(access);
  access && navigate('/home');

} catch (error) {
  console.log(error.message);
  
  }
}


useEffect(() => {
!access && navigate("/");
},[access]);


async function onSearch(id) { 
try {
  const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);  

      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
} catch (error) {
  console.log(error)
}
}


const onClose = (id) => {
  const charactersFiltered = characters.filter(character =>
    character.id !== Number(id) )
setCharacters(charactersFiltered)

}

  return (
    
   <AppContentWithBackground>
    <AppContent >
      {
        location.pathname !== "/"
        ? <Nav onSearch={onSearch}></Nav>
        : null  
      }
      

      <Routes>
       <Route path='/' element = {<Form login ={login}/>}/>
<Route path='/home' element= { <Cards characters={characters} onClose={onClose} />}/>
      <Route path='/about' element= { <About></About> }/>   
     <Route path='/detail/:id' element={<Detail></Detail>} />
     <Route path='/favorites' element={<Favorites/>} />
      </Routes> 
    </AppContent>
    </AppContentWithBackground>
    
    
    
  );
}

export default App;
