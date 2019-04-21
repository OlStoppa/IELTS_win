/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import gradeMy from '../images/IELTSspeaking-project.png'

import Header from "./header"

import Lessons from "../components/lessons"
import "./index.scss"

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
      
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: `white`,
            
          }}
        >
        <div className="main--container">
          <main>{children}
          
          </main>
          <aside>
            <div style={{paddingTop: 50}}>
              
            <img className="asideImg" src={gradeMy}/>
            
            </div>
            <hr/>
            <Lessons />
            </aside>
          
        </div>

        </div>
          
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
