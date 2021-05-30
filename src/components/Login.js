import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {

        return (

            <div className="col-xs-12 block-center log-ing">

                <h3>Welcome to the Would You Rather App!</h3>

                <h3>Please sign in to continue</h3>

                <label for="login">sign in</label>
                <div className="input-group">
                    <select className="form-control" id="login">
                        <option value="1">test testddddddd</option>
                        <option value="2">test test</option>
                        <option value="3">test test</option>
                        <option value="4">test test</option>
                    </select>
                    <button className="btn btn-group-justified btn-primary" onSubmit >Sign in!</button>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    store: state.store,
}))(Login);