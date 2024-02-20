import React from 'react'

export const Edit = () => {
    const component_title = "Original movie title";
  return (
    <div className='edit_form'>
        <h3 className='title'>{component_title}</h3>
        <form>
            <input
                className='title_edited'
                type='text'
                name='title'
                defaultValue='original title' 
            />
            <textarea
                className='edited_description'
                name='description'
                defaultValue='original description' 
                />
            <button type='submit' className='edit' value='updated'> Complete</button>
        </form>
    </div>
  )
}
