import NoteList from "./notelist";
import useFetch from "./useFetch";

const Home = () => {
    const {data: notes, isloading, error} = useFetch('http://localhost:4500/notes')

    

    return ( 
        <div className="Home">
            {error && <div> {error} </div>}
            {isloading && <div> Loading.... </div>}
            {notes && <NoteList notes={notes}/>}
        </div>
     );
}
 
export default Home;