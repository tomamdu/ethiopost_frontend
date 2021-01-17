import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Post from './Views/Post';
import CategoryPost from './Views/CategoryPost';
import LoginForm from './Views/LoginForm';
import Register from './Views/Register';
import PostTable from './Views/PostTable';
import CategoryTable from './Views/CategoryTable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';



export default class App extends Component{

  state =  {};
  componentDidMount =() =>{

    

    axios.get('api/auth/profile').then(
      res=> {

        this.setUser(res.data);
          
       
      },
      err => {
        console.log(err)
      }
    )
    
  };
  
  setUser =  user => {
    this.setState({
      user: user
      
    });
  }


  render(){
    if(this.state.user){
      localStorage.setItem('name', "Welcome " + this.state.user.name );
      localStorage.setItem('user_id', this.state.user.id );
    }
  return (
        
    <div >
        <Router>
            <Header/>
            <div>
            <Switch>
                    <Route exact path="/">
                           <Home/>
                    </Route>
                    
                    <Route path="/contact">
                           <Contact/>
                    </Route>
                    
                    <Route path="/posts/:id">
                          <Post/>
                    </Route>
                    <Route path="/news/:id">
                          <CategoryPost/>
                    </Route>
                    <Route path="/login/" component={()=> <LoginForm setUser ={this.setUser}/>}/>
 
                    <Route path="/posttable/"component={() => <PostTable user={this.state.user}/>}/>
                    <Route path="/categorytable/"component={() => <CategoryTable user={this.state.user}/>}/>
                    
                    
                    <Route path="/register">
                          <Register/>
                    </Route>
                    
                </Switch>
            </div>
                 
                <Footer />
        </Router>
        
    </div>
  );
}
}


