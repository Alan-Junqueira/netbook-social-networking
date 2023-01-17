import styled, { css } from 'styled-components';

export const OurCommunityContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 6rem 17.6rem 8rem;
  margin-bottom: 4.6rem;

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
  justify-content: center;

  margin-top: 6.4rem;
`;

interface IOurCommunityCard {
  variant: 'blue' | 'orange' | 'red';
}

export const OurComunityCard = styled.div<IOurCommunityCard>`
  display: flex;
  gap: 3.6rem;

  padding: 4rem 6.5rem 4rem 4rem;

  max-width: 52.2rem;
  width: 100%;
  height: 18.2rem;

  border-radius: 1.4rem;
  background-color: ${(props) => props.theme.white};

  &:hover {
    box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13);
  }

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 6.6rem;
    height: 6.6rem;

    border-radius: 2.4rem;

    ${(props) =>
      props.variant === 'blue' &&
      css`
        background: linear-gradient(
          154.49deg,
          ${props.theme['blue-300']} 6.61%,
          ${props.theme['blue-800']} 89.72%
        );
        box-shadow: 0px 10px 22px -2px rgba(109, 171, 255, 0.36);
      `};

    ${(props) =>
      props.variant === 'orange' &&
      css`
        background: linear-gradient(
          154.49deg,
          ${props.theme['orange-300']} 6.61%,
          ${props.theme['orange-500']} 89.72%
        );
        box-shadow: 0px 10px 22px -2px rgba(250, 186, 84, 0.3);
      `};

    ${(props) =>
      props.variant === 'red' &&
      css`
        background: linear-gradient(
          154.49deg,
          ${props.theme['red-300']} 6.61%,
          ${props.theme['red-500']} 89.72%
        );
        box-shadow: 0px 8px 22px -2px rgba(248, 87, 94, 0.3);
      `};

    img {
      width: 3.4rem;
      height: 3.4rem;
    }
  }

  h4 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.6rem;

    color: ${(props) => props.theme['blue-200']};

    margin-bottom: 1.4rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;

    color: ${(props) => props.theme['gray-100']};
  }
`;
