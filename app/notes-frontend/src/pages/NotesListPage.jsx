import React, { useState, useEffect } from 'react'
import { ListItem } from '../components/ListItem';

export const NotesListPage = () => {
  let [notes, setNotes] = useState([]);
  
  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = await response.json()
    console.log('DATA:', data)
    setNotes(data)
  }

  return (
    <div>
      <div>
        {notes.map((note, index) => {
          return <ListItem key={index} note={note} />
        })}
      </div>      
    </div>
  )
}
