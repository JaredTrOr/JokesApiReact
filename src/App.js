import './App.css';
import {useState, useEffect} from 'react';
import Error from './components/Error';
import Loading from './components/Loading'
import Jokes from './components/Jokes';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=6')
    .then(res => res.json())
    .then(result => {
      setIsLoaded(true);
      setItems(result.jokes);
    }, error => {
      setIsLoaded(true);
      setError(error);
    });
  },[]);

  if(error){
    return <div className='container'><Error error={error.message}/></div>
  }
  else if (!isLoaded) return <div className='container'><Loading/></div>
  else return (
    <div className='container'>

      <h1>Programming jokes 🤣</h1>

      <div className='main-container'>
        <Jokes jokes={items}/>
      </div>
      
    </div>
  )
}

export default App;
