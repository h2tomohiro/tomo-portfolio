import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';

export const Dokaben = () => {
	return (
		<>
			<Head>
				<title>I love Baseball MANGA!</title>
			</Head>

			<div className="page-container">
				<Toolbar/>
				<div>
					<iframe
						width="312"
						height="176"
						src="https://ext.nicovideo.jp/thumb/sm2118588"
						scrolling="no"
						frameBorder="0"><a href="https://www.nicovideo.jp/watch/sm2118588">ドカベン
						OP1 ｢がんばれドカベン｣</a></iframe>
				</div>
			</div>
		</>
	);
};
export default Dokaben;
