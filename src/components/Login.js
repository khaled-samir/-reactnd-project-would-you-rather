import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
    componentDidMount() {

    }

    render() {
        const { store, state, dispatch } = this.props;

        return (

            <div className="col-xs-offset-3 col-xs-6 block-center log-ing">

                <h3>Welcome to the Would You Rather App!</h3>

                <h3>Please sign in to continue</h3>

                <label htmlFor="login">sign in</label>
                <div className="input-group width-100">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const user = e.target[0].value
                        // alert(user)
                        dispatch(setAuthedUser(user))
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
}

export default connect((state) => ({
    state: state,
    store: state.store,
    dispatch: state.dispatch,
}))(Login);