import './App.css';
import { BASE_URL } from './globals'
import axios from 'axios';
import { Route, Switch} from 'react-router-dom'

import { useEffect, useState} from 'react';


import AllModels from './components/AllModels';
import Navbar from './components/Navbar';

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
        <Navbar user={user} setUser={setUser}/>
        
        <AllModels user={user} />


        <Switch>
          {/* <Route exact path="/" render={()=> <Test/>} /> */}
        </Switch>


      </div>
    );
}

export default App;
