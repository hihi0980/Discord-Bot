const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userid:{ type: String , required:true, unique: true},
        social_credit: { type: Number, required: true}
    },
    {timestamps : true}
)

module.exports = mongoose.model("User",userSchema)