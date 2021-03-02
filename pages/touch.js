import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';

export const Touch = () => {
	return (
		<>
			<Head>
				<title>I love Baseball MANGA!</title>
			</Head>

			<div className="page-container">
				<Toolbar/>
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/Bm1n0zF0yEk" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
				</div>
			</div>
		</>
	);
};
export default Touch;