import React, { createContext, useEffect, useState } from "react";
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

export const UserFavourite = createContext();


function App() {
  const [favourites, setFavourites] = useState([]);
  
  
  useEffect(() =>{
 const my = localStorage.getItem('favourites')
    if (my){
      setFavourites(my)

    }
      
  },[])

  return (
    <UserFavourite.Provider value={[favourites, setFavourites]}>

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
    </UserFavourite.Provider>
  );

}

export default App;
