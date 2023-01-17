import React from 'react';
import { ValuableTeamButtonContainer } from './styled';

type ValuableTeamButtonProps = {
  variant: 'blue' | 'transparent';
  label: string;
};

export const ValuableTeamButton = ({
  variant,
  label
}: ValuableTeamButtonProps) => {
  return (
    <ValuableTeamButtonContainer variant={variant}>
      {label}
    </ValuableTeamButtonContainer>
  );
};
