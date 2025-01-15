const Booking = require("../models/bookingModel")

// Get all bookings
const getBookings = async(req,res) => {
    const bookings = await Booking.find();
    return res.json(bookings);
};

const getBooking = async(req, res, next) => {
    try{
        const booking = await Booking.findById(req.params.id);
        if(!booking){
            res.status(400);
            throw new Error("Booking not found");
        }
        return res.status(200).json(booking);
    }
    catch(error){
        next(error)
    }
};

// Create Booking
const createBooking = async(req, res, next) =>{
    try{
        const booking = await Booking.create(req.body);

        if(!booking){
            res.status(400);
            throw new Error("There was a problem booking the room");
        }
        return res.status(201).json(booking);
    }
    catch(error){
        next(error);
    }
}

// Update Booking
const updateBooking = async(req,res,next) => {
    try{
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        if(!updatedBooking){
            res.status(400);
            throw new Error("There was a problem updating the booking");
        }
        return res.status(201).json(updatedBooking);
    }
    catch(error){
        next(error)
    }
}

const deleteBooking = async(req,res,next) => {
    try{
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if(!booking){
            res.status(400);
            throw new Error("There was a problem updating the booking");
        }
        return res.status(201).json("Booking Deleted Successfully");
    }
    catch(error){
        next(error)
    }
}


module.exports = {
    getBookings,
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking
}