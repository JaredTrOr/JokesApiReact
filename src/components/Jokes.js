import Joke from './Joke';

export default function Jokes({jokes}){
    return jokes.map((joke) => <Joke joke={joke}/>);
}