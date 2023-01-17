import styled from 'styled-components';

export const ValuableTeamContainer = styled.section`
  padding: 8.4rem 13.4rem;
  background-color: ${(props) => props.theme.white};
  margin-bottom: 4.6rem;

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

    margin-bottom: 1.8rem;

    color: ${(props) => props.theme['blue-700']};
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;

    text-align: center;
    margin: 0 auto;

    max-width: 45.4rem;

    color: ${(props) => props.theme['gray-100']};
  }
`;

export const ValuableTeamButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1.2rem;

  max-width: 47.4rem;
  width: 100%;

  margin: 4.4rem auto;
  padding: 0.8rem;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme['blue-800']};
    opacity: 0.1;
    border-radius: 14px;
  }
`;

export const ValuableTeamButtonCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
