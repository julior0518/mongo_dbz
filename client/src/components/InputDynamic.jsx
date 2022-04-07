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
        <div className="InputDynamic">
            <form>
                <input
                    name="key"
                    value={keys.key}
                    placeholder="key"
                    onChange={(e)=>add(e)}
                    required
                />

                <label >Choose data type:</label>
                <select value={keys.inputType || ''} id="inputType" required name="inputType" onChange={(e)=>add(e)}>
                    <option defaultValue={null}/>
                    <option value="type: Number, required: true">Number: required</option>
                    <option value="type: Number,">Number: otional</option>
                    <option value="type: Array, required: true">Array: required</option>
                    <option value="type: Array,">Array: otional</option>
                    <option value="type: String, required: true">String: required</option>
                    <option value="type: String,">String: otional</option>
                    <option value="type: Date, required: true">Date: required</option>
                    <option value="type: Date,">Date: otional</option>
                    <option value={`" type: Schema.Types.ObjectId, ref: '${keys.key}s', required "`}>OtherModelById: required</option>
                    <option value={` type: Schema.Types.ObjectId, ref: '${keys.key}s', `}>OtherModelById: optional</option>
                </select>
                <button onClick={(e)=>{submit(e)}}> add </button>
            </form>
        </div>
    )
}

export default InputDynamic;