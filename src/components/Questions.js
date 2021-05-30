import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AnswerQuestion from './AnswerQuestion';
import QustionItem from './QustionItem';

class Questions extends Component {
    render() {
        return (

            <div className="col-xs-12 block-center">
                <AnswerQuestion />

                <Tabs>
                    <TabList>
                        <Tab>Unanswered questions</Tab>
                        <Tab>Answered questions</Tab>
                    </TabList>

                    <TabPanel>
                        <ul class="list-group">
                            <QustionItem />
                            <QustionItem />
                            <QustionItem />
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h3>Answered questions</h3>
                    </TabPanel>
                </Tabs>



            </div>
        );
    }
}

export default connect((state) => ({
    store: state.store,
}))(Questions);