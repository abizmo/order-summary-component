import React from 'react';
import OrderSummary from './components/OrderSummary';
import { Container } from './styles';

const App = () => (
  <Container>
    <OrderSummary />
    <div className="attribution">
      Challenge by
      {' '}
      <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>
      .
      Coded by
      {' '}
      <a href="https://www.abizmo.dev">ab!Zmo</a>
      .
    </div>
  </Container>
);

export default App;
