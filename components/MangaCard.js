import React from 'react';

export const MangaCard = ({manga}) => {
	return (
		<article className="manga-card">
			<a
			  href={manga.url} target="_blank"
			  rel="noreferrer">
				<figure>
					<img
						src={manga.image_url}
						alt=""/>
				</figure>
				<h3>{ manga.title }</h3>
			</a>
		</article>
	);
}