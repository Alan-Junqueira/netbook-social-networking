import React from 'react';
import { ValuableTeamButton } from './components/ValuableTeamButton';
import { ValuableTeamCard } from './components/ValuableTeamCard';
import {
  ValuableTeamButtonCardsContainer,
  ValuableTeamButtonContainer,
  ValuableTeamContainer
} from './styled';

import fahimRahmanImage from '/public/assets/images/fahin-rahman.png';
import kaziRahmanImage from '/public/assets/images/kazi-rahman.png';
import mastereroAliImage from '/public/assets/images/masterero-ali.png';
import aliaKaronImage from '/public/assets/images/alia-karon.png';

export const ValuableTeam = () => {
  return (
    <ValuableTeamContainer id="valuable-team">
      <h3>Valuable Team</h3>
      <h2>Our Active Members</h2>
      <p>
        when an unknown printer took a galley of type and meeting fari scrambled
        it.
      </p>
      <ValuableTeamButtonContainer>
        <ValuableTeamButton label="Newst" variant="transparent" />
        <ValuableTeamButton label="Popular" variant="transparent" />
        <ValuableTeamButton label="Active" variant="blue" />
      </ValuableTeamButtonContainer>
      <ValuableTeamButtonCardsContainer>
        <ValuableTeamCard
          image={fahimRahmanImage}
          label="Fahin Rahman"
          social="rahman"
        />
        <ValuableTeamCard
          image={kaziRahmanImage}
          label="Kazi Rahman"
          social="Rahman"
        />
        <ValuableTeamCard
          image={mastereroAliImage}
          label="Masterero Ali"
          social="Master"
        />
        <ValuableTeamCard
          image={aliaKaronImage}
          label="Alia Karon"
          social="Alia"
        />
      </ValuableTeamButtonCardsContainer>
    </ValuableTeamContainer>
  );
};
