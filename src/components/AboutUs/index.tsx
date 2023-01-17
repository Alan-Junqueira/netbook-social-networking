import React from 'react';
import { AboutUsContainer, AboutUsImages, AboutUsMainInfo } from './styled';

import about1Image from '/public/assets/images/about-1.png';
import about2Image from '/public/assets/images/about-2.png';
import about3Image from '/public/assets/images/about-3.png';

export const AboutUs = () => {
  return (
    <AboutUsContainer id='about'>
      <AboutUsMainInfo>
        <h3>Whats Netboks?</h3>
        <h2>Why Join to Netbook Social Network?</h2>
        <p>
          Recent surveys have indicated that small businesses recognise the need
          they have to connect with consumer.
        </p>
        <ul>
          <li>Groups</li>
          <li>Messages</li>
          <li>Share</li>
        </ul>
      </AboutUsMainInfo>
      <AboutUsImages>
        <div>
          <img src={about1Image} alt="" />
        </div>
        <div>
          <img src={about2Image} alt="" />
          <img src={about3Image} alt="" />
        </div>
      </AboutUsImages>
    </AboutUsContainer>
  );
};
