const Note = ({ note }) => {

    return (
      <div className="p-4 shadow-md rounded-xl border-gray-100 border-2">
        <h1 className="font-bold text-lg">{note.name}</h1>
        <p>{note.content}</p>
      </div>
    )
  }
  export default Note