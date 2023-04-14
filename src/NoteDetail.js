import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const NoteDetails = () => {
    const {id} = useParams();
    const {data: note, error, isloading} = useFetch('http://localhost:4500/notes/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:4500/notes/' + note.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="note-details">
            {error && <div> {error} </div>}
            {isloading && <div> Loading.... </div>}
            {note && (
                <article>
                    <h2>{note.title}</h2>
                    <div>{note.body}</div>
                    <button onClick={handleClick}>DELETE</button>
                </article>
            )}
        </div>
     );
}
 
export default NoteDetails;