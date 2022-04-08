

function CreateControllers({allModels}){
    console.log(allModels)

    return (
        <div className="CreateControllers">
            <div className='routesdIndex'>
                <h4>routes/Index.js</h4>
                <p>{"const { Router } = require('express');"}</p>
                <p>{"const router = Router();"}</p>
                <p>{"const controllers = require('../controllers');"}</p>
                <br></br>
                <p>{"router.get('/', (req, res) => res.send('This is root!'));"}</p>
                <br></br>
                {allModels.map((m, i)=>(
                    <div>
                        <p>{`router.post('/${m.modelTitle}', controllers.create${m.modelTitle});`}</p>
                        <p>{`router.get('/${m.modelTitle}s', controllers.getAll${m.modelTitle}s);`}</p>
                        <p>{`router.get('/${m.modelTitle}/:id', controllers.get${m.modelTitle}sById)`}</p>
                        <p>{`router.put('/${m.modelTitle}/:id', controllers.update${m.modelTitle});)`}</p>
                        <p>{`router.delete('/${m.modelTitle}t/:id', controllers.delete${m.modelTitle});`}</p>
                        <br></br>
                    </div>
                    
                ))}
                <p>{`module.exports = router;`}</p>
            </div>
                
            
            <div className="controllersIndex">
                <h4>controllers/Index.js</h4>
                <p>{`const {`}</p>
                    {allModels.map((m, i)=>(
                        <div key={i}>
                            {m.modelTitle},
                        </div>
                    ))}
                <p>{`} = require('../models');`}</p>
                <br></br>

                {allModels.map((m, i)=>(
                    <div key={i}>
                        <p>{`const getAll${m.modelTitle}s = async (req, res) => {`}</p>
                        <p>{`try {`}</p>
                        <p>{`const todosLos${m.modelTitle}s = await ${m.modelTitle}.find();`}</p>
                        <p>{`return res.status(200).json({ todosLos${m.modelTitle}s });`}</p>
                        <p>{`} catch (error) {`}</p>
                        <p>{`return res.status(500).send(error.message);`}</p>
                        <p>{`}},`}</p>
                        <p>{`const create${m.modelTitle} = async (req, res) => {`}</p>
                        <p>{`try {`}</p>
                        <p>{`const este${m.modelTitle} = await new ${m.modelTitle}(req.body);`}</p>
                        <p>{`await este${m.modelTitle}.save();`}</p>
                        <p>{`return res.status(201).json({este${m.modelTitle},});`}</p>
                        <p>{`} catch (error) {`}</p>
                        <p>{`return res.status(500).json({ error: error.message });`}</p>
                        <p>{`}};`}</p>
                        <p>{`const get${m.modelTitle}sById = async (req, res) => {`}</p>
                        <p>{`try {`}</p>
                        <p>{`const { id } = req.params;`}</p>
                        <p>{`const este${m.modelTitle}Id = await ${m.modelTitle}.findById(id);`}</p>
                        <p>{`if (este${m.modelTitle}Id) {return res.status(200).json({ este${m.modelTitle}Id });}`}</p>
                        <p>{`return res.status(404).send('This ID is not real');`}</p>
                        <p>{`} catch (error) {`}</p>
                        <p>{`return res.status(500).send(error.message);`}</p>
                        <p>{`}};`}</p>
                        <p>{`const update${m.modelTitle} = async (req, res) => {`}</p>
                        <p>{`try {`}</p>
                        <p>{`const { id } = req.params;`}</p>
                        <p>{`${m.modelTitle}.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {`}</p>
                        <p>{`if (err) {res.status(500).send(err);}`}</p>
                        <p>{`if (!user) {res.status(500).send('not found!');}`}</p>
                        <p>{`return res.status(200).json(user);`}</p>
                        <p>{`});`}</p>
                        <p>{`} catch (error) {`}</p>
                        <p>{`return res.status(500).send(error.message);`}</p>
                        <p>{`}};`}</p>

                        <p>{`const delete${m.modelTitle} = async (req, res) => {`}</p>
                        <p>{`try {`}</p>
                        <p>{`const { id } = req.params;`}</p>
                        <p>{`const deleted = await ${m.modelTitle}.findByIdAndDelete(id);`}</p>
                        <p>{`if (deleted) {return res.status(200).send('deleted');}`}</p>
                        <p>{`throw new Error('not found');`}</p>
                        <p>{`} catch (error) {`}</p>
                        <p>{`return res.status(500).send(error.message);`}</p>
                        <p>{`}};`}</p>
                    </div>
                ))}
                <p>{`module.exports = {`}</p>
                {allModels.map((m, i)=>(
                    <div>
                        {`
                            getAll${m.modelTitle}s,
                            create${m.modelTitle},
                            get${m.modelTitle}sById,
                            update${m.modelTitle},
                            delete${m.modelTitle},
                        `}
                    </div>
                ))}
                <p>{`}`}</p>
            </div>
        </div>
    )
}

export default CreateControllers;