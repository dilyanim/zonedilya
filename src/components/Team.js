import React from "react";
import skype from '../img/skype 1.png'
import inicon from '../img/linkedin 1.png'
import twiter from  '../img/twitter 1.png'
import icon from '../img/Frame.png'
import human from '../img/Rectangle 56.png'
import img2 from '../img/Rectangle 56 (1).png'
import img3 from '../img/Rectangle 56 (2).png'
import img4 from '../img/Rectangle 56 (3).png'


function Team(){
    return(
        <div id="team">
            <div className="container">
                <div className="team-title">
                    <div className="team-text">
                        <h1>Met Our Team</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                           accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    </div>
                    <div className="team-comp">
                        <div className="team-1">
                            <img className="t-img" src={human}></img>
                            <h2>Sunny Khan</h2>
                            <p>Executive officer</p>
                            <div className="team-img">
                                <img src={skype}></img>
                                <img src={inicon}></img>
                                <img src={twiter}></img>
                                <img src={icon}></img>
                            </div>
                        </div>
                        <div className="team-1">
                            <img src={img2}></img>
                            <h2>Alina Jesia</h2>
                            <p>UX/UI DESIGNER</p>
                            <div className="team-img">
                                <img src={skype}></img>
                                <img src={inicon}></img>
                                <img src={twiter}></img>
                                <img src={icon}></img>
                            </div>
                        </div>
                        <div className="team-1">
                            <img src={img3}></img>
                            <h2>Alex Sohag</h2>
                            <p>BUSINESS DEVELOPMENT</p>
                            <div className="team-img">
                                <img src={skype}></img>
                                <img src={inicon}></img>
                                <img src={twiter}></img>
                                <img src={icon}></img>
                            </div>
                        </div>
                        <div className="team-1">
                            <img src={img4}></img>
                            <h2>Afroza Mou</h2>
                            <p>Head of marketing</p>
                            <div className="team-img">
                                <img src={skype}></img>
                                <img src={inicon}></img>
                                <img src={twiter}></img>
                                <img src={icon}></img>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}



export default Team;