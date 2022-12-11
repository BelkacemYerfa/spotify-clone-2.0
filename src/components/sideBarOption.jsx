import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayervValue } from "../config/dataLayer";


const spotify = new SpotifyWebApi()
export const SideBarOption = ({title , Icon , id })=>{
  const [{playlist} , dispatch] = useDataLayervValue()
 return(
   <div className="SideBarOption" onClick={()=>{
    spotify.getPlaylist(`${id}`).then(playlist =>{
      dispatch({
         type : 'SET_PLAYL' , 
         playlist : playlist
      })
      console.log(playlist)
     })
   }} >
     {
      Icon ? (<Icon />) : null 
     }
     <p className="title" id={id ? id : null} >
     {title}
    </p>
   </div>
 );
}