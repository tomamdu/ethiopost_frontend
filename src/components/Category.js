import React from "react";
import {Link} from 'react-router-dom'

import axios from 'axios';

export default class Category extends React.Component {

  state = {
    categories: []
  }

      componentDidMount() {
        
        axios.get(`http://localhost:8000/api/bycategory`)
          .then(res => {
           // console.log(res);
            this.setState({ categories:res.data });
          });
      }

 

        
   
  render(){
    return ( 

        
          <div className="col-lg-3 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <h2>Category</h2>
                <ul className="vertical-menu">

                { this.state.categories.map(category => 
                
                   <li>
                       <Link to={`/news/${category.id}`} className="nav-link">{category.title}</Link>
                       
                  </li>)}
                 
                  
                </ul>
              </div>
            </div>
          </div>
          
          
    )
}
}

//export default News;