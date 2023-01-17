import styled from 'styled-components';

export const OurAchievementContainer = styled.section`
  display: flex;
  gap: 2.4rem;

  padding: 8.4rem 13.5rem 8.4rem 13.5rem;
  margin-bottom: 5.5rem;
`;

interface IAchievementCard {
  coloredLink?: boolean;
  ghLogo?: boolean;
}

export const AchievementCard = styled.div<IAchievementCard>`
  max-width: 33.6rem;
  width: 100%;

  padding: 4.2rem 1.8rem 4rem 4.4rem;
  border: 1px solid rgba(146, 165, 184, 0.14);
  border-radius: 14px;

  &:hover {
    border: transparent;
    box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
  }

  > span {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 3.2rem;

    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: ${(props) => props.theme['blue-800']};
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    margin-bottom: 3rem;

    img {
      margin-left: ${(props) => (props.ghLogo ? '-1.2rem' : '-1.8rem')};
      padding-top: 0.6rem;
    }

    span {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
      color: ${(props) => props.theme['gray-500']};

      strong {
        font-weight: 600;
        color: ${(props) => props.theme['blue-800']};
      }
    }
  }

  > p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;

    margin-bottom: 4rem;

    color: ${(props) => props.theme['gray-300']};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.6rem;

    color: ${(props) =>
    props.coloredLink ? props.theme['blue-800'] : props.theme['gray-600']};

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const AchievementMainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    line-height: 4.8rem;

    margin-bottom: 1.8rem;

    color: ${(props) => props.theme['blue-700']};
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;

    margin-bottom: 3.8rem;

    color: ${(props) => props.theme['gray-100']};
  }

  button {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;

    letter-spacing: -0.02em;

    padding: 2.2rem 3.4rem;
    border-radius: 14px;

    max-width: 19.6rem;
    width: 100%;

    background-color: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme.white};

    &:hover {
      box-shadow: 0px 10px 22px rgba(33, 123, 244, 0.26);
    }
  }
`;
