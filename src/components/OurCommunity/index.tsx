import React from 'react';
import {
  OurCommunityCards,
  OurCommunityContainer,
  OurCommunityHeaderContent,
  OurComunityCard
} from './styled';

export const OurCommunity = () => {
  return (
    <OurCommunityContainer id="community">
      <OurCommunityHeaderContent>
        <h3>Our Community</h3>
        <h2>Community Main Feature</h2>
        <p>
          The wise man therefore always holds in these matters to this principle
          of selection.
        </p>
      </OurCommunityHeaderContent>
      <OurCommunityCards>
        <OurComunityCard>
          <div></div>
          <div>
            <h4></h4>
            <p></p>
          </div>
        </OurComunityCard>
        <OurComunityCard>
          <div></div>
          <div>
            <h4></h4>
            <p></p>
          </div>
        </OurComunityCard>
        <OurComunityCard>
          <div></div>
          <div>
            <h4></h4>
            <p></p>
          </div>
        </OurComunityCard>
        <OurComunityCard>
          <div></div>
          <div>
            <h4></h4>
            <p></p>
          </div>
        </OurComunityCard>
        <OurComunityCard>
          <div></div>
          <div>
            <h4></h4>
            <p></p>
          </div>
        </OurComunityCard>
        <OurComunityCard>
          <div></div>
          <div>
            <h4></h4>
            <p></p>
          </div>
        </OurComunityCard>
      </OurCommunityCards>
    </OurCommunityContainer>
  );
};
