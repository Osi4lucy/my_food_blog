import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<h2> Follow Us</h2>
			<ul className={styles.social_icons}>
				<Link href='/'>
					<a>
						<FaFacebook />
					</a>
				</Link>
				<Link href='/'>
					<a>
						<FaTwitter />
					</a>
				</Link>
				<Link href='/'>
					<a>
						<FaInstagram />
					</a>
				</Link>
			</ul>
			<ul className={styles.menu}>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/'>
					<a>Submit a Recipe</a>
				</Link>
				<Link href='/'>
					<a>Contact Us</a>
				</Link>
			</ul>
			<p>Food Blog App | 2022</p>
		</div>
	);
};

export default Footer;
