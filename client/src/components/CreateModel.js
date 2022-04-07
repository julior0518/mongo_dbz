import {useState} from 'react'
import InputDynamic from './InputDynamic'

function CreateModel({project , setProject, allKeys, setAllKeys,load, setLoad}) {
    const title = project.modelTitle
    function set(e){
        setProject({...project, [e.target.name]:e.target.value, })
    }
    // setProject({modelKeys: allKeys})
    return(
        <div className="CreateModel">
            <input
                value={project.projectName}
                name="projectName"
                placeholder="project name"
                onChange={(e) => set(e)}
                required
            />
            <input
                value={project.modelTitle}
                name="modelTitle"
                placeholder="Model Title"
                onChange={(e) => set(e)}
                required
            />
            <div className='modelsIndex'>
                <p>const mongoose = require('mongoose');</p>
                <p>const {title}Schema = require('./{title}');</p>
                <p>const {title} = mongoose.model('{title}s', {title}Schema);</p>
                <p>module.exports = {`{${title},}`} </p>
            </div>
            <InputDynamic allKeys={allKeys} setAllKeys={setAllKeys} load={load} setLoad={setLoad} />
            <div>
                {allKeys.map((k, i)=>(
                    <div key={i}>
                        <p onClick={()=> {allKeys.splice(i,1); }}>
                            {`${k.key}`}
                        </p>
                    </div>
                    
                ))}
            </div>
            <div className='modelsModel'>
                <p>const mongoose = require('mongoose');</p>
                <p>const Schema = mongoose.Schema;</p>
                <p> {`const ${title} = new Schema({ `} </p>
                {allKeys.map((k, i)=>(
                    <div key={i}>
                        <p>{`${k.key}: {${k.inputType}},`}</p>
                    </div>
                ))}
                <p> {`},{ timestamp: true }); module.exports = ${title};`
                } 
                </p>
            </div>
        </div>

        
    )
}


export default CreateModel;