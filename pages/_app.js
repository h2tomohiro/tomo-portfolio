import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async() => {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json());
    SetTopAnime(temp.top.slice(0,5));
  }

  const HandeleSearch = e => {
    e.preventDefault();
    console
  }

  useEffect(() => {
    GetTopAnime();
  },[]);
  return <Component {...pageProps} />;
}

export default MyApp;
