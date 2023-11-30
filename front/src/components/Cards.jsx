import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map(({ id, name, status, species, gender, origin, image }) => (
        <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          image={image}
          origin={origin.name}
          onClose={onClose}
        />
      ))}
    </CardsContainer>
  );
}