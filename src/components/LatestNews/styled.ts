import styled from 'styled-components';

export const LatestNewsContainer = styled.section`
  padding: 3.4rem 13.5rem;
  margin-bottom: 9.6rem;

  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.8rem;

    text-align: center;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['blue-800']};
  }

  h2 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 3.6rem;

    text-align: center;

    margin-bottom: 8rem;

    color: ${(props) => props.theme['blue-700']};
  }
`;

export const LatestNewsCardsContainer = styled.div`
  display: grid;
  grid-template-areas: 'col-1 col-2 col-3';
  justify-content: center;
  gap: 7.5rem;
`;
