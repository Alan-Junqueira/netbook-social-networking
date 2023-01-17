import { ArrowRight } from 'phosphor-react';

import { LatestNewsCardContainer } from './styled';

type LatestNewsCardProps = {
  image: string;
  title: string;
};

export const LatestNewsCard = ({ image, title }: LatestNewsCardProps) => {
  return (
    <LatestNewsCardContainer>
      <img src={image} alt="" />
      <h4>{title}</h4>
      <a>
        Continue Reading <ArrowRight weight='bold'/>
      </a>
    </LatestNewsCardContainer>
  );
};
