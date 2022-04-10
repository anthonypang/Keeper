import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import Create from './Create'


function App() {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })



    return (
        <>
            <Header />
            <Create setNewNote={setNewNote} newNote={newNote} setNotes={setNotes} notes={notes} />
            <Notes notes={notes} setNotes={setNotes} />
            <Footer />
        </>
    )
}

export default App;