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
            }
        )
    }

    const deleteNote = async () => {
        await fetch(
            `http://127.0.0.1:8000/api/notes/${id}/delete/`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
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


    const handleDelete = () => {
        deleteNote()
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
            <div className='grid grid-cols-2 justify-between align-bottom'>
                <Link onClick={handleSubmit} to="/" className='text-orange-700 text-xl font-extrabold py-1 mx-3 grid grid-cols-2 gap-4 justify-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                </Link>
                <Link onClick={handleDelete} className='grid justify-end mx-2' to='/'>
                    <button  className='px-3 text-slate-50 text-bold bg-orange-700 uppercase rounded-lg'>Delete</button>
                </Link>
            </div>
        </div>
    )
}