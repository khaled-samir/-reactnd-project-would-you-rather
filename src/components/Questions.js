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
                            {Object.entries(questions).sort((a, b) => {
                                const scoreB = b[1].timestamp
                                const scoreA = a[1].timestamp
                                return scoreB - scoreA
                            }).map(([questionKey, question]) => {
                                let isNotAnswered = true;
                                // console.log(questionKey)
                                Object.entries(users[authedUser].answers).map(([answersID, answers]) => {
                                    // console.log("answersID", answersID)

                                    if (answersID === questionKey) {
                                        isNotAnswered = false
                                    }

                                })

                                if (isNotAnswered) {
                                    return <QustionItem key={question.id} isNotAnswered={isNotAnswered} question={question} />
                                }
                            })}

                        </ul>
                    </TabPanel>
                    <TabPanel>
                        {Object.entries(questions).sort((a, b) => {
                            const scoreB = b[1].timestamp
                            const scoreA = a[1].timestamp

                            return scoreB - scoreA
                        }).map(([questionKey, question]) => {
                            let isAnswered = false;
                            // console.log(questionKey)
                            Object.entries(users[authedUser].answers).map(([answersID, answers]) => {
                                // console.log("answersID", answersID)

                                if (answersID === questionKey) {
                                    isAnswered = true
                                }

                            })

                            if (isAnswered) {
                                return <QustionItem key={question.id} isAnswered={isAnswered} question={question} />
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