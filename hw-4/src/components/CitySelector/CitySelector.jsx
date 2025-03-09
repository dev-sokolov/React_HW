import CityCard from './CityCard/CityCard';
import citiesData from './citiesData';
import './CitySelector.module.css'
import style from './CitySelector.module.css'

const CitySelector = ({ handleCity, city }) => {
    const elements = citiesData.map((elem) => {
        return <option key={elem.name} name={elem.name} value={elem.name}>{elem.name}</option>
    })

    return (
        <div className={style.wrap}>
            <div className={style.wrapCity}>
                <label className={style.title} htmlFor="city">Выберите город:</label>
                <div>
                    <select onChange={handleCity} name="city" id="city">
                        {elements}
                    </select>
                </div>
            </div>
            <div><CityCard city={city} /></div>
        </div>
    )
};

export default CitySelector;

