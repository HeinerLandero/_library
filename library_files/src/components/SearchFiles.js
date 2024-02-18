import React from 'react'

export const SearchFiles = () => {
    const title = "Search Engine";
    const text_btn = "Search"; 
    const getDataForm = e =>{
        e.preventDefault();
        alert('esto es una prueba')
    };
  return (
    <>
        <div className="search">
            <h3 className="title">{title}</h3>
            <form onSubmit={getDataForm}>
                <input  type="text"
                        name="title"
                        id="title"
                        placeholder="title" />
                <button className='btn-search' id="search">{text_btn}</button>
            </form>
        </div>
    </>
  )
}
