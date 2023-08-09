import axios from 'axios';
import {useEffect, useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App =() =>{
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    axios.get('https://kitsu.io/api/edge/anime?filter[text]=one-piece')
    .then((response) => {
      setAnime(response.data.data);
    })
  }, [])

  console.log(anime);
  
    return (
    <div className="App">
      <h1>Anime</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/anime" element={<AnimeList />}/>
          <Route path="/anime/:id" element={<Anime />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
