import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddQuestions extends Component {
    render() {
        return (

            <div className="col-xs-12 block-center log-ing">

                <h3>Add question</h3>

                <div className="input-group">
                    <label>asddasdadad
              <input className="form-control" type="text" />
                    </label>
                    <label>
                        or
              <input className="form-control" type="text" />
                    </label>

                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    store: state.store,
}))(AddQuestions);