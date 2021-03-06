import Head from 'next/head';
import React from 'react'
import {useState, useEffect} from 'react';
import {Header} from '../components/header';
import {Footer} from "../components/footer";
import {MangaCard} from "../components/MangaCard";

export const Touch = () => {
	const [topTouch, SetTouch] = useState([]);

	const GetTouch = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/search/manga?q=touch&page=1&limit=2')
			.then(res => res.json());
		SetTouch(temp.results.slice(1, 2));
	}

	useEffect(() => {
		GetTouch();
	}, []);

	return (
		<>
			<div className="page-container">
				<Header/>
				<aside>
					<nav>
						{topTouch.map(manga => (
							<MangaCard
								manga={manga}
								key={manga.mal_id}/>
						))}
					</nav>
				</aside>
				<div className="video">
					<h3>This is a Main theme song!<br/>Check it out!</h3>
				<iframe
					width="380"
					height="220"
					src="https://www.youtube.com/embed/Bm1n0zF0yEk"
					scrolling="no"
					frameBorder="0">
				</iframe>
				</div>
			</div>
			<Footer/>
		</>
	);
};
export default Touch;