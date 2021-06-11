import React from 'react'
import MovieCard from './MovieCard'
import './movieList.css';
import {Link} from 'react-router-dom'


export const MovieList = ({movieList}) => {
    return (
        <div className='Movie'>
            {movieList.map(movie=> 
               <Link to ={`/description/${movie.id}`}> <MovieCard movieCard={movie} key={movie.id}></MovieCard></Link> )};
        </div>
    )
}
