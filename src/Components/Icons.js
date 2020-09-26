
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
               url={"https://saitejababu.github.io/Covid19-dashboard"}
                quote={"Check out the new covid tracker"}
                hashtag="#Covid19_Dashboard"
                className="socialMediaButton">
                
          <FacebookIcon size={36} round={true}/>
          </FacebookShareButton>
          <TwitterShareButton 
                url={"https://saitejababu.github.io/Covid19-dashboard"}
                quote={"Check out the new covid tracker"}
                hashtag="#Covid19_Dashboard"
                className="socialMediaButton">
                
          <TwitterIcon size={36} round={true}/>
          </TwitterShareButton>
          <EmailShareButton 
                url={"https://saitejababu.github.io/Covid19-dashboard"}
                quote={"Check out the new covid tracker"}
                hashtag="#Covid19_Dashboard"
                className="socialMediaButton">
                
          <EmailIcon size={36} round={true}/>
          </EmailShareButton>
          </div>
      )
  }


 
  
  export default Icons
  