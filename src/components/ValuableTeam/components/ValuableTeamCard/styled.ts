import styled from 'styled-components';

export const ValuableTeamCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.white};
  box-shadow: 0px 34px 68px rgba(116, 115, 128, 0.1);
  border-radius: 14px;

  padding: 3rem 5rem;

  h4 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.6rem;

    text-align: center;

    margin: 3rem 0 2.4rem 0;

    color: ${(props) => props.theme['blue-200']};
  }

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    /* identical to box height, or 100% */

    text-align: center;

    color: ${(props) => props.theme['gray-100']};
  }
`;

export const ValuableTeamCardImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 16.6rem;
  height: 17.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div.check {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['blue-800']};
    bottom: 0;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
  }
  div:first-child {
    position: absolute;
  }
  div:last-child {
    img {
      background: ${(props) => props.theme['blue-50']};
      width: 13.8rem;
      height: auto;
      border-radius: 50%;
    }
  }
`;
