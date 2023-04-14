import { Link } from "react-router-dom";

const NoteList = ({notes, title}) => {

    return ( 
        <div className="note-list">
            <h2>{title}</h2>
            {notes.map((note) => (
                <div className="note-preview" key={note.id}>
                    <Link to = {`/notes/${note.id}`}>
                        <h2>{note.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default NoteList;