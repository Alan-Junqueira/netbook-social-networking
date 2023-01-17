import React from 'react';
import {
  GetOurAplicationContainer,
  GetOurAplicationImageContainer
} from './styled';

import appStoreImage from '/assets/images/app-store.png';
import playStoreImage from '/assets/images/play-store.png';
import mobileMockupImage from '/assets/images/mobile-mockup.png';

export const GetOurAplication = () => {
  return (
    <GetOurAplicationContainer id="get-our-aplication">
      <div>
        <h3>Get Our Aplication</h3>
        <h2>You Can Easily Find This App…!</h2>
        <p>
          I say chap that’s suing lavatory chip shop gosh off his smashing boot
          are you taking the piss posh loo brilliant.
        </p>
        <div>
          <img src={appStoreImage} alt="" />
          <img src={playStoreImage} alt="" />
        </div>
      </div>
      <GetOurAplicationImageContainer>
        <img src={mobileMockupImage} alt="" />
      </GetOurAplicationImageContainer>
    </GetOurAplicationContainer>
  );
};
