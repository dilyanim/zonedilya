import React from "react";
import video from "../img/ic24-play-circle 1.png"
import pic from '../img/1 1.png'

function Hero(){
    return(
        <div id="hero">
             <div className="container">
                <div className="hero">
                        <div className="hero-title">
                               <div>
                               <h1>Virtual Reality  <br/>
                             Business Solutions</h1>
                            <p>We have over 15 year exprience
                                 in business consultting arena. We have over <br/> 
                                15 year exprience in business 
                                consultting arena and artficial intelligence. </p>
                              <div className="hero-img">
                              <button className="hero-btn">Join Us</button>
                              <div className="hero-img1">
                              <div>
                                <img src={video}></img>
                                  </div>
                                 <div>
                                      <p>Watch video</p>
                                 </div>
                              </div>
                                  
                            </div>
                                </div>     
                     </div>
                            <div>
                            <img className="hero-big" src={pic}></img>
                            </div>
                          
                 </div>
             </div>
        </div>
    )
}

export default Hero;