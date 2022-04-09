import {useEffect, useState} from 'react'
import CreateModel from './CreateModel';
import CreateControllers from './CreateControllers'


function AllModels ({user, tab, load, setLoad}) {
    const [allKeys, setAllKeys] = useState([])
    const [model,setModel]=useState({
        modelTitle:"",
        modelKeys: []
    })
    const [allModels, setAllModels] = useState([])

    
    useEffect(()=>{
        setModel({...model, modelKeys: allKeys})
    },[allKeys])
    
    console.log(allModels,model,"AAA")
    return(
        <div className="AllModels">
            <div className='modelsComponent'>
                {allModels.length === 0 && <p  style={{margin:"3% 0%", opacity: "50%", }}>Create Models for Mongo DB</p>}
                {allModels.map((k, i)=>(
                    <div className='modelButton' key={i}>
                        <p onClick={()=> { allModels.splice(i,1); setLoad(!load) }}>
                            {`${k.modelTitle}`}
                        </p>
                    </div>
                    
                ))}
            </div>
            {(tab === "createModel")
            &&<CreateModel allModels={allModels} setAllModels={setAllModels} model={model} setModel={setModel} load={load} setLoad={setLoad}  allKeys={allKeys} setAllKeys={setAllKeys}/>
            }
            {(tab === "createControllers")
            && <CreateControllers allModels={allModels}/>
            }
            
        </div>
    )
}

export default AllModels;