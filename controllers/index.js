const { User, Project } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const todosLosUsers = await User.find();
        return res.status(200).json({ todosLosUsers });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const createUser = async (req, res) => {
    try {
        const esteUser = await new User(req.body);
        await esteUser.save();
        return res.status(201).json({
        esteUser,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}; 
const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;
        const esteUserId = await User.findById(id);
        if (esteUserId) {
        return res.status(200).json({ esteUserId });
        }
        return res.status(404).send('This ID is not real');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        if (!user) {
            res.status(500).send('not found!');
        }
        return res.status(200).json(user);
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}; 
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id);
        if (deleted) {
        return res.status(200).send('deleted');
        }
        throw new Error('not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


const getAllProjects = async (req, res) => {
    try {
        const todosLosProjects = await Project.find();
        return res.status(200).json({ todosLosProjects });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const createProject = async (req, res) => {
    try {
        const esteProject = await new Project(req.body);
        await esteProject.save();
        return res.status(201).json({
        esteProject,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}; 
const getProjectsById = async (req, res) => {
    try {
        const { id } = req.params;
        const esteProjectId = await Project.find({user_id: id});
        if (esteProjectId) {
        return res.status(200).json({ esteProjectId });
        }
        return res.status(404).send('This ID is not real');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const getProjectsByUserIdAndProjectName = async (req, res) => {
    try {
        const { id, projectName } = req.params;
        const esteProjectId = await Project.find({user_id: id, projectName: projectName});
        if (esteProjectId) {
        return res.status(200).json({ esteProjectId });
        }
        return res.status(404).send('This ID is not real');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        Project.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        if (!user) {
            res.status(500).send('not found!');
        }
        return res.status(200).json(user);
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}; 
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Project.findByIdAndDelete(id);
        if (deleted) {
        return res.status(200).send('deleted');
        }
        throw new Error('not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports = {
    getAllUsers,
    createUser,
    getUsersById,
    updateUser,
    deleteUser,
    
    createProject,
    getAllProjects,
    getProjectsById,
    updateProject,
    deleteProject,
    getProjectsByUserIdAndProjectName
}