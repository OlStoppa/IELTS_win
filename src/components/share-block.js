import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon
} from "react-share"

const ShareBlock = (props) => (
    
    <div className="share-block">
        <div className="share-block__first-block">
            <p>share</p>
        </div>
        <FacebookShareButton url={props.url}>
            <FacebookIcon size={50} />
        </FacebookShareButton>
        <TwitterShareButton url={props.url}>
            <TwitterIcon size={50}/>
        </TwitterShareButton>
        <TelegramShareButton url={props.url}>
            <TelegramIcon size={50} />
        </TelegramShareButton>
        <WhatsappShareButton url={props.url}>
            <WhatsappIcon size={50} />
        </WhatsappShareButton>
    </div>
    
    
)

export default ShareBlock