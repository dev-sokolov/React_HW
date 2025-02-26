import './Greeting.css'
const Greeting = ({name}) => {
    return (
        <div>
            <p className='greet'>Привет {name}!</p>
        </div>
    );
}

export default Greeting;