import { useEffect } from 'react';
import comicService from './api/comic/comicService';
import params from './api/client/paramConfig';
import './App.css';

function App() {
  useEffect(() => {
    params.append('limit', 30);
    comicService('comics', params)
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Prueba technoApes</h1>
    </div>
  );
}

export default App;
