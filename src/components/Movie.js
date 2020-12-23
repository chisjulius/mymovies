import React, { useState, useEffect } from 'react'
import axios from 'axios'


const img_API ="https://image.tmdb.org/t/p/w500" 


const Movie =(props) =>{
    const [movie, setMovie] = useState(null)

    useEffect(() =>{
        let id = props.match.params.movie_id
        axios.get(`https://api.themoviedb.org/3/movie/${id}?&api_key=a87b0d8312b2607eead7733f9b32be5e`)
        .then(res =>{
            setMovie(res.data)
            console.log(res)
        })
    })

     const movieToRender = movie ?(
         <div className="col s12 l10 offset-l1">
           <div className="card">
               <div className="card-image">
                   <img src={img_API + movie.poster_path} alt="poster path"/>
               </div>
              <div className="card-content">
                 <h5 className="title indigo-text">{movie.title}</h5>
                 <p>{movie.overview}</p>
              </div>
         </div>
         </div>

     ) :(<div className="center">Loading....</div>)

    return (
        <div className="container movies">
            <div className="row">
                {movieToRender}
            </div>
        </div>
    )
}

export default Movie
