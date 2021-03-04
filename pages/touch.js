import Head from 'next/head';
import React from 'react'
import {useState, useEffect} from 'react';
import {Header} from '../components/header';
import {Footer} from "../components/footer";
import {MangaCard} from "../components/MangaCard";
import {ModalArea} from "../components/pop";

export const Touch = () => {
	const [topTouch, SetTouch] = useState([]);

	const GetTouchAnime = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/search/manga?q=touch&page=1&limit=2')
			.then(res => res.json());
		SetTouch(temp.results.slice(1,2));
	}

	useEffect(() => {
		GetTouchAnime();
	}, []);

	return (
		<>
			<Head>
				<title>I love Baseball MANGA!</title>
			</Head>
			<div className="page-container">
				<Header/>
				<aside>
					<nav>
						{topTouch.map(manga => (
							<MangaCard
								manga={manga}
								key={manga.mal_id}/>
						// {topTouch.map(test => (
						// 	<ModalArea
						// 		test={test}
						// 		key={test.mal_id}
						// 		// buttonName="投稿する"
						// 		// props={props}
						// 		// modalBody="入力した内容で投稿しますか？"
						// 		// // message={this.state.message}
						// 		// // color={this.state.color}
						// 	/>
						))}
					</nav>
				</aside>
				<iframe
					width="380"
					height="220"
					src="https://www.youtube.com/embed/Bm1n0zF0yEk"
					scrolling="no"
					frameBorder="0">
				</iframe>
			</div>
			<Footer/>
		</>
	);
};
export default Touch;