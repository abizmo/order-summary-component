import styled from 'styled-components';

export const Actions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    margin: 32px 0;
  }
`;

export const BGImage = styled.div`
  background-image: ${({ theme }) => `url('${theme.images.hero.main}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px 16px 0 0;
  height: 160px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    height: 220px;
  }
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    padding: 0 48px;
  }
`;

export const Cancel = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.neutral.desaturated};
  display: contents;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.dark};
    cursor: pointer;
  }
`;

export const Confirm = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.bright};
  border: none;
  border-radius: 12px;
  box-shadow: 0 16px 12px ${({ theme }) => theme.colors.alpha.primaryBright};
  color: white;
  font-weight: 700;
  margin-bottom: 16px;
  padding: 16px;
  width: 100%;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.bright};
    box-shadow: 0 16px 12px ${({ theme }) => theme.colors.alpha.secondaryBright};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 16px 16px ${({ theme }) => theme.colors.alpha.neutralDark};
  margin-bottom: 8px;
  max-width: 327px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    max-width: 450px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral.desaturated};
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

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    margin-top: 48px;
  }
`;
