import { useEffect, useState } from "react"
import Header from "./components/Header"
import Note from "./components/Note"
import noteService from './services/notesDB'

function App() {
  const [noteName, setNoteName] = useState('')
  const [noteContent, setNoteContent] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll()
    .then(initNotes => {setNotes(initNotes)})
  }, [])

  const handleNoteChange = (e) => {
    const noteText = e.target.value
    setNoteContent(noteText)
  }

  const handleNameChange = (e) => {
    const nameText = e.target.value
    setNoteName(nameText)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: noteName,
      content: noteContent
    }
    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNoteName('')
      setNoteContent('')
    })
    

  }

  return (
    <>
    <Header />
    <div className="flex justify-center">
      <form action="" className="px-12 py-6 flex flex-col gap-4 xl:w-1/2 md:w-4/5 xsm:w-full">
        <h1 className="font-bold text-2xl">Write a note!</h1>
        <p className="text-gray-500 font-bold">ps: dont spam notes pls</p>
        <input className="border-gray-300 border-2 rounded-xl px-2 py-2" maxLength={24} placeholder="Enter name..." required value={noteName} onChange={handleNameChange}/>
        <textarea className="border-gray-300 border-2 rounded-xl px-2 py-2 h-32" placeholder="Enter note content..." maxLength={256} value={noteContent} onChange={handleNoteChange} required></textarea>
        <button type="submit" className="border-gray-300 border-2 p-4 font-bold rounded-xl shadow-md hover:bg-gray-100 transition-all duration-200" onClick={addNote}>Send Note</button>
      </form>
    </div>

    <div className="p-12 grid xl:grid-cols-4 md:grid-cols-2 xsm:grid-cols-1 gap-4">
      {notes.map(note => (
        <Note key={note.id} note={note}/>
      ))}
    </div>
    </>
  )
}
export default App;
