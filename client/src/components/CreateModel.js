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
            </div>
            <InputDynamic allKeys={allKeys} setAllKeys={setAllKeys}  />
            
            <div className='modelsComponent' style={{margin:"2% 0 0 0"}}>
            {allKeys.length === 0 && <p  style={{margin:"1% 0 3% 0%", opacity: "50%", }}>add keys to your model</p>}
                {allKeys.map((k, i)=>(
                    <div className='modelButton' style={{backgroundColor:"rgba(52, 52, 88, 0.477)"}}key={i}>
                        <p  onClick={()=> {allKeys.splice(i,1); setLoad(!load) }}>
                            {`${k.key}`}
                        </p>
                    </div>
                    
                ))}
            </div>

            <div className='bottomLayout'>
                <div className='modelsModel model'>
                    <div style={{display:"flex", alignItems:"center", justifyContent: "space-between"}}>
                        <h4 className='title'>{`models/${model.modelTitle}.js`}</h4> 
                        <button style={{width:"10vw", height:"5vh", margin:"2%", borderRadius:"10px", }}className='inputButton' onClick={()=>{addModel()}}>add model</button>

                    </div>
                    <div className='renderCode'>
                        <p>const mongoose = require('mongoose');</p>
                        <p>const Schema = mongoose.Schema;</p>
                        <br></br>
                        <p> {`const ${title} = new Schema({ `} </p>
                        {allKeys.map((k, i)=>(
                            <div key={i}>
                                <p>{`${k.key}: {${k.inputType}},`}</p>
                            </div>
                        ))}
                        <br></br>
                        <p> {`},`}</p>
                        {`{ timestamp: true }); module.exports = ${title};`} 
                        
                    </div>
                </div>
                

                <div className='modelsIndex model'>
                    <h4>models/Index.js</h4>
                    <div className='renderCode'>
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
                        <p>{`module.exports = { `}</p>
                            {allModels.map((m, i)=>(
                                <div key={i}>
                                    <p>{m.modelTitle},</p>
                                </div>
                            ))}
                        <p>{`}`}</p>
                    </div>
                </div>
            </div>
        </div>

        
    )
}


export default CreateModel;