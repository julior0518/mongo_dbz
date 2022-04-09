import Masonry from 'react-masonry-css'

const breakpointObj = {
    deafault: 4,
    3000: 5,
    2000: 4,
    1200: 3,
    1000: 2, 
    500: 1,
}

function SavedModels ({allModels}) {
    console.log(allModels, 111)

    return(
        <div className="SavedModels" >
            <Masonry  className="layoutMansory"style={{display:"flex", flexWrap:"wrap"}}breakpointCols={breakpointObj}>
            {allModels.map((M, i)=> (
                <div key={i} className='modelsModel model' style={{width:'max-content', height:"max-content" }}>
                    <h4 style={{padding:"8% 0 0 6%"}} className='title'>{`models/${M.modelTitle}.js`}</h4> 
                    <div style={{margin:"8%"}}className='renderCode' >
                        <p>const mongoose = require('mongoose');</p>
                        <p>const Schema = mongoose.Schema;</p>
                        <br></br>
                        <p> {`const ${M.modelTitle} = new Schema({ `} </p>
                        {M.modelKeys.map((k, i)=>(
                            <div key={i}>
                                <p style={{fontWeight: "bold"}}>{`${k.key}: {${k.inputType}},`}</p>
                            </div>
                        ))}
                        <p> {`},{ timestamp: true },);`}</p>
                        <br></br>
                        {` module.exports = ${M.modelTitle};`} 
                        
                    </div>
                </div>

            ))}

            </Masonry>
        </div>
    )
}

export default SavedModels;