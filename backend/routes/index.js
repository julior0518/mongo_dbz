const { Router } = require('express')
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is groot!'));
router.post('/user', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/user/:id', controllers.getUsersById);
router.put('/user/:id', controllers.updateUser);
router.delete('/user/:id', controllers.deleteUser);

module.exports = router;