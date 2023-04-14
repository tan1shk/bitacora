import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {title, body, author};
        
        fetch('http://localhost:4500/notes', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        }).then(() => {
            console.log('note');
            history.push('/');
        });
    };

    return ( 
        <div className="create">
            <h2>Add a new note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Note body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button>ADD NOTE</button>
            </form>
        </div>
     );
}
 
export default Create;