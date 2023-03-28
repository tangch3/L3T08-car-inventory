import express from 'express';
import { CarModel } from '../models/Cars.js';

const router = express.Router();

/* DISPLAY FULL CAR COLLECTION IN DATABASE */
router.get("/", async (req, res) => {
    try {
        const response = await CarModel.find({})
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});


/* ADD CARS */
router.post("/", async (req, res) => {
    const car = new CarModel(req.body);
    try {
        const response = await car.save();
        res.json(response)
    } catch (err) {
        res.json(err);
    }
});

/* DELETE CAR */
router.delete("/:id", async (req, res) => {
    try {
        // find the car by id and delete from mongodb
        const {id} = req.params;
        await CarModel.findByIdAndDelete(id)
        res.json("Car Deleted")
    } catch (err) {
        res.json(err);
    }
})

/* UPDATE CAR */
router.put("/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id)
    console.log(newCar)
    try {
        const car = await CarModel.findByIdAndUpdate(id, req.body); // req.body is sent from the client side
        // if we cannot find the car in the database
        if(!car) { 
            return res.status(404).json( {message: `Cannot Find Car with ID ${id}`})
        }
        res.status(200).json(car)

    } catch (err) {
        res.json(err);
    }
})

/* GET CARS OVER 5 YEARS OLD */
router.get("/5", async (req, res) => {
    try {
        const response = await CarModel.find({year: {$lt: 2017}})
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});


export { router as carRouter }