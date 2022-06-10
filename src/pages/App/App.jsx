import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MovieIndex from '../MovieIndex/MovieIndex';
import ActorIndex from '../ActorIndex/ActorIndex';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import MovieDetail from '../MovieIndex/MovieDetail'
import {movies} from "../../data.js";

function App() {
  const [user, setUser] = useState(null);
  function addUser(name){
    setUser(name)
  }
  return (
    <div className="App">
      {
        user ?
          <>
            <h3>Welcome {user.name}</h3>
            <NavBar/>
            <Switch>
              <Route path="/movies">
                <MovieIndex movies={movies}/>
              </Route>
              <Route path="/actors">
                <ActorIndex movies={movies}/>
              </Route>
              <Route path="/movie/:id">
                <MovieDetail movies={movies}/>
              </Route>
              <Redirect to="/movies" />
            </Switch>
          </>
        :
          <LoginPage addUser={addUser}/>
      }
    </div>
  );
}

export default App;
