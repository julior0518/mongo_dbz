import {useState} from 'react'
import InputDynamic from './InputDynamic'

function CreateModel() {
    const [allKeys, setAllKeys] = useState([])
    const [title, setTiltle] = useState("")
    function set(e){
        setTiltle(e.target.value)
    }
    
    

    
    return(
        <div className="CreateModel">
            <input
                value={title}
                name="title"
                placeholder="title"
                onChange={(e) => set(e)}
            />
            <InputDynamic allKeys={allKeys} setAllKeys={setAllKeys}/>
            <div>
                <p> {`const ${title} = new Schema({ `} </p>
                <p> {` : {string,,gawer},`} </p>
                <p> {`},{ timestamp: true }); module.exports = ${title};`
                } 
                </p>
            </div>
        </div>

        
    )
}


export default CreateModel;