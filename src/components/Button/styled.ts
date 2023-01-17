import styled from 'styled-components';

export interface IButtonContainer {
  textColor: string;
  backgroundColor: string;
  border?: boolean;
  boxShadow?: boolean;
  fontWeight: number;
  fontSmall?: boolean;
}

export const ButtonContainer = styled.button<IButtonContainer>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => (props.fontSmall ? '1.2rem' : '1.4rem')};
  line-height: 1.4rem;

  padding: 2.4rem 4.2rem;

  border: ${(props) => (props.border ? '1px solid rgba(33, 123, 244, .5)' : 0)};

  color: ${(props) =>
    props.textColor === 'blue' ? props.theme['blue-800'] : props.theme.white};
  background-color: ${(props) =>
    props.backgroundColor === 'blue' ? props.theme['blue-800'] : 'transparent !important'};
  box-shadow: ${(props) =>
    props.boxShadow ? '0px 7px 22px -6px rgba(33, 123, 244, 0.34)' : 'none !important'};
  border-radius: 14px;
`;
