import React from 'react'
import Note from './Note'
import notes from '../notes'

const Notes = () => {
    return (
        notes.map((data, key) => {
            return (
                <>
                    <Note key={key} title={data.title} content={data.content} />
                </>
            )

        })
    )
}

export default Notes