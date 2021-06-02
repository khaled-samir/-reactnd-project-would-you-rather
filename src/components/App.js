import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
import AddQuestions from './AddQuestions';
import Header from './Header';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Questions from './Questions';
import PrivateRoute from '../routes/PrivateRoute';
import AnswerQuestion from './AnswerQuestion';
import { handelInitialDataQuestions } from '../actions/questionsActions';
import { handelInitialUsersData } from '../actions/usersActions';
import QuestionResults from './QuestionResults';
import GenericNotFound from './GenericNotFound';
// import { setAuthedUser } from '../actions/authedUser';
// import { handelInitialData } from '../reducers/users';
class App extends Component {

  componentDidMount() {

    const { dispatch } = this.props;
    // // dispatch()
    // function getCookie(cname) {
    //   var name = cname + "=";
    //   var decodedCookie = decodeURIComponent(document.cookie);
    //   var ca = decodedCookie.split(';');
    //   for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //       c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //       return c.substring(name.length, c.length);
    //     }
    //   }
    //   return "";
    // }
    // var cookiesUsername = getCookie("username");
    // // debugger
    // if (cookiesUsername !== "") {
    //   dispatch(setAuthedUser(cookiesUsername))
    // }

    // console.log("questions")
    // console.log(questions)
    //   dispatch(handelInitialData())
    dispatch(handelInitialUsersData())
    dispatch(handelInitialDataQuestions())
  }


  render() {
    // const { store, state, dispatch } = this.props;
    // store.subscribe(() => console.log(store.getState()))
    // console.log("state")
    // console.log(state)
    const { state, dispatch, authedUser } = this.props;
    // const authedUser = state.authedUser
    return (
      <div className="container text-center">
        {authedUser ? <Header /> : ''}


        <div className="row">
          <Switch>
            <Route exact path="/">
              {authedUser ? <Questions /> : <Login />}
            </Route>
            {/* <Route path="/add">
              <AddQuestions />
            </Route> */}

            <PrivateRoute path="/add" component={AddQuestions} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            {/* <PrivateRoute path="/resultsQuestions/:id" component={QuestionResults} /> */}
            <PrivateRoute path="/questions/:id" component={AnswerQuestion} />
            {/* <Redirect from='*' to='/404' /> */}
            {/* <Route component={GenericNotFound} /> */}
            <Route path="/404" component={GenericNotFound} />
            <Redirect to="/404" />
          </Switch>
          {/* <Route exact path="*" component={GenericNotFound} /> */}
          {/* 
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
             */}
        </div>
      </div>
    );
  }
}



export default connect((state) => ({
  dispatch: state.dispatch,
  authedUser: state.authedUser,
}))(App);
