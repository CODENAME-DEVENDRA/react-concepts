import React from 'react'

function MovieCard({ movie }) {
    return (
        <div key={movie.id}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
            <p>{movie.original_title}</p>
        </div>
    )
}

export default MovieCard