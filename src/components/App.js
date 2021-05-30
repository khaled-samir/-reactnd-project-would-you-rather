// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import AddQuestions from './AddQuestions';
import Header from './Header';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Questions from './Questions';

function App() {
  return (
    <div className="container text-center">
      <Header />

      <div className="row">
        <Switch>
          <Route exact path="/">
            <Login />
            <Questions />
          </Route>
          {/* <Route path="/questions">
              <Questions />
          </Route> */}
          <Route path="/add">
            <AddQuestions />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
