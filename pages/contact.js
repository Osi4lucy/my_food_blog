import styles from '../styles/Contact.module.css';
import Link from 'next/link';

const Contact = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.content}>
				<h1 data-text='Contact Us'>Contact Us</h1>
				<h3>Got questions for us?</h3>
				<p> Please send us an email or call</p>
				<ul>
					<li>Email: osi4lucy@gmail.com</li>
					<li>Mobile: +45 20 34 03 90</li>
				</ul>

				<div className={styles.btn}>
					<Link href='/'>
						<a>Go Back Home</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
