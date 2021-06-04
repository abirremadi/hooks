import React from 'react'
import MovieCard from './MovieCard'
import './movieList.css';


export const MovieList = ({movieList}) => {
    return (
        <div className='Movie'>
            {movieList.map(movie=> 
                <MovieCard movieCard={movie} key={movie.id}></MovieCard>)};
        </div>
    )
}
