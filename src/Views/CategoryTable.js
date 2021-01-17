import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'

export default class CategoryTable extends Component{
  
  
  state = { 
    isActive: false,
    setShow1:false,
    setShow2:false,
    categories: [],
    title: '',
    error: '',
    errors: [],
    showError: false,
    loading: false,
    category: {
      title: '',
      id:''
    }
   };
   
   handleShow1= () =>{
     this.setState({setShow1: true})
   }
   handleClose1 = () =>{
    this.setState({setShow1: false})
  }
  handleShow2= () =>{
    this.setState({setShow2: true})
  }
  handleClose2 = () =>{
   this.setState({setShow2: false})
 }

  componentDidMount() {
     this.getData()   
  
  }
  handleEditSave = () =>{
    let { category } = this.state
    axios.put(`/api/categories/${category.id}`, category,)
    
    .then(r => {
      
      this.getData() 
     this.handleClose2()
   })

    .catch(e => {
      console.log(e.response.data.errors, 'error');
      let error = Object.keys(e.response.data.errors).map(key => e.response.data.errors[key][0] )
      console.log(error, 'asdasd');
      
      this.setState({errors: error, showError: true, loading: false})
   })
  }
  getData() {
    axios.get(`/api/bycategory`)
    .then(res => {
      this.setState({ categories:res.data });
    });
  }

  handleSave = () => {
    this.setState({loading: true})
    const data ={
      title: this.state.title
    }

    if(data.title.trim() === '') {
      this.setState({errors: ['Title field is reqired'], showError: true, loading: false})

      return;
    } 

    axios.post('http://localhost:8000/api/categories', data,)
     .then(r => {
       this.setState({categories : [...this.state.categories, r.data], showError: false, loading: false})
      // this.getData() 
      this.handleClose1()
    })
     .catch(e => {
       console.log(e.response.data.errors, 'error');
       let error = Object.keys(e.response.data.errors).map(key => e.response.data.errors[key][0] )
       console.log(error, 'asdasd');
       
       this.setState({errors: error, showError: true, loading: false})
    })
           
    
  }
  handleActiveClick = () => {
    this.setState({isActive: true});
  }
  handelDelete(id){
         
    axios.delete(`http://localhost:8000/api/categories/${id}`)
    .then(r => {
  

      this.setState({categories : [...this.state.categories.filter(v => v.id !== id)], showError: false, loading: false})
    
   })
  }
render(){

    return(

  <div className=" align-items-start mt-3 mb-8 position-relative pl-5 pr-5 ">
    
        <div className="card">
          <div className="card-header d-flex justify-content-between">
          <h5 className="card-title ">
                  Category Table
                  
              </h5>
              <Button  className="btn-md" variant="primary" onClick={this.handleShow1}>
                             Add Category
               </Button>
 
          </div>
          <div className="card-body ">
              
            
                
                         
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Activity</th>      
                  </tr>
                </thead>
                <tbody>
                { this.state.categories.map(category =>   
                
                  <tr>
                  <td  style={{ width: '20%'}}>1</td>
                    <td style={{ width: '40%'}}>{category.title}</td>
                    <td style={{ width: '40%'}} >
                      <div>
                      <button onClick={() => this.setState({category: category, setShow2: true}) } className="btn btn-primary btn-sm mr-2">Edit</button>
                      <button onClick={(e) => this.handelDelete(category.id)} className="btn btn-danger btn-sm ml-1" >Delete</button>  
                  
                      </div>
                        </td>
                    
                  </tr>
 
               
                )}
                 </tbody>
              </table>
           </div> {/* end of card-body */}
          </div> {/* end of card */}
        
        
            { this.state.isActive &&  (
                <div className="col">
                      <div className="form-group">
                      <h2 className="mb-4 text-md">Add a category</h2>
                        <label htmlFor="inputNormal">Title</label>
                        <input type="text" className="form-control" id="inputNormal" />
                      </div> {/* end of form-group */}
          
                      <div className="d-xl-flex">
                        
                        <div>
                        
                          <button href="" className="btn btn-primary">Save</button>
                        </div>
                      </div> {/* end of d-flex */}

                      
                    </div> )}
     
     
      
   

     <div>
      <Modal show={this.state.setShow1} onHide={this.handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
                Add a Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          {this.state.errors.map((v, index) => (
                 <Alert key={`${index}-error`}  variant={'danger'}>
                  {v}
              </Alert>))}
              
          
          </div>
                       <div className="form-group">
                        <label htmlFor="inputNormal">Title</label>
                        <input onChange={e=>this.setState({title: e.target.value })} type="text" className="form-control" id="inputNormal" />
                      </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose1}>
            Close
          </Button>
          <Button variant="primary" disabled={this.state.loading} onClick={this.handleSave}>
            {this.state.loading ? 'Loading' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
     </div>

     <div>
      <Modal show={this.state.setShow2} onHide={this.handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
                Edit Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          {this.state.errors.map((v, index) => (
                 <Alert key={`${index}-error`}  variant={'danger'}>
                  {v}
              </Alert>))}
              
          
          </div>
                       <div className="form-group">
                        <label htmlFor="inputNormal">Title</label>
                        <input onChange={e=>this.setState({category: {...this.state.category, title: e.target.value} })} value={this.state.category.title} type="text" className="form-control" id="inputNormal" />
                      </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose2}>
            Close
          </Button>
          <Button variant="primary" disabled={this.state.loading} onClick={() => this.handleEditSave()}>
            {this.state.loading ? 'Loading' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

  </div> 

    );
}
}

