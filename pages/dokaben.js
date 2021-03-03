import Head from 'next/head';
import React from 'react'
import {useState, useEffect} from 'react';
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MangaCard} from "../components/MangaCard";

export const Dokaben = () => {
	// const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	// const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/search/manga?q=dokaben&page=1&limit=5')
			.then(res => res.json());
		SetTopAnime(temp.results);
	}

	// const HandeleSearch = e => {
	// 	e.preventDefault();
	// 	console
	// }

	useEffect(() => {
		GetTopAnime();
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
						{topAnime.map(manga => (
							<MangaCard
								manga={manga}
								key={manga.mal_id}/>
						))}
					</nav>
				</aside>
				<iframe
						width="360"
						height="200"
						src="https://ext.nicovideo.jp/thumb/sm2118588"
						scrolling="no"
						frameBorder="0"><a href="https://www.nicovideo.jp/watch/sm2118588">ドカベン
						OP1 ｢がんばれドカベン｣</a>
				</iframe>
			</div>
			<Footer/>
		</>
	);
};
export default Dokaben;
