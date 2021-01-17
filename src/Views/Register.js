import React, {Component} from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";


export default class Register extends Component{
    
handleSubmit = ()=>{}
  
  
render(){
  
    
    
 
    return(
     
   <div>
     <div className="container py-5 vh-100 d-flex align-items-center justify-content-center">
    <div className="row w-100">
      <div className="col col-sm-9 col-md-7 col-lg-5 col-xl-4 mx-auto px-md-0">
        <div className="card overflow-hidden mb-6">
          <header className="bg-primary px-3 pb-3 pt-8">
            <h1 className="text-lg text-white mb-0">New User</h1>
          </header>
  <div className="card-body pt-5 pb-8">
    <form onSubmit={this.handleSubmit} method="POST">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div> {/* end of form-group */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" />
      </div> {/* end of form-group */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div> {/* end of form-group */}
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" className="form-control" id="confirmPassword" />
      </div> {/* end of form-group */}
      <div className="text-right">
        <button  className="btn btn-primary">Register</button>
      </div> {/* end of text-right */}
    </form>
  </div> {/* end of card-body */}
  <div className="bg-primary pt-1" />
  {/* end of card */}
  {/* end of col */}
  {/* end of row */}
  {/* end of container */}
</div>
</div>
</div>
</div>
</div>


);
}
}