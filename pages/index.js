import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const Home = () => {
	return (
		<>
			<Head>
				<title>I love Baseball "MANGE"</title>
			</Head>
			<div className="page-container">
				<Toolbar />
				<div className={styles.main}>
					<h1>I love Baseball MANGE!</h1>
					<h2>I highly recommend you the following two Baseball MANGE!</h2>
					<div className={styles.employeeOfTheMonth}>
						<div>
							<h3>Touch</h3>
							<img src='https://cdn.myanimelist.net//images//manga//5//84777.jpg' />
						</div>
						<div>
							<h3>Dokaben</h3>
							<img src='https://cdn.myanimelist.net//images//manga//2//136961.jpg?s=0c8f54c9e38e3032b192ed2a501acfbe' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Home;
