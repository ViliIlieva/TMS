const express = require('express');
const task = express();
const comments = express();

// const{mongoose} = require('./db/mongoose');

const{mongoose} = require('../api/index');
task.use(express.json());

// const bodyParser = require('body-parser');
// task.use(bodyParser.urlencoded());
// task.use(bodyParser.json());

//Load in the mongoose models
const {Task} = require('./db/models/task.model');
const {Comment} = require('./db/models/comment.model');
const {User} = require('./db/models/userModel');

task.get('/', (req,res) => {
    res.send('Hello!');
})

/**
 * GET/tasks
 * Get all tasks
 * */
task.get('/tasks', (req, res) => {
    Task.find().then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        res.send(e);
    });
});

task.post('/tasks', (req, res) => { 
    let createdDate = req.body.createdDate;
    let requiredDate = req.body.requiredDate;
    let description = req.body.description;
    let status = req.body.status;
    let taskType = req.body.taskType;

    let newTask = new Task({
        createdDate, requiredDate, description, status, taskType
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    })
});

/**
 * GET/tasks/:taskId/comments
 * Get all comments with id task
 */
comments.get('/tasks/:taskId/comments', (req, res) => {
    //We wont to return an array of all the coments in one task in DB
    Comment.find({
        _taskId: req.params.taskId
    }).then((coments) => {
        res.send(coments);
    });
})

/**
 * POST/tasks/:taskId/comments
 * Create comment
 */
comments.post('/tasks/:taskId/comments', (req, res) => {
    //we wont to creare new coment and return list of coments back which includes id
    //The list information (fields) will be passed in via JSON request body
    let dateAdded = req.body.dateAdded;
    let text = req.body.text;
    let commentType = req.body.commentType;
    let reminderDate = req.body.reminderDate;

    let newComment = new Comment({
        dateAdded, text, commentType, reminderDate,
         _taskId: req.params.taskId
    });
    newComment.save().then((commentDoc) => {
        res.send(commentDoc);
    })
})

/**
 * PATCH/comments/:id
 * Update existing comment
 */
comments.patch('/tasks/:taskId/comments/:commentId', (req, res) => {
    //we wont to update an existing comment
    Comment.findOneAndUpdate({
        _id: req.params.commentId,
        _taskId: req.params.taskId},{
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
})

/**
 * DELETE/comments/:id
 * Delete comment
 */
comments.delete('/comments/:id', (req, res) => {
    Comment.findOneAndDelete({
        _id: req.params.id
    }).then((removedCommentDoc) => {
        res.send(removedCommentDoc);
    })
})

task.listen(3000, () => {
    console.log("Server is listening on port 3000");
})


