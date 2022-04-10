import './App.css';
import {  Switch} from 'react-router-dom'
import GoogleLogInOut from './components/googleLogInOut';
import logoFullColor from './assets/logoFullColor.png'

import {  useState} from 'react';


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
        <Navbar tab={tab} setTab={setTab} user={user} setUser={setUser}/>
        <AllModels user={user} tab={tab} load={load} setLoad={setLoad}/>
        <GoogleLogInOut user={user} setUser={setUser} load={load} setLoad={setLoad}/>

        <img src={logoFullColor} style={{position:"fixed", bottom:"10px", left: "47%", opacity: "30%", width:"10%"}}/>

        <Switch>
          {/* <Route exact path="/" render={()=> <Test/>} /> */}
        </Switch>

      
      </div>
    );
}

export default App;
