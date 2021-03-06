import React from 'react';
import {CardModal} from "./CardModal";

export const MangaCard = ({manga}) => {
	return (
		<article className="manga-card">
			<h3>{ manga.title }</h3>
			<a
			  href={manga.url} target="_blank"
			  rel="noreferrer">
				<figure>
					<img
						src={manga.image_url}
						key={manga.mal_id }
						alt=""/>
				</figure>
			</a>
			<CardModal
				test={manga}
			/>
		</article>
);
}