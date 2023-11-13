const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const CommentSchema = new mongoose.Schema({
    dateAdded: {
        type: String,
        require: true, 
        trim: false
    },
    text: {
        type: String,
        required: true
    },
    commentType: {
        type: String,
        enum: ['ADVISORY',
            'EVALUATIVE',
            'DISCRIPTIVE'],
        default: 'DISCRIPTIVE' 
    },
    _taskId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    reminderDate: {
        type: String,
        require: true, 
        trim: false
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {Comment}
