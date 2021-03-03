import Head from 'next/head';
import {Header} from "../components/header";
import {Footer} from "../components/footer";

export const Dokaben = () => {
	return (
		<>
			<Head>
				<title>I love Baseball MANGA!</title>
			</Head>

			<div className="page-container">
				<Header/>
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
			<Footer/>
		</>
	);
};
export default Dokaben;
