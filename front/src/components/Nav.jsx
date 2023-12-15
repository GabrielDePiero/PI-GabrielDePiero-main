import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #8a2be2;
  padding: 10px;
`;

const CenteredSearchBar = styled(SearchBar)`
  margin: auto;
`;

const NavButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; 
`;

const NavButton = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #8a2be2;
  margin-right: 10px;

  &:hover {
    background-color: #6a1a9a;
  }
`;

const FavoritesButton = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #8a2be2;

  &:hover {
    background-color: #6a1a9a;
  }
`;

const Nav = ({ onSearch }) => {
  return (
    <NavContainer>
      <CenteredSearchBar onSearch={onSearch} />
      <NavButtonsContainer>
        <NavButton to="/home">HOME</NavButton>
        <NavButton to="/about">ABOUT</NavButton>
        <FavoritesButton to="/favorites">FAVORITES</FavoritesButton>
      </NavButtonsContainer>
    </NavContainer>
  );
};

export default Nav;
