import React, { useState } from 'react'

export const SearchFiles = ({listState, setListState}) => {
    const title = "Search Engine";
    const text_btn = "Search"; 
    let [search, setSearch] = useState("");

    const searchMovies = (e) =>{
        setSearch(e.target.value);

        let moviesSearched = listState.filter(movie =>{
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        })
        if(search.length <= 1 || moviesSearched <= 0 ){
            moviesSearched = JSON.parse(localStorage.getItem("movies"));
        }
        console.log(moviesSearched);
        setListState(moviesSearched);
    }
  return (
    <>
        <div className="search">
            <h3 className="title">{title}:{search}</h3>
            <form>
                <input  type="text"
                        name="title_search"
                        id="title_search"
                        placeholder="Title search" 
                        autoComplete='off'
                        value={search}
                        onChange={searchMovies}/>

                <button className='btn-search' id="search">{text_btn}</button>
            </form>
        </div>
    </>
  )
}
