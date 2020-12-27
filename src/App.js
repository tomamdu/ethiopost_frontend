
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Post from './Views/Post';
import CategoryPost from './Views/CategoryPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
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
                    
                    <Route path="/post/:id">
                          <Post/>
                    </Route>
                    <Route path="/news/:id">
                          <CategoryPost/>
                    </Route>
                   
                    
                </Switch>
            </div>
                 
                <Footer />
        </Router>
        
    </div>
  );
}

export default App;
