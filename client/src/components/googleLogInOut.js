import axios from 'axios'
import { useEffect, useState } from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import { BASE_URL } from '../globals'




function GoogleLogInOut () {
    const clientId = process.env.REACT_APP_GOOGLE_OAUTH_ID
    const [user, setUser]= useState()
    function googleAccount(res) {
        localStorage.setItem('user',JSON.stringify(res.profileObj))
        setUser ({
            _id: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            image: res.profileObj.imageUrl,
            coins: []
        })
        async function createUser(){
            try {
                await axios.get(`${BASE_URL}/user/${res.profileObj.googleId}`)
                console.log("userExists")
            }
            catch{
                await axios.post(`${BASE_URL}/user`, user)
            }
            
        }
        createUser()
    }

    function logout(){
        localStorage.clear()
        console.log("loggedOut")
        setUser()
    }
    // console.log(localStorage, user )

    
    return (
        <div className='login'>
            <GoogleLogin 
                clientId={clientId}
                buttonText='Login'
                onSuccess={googleAccount}
                onFailure={googleAccount}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={logout}
                cookiePolicy={'single_host_origin'}
            />


        </div>
    )

}

export default GoogleLogInOut
