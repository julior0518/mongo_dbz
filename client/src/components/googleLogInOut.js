import axios from 'axios'
import { useEffect, useState } from 'react'
import {GoogleLogin, GoogleLogout, } from 'react-google-login'
import { BASE_URL } from '../globals'




function GoogleLogInOut ({user, setUser, load, setLoad}) {
    const clientId = "781947911055-rvm8o9sjdif57j6utvvl4ct1apc58ska.apps.googleusercontent.com"
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
                console.log("user created")
            }
            
        }
        createUser()
    }

    function logout(){
        localStorage.clear()
        console.log("loggedOut")
        setUser(false)

    }
    // console.log(localStorage, user )
    
    return (
        <div className='login' >

            {
                !user
                ?
                <GoogleLogin 
                clientId={clientId}
                buttonText='Signup/ Login'
                onSuccess={googleAccount}
                onFailure={googleAccount}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                // render={renderProps =>(<button onClick={renderProps.onClick} style={{border: "none",backgroundColor:"transparent", width: "5vw", height: "5vw"}}></button>)}
                />
                :
                <div style={{display:"flex",  justifyContent:'center', alignItems:"center"}}>
                    <img style={{height:"6vh", marginRight: "1vw", borderRadius:"360px", opacity:"80%"}}src={user.image}/>
                    <GoogleLogout
                    clientId={clientId}
                    buttonText='Logout'
                    onLogoutSuccess={logout}
                    cookiePolicy={'single_host_origin'}
                    />
                </div>
            }
            
            


        </div>
    )

}

export default GoogleLogInOut
