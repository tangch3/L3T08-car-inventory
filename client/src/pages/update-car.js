import React from 'react'

export const UpdateCar = () => {

    // Edit Car Format of Data - same as add-car.js
    const [car, setCar] = useState({
    model: "",
    make: "",
    year: 0,
    registration: "",
    imageUrl: "",
    owners: [],
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCar({...car, [name]: value})
        }

        const updateCar = async (event, carID) => {
        event.preventDefault();
        try {
            await axios.put("http://localhost:3002/cars/"+carID, car)
            console.log(carID)
            window.location.reload();
            alert("Car Information Updated")

        } catch (err) {
            console.error(err)
        }
    }


  return (
    <div className='add-car'>
        <form onSubmit={updateCar(car._id)}>
            <label htmlFor='model'>Model</label>
            <input type="text" id="model" name="model" defaultValue={car.model} onChange={handleChange}/>
            <label htmlFor='make'>Make</label>
            <input type="text" id="make" name="make" defaultValue={car.make} onChange={handleChange}/>
            <label htmlFor='year'>Year</label>
            <input type="number" id="year" name="year" defaultValue={car.year} onChange={handleChange}/>
            <label htmlFor='registration'>Registration</label>
            <input type="text" id="registration" name="registration" defaultValue={car.registration} onChange={handleChange}/>
            <label htmlFor='imageUrl'>Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue={car.imageUrl} onChange={handleChange}/>
            <label htmlFor='owners'>Previous Owners</label>
            <input type="text" id="owners" name="owners" defaultValue={car.owners} onChange={handleChange}/>
            <p>{"http://localhost:3002/cars/"+car._id}</p>
            <button type="submit">Update Car</button>
        </form>
    </div>
  )
}
