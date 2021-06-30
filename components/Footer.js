import Menu from '../components/Menu'
import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'
import { FiLinkedin, FiTwitter, FiFacebook} from 'react-icons/fi'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className={footerStyles.footerLinks}>
					<Menu title='Quick Links' links={[{ link: '/careers', text: 'Careers' }, { link: '/careers', text: 'Plugin Store' }, { link: '/careers', text: 'Contrib Tracker' }]} />
					<Menu title='Blog' links={[{ link: '/careers', text: 'Articles' }, { link: '/careers', text: 'Team Blog' }, { link: '/careers', text: 'Case Studies' }]} />
					<div className={footerStyles.socialLinks}>
						<Menu title='Social Sharing' links={[{ link: '/a', text: <FiFacebook /> }, { link: '/a', text: <FiTwitter /> }, { link: '/a', text: <FiLinkedin /> }]} />
					</div>
					<div className={footerStyles.footerLogo}>
						<Image src='/svg/axl-logo.svg' alt='Axelerant Logo' width={134} height={100} className={footerStyles.footerLogo}></Image>
					</div>
				</div>
			</div>
			<div className={footerStyles.footerSecondary}>
				<p>&copy; 2020 Axelerant. All Rights Reserved.</p>
			</div>
		</footer>
		);
}
export default Footer;
