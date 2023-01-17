import styled from 'styled-components';

export const GetOurAplicationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 56rem;

  margin-bottom: 9.6rem;
  padding: 4.4rem 16rem 0 13.5rem;
  overflow: hidden;

  background-color: ${(props) => props.theme['blue-60']};

  div:first-child {
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 35.1rem;
    width: 100%;

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
      line-height: 5.2rem;

      margin-bottom: 1.8rem;

      color: ${(props) => props.theme['blue-700']};
    }

    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.6rem;

      margin-bottom: 3.6rem;

      color: ${(props) => props.theme['gray-100']};
    }

    div {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }
`;

export const GetOurAplicationImageContainer = styled.div`
  position: relative;

  img {
    max-width: 44.05rem;
    height: calc(100% + 23rem);
  }
`;
