import React from "react";
import Zone from '../img/z.svg'


function Header(){
    return(
        <div id="header">
            <div className="container">
                <div className="header-title">
                       
                     <div className="header-sub">
                     <img src={Zone}></img>
                       <h1>Zone.</h1>
                     </div>
                      
                     
                       <div className="header-nav">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Service</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>
                       </div>
                       <div>
                        <button className="header-btn">Contact Us</button>
                       </div>
                </div>
            </div>

        </div>
    )
}









export default Header;