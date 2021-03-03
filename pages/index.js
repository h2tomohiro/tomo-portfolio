import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';
import {useRouter} from 'next/router';
import {Header} from "../components/header";
import {Footer} from "../components/footer";

export const Home = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>I love Baseball "MANGA"</title>
			</Head>
			<div className="page-container">
				<Header/>
				<div className={styles.main}>
					<h1>I love Baseball MANGA!</h1>
					<h2>I highly recommend you the following two Baseball MANGA!</h2>
					<div>
						<div>
							<h3>Touch</h3>
							<div onClick={() => router.push('/touch')}>
								<img src='https://cdn.myanimelist.net//images//manga//5//84777.jpg'/>
							</div>
							<h3>Dokaben</h3>
							<div onClick={() => router.push('/dokaben')}>
								<img
									src='https://cdn.myanimelist.net//images//manga//2//136961.jpg?s=0c8f54c9e38e3032b192ed2a501acfbe'/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
};
export default Home;
