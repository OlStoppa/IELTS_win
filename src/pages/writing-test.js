import React from "react"
import Header from "../components/header"
import Menu from "../components/Menu"
import Footer from "../components/footer"
import writingQuestionImg1 from "../images/IELTS_Writing_Task_1_2.png"
import writingQuestionImg2 from "../images/IELTS_Writing_Task_1_1.png"

const generalQuestions = [
  [
    [
      <p>
        A local magazine editor has asked for readers opinion. Write a letter to
        magazine editor.
      </p>,
      <p>In the letter, you should tell:</p>,
      <ul>
        <li>what made you choose this magazine</li>
        <li>why you like and dislike about it</li>
        <li>what improvements you want to see</li>
      </ul>,
    ],
    [
      <p>
        A local magazine editor has asked for readers opinion. Write a letter to
        magazine editor.
      </p>,
      <p>In the letter, you should tell:</p>,
      <ul>
        <li>what made you choose this magazine</li>
        <li>why you like and dislike about it</li>
        <li>what improvements you want to see</li>
      </ul>,
    ],
    [
      <p>
        A local magazine editor has asked for readers opinion. Write a letter to
        magazine editor.
      </p>,
      <p>In the letter, you should tell:</p>,
      <ul>
        <li>what made you choose this magazine</li>
        <li>why you like and dislike about it</li>
        <li>what improvements you want to see</li>
      </ul>,
    ],
  ],
  [
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
      <p>
        Government investment in the arts, such as music and theatre, is a waste
        of money. Governments must invest this money in public services instead.
      </p>,
      <p>To what extent do you agree with this statement?</p>,
    ],
    [
      <p>
        Some people believe the aim of university education is to help graduates
        get better jobs. Others believe there are much wider benefits of
        university education for both individuals and society.
      </p>,
      <p>Discuss both views and give your opinion.</p>,
    ],
  ],
]

const academicQuestions = [
  [
    [
      <p>
        The diagram below shows the number of landline telephones per 1000
        people in different countries over a five-year period.
      </p>,
      <p>
        Write a report for a university lecturer describing the information
        shown below.
      </p>,
      <p>Write at least 150 words.</p>,
      <img src={writingQuestionImg1} />,
    ],
    [
      <p>
        The diagram below shows the number of houses built per year in two
        cities, Derby and Nottingham, Between 2000 and 2009.
      </p>,
      <p>
        Write a report for a university lecturer describing the information
        shown below.
      </p>,
      <p>Write at least 150 words.</p>,
      <img src={writingQuestionImg2} />,
    ],
  ],
  [
    [
      <p>Visa regulation should be relaxed for overseas students.</p>,
      <p>Do you agree or disagree?</p>,
    ],
    [
      <p>
        In many countries people are concerned about the number of children who
        are overweight.
      </p>,
      <p>What do you think are the causes of this?</p>,
      <p>What solutions can you suggest?</p>,
    ],
    [
      <p>
        In the future, there will be more older people than younger people in
        most nations.
      </p>,
      <p>Is this a positive or negative development?</p>,
    ],
  ],
]

class WritingTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: 0,
      type: "Academic",
      uploaded: [],
      showQuestion: true,
      task: "1",
      answerText: ""
    }
  }
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_8fETfQs8sqEWTlJsyKWnzKH4")
  }
  handleTestType = e => {
    this.setState({ type: e.target.value, question: 0 })
  }

  handleTask = e => {
    this.setState({ task: e.target.value })
  }

  handleQuestionChange = () => {
    let currentQuestionSet =
      this.state.type === "Academic" ? academicQuestions : generalQuestions
    let currentTask = this.state.task === "1" ? 0 : 1

    this.setState(state => {
      return {
        question:
          state.question === currentQuestionSet[currentTask].length - 1
            ? 0
            : state.question + 1,
      }
    })
  }

  handlePickFiles = e => {
    let file = e.target.files
    let reader = new FileReader()
    reader.readAsDataURL(file[0])
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("problem parsing file"));
      }
      reader.onload = () => {
        resolve(reader.result);
        this.setState(state => ({
          uploaded: [
            ...state.uploaded,
            { fileName: file[0].name, fileData: reader.result },
          ],
        }))
      }
    })
  }

  handleHideQuestion = () => {
    this.setState(prevState => ({ showQuestion: !prevState.showQuestion }))
  }

  handleChangeAnswerText = (e) => {
    this.setState({ answerText: e.target.value });
  }

  handleCheckout = event => {
    event.preventDefault()
    this.stripe
      .redirectToCheckout({
        items: [
          // Replace with the ID of your SKU
          { sku: "sku_Ev6rjY3JNs3MgT", quantity: 1 },
        ],
        successUrl: "http://localhost:8000/success",
        cancelUrl: "http://localhost:8000/canceled",
      })
      .then(function(result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      })
  }
  render() {
    let questions =
      this.state.type === "Academic" ? academicQuestions : generalQuestions
    let task = this.state.task === "1" ? 0 : 1
    return (
      <div>
        <Header siteTitle="IELTS WIN" />
        <Menu />
        <div className="writing-page--body">
          <div className="test-container">
            <div className="test-nav">
              <select value={this.state.type} onChange={this.handleTestType}>
                <option value="General">General Training</option>
                <option value="Academic">Academic</option>
              </select>
              <select value={this.state.task} onChange={this.handleTask}>
                <option value="1">Task 1</option>
                <option value="2">Task 2</option>
              </select>
              <button onClick={this.handleQuestionChange}>New Question</button>
              <button onClick={this.handleHideQuestion}>
                {this.state.showQuestion ? "Hide Question" : "Show Question"}
              </button>
              <form className="inputForm">
                <input
                  type="file"
                  id="file"
                  name="Upload"
                  name="file"
                  className="inputFile"
                  accept=".doc,.docx,.pdf,.jpg,.png"
                  onChange={e => this.handlePickFiles(e)}
                />
                <label for="file">Upload a file</label>
              </form>
            </div>
            {this.state.uploaded.length > 0 && (
              <div className="test-question">
                {this.state.uploaded.map(name => {
                  return (
                    <div>
                      {name.fileName}
                      <span className="material-icons">clear</span>
                    </div>
                  )
                })}
              </div>
            )}
            {this.state.showQuestion === true && (
              <div className="test-question">
                {questions[task][this.state.question]}
              </div>
            )}
            <div className="answer-container">
              <textarea className="text-area__writing-test" value={this.state.answerText} onChange={this.handleChangeAnswerText}/>
              <div className="submit-container">
                <form
                  onSubmit={event => {
                    this.handleCheckout(event)
                  }}
                >
                  <button type="submit">Submit your Writing</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default WritingTest
