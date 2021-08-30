import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Components/Homepage/Homepage";
import SearchWord from "./Components/SearchWord/SearchWord";
import Favourite from "./Components/Favourite/Favourite";

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Homepage></Homepage>        
       </Route>

       <Route exact path="/searchWord">
         <SearchWord></SearchWord>
       </Route>

       <Route exact path="/favourite">
         <Favourite></Favourite>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
