import React, { useState } from 'react'

export const UploaderFiles = () => {
  const titleComponent = 'Add Movie';
  const [movieState, setMovieState] = useState({
    title: "",
    description:""
  });
  const {title,description} = movieState;
  const getDataForm = e =>{
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;
    console.table( {title,description});

    let movie = {
      id: new Date().getTime(),
      title,
      description
    };
    setMovieState(movie);
    saveStorage(movie);
    console.log(movieState);
  }
    const saveStorage = movie =>{
      let elements = JSON.parse(localStorage.getItem('movies'));
        if(Array.isArray(elements)){
          elements.push(movie);
        }else{
          elements = [movie];
        }
        localStorage.setItem('movies', JSON.stringify(elements));
        return movie;
  }
  return (
    <>
        <div className="add">
                <h3 className="title">{titleComponent}</h3>
                <strong>
                  {(title && description) && "Has añadido la pelicula " + title + " con exito" }
                </strong>
                <form onSubmit={getDataForm}>
                    <input 
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"/>
                    <textarea id="description" placeholder="Description"></textarea>
                    <input  className='btn_upload' type="submit" id="save" value="Save" />
                </form>
        </div>
    </>
  )
}
