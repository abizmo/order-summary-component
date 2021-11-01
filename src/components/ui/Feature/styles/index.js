// Feature, Icon, Info, Title, Text, Action
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: hsl(225, 100%, 98%);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
`;

export const Icon = styled.img`
  height: 48px;
  margin-right: 16px;
  width: 48px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  color: hsl(223, 47%, 23%);
  font-weight: 700;
  margin: 0;
`;

export const Text = styled.p`
  color: hsl(224, 23%, 55%);
  margin: 0;
`;

export const Action = styled.a`
  color: hsl(245, 75%, 52%);
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    color: hsl(242,86%,72%);
    cursor: pointer;
    text-decoration: none;
  }
`;
