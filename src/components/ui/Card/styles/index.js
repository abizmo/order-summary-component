import styled from 'styled-components';

export const Actions = styled.div`
align-items: center;
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  width: 100%;
`;

export const BGImage = styled.div`
  background-image: url('/images/illustration-hero.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px 16px 0 0;
  height: 180px;
  width: 100%;
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const Cancel = styled.button`
  border: none;
  color: hsl(224, 23%, 55%);
  display: contents;
  font-family: 'Red Hat Display';
  font-weight: 700;

  &:hover {
    color: hsl(223,47%,23%);
    cursor: pointer;
  }
`;

export const Confirm = styled.button`
  background-color: hsl(245, 75%, 52%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 16px 12px hsla(245, 75%, 52%, 16%);
  color: white;
  font-family: 'Red Hat Display';
  font-weight: 700;
  margin-bottom: 16px;
  padding: 16px;
  width: 100%;
  
  &:hover {
    background-color: hsl(242,86%,72%);
    box-shadow: 0 16px 12px hsla(242, 86%, 72%, 16%);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 16px 16px hsla(245, 75%, 52%, 20%);
  margin-bottom: 8px;
  max-width: 327px;
  width: 100%;
`;

export const Description = styled.p`
  color: hsl(224, 23%, 55%);
  margin-bottom: 24px;
  margin-top: 0;
  max-width: 264px;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 24px;
  margin-top: 36px;
`;
