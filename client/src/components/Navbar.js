
import GoogleLogInOut from './googleLogInOut';
import addModel from '../assets/addModel.png'
import showRoutes from '../assets/showRoutes.png'

function Navbar({user, setUser,setTab}){

    return (
        <div className="Navbar">
            <GoogleLogInOut user={user} setUser={setUser} />
            <img src={addModel} style={{width: "3vw"}} onClick={()=>{setTab("createModel")}}></img>
            <img src={showRoutes} style={{width: "3vw"}} onClick={()=>{setTab("createControllers")}}></img>

        </div>
    )
}

export default Navbar;