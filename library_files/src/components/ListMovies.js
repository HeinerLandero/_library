import React, { useEffect, useState } from 'react';
import { Edit } from './Edit';

export const ListMovies = ({listState, setListState}) => {
    const [edit, setEdit] = useState(0);
    
    const getMovies=()=>{
        let movies = JSON.parse(localStorage.getItem('movies'));
        setListState(movies);   
        console.log(movies);
        return movies;
    }
    
        useEffect(()=>{
            console.log('componente cargado');
            getMovies()
        },[]);
    
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

                <button className="edit" onClick={()=>setEdit(movie.id)}>Edit</button>
                <button className="delete" onClick={()=> deleteMovie(movie.id) }>Delete</button>
                {edit === movie.id &&(
                    <Edit/>
                )}
            </article>);
      }):
      <h1>No files</h1>}
      </>
    )
}

