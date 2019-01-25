const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        username: String,
        country: String,
        twitchName: String,
        avatar: String,
        dateCreated: Date,
        runs: [
            {
                type: Schema.Types.ObjectId,
                ref: "Run"
            }
        ]  
    }
);

// UserSchema.methods.follow = function (user_id) {
//     if (this.following.indexOf(user_id) === -1) {
//         this.following.push(user_id)        
//     }
//     return this.save();
// }

// UserSchema.methods.addFollower = function (fs) {
//     this.followers.push(fs)        
// }

module.exports = mongoose.model('User', UserSchema)