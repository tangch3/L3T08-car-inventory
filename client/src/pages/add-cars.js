import {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const AddCars = () => {

    // Data format in MONGO_DB
    const [car, setCar] = useState({
        model: "",
        make: "",
        year: 0,
        registration: "",
        imageUrl: "",
        owners: [],
    });

    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCar({...car, [name]: value})
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3002/cars/", car)
            alert("Added Car to Inventory")
            navigate('/')

        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div className='add-car'>
        <h1>Add Car to Inventory</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='model'>Model</label>
            <input type="text" id="model" name="model" onChange={handleChange}/>
            <label htmlFor='make'>Make</label>
            <input type="text" id="make" name="make" onChange={handleChange}/>
            <label htmlFor='year'>Year</label>
            <input type="number" id="year" name="year" onChange={handleChange}/>
            <label htmlFor='registration'>Registration</label>
            <input type="text" id="registration" name="registration" onChange={handleChange}/>
            <label htmlFor='imageUrl'>Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange}/>
            <label htmlFor='owners'>Previous Owners</label>
            <input type="text" id="owners" name="owners" onChange={handleChange}/>
            <button type="submit">Add Car</button>
        </form>
    </div>
  )
}
