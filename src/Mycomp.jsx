import React, { useState } from 'react';
import './index.css';

function Mycomp() {
 
    const [cars,setCars] = useState([ {year: 2010, make: "Ford", model: "Mustang"},
    {year: 2005, make: "Ford", model: "Fiesta"}]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function handleAddCar() {
        setCars([...cars, {year: carYear, make: carMake, model: carModel}]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index) {
        const newCars = [...cars];
        newCars.splice(index, 1);
        setCars(newCars);
    }

    function handleCarYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleCarMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleCarModelChange(event) {
        setCarModel(event.target.value);
    }

  
  
  return (
    <div>
       <h2 className="title" >List of Car objects {cars.length}</h2>
       <ul className="list" >
       {cars.map((car, index) => <li key={index} >{car.year} - {car.make} - {car.model} <button className="removebtn" onClick={() => handleRemoveCar(index)}>X</button></li>)}
       </ul>
        <div className="form">
        <input className="input" type="number" value={carYear} onChange={handleCarYearChange} placeholder="Car Year"  /><br/>
        <input className="input" type="text" value={carMake} onChange={handleCarMakeChange} placeholder="Car Make" /><br/>
        <input className="input" type="text" value={carModel} onChange={handleCarModelChange} placeholder="Car Model" /><br/>
        <button onClick={handleAddCar} className="button" > Add Car </button>
        </div>
        


    </div>
  );
}

export default Mycomp;