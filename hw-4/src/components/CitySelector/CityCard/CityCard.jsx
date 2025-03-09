
import citiesData from '../citiesData';
import style from './CityCard.module.css'


const CityCard = ({city}) => {

    const NewCity = citiesData.find(elem => elem.name === city);
    const checkCity = NewCity ? NewCity : "Город не найден";
    
    const facts = checkCity.facts.map((elem, index) => <li key={index}>{elem}</li> )
        return (
            <div>
               <h2>{checkCity.name}</h2> 
               <p>{checkCity.description}</p>
               <div className={style.img}><img src={checkCity.imageUrl} alt={checkCity.name} /></div>
               <p>Интересные факты о городе:</p>
               <ul>{facts}</ul>           
            </div>
        )
};

export default CityCard;