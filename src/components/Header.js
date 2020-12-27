import axios from 'axios';
import React from "react";
import {
    Link
  } from "react-router-dom";

 
export default class  Header extends React.Component {

  state = {
    categories: []
  }

      componentDidMount(){
        let url= "http://localhost:8000/api/bycategory/";
        
        axios.get(url)
          .then(res => {
           // console.log(res);
            this.setState({ categories:res.data });
          });
      }
      render(){
    return (
      <div >
           <header id="header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-top">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="navbar-top-left-menu">
            <li className="nav-item">
              <a href="pages/index-inner.html" className="nav-link">Advertise</a>
            </li>
            <li className="nav-item">
              <a href="pages/aboutus.html" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Events</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Write for Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">In the Press</a>
            </li>
          </ul>
          <ul className="navbar-top-right-menu">
            <li className="nav-item">
              <a href="#" className="nav-link"><i className="mdi mdi-magnify" /></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <a className="navbar-brand" href="#"><img src="assets/images/logo.svg" alt /></a>
          </div>
          <div>
            <button className="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse justify-content-center collapse" id="navbarSupportedContent">
              <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                <li>
                  <button className="navbar-close">
                    <i className="mdi mdi-close" />
                  </button>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                {this.state.categories.map(category =>
                <li className="nav-item">
                  <Link to={`/news/${category.id}`} className="nav-link">{category.title}</Link>
                </li>
                )}
                
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" >Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="mdi mdi-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="mdi mdi-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="mdi mdi-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>

      </div>
    );
  }
  
}