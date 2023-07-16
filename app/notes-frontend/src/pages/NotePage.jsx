import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

export const NotePage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    
    useEffect(() => {
        getNote()
    }, [id])

    const getNote = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`)
        const data = await response.json()
        return setNote(data)
    }

    const updateNote = async () => {
        await fetch(
            `http://127.0.0.1:8000/api/notes/${id}/update/`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(note)
            })
    }

    const handleCheckboxChange = () => {
        setNote({
            ...note,
            completed: !note.completed
        })
    }

    const handleSubmit = () => {
        updateNote()
    }
    return (
        <div className='note'>
            <div className='flex mx-2 font-bold text-2xl text-orange-500 py-1'>
                <textarea onChange={({target}) => {setNote({...note, 'title': target.value})}} style={{ width: '100%', height: '50px' }} defaultValue={note?.title} ></textarea>
            <div className='flex mx-auto py-5'>
                <h3 className='text-orange-400 font-semibold py-1 mx-2 text-sm flex justify-start align-top'>
                    Completed: {note?.completed ? 'Yes' : 'No'}
                    <input type="checkbox"
                    checked ={note?.completed}
                    onChange={handleCheckboxChange} 
                    />
                </h3>
            </div>
            </div>
            <div>
                <textarea style={{ width: '100%', height: '350px' }} onChange={(e) => {setNote({...note, 'description': e.target.value})}} defaultValue={note?.description}></textarea>            
            </div>
            <div className='flex justify-start align-bottom'>
                <Link onClick={handleSubmit} to="/" className='flex justify-start'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                        <title>chevron-left</title>
                        <path d="M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}