import {useState} from 'react'
import InputDynamic from './InputDynamic'

function CreateModel() {
    const [load, setLoad] = useState(false)
    const [allKeys, setAllKeys] = useState([])
    const [title, setTiltle] = useState("")
    function set(e){
        setTiltle(e.target.value)
    }
    
    
    console.log( allKeys)

    
    return(
        <div className="CreateModel">
            <input
                value={title}
                name="title"
                placeholder="title"
                onChange={(e) => set(e)}
                required
            />
            <InputDynamic allKeys={allKeys} setAllKeys={setAllKeys}/>
            <div>

                {allKeys.map((k, i)=>(
                    <div key={i}>
                        <p onClick={()=> {allKeys.splice(i,1); setLoad(!load)}}>
                            {`${k.key}`}
                        </p>
                    </div>
                    
                ))}
                            
            </div>
            <div>
                <p> {`const ${title} = new Schema({ `} </p>
                
                {allKeys.map((k, i)=>(
                    <div key={i}>
                        {console.log(k,i)}
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