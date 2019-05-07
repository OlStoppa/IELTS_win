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
    <div>
    <div className="share-block">
    If you like this, please share:
        <FacebookShareButton url={props.url}>
            <FacebookIcon size={32} round={true}/>
        </FacebookShareButton>
        <TwitterShareButton url={props.url}>
            <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>
        <TelegramShareButton url={props.url}>
            <TelegramIcon size={32} round={true}/>
        </TelegramShareButton>
        <WhatsappShareButton url={props.url}>
            <WhatsappIcon size={32} round={true}/>
        </WhatsappShareButton>
    </div>
    <hr/>
    </div>
)

export default ShareBlock