import styles from '../styles/404.module.css';
import Link from 'next/link';

const PageNotFound = () => {
	return (
		<div className={styles.pageNotFound}>
			<div className={styles.content}>
				<h1 data-text='404'>404</h1>
				<h3> Opppps!, the page you are looking for is not available</h3>
				<div className={styles.btn}>
					<Link href='/'>
						<a>Go Back Home</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
