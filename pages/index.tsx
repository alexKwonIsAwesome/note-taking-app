import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrimaryButton } from '../src/components/button'
import Card from '../src/components/card'
import CreateNoteModal from '../src/components/create-note'
import ManageNote from '../src/components/manage-note'

import React, { useState } from 'react'
import CardItem from '../src/components/card-item'
import CardList from '../src/components/card-list'

const initialNotes: Note[] = [
  {
    title: 'Walk the dog',
    content: 'Walk the dog',
    complete: false,
  },
  {
    title: 'Write app',
    content: 'Write app',
    complete: true,
  },
]

const Home = () => {
  const [notes, setNotes] = useState(initialNotes)

  const toggleNote = (selectedNote: Note) => {
    const newNotes = notes.map((note) => {
      if (note === selectedNote) {
        return {
          ...note,
          complete: !note.complete,
        }
      }
      return note
    })
    setNotes(newNotes)
  }

  const addNote: AddNoteTitle = (title: string, content: string) => {
    const newNote = { title, content, complete: false }
    setNotes([...notes, newNote])
  }

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-semibold	leading-7	text-xl">Note Taking</h1>
          {/* <button onClick={() => setShow(true)}>Create</button> */}
        </div>
        {/* <button onClick={() => setManage(true)}>Manage</button>
        <ManageNote manage={manage} setManage={setManage} /> */}
        <div className="grid grid-cols-2 mt-4 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {/* <Card /> */}
          {/* <CardItem note={notes[0]} />
          <CardItem note={notes[1]} /> */}
          <CardList notes={notes} toggleNote={toggleNote} />
        </div>
        {/* <CreateNoteModal show={show} setShow={setShow}></CreateNoteModal> */}
        <CreateNoteModal
          addNoteTitle={addNote}
          note={{
            title: '',
            content: '',
            complete: false,
          }}
          closeNote={function (selectedNote: Note): void {
            throw new Error('Function not implemented.')
          }}
          addNoteContent={function (content: string): void {}}
        />
      </div>
    </>
  )
}

export default Home
