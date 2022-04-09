
import addModel from '../assets/addModel.png'
import showRoutes from '../assets/showRoutes.png'
import logoWhite from '../assets/logoWhite.png'

function Navbar({setTab}){

    return (
        <div className="Navbar">
            <div style={{display:'flex', flexDirection:'column'}}>
                <img src={addModel} style={{width: "3vw", margin:"1vh 0 4vh"}} onClick={()=>{setTab("createModel")}}></img>
                <img src={showRoutes} style={{width: "3vw"}} onClick={()=>{setTab("createControllers")}}></img>
            </div>
            <img src={logoWhite} style={{width: "100%", borderTop: "4px solid rgb(39, 157, 108)", paddingTop:"2vh"}} onClick={()=>{setTab("createModel")}}></img>
            
        </div>
    )
}

export default Navbar;