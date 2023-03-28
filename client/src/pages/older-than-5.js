import { useState, useEffect } from 'react';
import axios from 'axios';

export const OlderThan5 = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {

    const fetchCars = async() => {
      try {
        const response = await axios.get("http://localhost:3002/cars/5");
        setCars(response.data)

      } catch (err) {
        console.error(err)
      }
    };

    fetchCars()

  },[]);

  return (
    <div>
      <h1>Cars Older than 5 Years old</h1>
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
          </li>
        ))}
      </ul>
    </div>
  )
}
