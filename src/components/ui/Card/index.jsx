/* eslint-disable react/prop-types */
import React from 'react';
import {
  Actions, BGImage, Body, Cancel, Confirm, Container, Description, Title,
} from './styles';

const Card = ({ children }) => (
  <Container>{children}</Container>
);

export default Card;

Card.Header = () => (
  <BGImage />
);

Card.Body = ({ children }) => (
  <Body>{ children }</Body>
);

Card.Title = ({ children }) => (
  <Title>{children}</Title>
);

Card.Description = ({ children }) => (
  <Description>{children}</Description>
);

Card.Actions = ({ children }) => (
  <Actions>{children}</Actions>
);

Card.Confirm = ({ children }) => (
  <Confirm>{children}</Confirm>
);

Card.Cancel = ({ children }) => (
  <Cancel>{children}</Cancel>
);
