import React from "react";
import extra from '../img/extra.png'



function Extra(){
    return(
        <div id="extra">
            <div className="container">
                <div className="extra-t">
                     <div className="extra-title">
                            <img  src={extra}></img>
                     </div>
                     <div className="extra-text">
                        <h1>We complete every projects  <br/>
                            extra care as customer need</h1>
                            <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                                  non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe     <br/>
                                  scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore    <br/>
                                  eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini,    <br/>
                                  error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                                  <button>Read more</button>

                     </div>
                </div>
            </div>
        </div>
    )
}



export default Extra;