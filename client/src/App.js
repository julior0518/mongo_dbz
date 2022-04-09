import './App.css';
import { BASE_URL } from './globals'
import axios from 'axios';
import { Route, Switch} from 'react-router-dom'
import GoogleLogInOut from './components/googleLogInOut';


import { useEffect, useState} from 'react';


import AllModels from './components/AllModels';
import Navbar from './components/Navbar';

function App() {
    const [tab,setTab]=useState("createModel")
    const [user, setUser]= useState(false)
    const [load, setLoad] = useState(false)


  
    // const axios = require('axios');

    // useEffect(()=> {
    //   async function findUsers() { 
    //     const res = await axios.get(`${BASE_URL}/users`);
    //   }
    //   findUsers()
    // },[]) 

    return (
      <div className="App">
        <Navbar setTab={setTab} user={user} setUser={setUser}/>
        <AllModels user={user} tab={tab} load={load} setLoad={setLoad}/>
        <GoogleLogInOut user={user} setUser={setUser} load={load} setLoad={setLoad}/>



        <Switch>
          {/* <Route exact path="/" render={()=> <Test/>} /> */}
        </Switch>


      </div>
    );
}

export default App;
