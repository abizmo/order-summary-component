import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.pale};
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    padding: 8px;
  }
`;

export const Icon = styled.img`
  height: 48px;
  width: 48px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    flex: initial;
    margin-left: 0;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.neutral.dark};
  font-weight: 700;
  margin: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral.desaturated};
  margin: 0;
`;

export const Action = styled.a`
  color: ${({ theme }) => theme.colors.primary.bright};
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.bright};
    cursor: pointer;
    text-decoration: none;
  }
`;
