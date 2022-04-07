const { Router } = require('express')
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is groot!'));
router.post('/user', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/user/:id', controllers.getUsersById);
router.put('/user/:id', controllers.updateUser);
router.delete('/user/:id', controllers.deleteUser);

router.post('/project', controllers.createProject);
router.get('/projects', controllers.getAllProjects);
router.get('/project/:id', controllers.getProjectsById);
router.put('/project/:id', controllers.updateProject);
router.delete('/project/:id', controllers.deleteProject);
router.get('/projectSelect/:id/:projectName', controllers.getProjectsByUserIdAndProjectName)

module.exports = router;