import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.nav`
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.7rem; 
  margin-right: 1rem;
  border: none;
  border-radius: 6px; 
  outline: none;
  background-color: #663399; 
  color: #fff;
  font-size: 16px; 
  font-family: "Arial", sans-serif; 

  ::placeholder {
    color: #add8e6; 
  }
`;

const SearchButton = styled.button`
  padding: 0.7rem 1.5rem; 
  border: none;
  border-radius: 6px; 
  outline: none;
  background-color: #663399; 
  color: #fff;
  cursor: pointer;
  font-size: 16px; 
  font-family: "Arial", sans-serif; 
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