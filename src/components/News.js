import React from "react";
import {Link} from 'react-router-dom'

import axios from 'axios';
import Category from "./Category";
import Flash from "./Flash";
import Video from "./Video";

export default class News extends React.Component {

  state = {
    posts: []
  }

      componentDidMount() {
        let url= "api/posts";
        
        axios.get(url)
          .then(res => {
           // console.log(res);
            this.setState({ posts:res.data.data });
            
          });
      }

 
 
        
   
  render(){
    return ( 

      
      
        <div>
            
  <div>
     
    </div>
    <div className="content-wrapper">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-8 stretch-card grid-margin">
            <div className="position-relative">
              <img src="assets/images/dashboard/banner.jpg" alt="banner" className="img-fluid" />
              <div className="banner-content">
                <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                  global news
                </div>
                <h1 className="mb-0">GLOBAL PANDEMIC</h1>
                <h1 className="mb-2">
                  Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams Postponed, 168 Trains
                </h1>
                <div className="fs-12">
                  <span className="mr-2">Photo </span>10 Minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 stretch-card grid-margin">
            <div className="card bg-dark text-white">
              <div className="card-body">

                <h2>Latest news</h2>
                

       {this.state.posts.map(post =>
                    <div className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                     <div className="pr-3">
                       <Link className="tom-nav-link" to = {`/posts/${post.id}`}>
                       {post.title}
                       </Link>
                       
                       <div className="fs-12">
                        <br />

                      <span className="mr-2">{post.category?.title}</span> 10min
                    </div>
                  </div>
                  <div className="rotate-img">
                    <img src="assets/images/dashboard/home_1.jpg" alt="thumb" className="img-fluid img-lg" />
                  </div>
                </div>
                       
       )}


                    
                    
                    
               
               
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <Category/>
          <Flash/>
        </div>
          <Video/>
        <div className="row" data-aos="fade-up">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card-title">
                      Sport light
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-sm-6">
                        <div className="rotate-img">
                          <img src="assets/images/dashboard/home_16.jpg" alt="thumb" className="img-fluid" />
                        </div>
                        <h2 className="mt-3 text-primary mb-2">
                          Newsrooms exercise..
                        </h2>
                        <p className="fs-13 mb-1 text-muted">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </p>
                        <p className="my-3 fs-15">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        </p>
                        <a href="#" className="font-weight-600 fs-16 text-dark">Read more</a>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="border-bottom pb-3 mb-3">
                          <h3 className="font-weight-600 mb-0">
                            Social distancing is ..
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                          <p className="mb-0">
                            Lorem Ipsum has been the industry's
                          </p>
                        </div>
                        <div className="border-bottom pb-3 mb-3">
                          <h3 className="font-weight-600 mb-0">
                            Panic buying is forcing..
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                          <p className="mb-0">
                            Lorem Ipsum has been the industry's
                          </p>
                        </div>
                        <div className="border-bottom pb-3 mb-3">
                          <h3 className="font-weight-600 mb-0">
                            Businesses ask hundreds..
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                          <p className="mb-0">
                            Lorem Ipsum has been the industry's
                          </p>
                        </div>
                        <div>
                          <h3 className="font-weight-600 mb-0">
                            Tesla's California factory..
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                          <p className="mb-0">
                            Lorem Ipsum has been the industry's
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card-title">
                          Sport light
                        </div>
                        <div className="border-bottom pb-3">
                          <div className="rotate-img">
                            <img src="assets/images/dashboard/home_17.jpg" alt="thumb" className="img-fluid" />
                          </div>
                          <p className="fs-16 font-weight-600 mb-0 mt-3">
                            Kaine: Trump Jr. may have
                          </p>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                        <div className="pt-3 pb-3">
                          <div className="rotate-img">
                            <img src="assets/images/dashboard/home_18.jpg" alt="thumb" className="img-fluid" />
                          </div>
                          <p className="fs-16 font-weight-600 mb-0 mt-3">
                            Kaine: Trump Jr. may have
                          </p>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card-title">
                          Celebrity news
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="border-bottom pb-3">
                              <div className="row">
                                <div className="col-sm-5 pr-2">
                                  <div className="rotate-img">
                                    <img src="assets/images/dashboard/home_19.jpg" alt="thumb" className="img-fluid w-100" />
                                  </div>
                                </div>
                                <div className="col-sm-7 pl-2">
                                  <p className="fs-16 font-weight-600 mb-0">
                                    Online shopping ..
                                  </p>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10
                                    Minutes ago
                                  </p>
                                  <p className="mb-0 fs-13">
                                    Lorem Ipsum has been
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="border-bottom pb-3 pt-3">
                              <div className="row">
                                <div className="col-sm-5 pr-2">
                                  <div className="rotate-img">
                                    <img src="assets/images/dashboard/home_20.jpg" alt="thumb" className="img-fluid w-100" />
                                  </div>
                                </div>
                                <div className="col-sm-7 pl-2">
                                  <p className="fs-16 font-weight-600 mb-0">
                                    Online shopping ..
                                  </p>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10
                                    Minutes ago
                                  </p>
                                  <p className="mb-0 fs-13">
                                    Lorem Ipsum has been
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="border-bottom pb-3 pt-3">
                              <div className="row">
                                <div className="col-sm-5 pr-2">
                                  <div className="rotate-img">
                                    <img src="assets/images/dashboard/home_21.jpg" alt="thumb" className="img-fluid w-100" />
                                  </div>
                                </div>
                                <div className="col-sm-7 pl-2">
                                  <p className="fs-16 font-weight-600 mb-0">
                                    Online shopping ..
                                  </p>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10
                                    Minutes ago
                                  </p>
                                  <p className="mb-0 fs-13">
                                    Lorem Ipsum has been
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="pt-3">
                              <div className="row">
                                <div className="col-sm-5 pr-2">
                                  <div className="rotate-img">
                                    <img src="assets/images/dashboard/home_22.jpg" alt="thumb" className="img-fluid w-100" />
                                  </div>
                                </div>
                                <div className="col-sm-7 pl-2">
                                  <p className="fs-16 font-weight-600 mb-0">
                                    Online shopping ..
                                  </p>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10
                                    Minutes ago
                                  </p>
                                  <p className="mb-0 fs-13">
                                    Lorem Ipsum has been
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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