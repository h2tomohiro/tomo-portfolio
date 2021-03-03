import Head from 'next/head';
import {Header} from '../components/header';
import {Footer} from "../components/footer";

export const Touch = () => {
	return (
		<>
			<Head>
				<title>I love Baseball MANGA!</title>
			</Head>
			<div className="page-container">
				<Header/>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Bm1n0zF0yEk" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
				</div>
			</div>
			<Footer/>
		</>
	);
};
export default Touch;