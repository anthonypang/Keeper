import React from 'react'
import Note from './Note'


const Notes = ({ notes, setNotes }) => {

    function deleteNote(id) {
        setNotes(notes.filter((data, index) => {
            return index !== id;
        }))
    }

    return (
        notes.map((data, key) => {
            return (
                <>
                    <Note key={key} id={key} title={data.title} content={data.content} deleteNote={deleteNote} />
                </>
            )

        })
    )
}

export default Notes