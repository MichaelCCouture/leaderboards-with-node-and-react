const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let RunSchema = new Schema(
    {
        timeHours: Number,
        timeMinutes: Number,
        timeSeconds: Number,
        timeMilliseconds: Number,
        dateSubmitted: Date,
        runner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        game: {
            type: Schema.Types.ObjectId,
            ref: "Game"
        }
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

module.exports = mongoose.model('Run', RunSchema)