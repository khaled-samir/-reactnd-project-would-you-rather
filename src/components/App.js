import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
import AddQuestions from './AddQuestions';
import Header from './Header';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Questions from './Questions';

class App extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="container text-center">
        <Header />

        <div className="row">
          <Switch>
            <Route exact path="/">
              <Login />
              <Questions />
            </Route>
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
}



export default connect((state) => ({
  store: state.store,
}))(App);
