import React from "react"
import Header from "../components/header"
import Menu from "../components/Menu"


const generalQuestions = [
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
];

const academicQuestions = [
  [
    <p>Visa regulation should be relaxed for overseas students.</p>,
    <p>Do you agree or disagree?</p>
  ],
  [
    <p>In many countries people are concerned about the number of children who are overweight.</p>,
    <p>What do you think are the causes of this?</p>,
    <p>What solutions can you suggest?</p>
  ]
]

class WritingTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 0,
      academic: false
    };  
    
    
  }
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_8fETfQs8sqEWTlJsyKWnzKH4');
  }
  handleTestType = () => {
    this.setState((prevState) =>{ return {academic: !prevState.academic, question: 0}});
  }
  
  handleQuestionChange = () => {
    let currentQuestionSet = this.state.academic ? academicQuestions : generalQuestions;
    this.setState((state) => {
     return { question: state.question === currentQuestionSet.length - 1 ? 0 : state.question + 1 }
            })
  }

  handleCheckout = (event) => {
    event.preventDefault();
    this.stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        {sku: 'sku_Ev6rjY3JNs3MgT', quantity: 1}
      ],
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/canceled',
    }).then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
  }
  render() {
    let questions = this.state.academic ? academicQuestions : generalQuestions;
    return (
      <div>
        <Header siteTitle="IELTS WIN" />
        <Menu />
        <div className="writing-page--body">
          <div className="test-container">
          <div className="test-nav">
          <button onClick={this.handleQuestionChange}>New Question</button>
          <button onClick={this.handleTestType}>{this.state.academic ? "General Training" : "Academic"}</button>
          </div>
            <div className="test-question" >
            {questions[this.state.question]}
            </div>
            <div className="answer-container">
              <textarea className="text-area__writing-test" />
              <form onSubmit={(event) => {this.handleCheckout(event)}}>
                <button type="submit">Submit your Writing</button>

              </form>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WritingTest
