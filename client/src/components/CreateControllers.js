

function Controllers(){
    const title = "nanana"

    return (
        <div className="Controllers">
                {/* //for each model we need nee these */}

            <div className='modelsIndex'>
                <h4>routes/Index.js</h4>
                <p>{"const { Router } = require('express');"}</p>
                <p>{"const router = Router();"}</p>
                <p>{"const controllers = require('../controllers');"}</p>
                <br></br>
                <p>{"router.get('/', (req, res) => res.send('This is groot!'));"}</p>
                <br></br>
                <p>{`router.post('/user', controllers.createUser);`}</p>
                <p>{`router.get('/users', controllers.getAllUsers);`}</p>
                <p>{`router.get('/user/:id', controllers.getUsersById)`}</p>
                <p>{`router.get('/user/:id', controllers.getUsersById)`}</p>
                <p>{`router.delete('/project/:id', controllers.deleteProject);`}</p>
                <br></br>
                <p>{`module.exports = router;`}</p>
            </div>

        </div>
    )
}

export default Controllers;