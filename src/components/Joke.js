import './styles/Joke.css';

export default function Joke({joke}){
    const type = joke.type === 'single' ? true : false;
    return(
        <div className="joke-container">
            <div className='type'>Type: {joke.type}</div>
            {type && <div>Joke: {joke.joke}</div>}
            {!type && <div>{joke.setup}</div>}
            {!type && <div>{joke.delivery}</div>}
        </div>
    ); 
}