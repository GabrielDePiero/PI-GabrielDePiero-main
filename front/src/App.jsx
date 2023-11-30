import styled from 'styled-components';
import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";



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
    <BrowserRouter>
   <AppContentWithBackground>
    <AppContent >
      <Nav onSearch={onSearch}></Nav>
      <Cards characters={characters} onClose={onClose} />
    </AppContent>
    </AppContentWithBackground>
    </BrowserRouter> //aca envolvi app con la ruta browser.
    
    
  );
}

export default App;
