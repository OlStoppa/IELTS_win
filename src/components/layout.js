/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import gradeMy from "../images/IELTSspeaking-project.png"

import Header from "./header"
import Drawer from "./drawer"
import Lessons from "../components/lessons"
import "./index.scss"

const Layout = ({ children }) => {

  let [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
  }

  return(
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
        siteTitle={data.site.siteMetadata.title} 
        toggleDrawer={toggleDrawer}
        isOpen={drawerOpen}
        />
        <div className="div--skew" />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            // backgroundColor: `white`,
            display: "flex",
            position: "relative",
            // paddingBottom: "75px",
            flexGrow: 1
          }}
        >
          <div className="main--container"
           
          >
            <main>{children}</main>
            <aside>
              <div>
                <img className="asideImg" src={gradeMy} />
              </div>
              <hr />
              <Lessons />
            </aside>
            </div>
        
          </div>
          
        
        <Drawer 
          isOpen={drawerOpen}
          />
        <Footer />
        {drawerOpen && 
        <div className="overlay" onClick={toggleDrawer}/>
        }

        
      </>
    )}
  />
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
