import {
  ValuableTeamCardContainer,
  ValuableTeamCardImageContainer
} from './styled';

import elipseImage from '/public/assets/images/elipse.svg';
import checkImage from '/public/assets/images/check.svg';

type ValuableTeamCardProps = {
  image: string;
  label: string;
  social: string;
};

export const ValuableTeamCard = ({
  image,
  label,
  social
}: ValuableTeamCardProps) => {
  return (
    <ValuableTeamCardContainer>
      <ValuableTeamCardImageContainer>
        <div>
          <img src={elipseImage} alt="" />
        </div>
        <div className="check">
          <img src={checkImage} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </ValuableTeamCardImageContainer>
      <h4>{label}</h4>
      <span>@{social}</span>
    </ValuableTeamCardContainer>
  );
};
