import { useState } from 'react'

function InputDynamic ({allKeys, setAllKeys}){
    const [keys, setKeys] = useState({
        key: '',
        inputType: ""
    })

    function add(e){
        setKeys({...keys, [e.target.name]: e.target.value})
    }
    function submit(e){
        e.preventDefault()
        setAllKeys([...allKeys, keys])
        setKeys({
            key: '',
            inputType: ""
        })
    }
    console.log(keys, allKeys)
    return (
        <div className="InputDynamic">
            <form>
                <input
                    name="key"
                    value={keys.key}
                    placeholder="key"
                    onChange={(e)=>add(e)}
                />

                <label >Choose data type:</label>
                <select id="inputType" name="inputType" onChange={(e)=>add(e)}>
                    <option value="string">String</option>
                    <option value="number">Number</option>
                    <option value="array">Array</option>
                    <option value="object">Object</option>
                </select>
                <button onClick={(e)=>{submit(e)}}> add </button>
            </form>
        </div>
    )
}

export default InputDynamic;