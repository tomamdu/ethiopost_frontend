import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class Tables extends Component{
    
  state = {
    cat: [],
    posts: [],
    post:{
      title: '',
      id: '',
      category: [],
      body:'',
      category_id:''
    },
    show1: false,
    show2: false,

    title: '',
    body: '',
    category_id: '',
    user_id: localStorage.getItem('user_id')
  }
  
  handleClose= () =>{
    this.setState({show1: false});
  }

  handleClose2= () => {
    this.setState({show2: false});
  }
  handleSave= () => {
     const data ={
       title: this.state.title,
       body: this.state.body,
       category_id: this.state.category_id,
       user_id: localStorage.getItem('user_id')
     }
        //console.log(data);
     axios.post('api/posts' ,data)
           .then(res=>{
            this.setState({ posts:[...this.state.posts, res.data] });
            
           });
           
    this.setState({show1: false});
  }
  componentDidMount() {
    this.getPostData()
    this.getData()
    
}
handleDeletePost(id){
  axios.delete(`api/posts/${id}`)
  .then(r =>{
    this.getPostData()
  })
  
}
  handleEditSave=(id)=>{
    const data = {
       title: this.state.post.title,
       body: this.state.post.body,
       category_id: this.state.post.category_id,
       user_id: localStorage.getItem('user_id')
    }

    axios.put(`/api/posts/${id}`, data)

    .then(res => { 
     // console.log(post);
     this.getPostData()
      this.handleClose2()
   });
  
       
   
       
  }
  getPostData(){
    let url= "api/posts";
        
    axios.get(url)
      .then(res => {
       //console.log(res);
        this.setState({ posts:res.data.data });
        
      });
      
  }

      
      getData() {
        

        axios.get("api/bycategory")
           .then(res => {
            //console.log(res);
             this.setState({ cat:res.data });
           });
      }
      

      
  
  
render(){
  
    
    
 
    return(

  
  
  <div className=" align-items-start mt-3 mb-8 position-relative pl-5 pr-5 ">
    <aside className="sidebar" data-scrollable="true">
      <div className="sidebar-brand">
        <h1 className="text-xl text-light my-0">Matter</h1>
      </div> {/* end of sidebar-brand */}
     
      
      
    </aside>
    <div className="sidebar-backdrop" data-toggle="sidebar" />
    <main className="container-main">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body d-flex justify-content-between">
              <h2 className="mb-4 text-md">Post table
              </h2>
              <div>
              <Button variant="primary" onClick={() => this.setState({show1: true})}>
                    Add Post
             </Button>
             </div>
              
            </div> {/* end of card-body */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Category</th>
                    <th>User</th>
                    <th>Activity</th>
                    
                  </tr>
                </thead>
            
                <tbody>
                {this.state.posts.map(post =>  
                  <tr>
                    <td style = {{width: '5%'}}>#</td>
                    <td style = {{width: '20%'}}>{post.title}</td>
                    <td style = {{width: '20%'}}>{post.body}</td>
                    <td style = {{width: '20%'}}>{post.category?.title}</td>
                    <td style = {{width: '20%'}}>Admin</td>
                    
                    <td style = {{width: '15%'}}>
                    <Button onClick = {() => this.setState({post: post, show2: true})} variant="primary">Edit</Button>
                    <Button onClick={(e) =>this.handleDeletePost(post.id)} variant="danger">Delete</Button>
                    </td>
                  </tr>
                 )}
                </tbody>
                
              </table>
            </div> {/* end of table-responsive */}
          </div> {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body pb-0">
              
            </div> {/* end of card-body */}
            <div className="table-responsive">
              
            </div> {/* end of table-responsive */}
          </div> {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
     
      
    </main> {/* end of container-fluid */}
    <div>

        <Modal show={this.state.show1}  onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              <div className="col">
              
                <div className="form-group">
                  <label htmlFor="inputNormal">Title</label>
                  <input onChange={e=>this.setState({title: e.target.value })} type="text" className="form-control" id="inputNormal" />
                </div> {/* end of form-group */}
                <div className="form-group">
                  <label htmlFor="inputSelect">Category</label>
                  <select onChange={e=>this.setState({category_id: e.target.value})}  className="custom-select" id="inputSelect" required> 
                  <option disabled selected >select category</option> 
                 {this.state.cat.map(ca => 
                        <option  value={ca.id} >{ca.title}</option>
                    )}
                    
                    
                  </select>
                </div> {/* end of form-group */}
                   
                   <input type="file"/>
               
                <div className="form-group">
                  <label htmlFor="textarea">Body</label>
                  <textarea onChange={e=>this.setState({body: e.target.value})} className="form-control" id="textarea" rows={4} defaultValue={""} />
                </div> {/* end of form-group */}
                

                
              </div> {/* end of col */}
              
              
              
            

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleSave}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
    </div>

    <div>

    <Modal show ={this.state.show2}  onHide={this.handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="col">
              
              <div className="form-group">
                <label htmlFor="inputNormal">Title</label>
                <input onChange={e=>this.setState({post: {...this.state.post,title: e.target.value }})} value={this.state.post.title} type="text" className="form-control" id="inputNormal" />
              </div> {/* end of form-group */}
              <div className="form-group">
                <label htmlFor="inputSelect">Category</label>
                <select onChange={e=>this.setState({post:{...this.state.post,category_id: e.target.value}})}   className="custom-select" id="inputSelect" required> 
                <option disabled selected  >select category</option> 
               {this.state.cat.map(ca => 
                      <option  value={ca.id} >{ca.title}</option>
                  )}
                  
                  
                </select>
              </div> {/* end of form-group */}
             
             
              <div className="form-group">
                <label htmlFor="textarea">Body</label>
                <textarea onChange={e=>this.setState({post: {...this.state.post,body: e.target.value}})} value={this.state.post.body} className="form-control" id="textarea" rows={4} defaultValue={""} />
              </div>
              

              
            </div> {/* end of col */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleEditSave(this.state.post.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div> 

    );
}
}

