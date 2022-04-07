import './App.css';
import { BASE_URL } from './globals'
import axios from 'axios';
import { Route, Switch} from 'react-router-dom'

import { useEffect, useState} from 'react';


import GoogleLogInOut from './components/googleLogInOut';
import Project from './components/Project';

function App() {
  const [user, setUser]= useState()
  
    // const axios = require('axios');

    // useEffect(()=> {
    //   async function findUsers() { 
    //     const res = await axios.get(`${BASE_URL}/users`);
    //   }
    //   findUsers()
    // },[]) 

    return (
      <div className="App">
          <GoogleLogInOut user={user} setUser={setUser} />
        <Project user={user} setUser={setUser}/>


        <Switch>
          {/* <Route exact path="/" render={()=> <Test/>} /> */}
        </Switch>


      </div>
    );
}

export default App;
