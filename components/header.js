import { useRouter } from 'next/router';
import styles from '../styles/menubar.module.scss';
import Head from "next/head";

export const Header = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Love Baseball "MANGA"</title>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>
			</Head>
		<div className="page-container">
			<h1 className='title'>Love Baseball MANGA!
			</h1>
			<img
				src="../baseball-ball.png"
				alt="Picture of the author"
				width={100}
				height={100}
			/>

		<div className={styles.main}>
			<div onClick={() => router.push('/')}>Home</div>
			<div onClick={() => router.push('/touch')}>Touch</div>
			<div onClick={() => router.push('/dokaben')}>Dokaben</div>
		</div>
		</div>
		</>
	);
};