import { MagnifyingGlass } from 'phosphor-react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderMainButtons,
  HeaderMainContent,
  HeaderMainImage,
  HeaderNavigation,
  InputBox
} from './styled';

import logoImage from '/assets/images/logo.svg';
import headerAvatarsImage from '/assets/images/header-avatars.png';
import { Button } from '../Button';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <div>
          <img src={logoImage} alt="Netbook" />
          <ul>
            <li className="active">
              <a href="home">Home</a>
            </li>
            <li>
              <a href="community">Community</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="events">Events</a>
            </li>
          </ul>
          <InputBox htmlFor="searchHeader">
            <div>
              <MagnifyingGlass />
            </div>
            <input
              id="searchHeader"
              type="search"
              placeholder="Search Here..."
            />
          </InputBox>
          <Button
            label="Log in"
            fontSmall
            fontWeight={600}
            textColor="white"
            backgroundColor="blue"
            boxShadow
          />
        </div>
      </HeaderNavigation>
      <HeaderContent>
        <HeaderMainContent>
          <button>
            <a href="community">Netbook community</a>
          </button>
          <h1>Your Solutions For Community!</h1>
          <p>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </p>
          <HeaderMainButtons>
            <Button
              backgroundColor="blue"
              fontWeight={400}
              label="About More"
              textColor="white"
              boxShadow
            />
            <Button
              backgroundColor="transparent"
              fontWeight={500}
              label="Invite Friends"
              textColor="blue"
              border
            />
          </HeaderMainButtons>
        </HeaderMainContent>
        <HeaderMainImage>
          <img src={headerAvatarsImage} alt="" />
        </HeaderMainImage>
      </HeaderContent>
    </HeaderContainer>
  );
};
