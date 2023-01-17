import styled from 'styled-components';

export const OurCommunityContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 6rem 17.6rem 8rem;

  background-image: linear-gradient(
    0deg,
    rgba(241, 246, 253, 0) 1.63%,
    #f1f6fd 20.5%,
    #f1f6fd 58.57%,
    #ffffff 100%
  ); ;
`;

export const OurCommunityHeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 44.1rem;
  width: 100%;

  margin: 0 auto;

  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.8rem;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['blue-800']};
  }

  h2 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 3.6rem;

    margin-bottom: 2rem;

    color: ${(props) => props.theme['blue-700']};
  }
  P {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;

    text-align: center;

    color: ${(props) => props.theme['gray-100']};
  }
`;


export const OurCommunityCards = styled.div`
  display: grid;
  grid-template-areas: 'col-1 col-2';
  gap: 4.4rem;
  
  margin-top: 6.4rem;
  `;

interface IOurCommunityCard {
  variant: 'blue' | 'orange' | 'red'
}

export const OurComunityCard = styled.div`
  display: flex;
  gap: 3.6rem;

  padding: 4rem 6.5rem 4rem 4rem;

  max-width: 52.2rem;
  width: 100%;
  height: 18.2rem;

  background-color: ${(props) => props.theme.white};

  div:first-child {
    background-color: red;
    width: 2rem;
    height: 2rem;
  }

  h4 {
  }

  p {
  }
`;
