import styles from '../styles/404.module.css';
import Link from 'next/link';

const PageNotFound = () => {
	return (
		<div className={styles.pageNotFound}>
			<div className={styles.content}>
				<h1 data-text='404'>404</h1>
				<h3> Opppps!, sorry this page does not exist</h3>
				<h3>The link you clicked might be corrupted, or the page may have been removed.</h3>
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
