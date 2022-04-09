import InputDynamic from './InputDynamic'

function CreateModel({allModels, setAllModels, model, setModel, load, setLoad,  allKeys, setAllKeys, }) {
    const title = model.modelTitle
    function setb(e){
        setModel({...model, [e.target.name]:e.target.value, })
    }

    function addModel(){
        model.modelTitle 
        &&
        setAllModels([...allModels, model])
        setModel({
            modelTitle:"",
            modelKeys: []
        })
        setAllKeys([])
    }
    return(
        <div className="CreateModel">
            <div className='nameModel'>
                <input
                    value={model.modelTitle}
                    name="modelTitle"
                    placeholder="New model title"
                    onChange={(e) => setb(e)}
                    required
                    className='input'
                />
                <button className='inputButton' onClick={()=>{addModel()}}>add model</button>
            </div>
            <InputDynamic allKeys={allKeys} setAllKeys={setAllKeys}  />
            <div className='listedModelsComponent'>
                {allKeys.map((k, i)=>(
                    <div key={i}>
                        <p onClick={()=> {allKeys.splice(i,1); setLoad(!load) }}>
                            {`${k.key}`}
                        </p>
                    </div>
                    
                ))}
            </div>
            <div className='bottomLayout'>
                <div className='modelsModel model'>
                    <h4 className='title'>{`models/${model.modelTitle}.js`}</h4>
                    <div className='renderCode'>
                        <p>const mongoose = require('mongoose');</p>
                        <p>const Schema = mongoose.Schema;</p>
                        <br></br>
                        <p> {`const ${title} = new Schema({ `} </p>
                        <br></br>
                        {allKeys.map((k, i)=>(
                            <div key={i}>
                                <p>{`${k.key}: {${k.inputType}},`}</p>
                            </div>
                        ))}
                        <br></br>
                        <p> 
                            {`},{ timestamp: true }); module.exports = ${title};`} 
                        </p>
                    </div>
                </div>
                

                <div className='modelsIndex model'>
                    <h4>models/Index.js</h4>
                    <p>const mongoose = require('mongoose');</p>
                    {allModels.map((m, i)=>(
                        <div key={i}>
                            <p>const {m.modelTitle}Schema = require('./{m.modelTitle}');</p>
                        </div>
                    ))}
                    <br></br>
                    {allModels.map((m, i)=>(
                        <div key={i}>
                            <p>const {m.modelTitle} = mongoose.model('{m.modelTitle}s', {m.modelTitle}Schema);</p>
                        </div>
                    ))}
                    <br></br>
                    <p>{`{module.exports = { `}</p>
                        {allModels.map((m, i)=>(
                            <div key={i}>
                                <p>{m.modelTitle},</p>
                            </div>
                        ))}
                    <p>{`}`}</p>
                </div>
            </div>
        </div>

        
    )
}


export default CreateModel;