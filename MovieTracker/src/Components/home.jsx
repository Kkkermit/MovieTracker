import React, { useEffect, useState } from 'react';
import '../Styles/home.css';
import config from '../Config/home.json';
import Loading from './loadingScreen';
import image from '../Assets/movie.svg';

const API_KEY = '07dc5aaafa310b753718b1fb94409164'

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);

    const fetchMovieData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(name)}`);
            if (!response.ok) {
                throw new Error('Movie not found.');
            }
                const data = await response.json();
                setMovieData(data.results[0]);
                setError(null)
                } catch (error) {
                setMovieData(null)
                setError('Movie not found.')
            }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetchMovieData();
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    return (
        <>
        {isLoading ? <Loading /> :
        <div className='container'>
            <div className='header-container'>
                <header className='header'><span id='dash'>-</span> <span id='m'>M</span><span id='o'>o</span><span id='v'>v</span><span id='i'>i</span><span id='e'>e</span> <span id='t'>T</span><span id='r'>r</span><span id='a'>a</span><span id='c'>c</span><span id='k'>k</span><span id='e2'>e</span><span id='r2'>r</span> <span id='dash'>-</span></header>
            </div>
            <div className='body-container'>
                <img className='logo' src={image} alt="MovieTracker" />
            </div>

            <div className="movie-app">
            <form className="movie-app-form" onSubmit={handleFormSubmit}>
                <input className="movie-input"
                type="text"
                placeholder="Enter Film Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button className="movie-app-btn" type="submit">Find Movie</button>
            </form>
            {error && <div className="movie-app-error">{error}</div>}
            {movieData && (
                <div className="movie-app-info">
                    <div id='centre'>
                    <header className='movie-title'>- Movie Title: {movieData.title} -</header>
                    </div>
                    <img className="movie-app-poster" src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster" />
                    <div id='center'>
                    <p id="para-movie-app"><pre>Release Date <span id="change-p-text-movie">{"\n"}- {movieData.release_date} -</span></pre></p>
                    <p id="para-movie-app"><pre>Popularity <span id="change-p-text-movie">{"\n"}- {movieData.popularity} /100 -</span></pre></p>
                    <p id="para-movie-app"><pre>Movie Language <span id="change-p-text-movie">{"\n"}- {movieData.original_language} -</span></pre></p>
                    <p id="para-movie-app"><pre>Average Vote <span id="change-p-text-movie">{"\n"}- {movieData.vote_average} /10 -</span></pre></p>
                    <p id="para-movie-app"><pre>Vote Count <span id="change-p-text-movie">{"\n"}- {movieData.vote_count} -</span></pre></p>
                    </div>
                    <img className="movie-app-backdrop" src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} about="backdrop" />
                </div>
            )}
        </div>
        </div>
        }
        </>
    )
}

export default Home;
