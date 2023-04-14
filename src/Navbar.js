import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>bitácora</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/create">NEW NOTE</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;