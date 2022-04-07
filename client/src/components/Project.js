import axios from 'axios';
import {useEffect, useState} from 'react'
import CreateModel from './CreateModel';
import {BASE_URL} from '../globals'


function Project ({user, setUser}) {
    const [load, setLoad] = useState(false)
    const [allKeys, setAllKeys] = useState([])
    const [project,setProject] = useState({
        user_id: user?._id,
        projectName: "",
        modelTitle: "",
        modelKeys: allKeys
    })
    useEffect(()=>{
        setProject({...project, modelKeys: allKeys})
       
    },[allKeys])

    console.log(project)

    async function updateProject(){
        await axios.post(`${BASE_URL}/project`, project)
    }
    
    return(
        <div className="Project">
            <CreateModel  load={load} setLoad={setLoad} project={project} setProject={setProject} allKeys={allKeys} setAllKeys={setAllKeys}/>
            <button onClick={()=>updateProject()}>save</button>
        </div>
    )
}

export default Project;