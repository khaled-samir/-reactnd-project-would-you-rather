import { connect } from "react-redux";
import { Redirect, Route } from "react-router";



function PrivateRoute(props) {
    if (props.authedUser === '') {
        return <Redirect to="/" />
    }
    return <Route {...props} />

}

export default connect((state) => ({
    authedUser: state.authedUser
}))(PrivateRoute);
