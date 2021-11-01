import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  align-items: center;
  background-color: hsl(225, 100%, 94%);
  background-image: url('/images/pattern-background-mobile.svg');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 24px;

  @media (min-width: 376px) {
    background-image: url('/images/pattern-background-desktop.svg');
  }
`;
