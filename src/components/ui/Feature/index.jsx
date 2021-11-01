/* eslint-disable react/prop-types */
import React from 'react';
import {
  Action, Container, Icon, Info, Text, Title,
} from './styles';

const Feature = ({ children }) => (
  <Container>{children}</Container>
);

export default Feature;

Feature.Icon = ({ src }) => (
  <Icon src={src} />
);

Feature.Info = ({ children }) => (
  <Info>{children}</Info>
);

Feature.Action = ({ label }) => (
  <Action>{label}</Action>
);

Feature.Title = ({ children }) => (
  <Title>{children}</Title>
);

Feature.Text = ({ children }) => (
  <Text>{children}</Text>
);
