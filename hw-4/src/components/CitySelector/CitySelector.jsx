import CityCard from './CityCard/CityCard';
import citiesData from './citiesData';
import './CitySelector.css'

const CitySelector = ({handleCity, city}) => {
    const elements = citiesData.map((elem) => {
        return <option key={elem.name} name={elem.name} value={elem.name}>{elem.name}</option>
    })

    return (
        <>
            <div>                
                <label htmlFor="city">Выберите город</label>
                <select onChange={handleCity} name="city" id="city">
                    {elements}
                </select>
            </div>
            <div className='card'><CityCard city={city}/></div>        
        </>
    )
};

export default CitySelector;

