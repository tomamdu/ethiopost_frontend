import React from "react";
import {Link} from 'react-router-dom'

import axios from 'axios';

export default class Video extends React.Component {

  
   
  render(){
    return ( 
            
        <div className="row" data-aos="fade-up">
          <div className="col-sm-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="card-title">
                      Video
                    </div>
                    <div className="row">
                      <div className="col-sm-6 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                            <img src="assets/images/dashboard/home_7.jpg" alt="thumb" className="img-fluid" />
                          </div>
                          <div className="badge-positioned w-90">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge badge-danger font-weight-bold">Lifestyle</span>
                              <div className="video-icon">
                                <i className="mdi mdi-play" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                            <img src="assets/images/dashboard/home_8.jpg" alt="thumb" className="img-fluid" />
                          </div>
                          <div className="badge-positioned w-90">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge badge-danger font-weight-bold">National News</span>
                              <div className="video-icon">
                                <i className="mdi mdi-play" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                            <img src="assets/images/dashboard/home_9.jpg" alt="thumb" className="img-fluid" />
                          </div>
                          <div className="badge-positioned w-90">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge badge-danger font-weight-bold">Lifestyle</span>
                              <div className="video-icon">
                                <i className="mdi mdi-play" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                            <img src="assets/images/dashboard/home_10.jpg" alt="thumb" className="img-fluid" />
                          </div>
                          <div className="badge-positioned w-90">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge badge-danger font-weight-bold">National News</span>
                              <div className="video-icon">
                                <i className="mdi mdi-play" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-title">
                        Latest Video
                      </div>
                      <p className="mb-3">See all</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <div className="div-w-80 mr-3">
                        <div className="rotate-img">
                          <img src="assets/images/dashboard/home_11.jpg" alt="thumb" className="img-fluid" />
                        </div>
                      </div>
                      <h3 className="font-weight-600 mb-0">
                        Apple Introduces Apple Watch
                      </h3>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                      <div className="div-w-80 mr-3">
                        <div className="rotate-img">
                          <img src="assets/images/dashboard/home_12.jpg" alt="thumb" className="img-fluid" />
                        </div>
                      </div>
                      <h3 className="font-weight-600 mb-0">
                        SEO Strategy &amp; Google Search
                      </h3>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                      <div className="div-w-80 mr-3">
                        <div className="rotate-img">
                          <img src="assets/images/dashboard/home_13.jpg" alt="thumb" className="img-fluid" />
                        </div>
                      </div>
                      <h3 className="font-weight-600 mb-0">
                      </h3>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                      <div className="div-w-80 mr-3">
                        <div className="rotate-img">
                          <img src="assets/images/dashboard/home_14.jpg" alt="thumb" className="img-fluid" />
                        </div>
                      </div>
                      <h3 className="font-weight-600">
                        The Major Health Benefits of
                      </h3>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3">
                      <div className="div-w-80 mr-3">
                        <div className="rotate-img">
                          <img src="assets/images/dashboard/home_15.jpg" alt="thumb" className="img-fluid" />
                        </div>
                      </div>
                      <h3 className="font-weight-600 mb-0">
                        Powerful Moments of Peace
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          
    )
}
}

//export default News;