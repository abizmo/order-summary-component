import React from 'react';
import OrderSummary from './components/OrderSummary';

const style = {
  alignItems: 'center',
  backgroundColor: 'hsl(225, 100%, 94%)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  padding: '0 24px',
};

const App = () => (
  <div style={style}>
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
  </div>
);

export default App;
