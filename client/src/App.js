import './App.css';
import { BASE_URL } from './globals'
import axios from 'axios';
import { Route, Switch} from 'react-router-dom'

import Test from './components/Test';
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { actionCreators } from "./state/index"
import { bindActionCreators } from 'redux';

import GoogleLogInOut from './components/googleLogInOut';

  function App() {
    const dispatch = useDispatch()
    const axios = require('axios');

    const stateTestR = useSelector((state)=> state.testR)
    const {testIncreaseAction, testDecreaseAction} = bindActionCreators(actionCreators, dispatch)
    

    useEffect(()=> {
      async function findUsers() { 
        const res = await axios.get(`${BASE_URL}/users`);
      }
      findUsers()
    },[]) 

    return (
      <div className="App">
        holass
        <Switch>
          <Route exact path="/" render={()=> <Test/>} />
        </Switch>
        <GoogleLogInOut />
        <p>{stateTestR.initialValue} </p>
        <button  onClick={()=> testIncreaseAction(10)}>+</button>
        <button  onClick={()=> testDecreaseAction(5)}>-</button>

      </div>
    );
}

export default App;
