import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <header className="App-header">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Would You Rather</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li> */}
                                {/* <li><Link to="/questions">Questions</Link></li> */}
                                <li><Link to="/add">Add new poll</Link></li>
                                <li><Link to="/leaderboard">Leader board</Link></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><img src="https://via.placeholder.com/20x20" alt="..." className="img-circle" /> UserName</a></li>
                                <li><a href="#">Log out</a></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default connect((state) => ({
    store: state.store,
}))(Header);