import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const NotePage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        getNote()
    }, [id])

    const getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`)
        let data = await response.json()
        return setNote(data)
    }

    return (
        <div>
            <p>{note?.title}</p>            
        </div>
    )
}