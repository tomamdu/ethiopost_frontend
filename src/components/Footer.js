import  React, {Component } from "react";
import axios from 'axios';

export default class Footer extends Component{

     state = {
          posts: []
     }
      
     componentDidMount(){
         const url = 'api/posts';
          axios.get(url)
              .then(res=>{
                this.setState({posts: res.data.data});
                console.log(this.state.posts);
              });

     }

  render(){
    return (
      <div>
            <footer>
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <img src="assets/images/logo.svg" className="footer-logo" alt />
          <h5 className="font-weight-normal mt-4 mb-5">
            Newspaper is your news, entertainment, music fashion website. We
            provide you with the latest breaking news and videos straight from
            the entertainment industry.
          </h5>
          <ul className="social-media mb-3">
            <li>
              <a href="https://www.fb.com">
                <i className="mdi mdi-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <i className="mdi mdi-youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.tiwitter.com">
                <i className="mdi mdi-twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="font-weight-bold mb-3">RECENT POSTS</h3>
          <div className="row">
            {this.state.posts.map(post =>
            <div className="col-sm-12">
              <div className="footer-border-bottom pb-2">
                <div className="row">
                  <div className="col-3">
                    <img src="assets/images/dashboard/home_1.jpg" alt="thumb" className="img-fluid" />
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-600">
                      {post.title}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          
         
        </div>
        
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="fs-14 font-weight-600">
              © 2020 @ <a href="#" target="_blank" className="text-white"> Thomas A</a> . All rights reserved.
            </div>
            <div className="fs-14 font-weight-600">
              Handcrafted by <a href="https://www.bootstrapdash.com/" target="_blank" className="text-white">Thoma A.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

      </div>
    );
  }
  }
  
 