import Head from 'next/head';
import React from 'react'
import {useState, useEffect} from 'react';
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MangaCard} from "../components/MangaCard";

export const Dokaben = () => {
	const [Dokaben, SetDokaben] = useState([]);

	const GetDokaben = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/search/manga?q=dokaben&page=1&limit=5')
			.then(res => res.json());
		SetDokaben(temp.results);
	}

	useEffect(() => {
		GetDokaben();
	}, []);

	return (
		<>
			<div className="page-container">
				<Header/>
				<aside>
					<nav>
						{Dokaben.map(manga => (
							<MangaCard
								manga={manga}
								key={manga.mal_id}/>
						))}
					</nav>
				</aside>
				<div className="video">
					<h3>This is a Main theme song!<br/>Check it out!</h3>
					<iframe
						width="360"
						height="200"
						src="https://ext.nicovideo.jp/thumb/sm2118588"
						scrolling="no"
						frameBorder="0"><a href="https://www.nicovideo.jp/watch/sm2118588">ドカベン
						OP1 ｢がんばれドカベン｣</a>
					</iframe>
				</div>
			</div>
			<Footer/>
		</>
	);
};
export default Dokaben;
