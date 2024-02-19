import React, { useEffect } from 'react';

export const ListMovies = ({listState, setListState}) => {
    
    useEffect(()=>{
        console.log('componente cargado');
        getMovies();
    },[]);

    const getMovies=()=>{
        let movies = JSON.parse(localStorage.getItem('movies'));
        setListState(movies);   
        return movies;
    }
    
    const deleteMovie = (id)=>{
        let movie_strored = getMovies();
        let newArrayMovies = movie_strored.filter(movie => movie.id !== parseInt(id)); 
        setListState(newArrayMovies);
        localStorage.setItem('movies',JSON.stringify(newArrayMovies));
    
    };

  return (
      <>
      {listState != null ?
      listState.map(movie=>{
        return(
            <article key={movie.id} className="peli-item">
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>
                <p className="id_movie">{movie.id}</p>

                <button className="edit">Editar</button>
                <button className="delete" onClick={()=> deleteMovie(movie.id) }>Delete</button>
            </article>);
      }):
      <h1>No files</h1>}
      </>
    )
}

