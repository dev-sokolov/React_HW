import { useState } from 'react';
import CitySelector from '../CitySelector/CitySelector';
import './App.css'

function App() {
  const [selectedCity, setSelectedCity] = useState("Токио");
  
  const handleCity = (event) => {   {
      setSelectedCity(event.target.value)
    }
  };

  return (
    <>
      <CitySelector handleCity={handleCity} city={selectedCity}/>
    </>
  )
}

export default App

