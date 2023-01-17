import {
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo
} from 'phosphor-react';

import {
  FooterContainer,
  FooterMenuContainer,
  FooterNavigationContainer,
  FooterNewsletterContainer,
  FooterSocialLinks
} from './styled';

import logoImage from '/assets/images/logo-white.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavigationContainer>
        <FooterMenuContainer>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Guides</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">NewsFeed</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Friends</a>
            </li>
            <li>
              <a href="">Forums</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Main links</a>
            </li>
            <li>
              <a href="">Members</a>
            </li>
            <li>
              <a href="">Activity</a>
            </li>
            <li>
              <a href="">Groups</a>
            </li>
            <li>
              <a href="">Private Group</a>
            </li>
          </ul>
        </FooterMenuContainer>
        <FooterNewsletterContainer>
          <h4>Subscribe Cirkle Newsletter</h4>
          <p>Newsletter</p>
          <div>
            <input type="text" name="" id="" placeholder='Email Address'/>
            <button>Subscribe</button>
          </div>
        </FooterNewsletterContainer>
      </FooterNavigationContainer>
      <FooterSocialLinks>
        <span>Besnik Creative Agency.</span>
        <img src={logoImage} alt="" />
        <div>
          <a href="">
            <TwitterLogo />
          </a>
          <a href="">
            <InstagramLogo />
          </a>
          <a href="">
            <FacebookLogo />
          </a>
          <a href="">
            <LinkedinLogo />
          </a>
        </div>
      </FooterSocialLinks>
    </FooterContainer>
  );
};
