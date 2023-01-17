import { Star, ArrowRight, Trophy } from 'phosphor-react';

import peopleImage from '/assets/images/achievement-people.png';
import githubImage from '/assets/images/github.svg';

import {
  AchievementCard,
  AchievementMainContent,
  OurAchievementContainer
} from './styled';

export const OurAchievement = () => {
  return (
    <OurAchievementContainer id="achievement">
      <AchievementCard coloredLink>
        <span>
          <Star />
          <h3>4.8 Rating</h3>
        </span>
        <div>
          <img src={peopleImage} alt="" />
          <span>
            <strong>+836k</strong> Members
          </span>
        </div>
        <p>
          More than 2 billion we people over countries use socibooks we to stay
          in touch with friends.
        </p>
        <a href="#community">
          Join Our Community <ArrowRight weight="bold" />
        </a>
      </AchievementCard>
      <AchievementCard ghLogo>
        <span>
          <Trophy />
          <h3>4.8 Rating</h3>
        </span>
        <div>
          <img src={githubImage} alt="" />
          <span>
            Best of <strong>2021</strong> on Github
          </span>
        </div>
        <p>
          More than 2 billion we people over countries use socibooks we to stay
          in touch with friends.
        </p>
        <a href="">
          Go To Awards <ArrowRight weight="bold" />
        </a>
      </AchievementCard>
      <AchievementMainContent>
        <h3>Our Achievement</h3>
        <h2>We are ecting You The Digital Life.</h2>
        <p>
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </p>
        <button>
          Discover me <ArrowRight weight="bold" />
        </button>
      </AchievementMainContent>
    </OurAchievementContainer>
  );
};
