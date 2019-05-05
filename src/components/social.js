import React from 'react'
import { FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa'
import { IconContext } from "react-icons"

const SocialLinks = () => (
    <IconContext.Provider value={{  className: "social-icons", size: "1.5em"}}>
    <div>
        <div className="social-icon">
        <FaFacebookSquare />
        </div>
        <div className="social-icon">
        <FaYoutubeSquare />
        </div>
        <div className="social-icon">
        <FaTwitterSquare />
        </div>

    </div>
    </IconContext.Provider>
)


export default SocialLinks