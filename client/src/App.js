import './App.css';
import { BASE_URL } from './globals'
import axios from 'axios';
import { Route, Switch} from 'react-router-dom'

import CreateModel from './components/CreateModel';
import { useEffect } from 'react';


import GoogleLogInOut from './components/googleLogInOut';

function App() {
    // const axios = require('axios');

    // useEffect(()=> {
    //   async function findUsers() { 
    //     const res = await axios.get(`${BASE_URL}/users`);
    //   }
    //   findUsers()
    // },[]) 

    return (
      <div className="App">
        <GoogleLogInOut />
        <CreateModel />


        <Switch>
          {/* <Route exact path="/" render={()=> <Test/>} /> */}
        </Switch>


      </div>
    );
}

export default App;
