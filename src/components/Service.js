import React from "react";
import icon1 from '../img/Icon.png'
import direct from '../img/strelka.png'
import red from '../img/Icon (r).png'
import blue from '../img/Icon (b).png'
import perple from '../img/Icon (p).png'


function Service(){
    return(
        <div id="service">
            <div className="container">
                <div className="serv-title">
                    <h1>Our Service </h1>
                    <p>
                    We turn information into actionable insights We work to understand your issues <br/>
                       and are driven to ask better questions in the pursuit of making work.
                    </p>
                </div>
                <div className="ser-sub">
                    <div className="sub-big">
                        <div className="sub1">
                             <img src={icon1}></img>
                             <h3>Order Management</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur  <br/>
                                the adipiscing elit. Sed quis accumsan nisi    <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                                <div className="direct">
                                <h6>Learn more</h6>
                                <img src={direct}></img>
                                </div>
                                
                        </div>
                        <div className="sub1">
                             <img src={red}></img>
                             <h3>Order Management</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur  <br/>
                                the adipiscing elit. Sed quis accumsan nisi    <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                                <div className="direct">
                                <h6>Learn more</h6>
                                <img src={direct}></img>
                                </div>
                                
                        </div>
                        <div className="sub1">
                             <img src={blue}></img>
                             <h3>Order Management</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur  <br/>
                                the adipiscing elit. Sed quis accumsan nisi    <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                                <div className="direct">
                                <h6>Learn more</h6>
                                <img src={direct}></img>
                                </div>
                                
                        </div>
                    </div>
                    <div className="sub-big2">
                    <div className="sub1">
                             <img src={icon1}></img>
                             <h3>Order Management</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur  <br/>
                                the adipiscing elit. Sed quis accumsan nisi    <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                                <div className="direct">
                                <h6>Learn more</h6>
                                <img src={direct}></img>
                                </div>
                                
                        </div>
                        <div className="sub1">
                             <img src={icon1}></img>
                             <h3>Order Management</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur  <br/>
                                the adipiscing elit. Sed quis accumsan nisi    <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                                <div className="direct">
                                <h6>Learn more</h6>
                                <img src={direct}></img>
                                </div>
                                
                        </div>
                        <div className="sub1">
                             <img src={perple}></img>
                             <h3>Order Management</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur  <br/>
                                the adipiscing elit. Sed quis accumsan nisi    <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                                <div className="direct">
                                <h6>Learn more</h6>
                                <img src={direct}></img>
                                </div>
                        </div>
                        
                   
                    </div>

                </div>
            </div>

        </div>
    )
}




export default Service ;