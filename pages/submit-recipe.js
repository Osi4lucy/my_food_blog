import styles from '../styles/SubmitRecipe.module.css';
import Link from 'next/link';

const SubmitRecipe = () => {
	return (
		<div className={styles.submit}>
			<div className={styles.content}>
				<h1 data-text='Submit a recipe'>Submit a recipe</h1>
				<h3> Do you have a good recipe and want to share it with the world?</h3>
				<p> Contact us today by sending an email in the format below</p>
				<ul>
					<li>Full names</li>
					<li>Name of recipe</li>
					<li>Number of servings</li>
					<li>Preparation time</li>
					<li>Difficulty level</li>
					<li>A brief description and</li>
					<li>A picture of yourself (optional)</li>
				</ul>
				<h4>Email: osi4lucy@gmail.com</h4>
				<div className={styles.btn}>
					<Link href='/'>
						<a>Go Back Home</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubmitRecipe;
