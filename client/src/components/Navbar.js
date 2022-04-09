
import addModel from '../assets/addModel.png'
import showRoutes from '../assets/showRoutes.png'

function Navbar({setTab}){

    return (
        <div className="Navbar">
            <img src={addModel} style={{width: "3vw"}} onClick={()=>{setTab("createModel")}}></img>
            <img src={showRoutes} style={{width: "3vw"}} onClick={()=>{setTab("createControllers")}}></img>

        </div>
    )
}

export default Navbar;