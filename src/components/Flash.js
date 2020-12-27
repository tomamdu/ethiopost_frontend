import React from "react";
import {Link} from 'react-router-dom'

import axios from 'axios';

export default class Flash extends React.Component {

 

 

        
   
  render(){
    return ( 

        
    <div className="col-lg-9 stretch-card grid-margin">
        <div className="card">
          <div className="card-body">

              
            <div className="row">
              <div className="col-sm-4 grid-margin">
                <div className="position-relative">
                  <div className="rotate-img">
                    <img src="assets/images/dashboard/home_4.jpg" alt="thumb" className="img-fluid" />
                  </div>
                  <div className="badge-positioned">
                    <span className="badge badge-danger font-weight-bold">Flash news</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-8  grid-margin">
                <h2 className="mb-2 font-weight-600">
                  South Korea’s Moon Jae-in sworn in vowing to address
                  North
                </h2>
                <div className="fs-13 mb-2">
                  <span className="mr-2">Photo </span>10 Minutes ago
                </div>
                <p className="mb-0">
                <h1> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an</h1> 
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
    </div>
          
          
    )
}
}

//export default News;