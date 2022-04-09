import { useState } from 'react'

function InputDynamic ({ allKeys, setAllKeys, }){
    const [keys, setKeys] = useState({
        key: '',
        inputType: null,
    })

    function add(e){
        setKeys({...keys, [e.target.name]: e.target.value})
    }
    function submit(e){
        if (keys.key !== '' && keys.inputType !== null && keys.inputType !== ''){
            e.preventDefault()
            setAllKeys([...allKeys, keys])
            setKeys({
                key: '',
                inputType: ''
            })
        }
        e.preventDefault()
    }
    
    return (
        <div className="InputDynamic ">
            <form>
                <input
                    name="key"
                    value={keys.key}
                    placeholder="key"
                    onChange={(e)=>add(e)}
                    required
                    className='input'
                    style={{width:"20%"}}
                />

                <label >Choose data type:</label>
                <select className='input'style={{width:"20%", margin:"0 1%", borderRadius: "10px"}} value={keys.inputType || ''} id="inputType" required name="inputType" onChange={(e)=>add(e)}>
                    <option defaultValue={null}/>
                    <option value="type: Number,">Number</option>
                    <option value="type: Array,">Array</option>
                    <option value="type: String,">String</option>
                    <option value="type: Date,">Date</option>
                </select>
                <button  className='inputButton' onClick={(e)=>{submit(e)}}> + </button>
            </form>
        </div>
    ) 
}

export default InputDynamic;