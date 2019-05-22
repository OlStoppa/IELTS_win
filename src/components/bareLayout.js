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
import Header from "./header"
import Drawer from "./drawer"
import "./index.scss"

const BareLayout = ({ children }) => {

  let [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
  }

  return(
  <StaticQuery
    query={graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout-container">
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
            height: "100%",
            flexDirection: "column",
            alignItems: "stretch",
            flexGrow: 1,
            width: "100%"
            // paddingBottom: "75px",
            
          }}
        >
          <div className="main--container bare"
           
          >
            <div className="bare-layout__content">{children}</div>
            </div>
        
          </div>
          
        
        <Drawer 
          isOpen={drawerOpen}
          />
        <Footer />
        {drawerOpen && 
        <div className="overlay" onClick={toggleDrawer}/>
        }

        
      </div>
    )}
  />
)
}

BareLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BareLayout
