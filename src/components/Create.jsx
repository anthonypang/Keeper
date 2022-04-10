import React from 'react'

const Create = ({ setNewNote, newNote, setNotes, notes }) => {

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


    return (
        <div>
            <form>
                <input onChange={handleOnChange} name='title' placeholder='Title' value={newNote.title} />
                <textarea onChange={handleOnChange} name='content' placeholder='Note' value={newNote.content} />
                <button onClick={handleSubmit} type='submit'>+</button>
            </form>
        </div>
    )
}

export default Create