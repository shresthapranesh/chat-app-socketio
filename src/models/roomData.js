const mongoose = require('mongoose')

const roomDataSchema = new mongoose.Schema({
    roomName: {
        type: String,
        unique: true,
        required: true
    },
    preSharedKey: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    members: [
        {
        member: {
            type: String,
            required: true,
            unique: true
        }
    }
    ]
},{
    timestamps: true
})

roomDataSchema.statics.addUser = async (roomName,username) => {
    const room = await roomData.findOne({roomName:roomName})
    if (!room){
        throw new Error("No chat Room exits.")
    }
    room.members = room.members.concat({username})
    await room.save()
    return room
}

roomDataSchema.statics.removeUser = async (roomName,username) => {
    const room = await roomData.findOne({roomName})
    room.members = room.members.remove({username})
    await room.save()
    return room
}

const roomData = new mongoose.model('RoomData',roomDataSchema)

module.exports = roomData