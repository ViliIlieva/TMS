const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _taskId:[{
        type: mongoose.Types.ObjectId
    }],
    _commentId: [{
        type: mongoose.Types.ObjectId
    }],
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'Username should be at least 5 characters']
    }, 
    password: {
        type: String,
        require: true,
        minlength: [4, 'Password should be at least 5 characters']
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {User}
