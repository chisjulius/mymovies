import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'

const Upcoming_API =  "https://api.themoviedb.org/3/movie/upcoming?&api_key=a87b0d8312b2607eead7733f9b32be5e"
const Search_API  = "https://api.themoviedb.org/3/search/movie?&api_key=a87b0d8312b2607eead7733f9b32be5e&query="
const img_API ="https://image.tmdb.org/t/p/w500" 

const Upcoming =() =>{
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getMovies = (API) => {
        axios.get(API)
        .then(res=>{
            setMovies(res.data.results.slice(0,4))
            console.log(res)
        })
    }


    useEffect(() =>{
        getMovies(Upcoming_API)
    },[])

    const handleChange =(e) =>{
        setSearchTerm(e.target.value)
    }

     const handleSubmit = (e) =>{
        e.preventDefault();

        if(searchTerm){
            getMovies(Search_API + searchTerm);

            setSearchTerm("");
        }
    };


    const setVoteClass = (vote) =>{
        if (vote >= 8){
            return "green"
        } else if (vote >= 6){
              return "purple"
       } else{
              return "red"
       }  
    }




    const movieList = movies.length ?( 
        movies.map(movie=>(
            <div className="col s12 l6">
                <div className="card " key={movie.id}>
                    <div className="card-image">
                        <img className="img" src={img_API + movie.poster_path} alt="movie image"/>
                    </div>
                    <div className="card-content">
                       <p className="title blue-text text-darken-4">Title: {movie.title}</p>
                       <p>Release date: {movie.release_date}</p>
                    </div>
                    <div className="card-action">
                        <Link to="#"  className={setVoteClass(movie.vote_average) + "-text"} >{movie.vote_average}</Link>
                        <Link to={"/" + movie.id} >read more</Link>
                    </div>
                </div>
            </div>
         ) )
    ) :(<div className="col s12">
          <h4 className="center white-text">No movies yet</h4>
       </div>
      )

    return (
        <div className="container movies">
            <div className="row">
                <div className="col s12 l6 xl4 offset-l3 offset-xl4">
                    <form onSubmit={handleSubmit}>
                       <div className="input-field">
                          <input className="white-text" onChange ={handleChange} type="text"  id="search" value={searchTerm}/>
                          <label htmlFor="search">Search movie</label>    
                      </div>
                    </form>
                </div>
                {movieList}
            </div>
        </div>
    )
}

export default Upcoming
  