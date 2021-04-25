
import './App.css';
import React, {useState} from 'react';
import Docs from './components/Docs';
import Community from './components/Community';
import Tutoriels from './components/Tutoriels';
import Menu from './components/Menu';
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import Profile from './components/Profile';

 import ErrorPage from './components/ErrorPage';

function App() {
 
  return (
  
        <BrowserRouter>
                <Menu/>

                <Switch>
                    <Route exact path="/"  component={Docs}  />
                    <Route path="/tutoriel"  component={Tutoriels}  />
                    <Route  strict path="/community"  component={Community}  />
                    <Route  strict path="/users/:profileId"  component={Profile}  />

                    <Route  component={ErrorPage}  /> 
                </Switch>

               
        </BrowserRouter>
  );
}

export default App;
