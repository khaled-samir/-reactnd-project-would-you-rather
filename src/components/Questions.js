import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QuestionResults from './QuestionResults';
// import AnswerQuestion from './AnswerQuestion';
import QustionItem from './QustionItem';

class Questions extends Component {
    render() {
        const { questions, authedUser, users } = this.props
        return (

            <div className="col-xs-12 block-center">
                {/* <AnswerQuestion /> */}

                <Tabs>
                    <TabList>
                        <Tab>Unanswered questions</Tab>
                        <Tab>Answered questions</Tab>
                    </TabList>

                    <TabPanel>
                        <ul className="list-group">
                            {Object.entries(questions).map(([questionKey, question]) => {
                                let isNotAnswered = true;
                                // console.log(questionKey)
                                Object.entries(users[authedUser].answers).map(([answersID, answers]) => {
                                    // console.log("answersID", answersID)

                                    if (answersID === questionKey) {
                                        isNotAnswered = false
                                    }

                                })

                                if (isNotAnswered) {
                                    return <QustionItem key={question.id} question={question} />
                                }
                            })}

                        </ul>
                    </TabPanel>
                    <TabPanel>
                        {Object.entries(questions).map(([questionKey, question]) => {
                            let isAnswered = false;
                            // console.log(questionKey)
                            Object.entries(users[authedUser].answers).map(([answersID, answers]) => {
                                // console.log("answersID", answersID)

                                if (answersID === questionKey) {
                                    isAnswered = true
                                }

                            })

                            if (isAnswered) {
                                return <QuestionResults key={question.id} question={question} />
                            }
                        })}

                    </TabPanel>
                </Tabs>



            </div>
        );
    }
}

export default connect((state) => ({
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users,
}))(Questions);