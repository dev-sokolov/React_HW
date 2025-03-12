
import citiesData from '../CitySelector/citiesData';
import style from './CityCard.module.css'


const CityCard = ({ city }) => {

    const NewCity = citiesData.find(elem => elem.name === city);
    if (!NewCity) {
        return <p>Город не найден</p>
    }

    const facts = NewCity.facts.map((elem, index) => <li key={index}>{elem}</li>)
    return (
        <div className={style.card}>
            <h2>{NewCity.name}</h2>
            <div className={style.img}><img src={NewCity.imageUrl} alt={NewCity.name} /></div>
            <p>{NewCity.description}</p>
            <ul>{facts}</ul>
        </div>
    )
};

export default CityCard;