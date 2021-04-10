const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
)

messageSchema.statics.methods = async (room) => {
    const messages = await messages.findAll()
}


const messages = mongoose.model("messages", messageSchema);

module.exports = messages
