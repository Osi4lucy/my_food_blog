import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<h2> Follow Us</h2>
			<ul className={styles.social_icons}>
				<a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
					<FaFacebook />
				</a>

				<a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
					<FaTwitter />
				</a>

				<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
					<FaInstagram />
				</a>
			</ul>
			<ul className={styles.menu}>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/submit-recipe'>
					<a>Submit a Recipe</a>
				</Link>
				<Link href='/contact'>
					<a>Contact Us</a>
				</Link>
			</ul>
			<p>Food Blog App | 2022</p>
		</div>
	);
};

export default Footer;
