
import React, {Component } from "react";
import axios from 'axios';
import {
  Redirect
} from "react-router-dom";

  
  export default class LoginForm extends Component{

    state ={}

    handleSubmit = e =>{
      e.preventDefault();

      const data ={
        email: this.email,
        password: this.password
      }

      axios.post('api/auth/login', data)
           .then(res => {
             localStorage.setItem('token', res.data.token);
             this.setState({
                  loggedIn: true
             });
             this.props.setUser(res.data.token);
           })

           .catch(err => {
            console.log(err)
           })
    };
        
  render(){
    if(this.state.loggedIn){
      return<Redirect to={'/'}/>;
    }

     return(

 <div>
   
  <div className="container py-5 vh-100 d-flex align-items-center justify-content-center">
    <div className="row w-100">
      <div className="col col-sm-9 col-md-7 col-lg-5 col-xl-4 mx-auto px-md-0">
        <div className="card overflow-hidden mb-6">
          <header className="bg-primary px-3 pb-3 pt-8">
            <h1 className="text-lg text-white mb-0">Matter</h1>
          </header>
          <div className="card-body pt-5 pb-8">
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" 
                    onChange={e=>this.email = e.target.value}
                />
              </div> {/* end of form-group */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password"
                 onChange={e=>this.password = e.target.value}
                 />
              </div> {/* end of form-group */}
              <div className="d-flex align-items-center justify-content-between">
                <a href="#0" className="text-sm">Forgot your password?</a>
                <button  className="btn btn-primary"
                  >Login</button>
              </div> {/* end of d-flex */}
            </form>
          </div> {/* end of card-body */}
          <div className="bg-primary pt-1" />
        </div> {/* end of card */}
        <p className="text-center text-secondary mb-0">
          Don't have an account?
          <a href="/register" className="text-secondary">
            <u>Register here</u>
          </a>
        </p>
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>

    );
}
  }

