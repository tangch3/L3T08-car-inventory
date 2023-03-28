import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    registration: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    owners: [{
        type: String
    }]

});

export const CarModel = mongoose.model("cars", CarSchema);