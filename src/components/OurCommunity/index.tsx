import React from 'react';
import {
  OurCommunityCards,
  OurCommunityContainer,
  OurCommunityHeaderContent,
  OurComunityCard
} from './styled';

import memberFriendsImage from '/assets/images/members-friends.svg';
import groupsImage from '/assets/images/groups.svg';
import forumImage from '/assets/images/forum.svg';
import custonModuleImage from '/assets/images/custon-module.svg';
import listBuilderImage from '/assets/images/list-builder.svg';
import listScrollEffectsImage from '/assets/images/list-scroll-effects.svg';

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
        <OurComunityCard variant="blue">
          <div>
            <img src={memberFriendsImage} alt="" />
          </div>
          <div>
            <h4>Members, Friends</h4>
            <p>
              Members, Friends Connection ( like followers ), Private Message
            </p>
          </div>
        </OurComunityCard>
        <OurComunityCard variant="red">
          <div>
            <img src={groupsImage} alt="" />
          </div>
          <div>
            <h4>Groups</h4>
            <p>
              Your users can create groups to let other users to join and talk
            </p>
          </div>
        </OurComunityCard>
        <OurComunityCard variant="orange">
          <div>
            <img src={forumImage} alt="" />
          </div>
          <div>
            <h4>Forum</h4>
            <p>
              Forum is ready by BBPress. Your users can make topics and talk.
            </p>
          </div>
        </OurComunityCard>
        <OurComunityCard variant="blue">
          <div>
            <img src={custonModuleImage} alt="" />
          </div>
          <div>
            <h4>Custom Module</h4>
            <p>
              You can create Members, Groups Module. We already created 3
              modules. It's by drag & drop live builder.
            </p>
          </div>
        </OurComunityCard>
        <OurComunityCard variant="red">
          <div>
            <img src={listBuilderImage} alt="" />
          </div>
          <div>
            <h4>List Builder</h4>
            <p>
              Members, Groups list can be modified by drag & drop live builder.
            </p>
          </div>
        </OurComunityCard>
        <OurComunityCard variant="orange">
          <div>
            <img src={listScrollEffectsImage} alt="" />
          </div>
          <div>
            <h4>List Scroll Effects</h4>
            <p>
              8 different scroll effects are ready. You can always change by
              your tastes.
            </p>
          </div>
        </OurComunityCard>
      </OurCommunityCards>
    </OurCommunityContainer>
  );
};
