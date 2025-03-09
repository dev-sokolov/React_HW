import { useState } from 'react';
import CitySelector from '../CitySelector/CitySelector';
import MathQuiz from '../MathQuiz/MathQuiz';
import '../../styles/reset.css'

function App() {
  const [selectedCity, setSelectedCity] = useState("Токио");

  const handleCity = (event) => {
    setSelectedCity(event.target.value)
  };

  return (
    <>
      <CitySelector handleCity={handleCity} city={selectedCity} />
      <MathQuiz />
    </>
  )
}

export default App

