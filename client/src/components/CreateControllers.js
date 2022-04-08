

function Controllers({allModels}){
    console.log(allModels)

    return (
        <div className="Controllers">
            <div className='modelsIndex'>
                <h4>routes/Index.js</h4>
                <p>{"const { Router } = require('express');"}</p>
                <p>{"const router = Router();"}</p>
                <p>{"const controllers = require('../controllers');"}</p>
                <br></br>
                <p>{"router.get('/', (req, res) => res.send('This is groot!'));"}</p>
                <br></br>
                {allModels.map((m, i)=>(
                    <div>
                        <p>{`router.post('/user', controllers.createUser);`}</p>
                        <p>{`router.get('/users', controllers.getAllUsers);`}</p>
                        <p>{`router.get('/user/:id', controllers.getUsersById)`}</p>
                        <p>{`router.get('/user/:id', controllers.getUsersById)`}</p>
                        <p>{`router.delete('/project/:id', controllers.deleteProject);`}</p>
                        <br></br>
                    </div>
                    
                ))}
                <p>{`module.exports = router;`}</p>
            </div>
        </div>
    )
}

export default Controllers;