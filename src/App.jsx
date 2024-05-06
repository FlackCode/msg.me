import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  let notes = [
    {
      id: 1,
      name: "test note",
      content: "hi this is a test note"
    },
    {
      id: 2,
      name: "test note",
      content: "hi this is a test note"
    },
    {
      id: 3,
      name: "test note",
      content: "hi this is a test note"
    },
    {
      id: 4,
      name: "test note",
      content: "hi this is a test note"
    }
  ]


  return (
    <>
    <Header />
    <div className="flex justify-center">
      <form action="" className="px-12 py-6 flex flex-col gap-4 xl:w-1/2 md:w-4/5 xsm:w-full">
        <h1 className="font-bold text-2xl">Write a note!</h1>
        <input className="border-gray-300 border-2 rounded-xl px-2 py-2" maxLength={24} placeholder="Enter name..."/>
        <textarea className="border-gray-300 border-2 rounded-xl px-2 py-2 h-32" placeholder="Enter note content..." maxLength={256}></textarea>
        <button type="submit" className="border-gray-300 border-2 p-4 font-bold rounded-xl shadow-md hover:bg-gray-100 transition-all duration-200">Send Note</button>
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
