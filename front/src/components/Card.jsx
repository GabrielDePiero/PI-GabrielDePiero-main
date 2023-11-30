
import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  background-color: #663399;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  transition: transform 0.3s ease-out; /* Agregamos una transición para suavizar el efecto */
  cursor: pointer;

  &:hover {
    transform: scale(1.05); /* Aumentamos el tamaño en hover */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #663399;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

const Text = styled.h2`
  color: #fff;
`;

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CloseButton onClick={() => onClose(id)}>X</CloseButton>
      {isHovered && (
        <>
          <Text>{name}</Text>
          <Text>{species}</Text>
          <Text>{gender}</Text>
          <Text>{status}</Text>
          <Text>{origin}</Text>
        </>
      )}
      <img src={image} alt='' />
    </CardContainer>
  );
}