import styled from 'styled-components';
import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from 'react-router-dom';
import Form from './components/Form/Form.jsx';




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
  background-color: #8a2be2; /* Color violeta multicolor */
  color: #fff;
`;


function App() { 
  const location = useLocation(); //para saber en que ruta esta ubicado el usuario
const [characters, setCharacters] = useState([]);
const APIKEY = "pi-gabrieldepiero"

function onSearch(id) { 
  axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
     ({ data }) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('¡No hay personajes con este ID!');
        }
     }
  );
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
       <Route path='/' element = {<Form/>}/>
<Route path='/home' element= { <Cards characters={characters} onClose={onClose} />}/>
      <Route path='/about' element= { <About></About> }/>   
     <Route path='/detail/:id' element={<Detail></Detail>} />
      </Routes> 

    </AppContent>
    </AppContentWithBackground>
    
    
    
  );
}

export default App;
