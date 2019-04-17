import React from "react"
import Header from "../components/header"
import Menu from "../components/Menu"

const questions = [
  [
    <p>
      Car ownership has increased so rapidly over the past thirty years that
      many cities in the world have become one big traffic jam.
    </p>,
    <p>How true do you think this statement is?</p>,
    <p>
      What measures can governments take to discourage people from using their
      cars?
    </p>,
  ],
  [
    <p>Government investment in the arts, such as music and theatre, is a waste of money. Governments must invest this money in public services instead.</p>,
    <p>To what extent do you agree with this statement?</p>
  ],
  [
    <p>Some people believe the aim of university education is to help graduates get better jobs. Others believe there are much wider benefits of university education for both individuals and society.</p>,
    <p>Discuss both views and give your opinion.</p>
  ]
]

class WritingTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 0
    };

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }
  
  handleQuestionChange(){
    this.setState((state) => {
     return { question: state.question === questions.length - 1 ? 0 : state.question + 1 }
            })
  }
  render() {
    return (
      <div>
        <Header siteTitle="IELTS WIN" />
        <Menu />
        <div className="writing-page--body">
          <div className="test-container">
          <button onClick={this.handleQuestionChange}>change question</button>
            <div className="test-question" >
            {questions[this.state.question]}
            </div>
            <div className="answer-container">
              <textarea className="text-area__writing-test" />
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WritingTest
