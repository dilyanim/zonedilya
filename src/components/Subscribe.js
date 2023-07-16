import React from "react";
import tg from '../img/tg.png'


function Subscribe(){
    return(
        <div id="subs">
               <div className="container">
                <div className="sub-title">
                    <h1>Subscribe to get the Latest News</h1>
                    <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                    <div className="title">
                            <div className="input">
                                <input></input>
                            </div>
                            <div className="s-img"> 
                               
                                <button className="s-btn"><img className="btn-tg" src={tg}></img>Subscribe</button>   
                             </div>
                    </div>
                   

                </div>
               </div>
        </div>
    )
}


export default Subscribe;