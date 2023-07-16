import React from "react";
import img4 from "../img/Component 1.png"
import tel from '../img/tel.png'
import poch from '../img/pochta.png'
import fut from '../img/Virtual Reality Business Solutions (3).png'



function Footer() {
return (
        <div id="footer">
                <div className="container">
                        <div className="footer">
                             <div className="footer1">
                             <div className="footer-text">
                                        <img src={img4} alt="" className="footer-img"/> 
                                        <div className="footer-text-div">
                                            <img src={fut}></img>
                                            <p>Dhaka, Bangladesh</p>
                                        </div>
                                        <div className="footer-text-div">
                                            <img src={tel}></img>
                                            <p>0943833399</p>
                                        </div>
                                        <div className="footer-text-div">
                                            <img src={poch}></img>
                                            <p>support@zone.com</p>
                                        </div>
                                </div>
                                <div className="footer-text1">
                                        <div className="f-1">
                                                <p>Service</p>
                                                <p>Order Management</p>
                                                <p>Social Assistant</p>
                                                <p>Crypto Platform</p>
                                                <p>Analyzer of the News</p>
                                        </div>
                                        <div className="f-1">
                                                <p>Company</p>
                                                <p>About Us</p>
                                                <p>News</p>
                                                <p>Our trusted partner</p>
                                                <p>New users FAQ</p>
                                        </div>
                                        <div className="f-1">
                                                <p>Supports</p>
                                                <p>Help center</p>
                                                <p>Feedbcak</p>
                                                <p>Contact us</p>
                                                <p>Terms conditins</p>
                                        </div>
                                        <div className="f-1">
                                                <p>Resources</p>
                                                <p>Download app</p>
                                                <p>Blog</p>
                                                <p>What’s new</p>
                                                <p>Sitemap</p>
                                        </div>
                                </div>
                                
                             </div>
                             <div className="footer-text2"></div>
                             <div className="footer-text3">
                                <p>© 2021 Zone. - All rights reserved.</p>
                             <div>
                             <p>Privacy</p>
                             <p>Security</p>
                             <p>Terms</p>
                             </div>
                             </div>
                             
                        </div>
                </div>
        </div>
)
}

export default Footer;





