import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.pale};
  background-image: ${({ theme }) => `url('${theme.images.pattern.mobile}')`};
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    background-image: ${({ theme }) => `url('${theme.images.pattern.desktop}')`};
  }
`;
