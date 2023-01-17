import styled from 'styled-components';

export const LatestNewsCardContainer = styled.div`
  img {
    max-width: 34rem;
    width: 100%;
    height: auto;

    border-radius: 1.6rem;
  }

  h4 {
    position: relative;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3.2rem;

    margin-left: 6.7rem;
    margin-block: 2.4rem;

    color: ${(props) => props.theme['blue-200']};

    &:before {
      position: absolute;
      content: '';
      top: 2rem;
      left: -5.2rem;
      width: 4rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme['orange-500']};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    /* identical to box height, or 100% */


    color: ${(props) => props.theme['gray-100']};

    &:hover {
      color: ${(props) => props.theme['blue-800']};
    }
  }
`;
