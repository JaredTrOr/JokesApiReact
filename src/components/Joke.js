import './styles/Joke.css';

export default function Joke({joke}){

    if(joke.type === 'single'){
        return(
            <div className="joke-container">
                <div className='type'>Type: Single type joke</div>
                <div>Joke: {joke.joke}</div>
            </div>
        ); 
    }
    else{
        return(
            <div className="joke-container">
                <div className='type'>Type: Two part joke</div>
                <div>Set up: {joke.setup}</div>
                <div>Delivery: {joke.delivery}</div>
            </div>
        )
    }
}