import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { useHistory } from "react-router-dom";


function Login(props) {
    let history = useHistory();


    const { store, state, dispatch, location } = props;

    return (

        <div className="col-xs-offset-3 col-xs-6 block-center log-ing">

            <h3>Welcome to the Would You Rather App!</h3>

            <h3>Please sign in to continue</h3>

            <label htmlFor="login">sign in</label>
            <div className="input-group width-100">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const user = e.target[0].value

                    dispatch(setAuthedUser(user))
                    let referrer;
                    if (history) {
                        if (history.location === undefined && history.state !== undefined) {
                            referrer = history.state.state.referrer;
                        } else if (history.location.state !== undefined) {

                            referrer = history.location.state.referrer;
                        }
                        if (referrer !== undefined) {
                            history.push(referrer)
                        }
                    }

                }}>

                    <select className="form-control" id="login">
                        {
                            Object.keys(state.users).map((userName) => {
                                const user = state.users[userName]
                                return (
                                    <option value={user.id}
                                        key={user.id}>
                                        {user.name}
                                    </option>)
                            })
                        }

                    </select>
                    <button type="submit" className="btn btn-group-justified btn-primary" >Sign in!</button>
                </form>
            </div>
        </div>
    );

}

export default connect((state) => ({
    state: state,
    store: state.store,
    dispatch: state.dispatch,
}))(Login);