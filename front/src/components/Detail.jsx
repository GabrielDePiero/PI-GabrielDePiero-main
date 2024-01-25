import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = "https://rym2.up.railway.app/api/character"
const APIKEY = "pi-gabrieldepiero"

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        setCharacter({});
     }, [id]);

    return (
        <div>
        <h2>{character?.name} </h2>
        <h2>{character?.status} </h2>
        <h2>{character?.species} </h2>
        <h2>{character?.gender} </h2>
        <h2>{character?.origin?.name} </h2>
        <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;