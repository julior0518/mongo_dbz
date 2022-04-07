import axios from 'axios';
import {useEffect, useState} from 'react'
import CreateModel from './CreateModel';
import {BASE_URL} from '../globals'


function Project ({user, setUser}) {
    const [load, setLoad] = useState(false)
    const [allKeys, setAllKeys] = useState([])
    const [model,setModel]=useState({
        modelTitle:"",
        modelKeys: []
    })
    const [project,setProject] = useState({
        user_id: "",
        projectName: "",
        model: [{}]
    })
    useEffect(()=>{
        setModel({...model, modelKeys: allKeys})
    },[allKeys])
    useEffect(()=>{
        setProject({...project, user_id: user?._id})
    },[user])
    useEffect(()=>{
        setProject({...project, model: model})
    },[model])


    // async function updateProject(){
    //     await axios.post(`${BASE_URL}/project`, project)
    // }
    async function updateProject(){
            await axios.post(`${BASE_URL}/project`, project)
            const res = await axios.get(`${BASE_URL}/project/${user?._id}`)
            console.log(res.data)
    }


    
    return(
        <div className="Project">
            <CreateModel  model={model} setModel={setModel} load={load} setLoad={setLoad} project={project} setProject={setProject} allKeys={allKeys} setAllKeys={setAllKeys}/>
            <button onClick={()=>updateProject()}>save</button>
        </div>
    )
}

export default Project;