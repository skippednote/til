import Menu from '../components/Menu';
import footerStyles from '../styles/Footer.module.css';
import { FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import SiteLogo from './icons/SiteLogo';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="main-container">
        <div className={footerStyles.footerLinks}>
          <Menu
            title="Quick Links"
            links={[
              { link: 'https://www.axelerant.com/careers', text: 'Careers' },
              { link: 'https://store.axelerant.com/', text: 'Plugin Store' },
              { link: 'https://ks.axelerant.com/', text: 'TIL' },
            ]}
          />
          <Menu
            title="Blog"
            links={[
              {
                link: 'https://www.axelerant.com/resources/articles',
                text: 'Articles',
              },
              {
                link: 'https://www.axelerant.com/resources/team-blog',
                text: 'Team Blog',
              },
              {
                link: 'https://www.axelerant.com/success-stories',
                text: 'Case Studies',
              },
            ]}
          />
          <div className={footerStyles.socialLinks}>
            <Menu
              title="Social Sharing"
              links={[
                {
                  link: 'https://www.facebook.com/axelerant',
                  text: <FiFacebook />,
                },
                { link: 'https://twitter.com/axelerant', text: <FiTwitter /> },
                {
                  link: 'https://www.linkedin.com/company/axelerant/',
                  text: <FiLinkedin />,
                },
              ]}
            />
          </div>
          <div className={footerStyles.footerLogoWrapper}>
            <div className={footerStyles.footerLogo}>
              <SiteLogo />{' '}
              <span className={footerStyles.text}>
                a<span className={footerStyles.letterX}>x</span>elerant
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={footerStyles.footerSecondary}>
        <p>&copy; 2020 Axelerant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
