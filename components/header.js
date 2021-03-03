import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.scss';

export const Header = () => {
	const router = useRouter();

	return (
		<div className="page-container">
			<h1>Love Baseball MANGA!</h1>
		<div className={styles.main}>
			<div onClick={() => router.push('/')}>Home</div>
			<div onClick={() => router.push('/touch')}>Touch</div>
			<div onClick={() => router.push('/dokaben')}>Dokaben</div>
		</div>
		</div>
	);
};