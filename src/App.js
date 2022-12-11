import './input.css';
import { Login } from './components/login';
import { useEffect , useState } from 'react';
import { getTokenFromUrl } from './config/spotify'
import { Home } from './Pages/Home';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayervValue } from './config/dataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user , token , playlists } , dispatch ] = useDataLayervValue() ; 

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      dispatch({
        type : 'SET_TOKEN' ,
        token : _token 
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user =>{
        dispatch({
          type : 'SET_USER' ,
          user : user
        })
      })
      spotify.getUserPlaylists().then(playlists =>{
        dispatch({
          type : 'SET_PLAYLIST' , 
          playlists : playlists
        })
      })
    }
  }, []);
  console.log(user)
  console.log(playlists);
  return (
    <div className="App">
      {token ? <Home spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
