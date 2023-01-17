import styled from 'styled-components';

export const AboutUsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20rem;

  margin-top: 9.6rem;
  margin-bottom: 2.1rem;

  padding: 3.4rem 13.5rem 3.4rem 13.5rem;
`;

export const AboutUsMainInfo = styled.div`
  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.8rem;

    color: ${(props) => props.theme['blue-800']};

    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.8rem;

    color: ${(props) => props.theme['blue-700']};

    margin-bottom: 1.6rem;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    color: ${(props) => props.theme['gray-100']};

    margin-bottom: 3.6rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    li {
      position: relative;
      padding-left: 3rem;

      &::before {
        position: absolute;
        content: '';
        left: 0.5rem;
        top: 0.5rem;
        background-color: ${(props) => props.theme['blue-800']};
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        z-index: 1;
      }

      &::after {
        position: absolute;
        content: '';
        left: 0;
        background-color: ${(props) => props.theme['blue-800']};
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        opacity: 0.1;
      }
    }
  }
`;

export const AboutUsImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`;
