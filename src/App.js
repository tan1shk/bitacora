import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import NoteDetails from './NoteDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="/create">
            <Create/>
          </Route>
          <Route path ="/notes/:id">
            <NoteDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;