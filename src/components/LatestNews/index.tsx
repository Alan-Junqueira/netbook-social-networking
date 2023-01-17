import React from 'react';
import { LatestNewsCard } from './components/LatestNewsCard';
import { LatestNewsCardsContainer, LatestNewsContainer } from './styled';

import card1Image from '/assets/images/news-card-1.png';
import card2Image from '/assets/images/news-card-2.png';
import card3Image from '/assets/images/news-card-3.png';

export const LatestNews = () => {
  return (
    <LatestNewsContainer id="latest-news">
      <h3>Get Our Aplication</h3>
      <h2>Latest News</h2>
      <LatestNewsCardsContainer>
        <LatestNewsCard
          title="It Does Not Matter Hows Slowly go as Long"
          image={card1Image}
        />
        <LatestNewsCard
          title="Netbook Network Added New Photo Filter"
          image={card2Image}
        />
        <LatestNewsCard
          title="We Optimised Netbooks Better Navigation"
          image={card3Image}
        />
      </LatestNewsCardsContainer>
    </LatestNewsContainer>
  );
};
