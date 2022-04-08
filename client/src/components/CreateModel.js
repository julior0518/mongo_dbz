import InputDynamic from './InputDynamic'

function CreateModel({allModels, setAllModels, model, setModel, load, setLoad,  allKeys, setAllKeys, }) {
    const title = model.modelTitle
    function setb(e){
        setModel({...model, [e.target.name]:e.target.value, })
    }

    function addModel(){
        setAllModels([...allModels, model])
        setModel({
            modelTitle:"",
            modelKeys: []
        })
        setAllKeys([])
    }
    return(
        <div className="CreateModel">
            <input
                value={model.modelTitle}
                name="modelTitle"
                placeholder="Model Title"
                onChange={(e) => setb(e)}
                required
            />
            <button className='' onClick={()=>{addModel()}}>add model</button>
            <h4>keys</h4>
            <InputDynamic allKeys={allKeys} setAllKeys={setAllKeys}  />
            <div className='modelsComponent'>
                {allKeys.map((k, i)=>(
                    <div key={i}>
                        <p onClick={()=> {allKeys.splice(i,1); setLoad(!load) }}>
                            {`${k.key}`}
                        </p>
                    </div>
                    
                ))}
            </div>
            <h4>{`models/${model.modelTitle}.js`}</h4>
            
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
            

            <div className='modelsIndex'>
                <h4>models/Index.js</h4>
                <p>const mongoose = require('mongoose');</p>
                <p>const {title}Schema = require('./{title}');</p>
                {/* //for each model we need nee these */}
                <p>const {title} = mongoose.model('{title}s', {title}Schema);</p>
                <p>module.exports = {`{${title},}`} </p>
            </div>
        </div>

        
    )
}


export default CreateModel;