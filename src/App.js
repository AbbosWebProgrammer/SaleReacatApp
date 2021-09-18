import React from 'react';
import './App.css';
import Sale from './Components/Sale';
import Searche from './Components/searche';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
     <React.Fragment>
        <Router>
          <Switch>
            
            <Route path='/sale'><Sale/></Route>
            <Route path='/search'><Searche/></Route>
           
            
          </Switch>
          {/* <Sitefoother/> */}
          <Redirect from={'/'} to={'/sale'} /> 
        </Router>
     </React.Fragment>
     
     );
  } 
 }export default App;
