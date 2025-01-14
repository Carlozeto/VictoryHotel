const Room = require("../models/roomModel")

// Get all rooms
const getRooms = async(req,res) => {
    try{
        const rooms = await Room.find();
        if(!rooms){
            res.status(400);
            throw new Error("No room found");
        }
        return res.status(200).json(rooms);
    }
    catch(error){

    }
};

// Get single room
const getRoom = async(req, res, next) => {
    try{
        const room = await Room.findById(req.params.id);
        if(!room){
            res.status(400);
            throw new Error("Room not found");
        }
        return res.status(200).json(room);
    }
    catch(error){
        next(error)
    }
};

//Create Room
const createRoom = async (req, res, next) => {
    try{
        const room = await Room.create(req.body);

        if(!room){
            res.status(400);
            throw new Error("There was a problem creating the room");
        }
        return res.status(201).json(room);
    }
    catch(error){
        next(error);
    }
};

// Update Room
const updateRoom = async(req,res,next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        if(!updatedRoom){
            res.status(400);
            throw new Error("There was a problem updating the room");
        }
        return res.status(201).json(updatedRoom);
    }
    catch(error){
        next(error)
    }
}

// Delete Room
const deleteRoom = async(req, res, next) => {
    try{
        const room = await Room.findByIdAndDelete(req.params.id);

        if(!room){
            res.status(400);
            throw new Error("There was a problem deleting the room");
        }
        return res.status(201).json("Room Deleted Successfully");
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom
};