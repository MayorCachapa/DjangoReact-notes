import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({note}) => {
  return (
    <Link to={`note/${note.id}`}> 
      <div className='notes-list-item'>
        <h3>{note.title}</h3>
      </div>
    </Link>
  )
}
