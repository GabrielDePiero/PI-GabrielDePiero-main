import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
`;

const TextWrapper = styled.div`
  background-color: #8a2be2; 
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  font-style: italic;
  color: white;
`;

const About = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>¡Hola, soy Gabito y esta es mi humilde página! 😊</Title>
        <Subtitle>Como verán, aún sigue en proceso.</Subtitle>
      </TextWrapper>
    </Container>
  );
};

export default About;
