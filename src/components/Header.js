import axios from 'axios';
import React from "react";
import {
    Link
  } from "react-router-dom";

 
export default class  Header extends React.Component {

  state = {
    categories: []
  }
  state2={
    curTime : new Date().toLocaleString(),
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
              <a href="pages/aboutus.html" className="nav-link">About</a>
            </li>
           
           
            <li className="nav-item">
              <a href="#" className="nav-link">{localStorage.getItem('name')}</a>
            </li>
          </ul>
          <ul className="navbar-top-right-menu">
            <li className="nav-item">
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                  <i className="fas fa-search" aria-hidden="true" />
                  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                  <a href="#" className="nav-link"><i className="mdi mdi-magnify" /></a>
            </form>

              
                     
                     
             
              
            </li>

           {(()=>{ if(localStorage.getItem('name')){
                return(
                  <li className="nav-item">
                       <Link to="/" onClick={()=>localStorage.clear()} className="nav-link" >Logout</Link>
                   </li>
                    )
              }else{
                return(
                <li className="nav-item">
                  <Link to="login" className="nav-link" >Login</Link>
               </li>
                )
              }
              })()}


            

            
            <li className="nav-item">
              
              <Link to="/dashbord" className="nav-link" >Admin</Link>
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
              <a href="https://www.facebook.com">
                <i className="mdi mdi-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <i className="mdi mdi-youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="mdi mdi-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
</header>

{localStorage.getItem('name') && (
                
           <div>
                <header className="header pl-5">
                  <div className="header-navbar">
                
                  </div> {/* end of header-navbar */}
                  <div className="header-billboard" style={{backgroundImage: 'url("${require("../images/header-billboard-bg.jpg")}")'}}>
                    <div className="header-billboard-inner container-main">
                    <ul className="nav nav-tabs nav-tabs-light nav-tabs-lg " data-scrollable="true" data-suppress-scroll-y="true">
                        <li className="nav-item">
                        <Link to="/register" className="nav-link" >Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/posttable" className="nav-link" >Post Table</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/categorytable" className="nav-link" >Category Table</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile </Link>
                    </li>
                  </ul>
                </div> {/* end of header-billboard-inner */}
              </div> {/* end of header-billboard */} 
            </header>
          </div>
                
        )}
        
      <div className="main-panel">
        <div className="flash-news-banner">
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="badge badge-dark mr-3">Flash news</span>
                <p className="mb-0">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="d-flex">
                <span className="mr-3 text-danger"> {this.state2.curTime}</span>
                
                <span className="text-danger"></span>
              </div>
            </div>
            </div>
      </div>
      </div>
      </div>
    );
  }
  
}