import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
  height: 74.6rem;

  padding-top: 2.2rem
`;

export const HeaderNavigation = styled.nav`
  padding: 0 2.2rem 1.8rem;
  border-bottom: 1px solid rgba(33, 123, 244, 0.1);

  div {
    display: flex;
    align-items: center;

    max-width: 117rem;
    width: 100%;

    margin: 0 auto;

    ul {
      display: flex;
      gap: 3.2rem;
      margin-left: 7.2rem;
      flex: 1;

      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.4rem;

      letter-spacing: 0.01em;

      color: ${(props) => props.theme['gray-100']};

      li.active {
        font-weight: 600;
        color: ${(props) => props.theme['blue-100']};
      }
    }

    button {
      padding: 1.8rem 4.4rem;
      margin-left: 4.2rem;

      color: ${(props) => props.theme.white};
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4rem;

      background: ${(props) => props.theme['blue-800']};
      box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
      border-radius: 14px;
    }
  }
`;

export const InputBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  padding-top: 1.5rem;
  padding-bottom: 2rem;

  max-width: 10.5rem;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme['gray-50']};
  input {
    background-color: transparent;

    font-size: 1.2rem;
    line-height: 1.4rem;

    &::placeholder {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;

      color: ${(props) => props.theme['gray-200']};
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const HeaderContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;

  max-width: 117rem;
  width: 100%;

  margin: 0 auto;
  padding: 7.2rem 2.2rem 8.3rem;
`;

export const HeaderMainContent = styled.div`
  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(33, 183, 244, 0.1);
    border-radius: 8px;

    margin-bottom: 2rem;

    a {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.2rem;

      padding: 1.2rem 3rem;

      color: ${(props) => props.theme['blue-800']};
    }
  }

  h1 {
    font-weight: 700;
    font-size: 5.6rem;
    line-height: 6.6rem;

    margin-bottom: 1.8rem;

    color: ${(props) => props.theme['blue-700']};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;

    margin-bottom: 4.2rem;

    color: ${(props) => props.theme['gray-100']};
  }
`;

export const HeaderMainButtons = styled.div`
  display: flex;
  gap: 1.8rem;

  button {
    
    
    padding: 2.4rem 4.2rem;
    background: #217bf4;
    box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
    border-radius: 14px;
  }
`;

export const HeaderMainImage = styled.div`
  img {
    width: 100%;
  }
`;
