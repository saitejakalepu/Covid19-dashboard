
import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    EmailIcon
    
  } from "react-share";

  function Icons() {
      return (
          <div >
          <FacebookShareButton
               url={"https://github.com/saitejababu"}
                quote={"Check out the new covid tracker"}
                hashtag="#Covid19_Dashboard"
                className="socialMediaButton">
                
          <FacebookIcon size={36} round={true}/>
          </FacebookShareButton>
          <TwitterShareButton 
                url={"https://github.com/saitejababu"}
                quote={"Check out the new covid tracker"}
                hashtag="#Covid19_Dashboard"
                className="socialMediaButton">
                
          <TwitterIcon size={36} round={true}/>
          </TwitterShareButton>
          <EmailShareButton 
                url={"https://github.com/saitejababu"}
                quote={"Check out the new covid tracker"}
                hashtag="#Covid19_Dashboard"
                className="socialMediaButton">
                
          <EmailIcon size={36} round={true}/>
          </EmailShareButton>
          </div>
      )
  }


 
  
  export default Icons
  