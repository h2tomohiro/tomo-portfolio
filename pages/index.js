import Head from 'next/head';
import styles from '../styles/index.module.scss';
import {useRouter} from 'next/router';
import {Header} from "../components/header";
import {Footer} from "../components/footer";

export const Home = () => {
	const router = useRouter();
	return (
		<>
			<div className="page-container">
				<Header/>
				<div className={styles.main}>
					<h4 className={styles.main}>I highly recommend you the following two Baseball MANGA!</h4>
					<div className="boxContainer">
						<div className="box">
							<div onClick={() => router.push('/touch')}>
								<img src='https://cdn.myanimelist.net//images//manga//5//84777.jpg'/>
							</div>
						</div>
						<div className="box">
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
