import axios from 'axios';
import {useEffect, useState} from 'react'
import CreateModel from './CreateModel';
import {BASE_URL} from '../globals'


function Project ({user, setUser}) {
    const [load, setLoad] = useState(false)
    const [allKeys, setAllKeys] = useState([])
    const [usersProjects, setUsersProjects] = useState('')
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
    useEffect(()=>{
        async function savedProjects(){
            // const res1 = await axios.get(`${BASE_URL}/project/${user?._id}/${project.projectName}`)
            // console.log(res1.data)
            const res =  await axios.get(`${BASE_URL}/project/${user?._id}`)
            setUsersProjects(res.data.esteProjectId)
        }
        savedProjects()
    },[user, project.projectName, load])
    
    async function updateProject(){
            await axios.post(`${BASE_URL}/project`, project)
            setLoad(!load)
    }


    
    // function loadProject(up) {
    //     console.log(...up.model)
    //     setModel({...up.model})
    //     console.log(model)
    //     setLoad(!load)

    // }

    return(
        <div className="Project">
            {user 
            && usersProjects.map((up,i)=>(
            <div key={i} >
                {up.projectName}
            </div>
            ))}
            <CreateModel  model={model} setModel={setModel} load={load} setLoad={setLoad} project={project} setProject={setProject} allKeys={allKeys} setAllKeys={setAllKeys}/>
            <button onClick={()=>updateProject()}>save</button>
        </div>
    )
}

export default Project;