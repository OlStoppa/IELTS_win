import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../components/Menu"
import Navbar from "../components/navbar"
import SocialLinks from "../components/social"

class Header extends React.Component {
  constructor(props){
    super(props);
    this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);

    this.state = {
      shrink: false
    }
  }
  componentDidMount(){
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 1;
    
    if(distanceY > shrinkOn) {
      this.setState({ shrink: true });
    } else {
      this.setState({ shrink: false })
    }
  }
  render() {
return (
  <header className={this.state.shrink ? "js-header smaller" : "js-header"}
    style={{
      background: `#0d2b4c`,
      boxShadow: "2px  2px 2px 1px rgb(92, 91, 91)"
      
      
    }}
  >
    <div
      style={{
        display: "flex",
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
        // backgroundColor: `#0d2b4c`,
        alignItems: "center",
        height: "100%",
        justifyContent: "space-between"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {this.props.siteTitle}
        </Link>
      </h1>
          <Navbar />
          <SocialLinks />
    </div>
   
  </header>
)
        }
        }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
