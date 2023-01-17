import styled from 'styled-components';

export const FooterContainer = styled.footer``;

export const FooterNavigationContainer = styled.div`
  padding: 7.4rem 13.5rem;
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme['blue-100']}; ;
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  ul {
    display: flex;
    flex-direction: column;

    gap: 3rem;

    li:first-child {
      a {
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2rem;

        color: ${(props) => props.theme.white};
      }
    }

    li {
      a {
        font-weight: 400;
        font-size: 1.6rem;

        letter-spacing: 0.0125em;

        color: ${(props) => props.theme['gray-70']};
      }
    }
  }
`;

export const FooterNewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12rem;
  max-width: 34rem;
  width: 100%;

  h4 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.2rem;

    color: ${(props) => props.theme.white};
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;

    color: ${(props) => props.theme['gray-70']};

    margin: 3.3rem 0 1.8rem 0;
  }

  div {
    display: flex;

    border: 1px solid rgba(255, 255, 255, 0.85);
    border-radius: 1.2rem;

    input {
      background-color: transparent;
      padding: 1.8rem 2.4rem;

      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.2rem;

      color: ${(props) => props.theme['gray-70']};

      &::placeholder {
        color: ${(props) => props.theme['gray-400']};
      }
    }

    button {
      height: 100%;
      background: #ffffff;
      border-radius: 12px;

      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.6rem;

      color: #2b2b39;

      padding: 1.6rem 2.4rem;
    }
  }
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 13.5rem;

  background-color: ${(props) => props.theme['blue-400']};

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.4rem;

    color: ${(props) => props.theme['gray-60']};
  }

  div {
    gap: 0.8rem;
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 3.6rem;
      height: 3.6rem;
      background-color: ${(props) => props.theme.white};
      border-radius: 50%;
    }
    svg {
      width: 2.4rem;
      height: auto;
    }
  }
`;
