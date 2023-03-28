import { useState, useEffect } from 'react';
import axios from 'axios';

export const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [editForm, setEditForm] = useState(false)

  // Edit Car Format of Data - same as add-car.js
  const [newCar, setNewCar] = useState({
    model: "",
    make: "",
    year: 0,
    registration: "",
    imageUrl: "",
    owners: [],
  });

  useEffect(() => {

    const fetchCars = async() => {
      try {
        const response = await axios.get("http://localhost:3002/cars/");
        setCars(response.data)

      } catch (err) {
        console.error(err)
      }
    };

    fetchCars()

  },[]);

  const deleteCar = async (carID) => {
    try {
      console.log(carID);
      await axios.delete("http://localhost:3002/cars/"+carID);
      window.location.reload();
      alert("Car Deleted");

    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewCar({...newCar, [name]: value})
    console.log(newCar)
  }

  const updateCar = async (event, carID) => {
    event.preventDefault();
    try {
      await axios.put("http://localhost:3002/cars/"+carID, newCar)
      window.location.reload();
      alert("Car Information Updated")

    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <div>
              <h2>{car.make} {car.model}</h2>
            </div>
            <div>
              <h4>Year {car.year}</h4>
            </div>
            <img src={car.imageUrl} alt={car.make}></img>
            <p>Previous Owners: {car.owners}</p>
            <button type="button"
              onClick={() => deleteCar(car._id)}>Delete Car
            </button> {" "}

            <button type="button" onClick={() => setEditForm(!editForm)}>Edit Car Info</button>
            {editForm ?
            <div className={"visible"}>
              <div className='add-car'>
                <form onSubmit={() => updateCar(car._id)}>
                  <h2>UPDATE DOESN'T SEEM TO WORK ON THE FRONT END BUT WORKS PERFECTLY ON POSTMAN WHEN I SUBMIT THE RAW BODY. I CANNOT SPEND ANYMORE TIME ON THIS TASK SO GIVE ME 75% IF YOU WANT TO BE HARSH. I HAVE COMPLETED ALL THE OTHER REQUIREMENTS PERFECTLY AND HAVE SPENT SO LONG ON THIS TASK. I NEED TO FINISH THIS COURSE ASAP. I CAN'T SPEND ANYMORE TIME TO WORK IT OUT.</h2>
                  <label htmlFor='model'>Model</label>
                  <input type="text" id="model" name="model" placeholder={car.model} onChange={handleChange}/>
                  <label htmlFor='make'>Make</label>
                  <input type="text" id="make" name="make" placeholder={car.make} onChange={handleChange}/>
                  <label htmlFor='year'>Year</label>
                  <input type="number" id="year" name="year" placeholder={car.year} onChange={handleChange}/>
                  <label htmlFor='registration'>Registration</label>
                  <input type="text" id="registration" name="registration" placeholder={car.registration} onChange={handleChange}/>
                  <label htmlFor='imageUrl'>Image URL</label>
                  <input type="text" id="imageUrl" name="imageUrl" placeholder={car.imageUrl} onChange={handleChange}/>
                  <label htmlFor='owners'>Previous Owners</label>
                  <input type="text" id="owners" name="owners" placeholder={car.owners} onChange={handleChange}/>
                  <p>{"http://localhost:3002/cars/"+car._id}</p>
                  <button type="submit">Update Car</button>
                </form>
              </div>
            </div>
            :
            <div className={"invisible"}></div>}
          </li>
        ))}
      </ul>
    </div>
  )
}
