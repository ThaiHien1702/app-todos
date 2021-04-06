const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')

const Task = require('../models/taskList')

//@route POST api/post
//@desc create task
//access Private
router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body
    // Simplie validation
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is required' })

    try {
        // create task
        const newTask = new Task({
            title: title,
            description: description,
            url: (url.startsWith('https://')) ? url : `https//${url}`,
            status: status || 'TO LEARN',
            user: req.userId
        })
        //save database 
        await newTask.save()
        // return clien
        res.json({success: true, message: 'Happy Learning', task: newTask})
    } catch (error) {

    }
})
module.exports = router