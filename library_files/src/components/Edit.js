import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const component_title = "Original movie title";

    const saveEdition = (e,id)=>{
        e.preventDefault();
        // conseguir el target del evento
        let target = e.target;
        let savedMovies = getMovies();
        let indexArray = savedMovies.findIndex(movie => movie.id === id);

        let movie_updated = {
            id,
            title:target.title.value,
            description:target.description.value
        };

        savedMovies[indexArray] = movie_updated;
        localStorage.setItem('movies',JSON.stringify(savedMovies));
        setListState(savedMovies);
        setEdit(0);
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{component_title}</h3>
        <form onSubmit={e => saveEdition(e, movie.id)}>
            <input
                className='title_edited'
                type='text'
                name='title'
                defaultValue={movie.title} 
            />
            <textarea
                className='edited_description'
                name='description'
                defaultValue={movie.description} 
                />
            <button type='submit' className='edit' value='updated'> Complete</button>
        </form>
    </div>
  )
}
