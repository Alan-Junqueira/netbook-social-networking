import { ButtonContainer } from './styled';

type ButtonProps = {
  label: string;
  backgroundColor: 'blue' | 'transparent';
  textColor: 'blue' | 'white';
  border?: boolean;
  boxShadow?: boolean;
  fontWeight: number;
  fontSmall?: boolean;
};

export const Button = ({
  backgroundColor,
  textColor,
  border,
  boxShadow,
  label,
  fontWeight,
  fontSmall
}: ButtonProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
      border={border}
      boxShadow={boxShadow}
      fontWeight={fontWeight}
      fontSmall={fontSmall}
    >
      {label}
    </ButtonContainer>
  );
};
