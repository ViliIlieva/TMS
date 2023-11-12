const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _taskId:{
        type: mongoose.Types.ObjectId,
        require: true
    },
    _commentId: {
        type: mongoose.Types.ObjectId, 
        require: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Username should be at least 5 characters']
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {User}
