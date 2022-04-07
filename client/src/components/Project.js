import {useEffect, useState} from 'react'
import CreateModel from './CreateModel';


function Project () {
    const [load, setLoad] = useState(false)
    const [allKeys, setAllKeys] = useState([])
    const [project,setProject] = useState({
        projectName: "",
        modelTitle: "",
        modelKeys: allKeys
    })
    useEffect(()=>{
        setProject({...project, modelKeys: allKeys})
    },[allKeys])

    console.log(project)
    return(
        <div className="Project">
            <CreateModel load={load} setLoad={setLoad} project={project} setProject={setProject} allKeys={allKeys} setAllKeys={setAllKeys}/>
        </div>
    )
}

export default Project;