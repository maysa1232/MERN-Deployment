import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import OnePet from './views/OnePet';
import NewPet from './views/NewPet';
import UpdatePet from './views/UpdatePet';

function App() {
  return (
    <div className="App">
      <h1 className="jumbotron">Pet Shelter</h1>
      <Link to="/"><h5>Home</h5></Link>
      <Link to="/new"><h5>Add Pet!</h5></Link>
      <Router>
      <Main path="/"/>
      <OnePet path="/pets/:_id"/>
      <NewPet path="/new"/>
      <UpdatePet path="/pets/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
