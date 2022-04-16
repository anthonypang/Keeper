import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const Create = ({ setNewNote, newNote, setNotes, notes }) => {


    const [expanded, setExpanded] = useState(false)


    function handleOnChange(e) {
        let { name, value } = e.target;
        setNewNote({
            ...newNote,
            [name]: value
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        setNotes([...notes, newNote])
        setNewNote({
            title: "",
            content: ""
        })
    }

    function handleExpanded() {
        setExpanded(true)
    }


    return (
        <div>
            <form className='create-note'>
                {expanded && <input onChange={handleOnChange} name='title' placeholder='Title' value={newNote.title} />}
                <textarea onClick={handleExpanded} onChange={handleOnChange} name='content' placeholder='Take Note' value={newNote.content} rows={expanded ? 3 : 1} />
                <Zoom in={expanded}><Fab onClick={handleSubmit} type='submit'><AddIcon /></Fab></Zoom>
            </form>
        </div>
    )
}

export default Create