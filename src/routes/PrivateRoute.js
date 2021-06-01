import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

import { useHistory } from "react-router-dom";



function PrivateRoute(props) {
    let history = useHistory();
    let currentLocation = history.location.pathname
    // debugger
    if (props.authedUser === '') {
        // return <Redirect to="/" />
        return <Redirect to={{
            pathname: '/',
            state: { referrer: currentLocation }
        }} />
    }
    return <Route {...props} />

}

export default connect((state) => ({
    authedUser: state.authedUser
}))(PrivateRoute);
