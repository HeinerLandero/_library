import React from 'react'

export const SearchFiles = () => {
    const title = "Search Engine";
    const text_btn = "Search"; 
    const getNameMovie = e =>{
        e.preventDefault();
        alert('esto es una prueba')
    };
  return (
    <>
        <div className="search">
            <h3 className="title">{title}</h3>
            <form onSubmit={getNameMovie}>
                <input  type="text"
                        name="title_search"
                        id="title_search"
                        placeholder="Title search" />
                <button className='btn-search' id="search">{text_btn}</button>
            </form>
        </div>
    </>
  )
}
