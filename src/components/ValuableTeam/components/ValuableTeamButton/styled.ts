import styled, { css } from 'styled-components';

interface IValuableTeamButtonContainer {
  variant: 'blue' | 'transparent';
}

export const ValuableTeamButtonContainer = styled.button<IValuableTeamButtonContainer>`
  padding: 2rem 0;
  border-radius: 1.4rem;

  width: 100%;

  font-size: 1.6rem;
  line-height: 1.6rem;
  letter-spacing: 0.01em;
  z-index: 10;

  ${(props) =>
    props.variant === 'blue' &&
    css`
      color: ${props.theme.white};
      background: ${props.theme['blue-800']};
      box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
      font-weight: 600;

      &:hover {
        opacity: 0.9;
      }
    `};

  ${(props) =>
    props.variant === 'transparent' &&
    css`
      color: ${props.theme['blue-200']};
      background: transparent;
      font-weight: 400;
      opacity: 0.8;

      &:hover {
        background-color: rgba(33, 123, 244, 0.5);
      }
    `};
`;
