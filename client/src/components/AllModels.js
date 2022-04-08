import {useEffect, useState} from 'react'
import CreateModel from './CreateModel';
import CreateControllers from './CreateControllers'


function AllModels ({user}) {
    const [load, setLoad] = useState(false)
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
                {allModels.map((k, i)=>(
                    <div key={i}>
                        <p onClick={()=> { allModels.splice(i,1); setLoad(!load) }}>
                            {`${k.modelTitle}`}
                        </p>
                    </div>
                    
                ))}
            </div>
            <CreateModel allModels={allModels} setAllModels={setAllModels} model={model} setModel={setModel} load={load} setLoad={setLoad}  allKeys={allKeys} setAllKeys={setAllKeys}/>
            <CreateControllers />
        </div>
    )
}

export default AllModels;