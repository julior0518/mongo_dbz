
import addModel from '../assets/addModel.png'
import showRoutes from '../assets/showRoutes.png'
import logoWhite from '../assets/logoWhite.png'
import savedModels from '../assets/savedModels.png'

function Navbar({user, tab, setTab}){

    return (
        <div className="Navbar">
            <div style={{display:'flex', flexDirection:'column'}}>
                <img src={addModel} style={(tab === "createModel") ? {width: "3vw",margin:"1vh 0 4vh"} :{width: "3vw",margin:"1vh 0 4vh", opacity:"40%"}} onClick={()=>{setTab("createModel")}}></img>
                <img src={showRoutes} style={(tab === "createControllers") ? {width: "3vw",margin:"1vh 0 4vh"} :{width: "3vw",margin:"1vh 0 4vh", opacity:"40%"}} onClick={()=>{setTab("createControllers")}}></img>
                <img src={savedModels} style={(tab === "savedModels") ? {width: "3vw",margin:"1vh 0 4vh"} :{width: "3vw",margin:"1vh 0 4vh", opacity:"40%"}} onClick={()=>{setTab("savedModels")}}></img>

                
            </div>
            <img src={logoWhite} style={{width: "100%", borderTop: "4px solid rgb(39, 157, 108)", paddingTop:"2vh"}} onClick={()=>{setTab("createModel")}}></img>
            
        </div>
    )
}

export default Navbar;