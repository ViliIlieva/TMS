const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const TaskSchema = new mongoose.Schema({
    createdDate: {
        type: String,
        require: true, 
        trim: false
    },
    requiredDate: {
        type: String,
        require: true,
        trim: false
    },
    description: {
        type: String,
        require: true,
        trim: false
    },
    status: {
        type: String,
        enum: ['opened',
            'inProgress',
            'closed'],
        default: 'opened'
    },
    taskType: {
        type: String,
        enum: ['frontend',
            'beckend',
            'serverTask'],
        default: 'frontend'
    },  
    assignedTo:[{
        type: ObjectId,
        ref: "User"
    }],
    nextActionDate: {
        type: String
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = {Task}