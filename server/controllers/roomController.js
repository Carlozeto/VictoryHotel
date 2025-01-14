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
        const room = await Room.findById(req.params.Id);
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

module.exports = {
    getRooms,
    createRoom
};