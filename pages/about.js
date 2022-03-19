import styles from '../styles/About.module.css';
import Link from 'next/link';

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.content}>
				<h1 data-text='About'>About</h1>
				<h3>
					{' '}
					This is a food recipe app built with Next.js and content hosted on GraphCMS from
					the backend
				</h3>
				<h3> Part of a final exams submitted to KEA, Copenhagen</h3>
				<div className={styles.btn}>
					<Link href='/'>
						<a>Go Back Home</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
