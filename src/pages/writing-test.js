import React from "react"
import Header from "../components/header"
import Menu from "../components/Menu"

class WritingTest extends React.Component {
  render() {
    return (
      <div>
        <Header siteTitle="IELTS WIN" />
        <Menu />
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ADD5FF",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            
          }}
        >
          <div style={{ borderWidth: 2, borderColor: "black", width: "100%" }}>
            <div
              style={{
                width: "50%",
                background: "white",
                borderRadius: 50,
                height: 250,
                padding: 20,
              }}
            >
              <p>
                Car ownership has increased so rapidly over the past thirty
                years that many cities in the world have become one big traffic
                jam.
              </p>
              <p>How true do you think this statement is?</p>
              <p>
                What measures can governments take to discourage people from
                using their cars?
              </p>
            </div>
            <div>
              <textarea />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WritingTest
