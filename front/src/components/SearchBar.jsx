import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.nav`
  align-items: center;
  /* Otros estilos según sea necesario */
`;

const SearchInput = styled.input`
  padding: 0.7rem; /* Ajusta el padding según sea necesario */
  margin-right: 1rem;
  border: none;
  border-radius: 6px; /* Ajusta el radio de borde según sea necesario */
  outline: none;
  background-color: #663399; /* Violeta oscuro (violet) */
  color: #fff;
  font-size: 16px; /* Ajusta el tamaño del texto según sea necesario */
  font-family: "Arial", sans-serif; /* Cambia la fuente según sea necesario */

  ::placeholder {
    color: #add8e6; /* Azul claro (light blue) para el texto de marcador de posición */
  }
`;

const SearchButton = styled.button`
  padding: 0.7rem 1.5rem; /* Ajusta el padding según sea necesario */
  border: none;
  border-radius: 6px; /* Ajusta el radio de borde según sea necesario */
  outline: none;
  background-color: #663399; /* Violeta oscuro (violet) */
  color: #fff;
  cursor: pointer;
  font-size: 16px; /* Ajusta el tamaño del texto según sea necesario */
  font-family: "Arial", sans-serif; /* Cambia la fuente según sea necesario */
`;

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
    setId("");
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="Buscar por ID"
      />
      <SearchButton onClick={handleSearch}>Agregar</SearchButton>
    </SearchBarContainer>
  );
}